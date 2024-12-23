import { z } from 'zod';
import { backgroundObject } from '@/schemas/objects/character/objects';
import { id, userid, game, name } from './object';

const age = z.enum([
  'medieval',
  'fantasy',
  'renaissance',
  'modern',
  'future',
  'space',
  'other',
]);

const description = z.string();
const object = backgroundObject;

export const sGetBackgroundListResponse = z.object({
  list: z.array(
    z.object({
      id,
      userid,
      name,
    }),
  ),
});

export const sGetBackgroundResponse = z.object({
  object,
  id,
  name: z.string(),
  femaleName: z.string(),
  age: z.string(),
  description: z.string(),
});

export const sPostBackgroundBody = z.object({
  object,
  age,
  description,
  game,
});

export const sPutBackgroundBody = z.object({
  object,
  age,
  description,
  game: game.optional(),
});
