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
  canvasHeightPx: z.number(),
  imageHeightPx: z.number(),
  imagePositionTopPx: z.number(),
  imagePositionLeftPx: z.number(),
  mask: z.string().optional(),
  token: tokenObject,
});

export const sheet = z.object({
  images: z.array(imageObject),
  layout: z.string().optional(),
  showRoleplayStats: z.boolean().optional(),
  decoration: z.string().optional(),
  statBlockOffsetPx: z.number().optional(),
});
