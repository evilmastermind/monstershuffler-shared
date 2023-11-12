import { z } from 'zod';

export const getRandomSurname = z.object({
  race: z.string().optional(),
  gender: z.string().optional(),
});

export const getRandomSurnameResponse = z.object({
  surname: z.string(),
});
