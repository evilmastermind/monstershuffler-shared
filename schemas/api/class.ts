import { z } from 'zod';
import { classObject } from '@/schemas';
import { id, game, objectList, objectWithVariantsList } from './object';

export const getClassListResponse = z.object({
  list: objectList,
});

export const getClassWithVariantsListResponse = z.object({
  list: objectWithVariantsList,
});

export const getClassResponse = z.object({
  object: classObject,
  id,
});

export const postClass = z.object({
  game,
  object: classObject,
});

export const putClass = z.object({
  object: classObject,
  game,
});
