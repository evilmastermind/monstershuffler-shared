import { z } from 'zod';
import { templateObject } from '@/schemas';
import { id, userid, name, game } from './object';

export const getTemplateListResponse = z.object({
  list: z.array(
    z.object({
      id,
      userid,
      name,
    })
  ),
});

export const getTemplateResponse = z.object({
  id,
  object: templateObject,
});

export const postTemplate = z.object({
  object: templateObject,
  game,
});

export const putTemplate = z.object({
  object: templateObject,
  game,
});
