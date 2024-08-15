import { z } from 'zod';
import { classObject } from '@/schemas/objects/character/objects';

import { id, game, objectList, objectWithVariantsList } from './object';

export const sGetClassListResponse = z.object({
  list: objectList,
});

export const sGetClassWithVariantsListResponse = z.object({
  list: objectWithVariantsList,
});

export const sGetClassResponse = z.object({
  object: classObject,
  id,
});

export const sPostClassBody = z.object({
  game,
  object: classObject,
});

export const sPutClassBody = z.object({
  object: classObject,
  game: game.optional(),
});
