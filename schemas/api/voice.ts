import { z } from 'zod';

export const sGetRandomVoiceBody = z.object({
  gender: z.string().optional(),
});

export const sGetRandomVoiceResponse = z.object({
  id: z.number(),
  gender: z.string(),
  person: z.string(),
  character: z.string().optional(),
  production: z.string().optional(),
  filename: z.string(),
});
