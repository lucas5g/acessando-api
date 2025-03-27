import { t } from 'elysia';

export const env = t.Object({
  ELEVENLABS_API_KEY: t.String(),
  DEEPL_API_KEY: t.String(),
  NODE_ENV: t.String().optional(),
}).parse(process.env);
