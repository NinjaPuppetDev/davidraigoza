import 'dotenv/config';
import express from 'express';
import http from 'http';
import path from 'path';
import { WebSocketServer, WebSocket } from 'ws';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { submitNewsletterToZoho } from './api/newsletter';

const PORT = 3000;

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

function getGreetingPrompt(lang: string, isUsOnly: boolean): string {
  if (isUsOnly || lang === 'en') {
    return `Please say this exact message word for word in a warm, editorial tone, without adding anything else: "${ENGLISH_TEASER}"`;
  }
  return `Por favor di exactamente este mensaje palabra por palabra con un tono cálido y editorial, sin agregar nada más: "${SPANISH_TEASER}"`;
}

async function startServer() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.post('/api/newsletter', async (req, res) => {
    try {
      const result = await submitNewsletterToZoho(req.body || {});
      res.status(result.status).json(result.data);
    } catch {
      res.status(400).json({ ok: false, message: 'Invalid request body.' });
    }
  });

  const server = http.createServer(app);
  const wss = new WebSocketServer({ server, path: '/live' });

  wss.on('connection', async (clientWs: WebSocket, req) => {
    const url = new URL(req.url || '/live', 'http://localhost');
    const isUsOnly = url.searchParams.get('us') === 'true';
    const lang = isUsOnly || url.searchParams.get('lang') === 'en' ? 'en' : 'es';
    const shouldGreet = url.searchParams.get('greet') !== 'false';

    const apiKey =
      process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || '';

    if (!apiKey) {
      if (clientWs.readyState === WebSocket.OPEN) {
        clientWs.send(
          JSON.stringify({
            type: 'error',
            message: 'Missing GEMINI_API_KEY on server',
          })
        );
      }
      clientWs.close();
      return;
    }

    let session: any = null;
    let isClientClosed = false;
    let receivedAnyAudio = false;
    let retried = false;

    const sendToClient = (payload: Record<string, unknown>) => {
      if (clientWs.readyState === WebSocket.OPEN) {
        clientWs.send(JSON.stringify(payload));
      }
    };

    const connectGeminiLive = async () => {
      if (isClientClosed) return;

      try {
        const ai = new GoogleGenAI({ apiKey });
        const liveSession = await ai.live.connect({
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
              sendToClient({ type: 'connected' });
            },
            onmessage: (message: LiveServerMessage) => {
              if (message.serverContent?.interrupted) {
                sendToClient({ type: 'interrupted' });
              }

              const parts = message.serverContent?.modelTurn?.parts;
              if (parts) {
                for (const part of parts) {
                  const base64Audio = part.inlineData?.data;
                  if (base64Audio) {
                    receivedAnyAudio = true;
                    sendToClient({ type: 'audio', data: base64Audio });
                  }
                }
              }

              if (message.serverContent?.turnComplete) {
                sendToClient({ type: 'turnComplete' });
              }
            },
            onerror: (err: any) => {
              console.error('[Live Server] Gemini Live error:', err?.message || err);
            },
            onclose: (event: any) => {
              const code = event?.code;
              const reason = String(event?.reason || '');

              if (!receivedAnyAudio && !isClientClosed && (code === 1011 || reason.includes('quota'))) {
                if (!retried) {
                  retried = true;
                  setTimeout(() => {
                    connectGeminiLive();
                  }, 1200);
                  return;
                } else {
                  sendToClient({ type: 'fallback_greeting', lang });
                  return;
                }
              }

              sendToClient({ type: 'closed', hadAudio: receivedAnyAudio });
            },
          },
        });

        if (isClientClosed) {
          liveSession.close();
          return;
        }

        session = liveSession;

        if (shouldGreet) {
          liveSession.sendClientContent({
            turns: [
              {
                role: 'user',
                parts: [{ text: getGreetingPrompt(lang, isUsOnly) }],
              },
            ],
            turnComplete: true,
          });
        }
      } catch (err: any) {
        console.error('[Live Server] Failed to connect to Gemini Live:', err?.message || err);
        if (!receivedAnyAudio && shouldGreet) {
          sendToClient({ type: 'fallback_greeting', lang });
        } else {
          sendToClient({ type: 'error', message: 'Failed to connect to Gemini Live' });
        }
      }
    };

    await connectGeminiLive();

    clientWs.on('message', (raw) => {
      try {
        const msg = JSON.parse(raw.toString());
        if (msg.type === 'audio' && msg.data && session) {
          session.sendRealtimeInput({
            audio: {
              data: msg.data,
              mimeType: 'audio/pcm;rate=16000',
            },
          });
        } else if (msg.type === 'greet' && session) {
          session.sendClientContent({
            turns: [
              {
                role: 'user',
                parts: [{ text: getGreetingPrompt(msg.lang || lang, isUsOnly) }],
              },
            ],
            turnComplete: true,
          });
        }
      } catch {
        // Ignore malformed messages
      }
    });

    clientWs.on('close', () => {
      isClientClosed = true;
      if (session) {
        try {
          session.close();
        } catch {}
        session = null;
      }
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
