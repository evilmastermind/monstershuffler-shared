import { z } from 'zod';
import { statType } from './choices';
import { pronounsObject } from './other';

export const statNumberString = z.object({
  number: z.number(),
  string: z.string(),
  array: z.array(z.string()).optional(),
  id: z.number().optional(),
});

export const abilitiesObject = z.object({
  STR: z.number(),
  DEX: z.number(),
  CON: z.number(),
  INT: z.number(),
  WIS: z.number(),
  CHA: z.number(),
});

export const descriptionPartObject = z.object({
  string: z.string(),
  type: statType.optional(),
  id: z.number().optional(),
});

export const statisticsObject = z.object({
  alignment: statNumberString,
  pronouns: pronounsObject,
  prename: z.string(),
  name: z.string(),
  surname: z.string(),
  fullName: z.string(),
  characterHook: z.array(descriptionPartObject).optional(),
  level: z.number(),
  CR: statNumberString,
  XP: z.string(),
  proficiency: z.number(),
  size: statNumberString,
  isSwarm: z.boolean().optional(),
  sizeSingleEntityOfSwarm: statNumberString.optional(),
  abilityScores: abilitiesObject,
  abilityModifiers: abilitiesObject,
  HP: statNumberString,
  type: statNumberString,
  subtypes: z.array(descriptionPartObject).optional(),
  meta: z.string(),
  speed: z
    .object({
      walk: z.number().optional(),
      burrow: z.number().optional(),
      climb: z.number().optional(),
      fly: z.number().optional(),
      hover: z.number().optional(),
      swim: z.number().optional(),
    })
    .optional(),
});

export type Statistics = z.infer<typeof statisticsObject>;
