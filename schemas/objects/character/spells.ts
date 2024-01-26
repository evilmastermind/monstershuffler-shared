import { z } from 'zod';
import {
  statObject,
  choiceRandomObject,
  choiceListObject,
} from './choices';
import { abilitiesEnum } from './abilities';

export const spellGroupObject = z
  .object({
    tag: z.string(),
    availableAt: z.number().optional(),
    level: z.number().optional(),
    times: z.string().optional(), // must be a string because of expressions and "at will"
    timesMax: z.string().optional(), // must be a string because of "at will"
    spells: z.union([
      z.array(statObject),
      choiceRandomObject,
      choiceListObject,
    ]),
  })
  .strict();

export const spellsObject = z.object({
  hasSlots: z.boolean().optional(),
  ability: abilitiesEnum.optional(),
  availableUnit: z.enum(['level','cr']).optional(),
  groups: z.array(spellGroupObject).optional(),
});

export const spellObject = z
  .object({
    name: z.string().min(2),
    level: z.number(),
    range: z.string(),
    ritual: z.boolean(),
    school: z.string().min(2),
    source: z.string(),
    classes: z.array(z.string()),
    duration: z.string(),
    components: z.string(),
    castingTime: z.string(),
    description: z.string(),
  })
  .strict();
