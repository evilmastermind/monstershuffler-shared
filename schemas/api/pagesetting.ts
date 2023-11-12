import { z } from 'zod';

export const pageSettings = z.object({
  page: z.string(),
  object: z.record(z.any()),
});

export const settings = z.record(z.any());
