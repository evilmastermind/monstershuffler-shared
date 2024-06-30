import { z } from 'zod';
import { characterObject } from '@/schemas/objects/character/objects';
import { pronounsObject } from '@/schemas/objects/character/other';
import { id, objectWithVariantsList, objectList } from './object';

export const postRandomNpcInput = z.object({
  levelType: z.enum(['random', 'randomPeasantsMostly']).optional(),
  classType: z
    .enum(['none', 'randomSometimes', 'randomAlways', 'specific'])
    .optional(),
  backgroundType: z.enum(['none', 'random', 'specific']).optional(),
  classId: id.optional(),
  classvariantId: id.optional(),
  backgroundId: id.optional(),
  primaryRaceId: id.optional(),
  secondaryRaceId: id.optional(),
  primaryRacevariantId: id.optional(),
  secondaryRacevariantId: id.optional(),
  primaryRacePercentage: z.number().min(0).max(100).optional(),
  secondaryRacePercentage: z.number().min(0).max(100).optional(),
  addVoice: z.boolean().optional(),
  includeChildren: z.boolean().optional(),
  includeBodyType: z.boolean().optional(),
  pronounsChosen: pronounsObject.optional(),
});

export const npcDetailsObject = z.object({
  id: z.string(),
  object: characterObject,
});

export const postRandomNpcResponse = npcDetailsObject;

export const postFourRandomNpcsResponse = z.object({
  npcs: z.array(npcDetailsObject),
});

export const getGeneratorDataResponse = z.object({
  races: objectWithVariantsList,
  classes: objectWithVariantsList,
  backgrounds: objectList,
});
