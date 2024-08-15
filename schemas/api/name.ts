import { z } from 'zod';

export const sGetRandomNameBody = z.object({
  race: z.string().optional(),
  gender: z.string().optional(),
});

export const sGetRandomNameResponse = z.object({
  name: z.string(),
});
