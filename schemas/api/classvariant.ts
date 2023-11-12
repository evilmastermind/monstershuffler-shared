import { z } from 'zod';
import { classvariantObject } from '@/schemas';
import { id, game, name, userid } from './object';

export const getClassvariantListResponse = z.object({
  list: z.array(
    z.object({
      id,
      userid,
      name,
      objects: z.object({
        id,
        name,
      }),
    })
  ),
});

export const getClassvariantClassListResponse = z.object({
  list: z.array(
    z.object({
      id,
      userid,
      name,
    })
  ),
});

export const getClassvariantResponse = z.object({
  object: classvariantObject,
  id,
});

export const postClassvariant = z.object({
  game,
  classId: id,
  object: classvariantObject,
});

export const putClassvariant = z.object({
  object: classvariantObject,
});
