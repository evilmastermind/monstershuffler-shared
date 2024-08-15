import { z } from 'zod';
import { weaponObject } from '@/schemas/objects/character/weapons';
import { id, userid, name, game } from './object';

export const sPostWeaponBody = z.object({
  game,
  object: weaponObject,
});

export const sPutWeaponBody = z.object({
  object: weaponObject,
  game: game.optional(),
});

export const sGetWeaponParams = z.object({
  id,
});

export const sGetWeaponResponse = z.object({
  object: weaponObject,
});

export const sGetWeaponListResponse = z.object({
  list: z.array(
    z.object({
      id,
      userid,
      name,
    }),
  ),
});
