import { z } from 'zod';
import { characterObject, pronounsObject } from '@/schemas/objects';
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
  pronounsChosen: pronounsObject.optional(),
});

export const postRandomNpcResponse = z.object({
  npc: characterObject,
});

export const postFourRandomNpcsResponse = z.object({
  npcs: z.array(characterObject),
});

export const postGeneratorDataResponse = z.object({
  races: objectWithVariantsList,
  classes: objectWithVariantsList,
  backgrounds: objectList,
});
