import { z } from 'zod';
import { racevariantObject } from '@/schemas';
import { id, game, objectList } from './object';

export const getRacevariantListResponse = z.object({
  list: objectList,
});

export const getRacevariantResponse = z.object({
  id,
  object: racevariantObject,
});

export const postRacevariant = z.object({
  game,
  raceId: id,
  object: racevariantObject,
});

export const putRacevariant = z.object({
  object: racevariantObject,
});
