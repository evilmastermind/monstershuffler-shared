import { z } from 'zod';
import { id, userid, name } from './object';

const description = z.string().min(2);

export const postDamageType = z.object({
  name,
  description,
});

export const getDamageTypeResponse = z.object({
  id,
  userid,
  name,
  description,
});

export const putDamageType = z.object({
  name,
  description,
});

export const getDamageTypeListResponse = z.object({
  list: z.array(
    z.object({
      id,
      userid,
      name,
      description,
    })
  ),
});
