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
  AC: statNumberString,
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
  speeds: z
    .object({
      values: z.object({
        walk: z.number().optional(),
        burrow: z.number().optional(),
        climb: z.number().optional(),
        fly: z.number().optional(),
        hover: z.number().optional(),
        swim: z.number().optional(),
      }),
      string: z.string(),
    })
    .optional(),
  savingThrows: z
    .object({
      values: z.object({
        STR: z.number().optional(),
        DEX: z.number().optional(),
        CON: z.number().optional(),
        INT: z.number().optional(),
        WIS: z.number().optional(),
        CHA: z.number().optional(),
      }),
      string: z.string(),
    })
    .optional(),
  skills: z
    .object({
      values: z.record(z.number()),
      string: z.string(),
    })
    .optional(),
  resistances: z.array(descriptionPartObject).optional(),
  immunities: z.array(descriptionPartObject).optional(),
  vulnerabilities: z.array(descriptionPartObject).optional(),
  conditionImmunities: z.array(descriptionPartObject).optional(),
  senses: z
    .object({
      values: z.record(z.number()),
      string: z.string(),
    })
    .optional(),
  languages: z.array(descriptionPartObject).optional(),
  isBlind: z.boolean().optional(),
  canSpeak: z.boolean().optional(),
  telepathy: z.number().optional(),
});

export type Statistics = z.infer<typeof statisticsObject>;
