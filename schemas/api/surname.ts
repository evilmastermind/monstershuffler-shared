import { z } from 'zod';

export const sGetRandomSurnameBody = z.object({
  race: z.string().optional(),
  gender: z.string().optional(),
});

export const sGetRandomSurnameResponse = z.object({
  surname: z.string(),
});
