import { z } from 'zod';
import { armorObject } from '@/schemas/objects/character/armor';
import { id, userid, game, name } from './object';

export const postArmor = z.object({
  game,
  name,
  object: armorObject,
});

export const putArmor = z.object({
  name,
  object: armorObject,
});

export const getArmorParams = z.object({
  id,
});

export const getArmorResponse = z.object({
  object: armorObject,
});

export const getArmorListResponse = z.object({
  list: z.array(
    z.object({
      id,
      userid,
      name,
    }),
  ),
});
