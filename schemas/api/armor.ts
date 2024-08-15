import { z } from 'zod';
import { armorObject } from '@/schemas/objects/character/armor';
import { id, userid, game, name } from './object';

export const sPostArmorBody = z.object({
  game,
  name,
  object: armorObject,
});

export const sPutArmorBody = z.object({
  name,
  object: armorObject,
});

export const sGetArmorParams = z.object({
  id,
});

export const sGetArmorResponse = z.object({
  object: armorObject,
});

export const sGetArmorListResponse = z.object({
  list: z.array(
    z.object({
      id,
      userid,
      name,
    }),
  ),
});
