import { z } from 'zod';
import { statType } from './choices';
import { pronounsObject } from './other';

/**
 * About the .statistics object and how it should be constructed:
 * Parsed stats inside .statistics must follow these rules:
 * 
 * - the special words included, which are part of the d&d standard rules 
 * ( like the stat name, conditions, damage types, etc. ) must be provided 
 * in a way that can be isolated and translated;
 * 
 * - if the stat includes values/words that a) can be rolled with dice b) 
 * define a limited resource or c) may trigger some changes within this 
 * stat block or another creature's, those values must be isolated so that 
 * they can be processed or extracted for additional functionalities
 * provided by the interface (ex: dice roll, resource tracking, applying
 * conditions or templates, etc.)
 * 
 * - it must always be possible to write the stats (in English) in their
 * final form by using the words and values provided within the 
 * object and without relying on other resources (like other parsers,
 * tables, etc) so that partners and third-party software can use the 
 * .statistics object to draw the stat block. When this is not
 * possible, provide an alternative string that can be used instead.
 * 
 */

export const abilitiesObject = z.object({
  STR: z.number(),
  DEX: z.number(),
  CON: z.number(),
  INT: z.number(),
  WIS: z.number(),
  CHA: z.number(),
});

export const additionalStringTypes = z.enum([
  'text', 'translatableText', 'nextLine', 'endOfParagraph', 'number', 'numberWithSign'
]);

export const format = z.enum(['italic', 'bold', 'underline', 'strikethrough', 'superscript', 'subscript']);

export const descriptionPartObject = z.object({
  string: z.string(),
  type: z.union([statType, additionalStringTypes]).optional(),
  format: z.array(format).optional(),
  id: z.number().optional(),
});

export const statStringNumber = z.object({
  number: z.number().optional(),
  string: z.string(),
  array: z.array(descriptionPartObject).optional(),
  id: z.number().optional(),
});

export const statString = z.object({
  string: z.string(),
  array: z.array(descriptionPartObject).optional(),
  id: z.number().optional(),
});

export const statStringWithName = z.object({
  string: z.string(),
  array: z.array(descriptionPartObject).optional(),
  nameString: z.string(),
  nameArray: z.array(descriptionPartObject).optional(),
  id: z.number().optional(),
});



export const parsedActionObject = z.object({
  name: z.string(),
  tag: z.string(),
  priority: z.number(),
  description: z.string(),
});

export const statisticsObject = z.object({
  alignment: statStringNumber,
  pronouns: pronounsObject,
  prename: z.string(),
  name: z.string(),
  surname: z.string(),
  fullName: z.string(),
  characterHook: z.array(descriptionPartObject).optional(),
  level: z.number(),
  CR: statStringNumber,
  XP: z.string(),
  AC: statStringNumber,
  proficiency: z.number(),
  size: statStringNumber,
  isSwarm: z.boolean().optional(),
  sizeSingleEntityOfSwarm: statStringNumber.optional(),
  abilityScores: abilitiesObject,
  abilityModifiers: abilitiesObject,
  HP: statStringNumber,
  type: statStringNumber,
  subtypes: statString.optional(),
  meta: z.string(),
  speeds: statString.optional(),
  savingThrows: statString.optional(),
  skills: statString.optional(),
  resistances:  statString.optional(),
  immunities:  statString.optional(),
  vulnerabilities:  statString.optional(),
  conditionImmunities:  statString.optional(),
  senses: statString.optional(),
  languages:  statString.optional(),
  isBlind: z.boolean().optional(),
  canSpeak: z.boolean().optional(),
  telepathy: z.number().optional(),
  traits: z.array(statStringWithName).optional(),
  actions: z.array(statStringWithName).optional(),
  bonusActions: z.array(statStringWithName).optional(),
  reactions: z.array(statStringWithName).optional(),
  legendaryActions: z.array(statStringWithName).optional(),
});

export type Statistics = z.infer<typeof statisticsObject>;
