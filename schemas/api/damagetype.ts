import { z } from 'zod';
import { id, userid, name } from './object';

const description = z.string().min(2);

export const sPostDamageTypeBody = z.object({
  name,
  description,
});

export const sPutDamageTypeBody = z.object({
  name: name.optional(),
  description: description.optional(),
});

export const sGetDamageTypeResponse = z.object({
  id,
  userid,
  name,
  description,
});

export const sGetDamageTypeListResponse = z.object({
  list: z.array(
    z.object({
      id,
      userid,
      name,
      description,
    })
  ),
});
