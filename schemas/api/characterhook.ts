import { z } from 'zod';

export const sGetRandomCharacterhookResponse = z.object({
  id: z.number(),
  characterhook: z.string(),
});
