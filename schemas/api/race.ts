import { z } from 'zod';
import { raceObject } from '@/schemas';
import { id, game, objectList, objectWithVariantsList } from './object';

export const getRaceListResponse = z.object({
  list: objectList
});

export const getRaceWithVariantsListResponse = z.object({
  list: objectWithVariantsList,
});

export const getRaceResponse = z.object({
  object: raceObject,
  id,
});

export const postRace = z.object({
  game,
  object: raceObject,
});

export const putRace = z.object({
  object: raceObject,
  game,
});
