import { z } from 'zod';
import { racevariantObject } from '@/schemas/objects/character/objects';
import { id, game, objectList } from './object';

export const sGetRacevariantListResponse = z.object({
  list: objectList,
});

export const sGetRacevariantResponse = z.object({
  id,
  object: racevariantObject,
});

export const sPostRacevariantBody = z.object({
  game,
  raceId: id,
  object: racevariantObject,
});

export const sPutRacevariantBody = z.object({
  object: racevariantObject,
  game: game.optional(),
});
