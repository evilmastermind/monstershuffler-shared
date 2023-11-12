import { z } from 'zod';

export const getRandomName = z.object({
  race: z.string().optional(),
  gender: z.string().optional(),
});

export const getRandomNameResponse = z.object({
  name: z.string(),
});
