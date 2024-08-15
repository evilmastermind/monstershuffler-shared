import { z } from 'zod';

export const sGetRandomQuirkResponse = z.object({
  id: z.number(),
  quirk: z.string(),
});
