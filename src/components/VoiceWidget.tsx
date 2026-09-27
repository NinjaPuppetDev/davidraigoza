import { useState, useRef, useEffect, useCallback } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { Mic } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type ConnectionState = 'idle' | 'connecting' | 'connected' | 'ready' | 'error';

const SPANISH_TEASER =
  'Hola, bienvenido al estudio de David Raigoza. Estoy en construcción en este momento; muy pronto podrás conversar conmigo sobre los servicios y el portafolio de David. Por ahora, puedes explorar el portafolio de forma manual.';

const ENGLISH_TEASER =
  "Hello, welcome to David Raigoza's studio. I am under construction right now; soon you will be able to talk to me about David's services and portfolio. For now, you can check the portfolio manually.";

function getSystemInstruction(isUsOnly: boolean): string {
  if (isUsOnly) {
    return `You are the official AI Studio Voice for David Raigoza's digital product & brand design practice (davidraigoza.design).
Voice & Persona Guidelines:
- Warm, articulate, calm, and editorial in tone.
- Speak strictly in English.
- When asked to deliver the studio teaser greeting, read the requested text verbatim without adding extra commentary.`;
  }

  return `You are the official bilingual AI Studio Voice for David Raigoza's digital product & brand design practice (davidraigoza.design).
Voice & Persona Guidelines:
- Warm, articulate, calm, and editorial in tone.
- Fluent in both Spanish and English.
- When asked to deliver the studio teaser greeting, read the requested text verbatim without adding extra commentary.`;
}

function base64ToFloat32Array(base64: string): Float32Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  const pcm16 = new Int16Array(bytes.buffer);
  const float32 = new Float32Array(pcm16.length);
  for (let i = 0; i < pcm16.length; i++) {
    float32[i] = pcm16[i] / 32768.0;
  }
  return float32;
}

export default function VoiceWidget() {
  const isUsOnly =
    typeof window !== 'undefined' &&
    (window.location.hostname.toLowerCase() === 'us.davidraigoza.online' ||
      window.location.pathname.toLowerCase() === '/us' ||
      window.location.pathname.toLowerCase().startsWith('/us/'));

  let activeLang: 'es' | 'en' = isUsOnly ? 'en' : 'es';
  try {
    const { language } = useLanguage();
    activeLang = isUsOnly ? 'en' : language;
  } catch {
    activeLang = isUsOnly ? 'en' : 'es';
  }

  const [, setStatus] = useState<ConnectionState>('idle');
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [awaitingAudioUnlock, setAwaitingAudioUnlock] = useState(false);
  const [isFooterIntersecting, setIsFooterIntersecting] = useState(false);

  const wsRef = useRef<WebSocket | null>(null);
  const directSessionRef = useRef<any>(null);
  const hadGreetingAudioRef = useRef(false);
  const hasStartedPlayingGreetingRef = useRef(false);

  const outputAudioCtxRef = useRef<AudioContext | null>(null);
  const nextPlayTimeRef = useRef<number>(0);
  const activeSourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const pendingChunksRef = useRef<Float32Array[]>([]);

  // Check intersection with dark footer just like FloatingWhatsApp
  useEffect(() => {
    let rafId: number | null = null;

    const checkFooterIntersection = () => {
      const footer =
        document.getElementById('negocios-footer') ||
        document.getElementById('us-footer') ||
        document.querySelector('footer');
      const action = document.getElementById('studio-voice-bulb');
      if (!footer || !action) return;

      const footerRect = footer.getBoundingClientRect();
      const actionRect = action.getBoundingClientRect();

      setIsFooterIntersecting(footerRect.top <= actionRect.bottom);
    };

    const onScrollOrResize = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(checkFooterIntersection);
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    checkFooterIntersection();

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  const ensureOutputAudioCtx = useCallback((): AudioContext => {
    if (outputAudioCtxRef.current && outputAudioCtxRef.current.state !== 'closed') {
      return outputAudioCtxRef.current;
    }
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const outputCtx = new AudioCtx({ sampleRate: 24000 });
    outputAudioCtxRef.current = outputCtx;
    nextPlayTimeRef.current = outputCtx.currentTime;
    return outputCtx;
  }, []);

  const scheduleFloat32Buffer = useCallback((ctx: AudioContext, float32Data: Float32Array) => {
    if (float32Data.length === 0) return;

    hasStartedPlayingGreetingRef.current = true;
    const audioBuffer = ctx.createBuffer(1, float32Data.length, 24000);
    audioBuffer.getChannelData(0).set(float32Data);

    const source = ctx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(ctx.destination);

    const startTime = Math.max(ctx.currentTime, nextPlayTimeRef.current);
    source.start(startTime);
    nextPlayTimeRef.current = startTime + audioBuffer.duration;

    activeSourcesRef.current.add(source);
    setIsAiSpeaking(true);

    source.onended = () => {
      activeSourcesRef.current.delete(source);
      if (activeSourcesRef.current.size === 0) {
        setIsAiSpeaking(false);
      }
    };
  }, []);

  const flushPendingChunks = useCallback((): boolean => {
    const ctx = outputAudioCtxRef.current;
    if (!ctx || ctx.state === 'closed') return false;

    const hadPending = pendingChunksRef.current.length > 0;

    if (ctx.state === 'suspended') {
      ctx
        .resume()
        .then(() => {
          if (ctx.state === 'running' && pendingChunksRef.current.length > 0) {
            setAwaitingAudioUnlock(false);
            nextPlayTimeRef.current = Math.max(ctx.currentTime, nextPlayTimeRef.current);
            const chunks = pendingChunksRef.current.splice(0, pendingChunksRef.current.length);
            for (const chunk of chunks) {
              scheduleFloat32Buffer(ctx, chunk);
            }
          }
        })
        .catch(() => {});
      return hadPending;
    }

    if (ctx.state === 'running') {
      setAwaitingAudioUnlock(false);
      if (pendingChunksRef.current.length > 0) {
        nextPlayTimeRef.current = Math.max(ctx.currentTime, nextPlayTimeRef.current);
        const chunks = pendingChunksRef.current.splice(0, pendingChunksRef.current.length);
        for (const chunk of chunks) {
          scheduleFloat32Buffer(ctx, chunk);
        }
      }
    }
    return hadPending;
  }, [scheduleFloat32Buffer]);

  // Clear any scheduled/playing PCM chunks
  const clearPlaybackQueue = useCallback(() => {
    pendingChunksRef.current = [];
    setAwaitingAudioUnlock(false);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    activeSourcesRef.current.forEach((source) => {
      try {
        source.onended = null;
        source.stop();
        source.disconnect();
      } catch {
        // Ignore already stopped sources
      }
    });
    activeSourcesRef.current.clear();

    if (outputAudioCtxRef.current && outputAudioCtxRef.current.state !== 'closed') {
      nextPlayTimeRef.current = outputAudioCtxRef.current.currentTime;
    } else {
      nextPlayTimeRef.current = 0;
    }
    setIsAiSpeaking(false);
  }, []);

  // Non-blocking enqueue of incoming 24kHz PCM audio chunks
  const enqueueAudioChunk = useCallback(
    (base64Audio: string) => {
      const ctx = ensureOutputAudioCtx();
      const float32Data = base64ToFloat32Array(base64Audio);
      if (float32Data.length === 0) return;

      hadGreetingAudioRef.current = true;

      if (ctx.state === 'running') {
        setAwaitingAudioUnlock(false);
        if (pendingChunksRef.current.length > 0) {
          const queued = pendingChunksRef.current.splice(0, pendingChunksRef.current.length);
          for (const chunk of queued) {
            scheduleFloat32Buffer(ctx, chunk);
          }
        }
        scheduleFloat32Buffer(ctx, float32Data);
      } else {
        pendingChunksRef.current.push(float32Data);
        setAwaitingAudioUnlock(true);
        ctx.onstatechange = () => {
          if (ctx.state === 'running') {
            flushPendingChunks();
          }
        };
        ctx.resume().catch(() => {});
      }
    },
    [ensureOutputAudioCtx, flushPendingChunks, scheduleFloat32Buffer]
  );

  // Fallback speech synthesis greeting if quota is temporarily exceeded
  const playFallbackSpeechGreeting = useCallback((lang: 'es' | 'en') => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    hadGreetingAudioRef.current = true;
    hasStartedPlayingGreetingRef.current = true;
    const text = lang === 'en' ? ENGLISH_TEASER : SPANISH_TEASER;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'en' ? 'en-US' : 'es-ES';
    utterance.rate = 1.0;
    utterance.onstart = () => setIsAiSpeaking(true);
    utterance.onend = () => setIsAiSpeaking(false);
    utterance.onerror = () => setIsAiSpeaking(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }, []);

  const closeTransportsOnly = useCallback(() => {
    if (wsRef.current) {
      try {
        wsRef.current.onclose = null;
        wsRef.current.onerror = null;
        wsRef.current.onmessage = null;
        wsRef.current.close();
      } catch {}
      wsRef.current = null;
    }
    if (directSessionRef.current) {
      try {
        directSessionRef.current.close();
      } catch {}
      directSessionRef.current = null;
    }
  }, []);

  // Full stop (triggered on unmount)
  const stopSession = useCallback(() => {
    clearPlaybackQueue();
    closeTransportsOnly();

    if (outputAudioCtxRef.current) {
      outputAudioCtxRef.current.close().catch(() => {});
      outputAudioCtxRef.current = null;
    }

    setStatus('idle');
  }, [clearPlaybackQueue, closeTransportsOnly]);

  // Direct client-side fallback for static Vite deployments with a public AIza* key
  const connectDirectClientLive = useCallback(
    async (apiKey: string, shouldGreet: boolean) => {
      const ai = new GoogleGenAI({ apiKey });
      const session = await ai.live.connect({
        model: 'gemini-3.8-live',
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Zephyr' },
            },
          },
          systemInstruction: getSystemInstruction(isUsOnly),
        },
        callbacks: {
          onopen: () => {
            setStatus('connected');
          },
          onmessage: (message: LiveServerMessage) => {
            if (message.serverContent?.interrupted) {
              clearPlaybackQueue();
            }
            const parts = message.serverContent?.modelTurn?.parts;
            if (parts) {
              for (const part of parts) {
                const base64Audio = part.inlineData?.data;
                if (base64Audio) {
                  enqueueAudioChunk(base64Audio);
                }
              }
            }
          },
          onerror: () => {
            setStatus('ready');
          },
          onclose: () => {
            directSessionRef.current = null;
            setStatus('ready');
          },
        },
      });

      directSessionRef.current = session;
      setStatus('connected');

      if (shouldGreet) {
        session.sendClientContent({
          turns: [
            {
              role: 'user',
              parts: [
                {
                  text:
                    isUsOnly || activeLang === 'en'
                      ? `Please say this exact message word for word in a warm, editorial tone, without adding anything else: "${ENGLISH_TEASER}"`
                      : `Por favor di exactamente este mensaje palabra por palabra con un tono cálido y editorial, sin agregar nada más: "${SPANISH_TEASER}"`,
                },
              ],
            },
          ],
          turnComplete: true,
        });
      }
    },
    [activeLang, clearPlaybackQueue, enqueueAudioChunk, isUsOnly]
  );

  // Connect to Live API in listen-only teaser mode (never requests microphone)
  const startSession = useCallback(
    async (shouldGreet = true) => {
      if (
        (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) ||
        directSessionRef.current
      ) {
        return;
      }

      setStatus('connecting');
      ensureOutputAudioCtx();

      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${protocol}//${window.location.host}/live?lang=${activeLang}&us=${isUsOnly}&greet=${shouldGreet}`;

      try {
        const ws = new WebSocket(wsUrl);
        wsRef.current = ws;

        ws.onmessage = (event) => {
          try {
            const msg = JSON.parse(event.data);
            if (msg.type === 'connected') {
              setStatus('connected');
            } else if (msg.type === 'audio' && msg.data) {
              enqueueAudioChunk(msg.data);
            } else if (msg.type === 'interrupted') {
              clearPlaybackQueue();
            } else if (msg.type === 'fallback_greeting') {
              setStatus('ready');
              playFallbackSpeechGreeting(msg.lang === 'en' ? 'en' : 'es');
            } else if (msg.type === 'closed') {
              wsRef.current = null;
              setStatus('ready');
            } else if (msg.type === 'error') {
              if (shouldGreet) {
                setStatus('ready');
                playFallbackSpeechGreeting(activeLang);
              } else {
                setStatus('error');
              }
            }
          } catch {
            // Ignore malformed message
          }
        };

        ws.onerror = async () => {
          wsRef.current = null;
          const directKey =
            import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';
          if (directKey.startsWith('AIza')) {
            try {
              await connectDirectClientLive(directKey, shouldGreet);
              return;
            } catch {
              // Fall through
            }
          }

          if (shouldGreet && !hadGreetingAudioRef.current) {
            setStatus('ready');
            playFallbackSpeechGreeting(activeLang);
          } else {
            setStatus('ready');
          }
        };

        ws.onclose = () => {
          wsRef.current = null;
          setStatus((prev) => (prev === 'error' ? prev : 'ready'));
        };
      } catch {
        setStatus('ready');
      }
    },
    [
      activeLang,
      clearPlaybackQueue,
      connectDirectClientLive,
      enqueueAudioChunk,
      ensureOutputAudioCtx,
      isUsOnly,
      playFallbackSpeechGreeting,
    ]
  );

  // Automatically connect and deliver teaser on arrival (strictly listen-only, zero mic access)
  useEffect(() => {
    const timer = setTimeout(() => {
      startSession(true);
    }, 150);

    return () => {
      clearTimeout(timer);
      stopSession();
    };
  }, [startSession, stopSession]);

  // Unlock suspended AudioContext on the very first user interaction anywhere on the page
  useEffect(() => {
    if (!awaitingAudioUnlock) return;

    const handleFirstInteraction = () => {
      flushPendingChunks();
    };

    window.addEventListener('pointerdown', handleFirstInteraction, {
      capture: true,
      passive: true,
    });
    window.addEventListener('click', handleFirstInteraction, {
      capture: true,
      passive: true,
    });
    window.addEventListener('keydown', handleFirstInteraction, {
      capture: true,
      passive: true,
    });
    window.addEventListener('touchstart', handleFirstInteraction, {
      capture: true,
      passive: true,
    });

    return () => {
      window.removeEventListener('pointerdown', handleFirstInteraction, {
        capture: true,
      });
      window.removeEventListener('click', handleFirstInteraction, {
        capture: true,
      });
      window.removeEventListener('keydown', handleFirstInteraction, {
        capture: true,
      });
      window.removeEventListener('touchstart', handleFirstInteraction, {
        capture: true,
      });
    };
  }, [awaitingAudioUnlock, flushPendingChunks]);

  // Round bulb click handler (teaser mode: never requests microphone access):
  // 1. If the arrival greeting is still queued (browser blocked autoplay on load), clicking unlocks and plays it.
  // 2. If the AI is currently speaking, clicking stops playback.
  // 3. If the AI has finished speaking, clicking replays the teaser in the active language.
  const handleBulbClick = async () => {
    if (
      pendingChunksRef.current.length > 0 ||
      (awaitingAudioUnlock && !hasStartedPlayingGreetingRef.current)
    ) {
      flushPendingChunks();
      return;
    }

    if (isAiSpeaking) {
      clearPlaybackQueue();
      return;
    }

    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: 'greet', lang: activeLang }));
    } else if (directSessionRef.current) {
      directSessionRef.current.sendClientContent({
        turns: [
          {
            role: 'user',
            parts: [
              {
                text:
                  isUsOnly || activeLang === 'en'
                    ? `Please say this exact message word for word in a warm, editorial tone, without adding anything else: "${ENGLISH_TEASER}"`
                    : `Por favor di exactamente este mensaje palabra por palabra con un tono cálido y editorial, sin agregar nada más: "${SPANISH_TEASER}"`,
              },
            ],
          },
        ],
        turnComplete: true,
      });
    } else {
      await startSession(true);
    }
  };

  const showWavelength = isAiSpeaking;

  return (
    <div
      id="studio-voice-widget"
      className="negocios-page floating-voice-container"
      style={{
        position: 'fixed',
        bottom: '2rem',
        left: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <style>{`
        @keyframes voiceWave {
          0%, 100% { transform: scaleY(0.35); }
          50% { transform: scaleY(1); }
        }
        .voice-wave-bar {
          transform-origin: center;
          animation: voiceWave 0.75s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          .floating-voice-container {
            bottom: 1.25rem !important;
            left: 1.25rem !important;
          }
        }
        @media (max-width: 640px) {
          .floating-voice-container {
            bottom: 1rem !important;
            left: 1rem !important;
          }
          #studio-voice-bulb {
            width: 50px !important;
            height: 50px !important;
          }
        }
      `}</style>

      <button
        id="studio-voice-bulb"
        type="button"
        data-cursor="pointer"
        onClick={handleBulbClick}
        aria-label={
          showWavelength
            ? activeLang === 'es'
              ? 'Voz del estudio hablando'
              : 'Studio voice speaking'
            : activeLang === 'es'
              ? 'Escuchar mensaje del estudio'
              : 'Listen to studio message'
        }
        className="dr-wa"
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: isFooterIntersecting ? '#FFFFFF' : '#121210',
          color: isFooterIntersecting ? '#121210' : '#FFFFFF',
          borderRadius: '999px',
          display: 'grid',
          placeItems: 'center',
          border: isFooterIntersecting ? '1px solid #FFFFFF' : '1px solid #262626',
          boxShadow: isFooterIntersecting
            ? '0 12px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)'
            : '0 12px 32px rgba(0,0,0,0.25)',
          pointerEvents: 'auto',
          padding: 0,
          outline: 'none',
          transition:
            'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
          transform: 'scale(1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.06)';
          e.currentTarget.style.backgroundColor = isFooterIntersecting
            ? '#EAEAE6'
            : '#222220';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = isFooterIntersecting
            ? '#FFFFFF'
            : '#121210';
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'scale(0.96)';
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = 'scale(1.06)';
        }}
      >
        {showWavelength ? (
          /* Animated Wavelength Bars when the AI is speaking */
          <div className="flex items-center justify-center gap-[3px] h-5" aria-hidden="true">
            {[
              { height: '12px', delay: '0ms' },
              { height: '20px', delay: '140ms' },
              { height: '16px', delay: '280ms' },
              { height: '22px', delay: '90ms' },
              { height: '13px', delay: '210ms' },
            ].map((bar, idx) => (
              <span
                key={idx}
                className="voice-wave-bar w-[2.5px] rounded-full"
                style={{
                  height: bar.height,
                  animationDelay: bar.delay,
                  backgroundColor: isFooterIntersecting ? '#121210' : '#FFFFFF',
                }}
              />
            ))}
          </div>
        ) : (
          /* Clean Microphone Icon when AI stops speaking */
          <Mic className="w-[22px] h-[22px]" strokeWidth={2} />
        )}
      </button>
    </div>
  );
}
