import { z } from 'zod';

export const getRandomCharacterhookResponse = z.object({
  id: z.number(),
  characterhook: z.string(),
});
