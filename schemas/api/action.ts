import { z } from 'zod';
import { actionObject } from '@/schemas/objects/character/actions';
import { id, userid, game, name } from './object';

const type = z.string().min(2);
const subtype = z.string().min(2).optional();
const source = z.string().min(2);
const actionstags = z.array(z.string()).optional();
const actionsdetails = z.object({
  name,
  type,
  subtype,
  source,
});

export const sGetActionListBody = z.object({
  game: game.optional(),
  name: name.optional(),
  type: type.optional(),
  subtype: subtype.optional(),
  source: source.optional(),
  tag: z.string().optional(),
});

export const sGetActionListResponse = z.object({
  list: z.array(
    z.object({
      id,
      userid,
      actionsdetails,
      actionstags,
    }),
  ),
});

export const sGetActionResponse = z.object({
  id,
  userid,
  object: actionObject,
  actionsdetails,
});

export const sPostActionBody = z.object({
  game,
  name,
  type,
  subtype,
  source,
  tags: actionstags,
  object: actionObject,
});

export const sPutActionBody = z.object({
  name,
  type,
  subtype,
  source,
  tags: actionstags,
  object: actionObject,
});
