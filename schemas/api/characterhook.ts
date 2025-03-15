import { z } from 'zod';

export const characterHookType = z.enum(['youth', 'career', 'plot']);

export const sPostRandomCharacterhookResponse = z.object({
  id: z.number(),
  type: characterHookType,
  alignment: z.number(),
  locationorclass: z.string().nullable(),
  sentence: z.string(),
  summary: z.string(),
});

export const sPostRandomCharacterhookBody = z.object({
  alignment: z.number().optional(),
  type: characterHookType.optional(),
  locationorclass: z.string().optional(),
});
