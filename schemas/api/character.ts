import { z } from 'zod';
import { characterObject } from '@/schemas/objects/character/objects';
import { id, userid, name, game } from './object';

export const sGetCharacterListResponse = z.object({
  list: z.array(
    z.object({
      id,
      userid,
      name,
    }),
  ),
});

export const sGetCharacterResponse = z.object({
  id,
  object: characterObject,
});

export const sPostCharacterBody = z.object({
  game,
  object: characterObject,
});

export const sPutCharacterBody = z.object({
  game: game.optional(),
  object: characterObject,
});
