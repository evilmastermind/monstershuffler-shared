import { z } from 'zod';
import { templateObject } from '@/schemas/objects/character/objects';
import { id, userid, name, game } from './object';

export const sGetTemplateListResponse = z.object({
  list: z.array(
    z.object({
      id,
      userid,
      name,
    }),
  ),
});

export const sGetTemplateResponse = z.object({
  id,
  object: templateObject,
});

export const sPostTemplate = z.object({
  object: templateObject,
  game,
});

export const sPutTemplate = z.object({
  object: templateObject,
  game: game.optional(),
});
