import { z } from 'zod';
import { pronounsObject } from './other';

const statNumberString = z.object({
  number: z.number(),
  string: z.string(),
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

const descriptionPartObject = z.object({
  string: z.string(),
  type: z.enum(['background' , 'spell' , 'trait' , 'race' , 'class' , 'template' , 'type' , 'subtype' , 'language' , 'skill'  , 'savingThrow' , 'condition' , 'resistance' , 'immunity' , 'vulnerability' , 'conditionImmunity']).optional(),
  id: z.number().optional(),
});


export const statisticsObject = z.object({
  alignment: z.array(z.string()),
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
  sizeSingleEntityOfSwarm: statNumberString.optional(),
  abilityScores: abilitiesObject,
  abilityModifiers: abilitiesObject,
  HP: statNumberString,
  type: statNumberString.optional(),
  subtypes: z.array(statNumberString).optional(),
});

export type Statistics = z.infer<typeof statisticsObject>;
