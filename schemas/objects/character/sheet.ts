import { z } from 'zod';

export const tokenObject = z.object({
  topPx: z.number(),
  leftPx: z.number(),
  widthPx: z.number(),
});

export const imageObject = z.object({
  url: z.string(),
  artist: z.string().optional(),
  artistUrl: z.string().optional(),
  canvasHeightPx: z.number().optional(),
  canvasWidthPx: z.number().optional(),
  sheetWidthPx: z.number().optional(),
  imageHeightPx: z.number().optional(),
  imagePositionTopPx: z.number().optional(),
  imagePositionLeftPx: z.number().optional(),
  mask: z.string().optional(),
  token: tokenObject.optional(),
});

export const sheet = z.object({
  images: z.array(imageObject),
  layout: z.string().optional(),
  showRoleplayStats: z.boolean().optional(),
  decoration: z.string().optional(),
  statBlockOffsetPx: z.number().optional(),
});
