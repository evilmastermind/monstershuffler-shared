import { z } from 'zod';
import { raceObject } from '@/schemas/objects/character/objects';
import { id, game, objectList, objectWithVariantsList } from './object';

export const sGetRaceListResponse = z.object({
  list: objectList,
});

export const sGetRaceWithVariantsListResponse = z.object({
  list: objectWithVariantsList,
});

export const sGetRaceResponse = z.object({
  object: raceObject,
  id,
});

export const sPostRaceBody = z.object({
  game,
  object: raceObject,
});

export const sPutRaceBody = z.object({
  object: raceObject,
  game: game.optional(),
});
