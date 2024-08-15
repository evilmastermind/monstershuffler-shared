import { z } from 'zod';
import { classvariantObject } from '@/schemas/objects/character/objects';
import { id, game, name, userid } from './object';

export const sGetClassvariantListResponse = z.object({
  list: z.array(
    z.object({
      id,
      userid,
      name,
      objects: z.object({
        id,
        name,
      }),
    }),
  ),
});

export const sGetClassvariantClassListResponse = z.object({
  list: z.array(
    z.object({
      id,
      userid,
      name,
    }),
  ),
});

export const sGetClassvariantResponse = z.object({
  object: classvariantObject,
  id,
});

export const sPostClassvariantBody = z.object({
  game,
  classId: id,
  object: classvariantObject,
});

export const sPutClassvariantBody = z.object({
  object: classvariantObject,
  game: game.optional(),
});
