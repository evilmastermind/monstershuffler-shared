import { z } from 'zod';
import { characterObject } from '@/schemas/objects/character/objects';
import { id, userid, name, game } from './object';

export const getCharacterListResponse = z.object({
  list: z.array(
    z.object({
      id,
      userid,
      name,
    }),
  ),
});

export const getCharacterResponse = z.object({
  id,
  object: characterObject,
});

export const postCharacter = z.object({
  game,
  name,
  object: characterObject,
});

export const putCharacter = z.object({
  name,
  game,
  object: characterObject,
});
