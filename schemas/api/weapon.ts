import { z } from 'zod';
import { weaponObject } from '@/schemas/objects/character/weapons';
import { id, userid, name, game } from './object';

export const postWeapon = z.object({
  game,
  object: weaponObject,
});

export const putWeapon = z.object({
  object: weaponObject,
});

export const getWeaponParams = z.object({
  id,
});

export const getWeaponResponse = z.object({
  object: weaponObject,
});

export const getWeaponListResponse = z.object({
  list: z.array(
    z.object({
      id,
      userid,
      name,
    }),
  ),
});
