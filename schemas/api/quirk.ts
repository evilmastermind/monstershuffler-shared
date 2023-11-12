import { z } from 'zod';

export const getRandomQuirkResponse = z.object({
  id: z.number(),
  quirk: z.string(),
});
