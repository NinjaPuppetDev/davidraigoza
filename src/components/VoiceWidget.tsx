// Temporarily disabled AI Voice Widget (commented out so it stays hidden and does not greet visitors)
export default function VoiceWidget() {
  return null;
}

/*
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
*/
