import { z } from 'zod';
import { id, name } from './object';

const adds = z.number().int().nonnegative().optional();
const url = z.string().optional();
const negativeratings = z.number().int().optional();
const positiveratings = z.number().int().optional();

const folders = z.array(
  z.object({
    id,
    name,
  })
);

const characters = z.array(
  z.object({
    id,
    name,
    size: z.number().int(),
    type: z.string(),
    cr: z.number().int(),
    meta: z.string(),
    adds,
    url,
    negativeratings,
    positiveratings,
  })
);

const races = z.array(
  z.object({
    id,
    name,
    adds,
    url,
    negativeratings,
    positiveratings,
  })
);

const classes = z.array(
  z.object({
    id,
    name,
    adds,
    url,
    negativeratings,
    positiveratings,
  })
);

const templates = z.array(
  z.object({
    id,
    name,
    adds,
    url,
    negativeratings,
    positiveratings,
  })
);

export const getFolderContentResponse = z.object({
  folders,
  characters,
  races,
  classes,
  templates,
});

export const postFolder = z.object({
  name,
});

export const postFolderResponse = z.object({
  id,
  name,
});
