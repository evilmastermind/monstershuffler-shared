import { traitObject } from './roleplay';
import { z } from 'zod';
import { statType } from './choices';
import { pronounsObject } from './other';
import { rechargeTypeEnum } from '.';

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


/**
 * Parsed Dice & translating dice rolls
 * - a parsed dice object's type property can be
 *   something like "acid damage", "hit point", etc.
 * - the string property contains the dice roll in the
 *   format usually found inside stat blocks, like
 *   "10 (2d6 + 3)"
 * - I can create a translated description for the roll
 *   with vue-i18n like this: 
 *   $t(`statBlock.value.${type}`, { n: string }, average)
 */
export const parsedDice = z.object({
  dice: z.number(),
  sides: z.number(),
  value: z.number(),
  string: z.string().optional(),
  bonus: z.number().optional(),
  type: z.string().optional(),
});

export const parsedExpression = z.object({
  value: z.number(),
  type: z.string().optional(),
});

export const roll = z.object({
  dice: z.array(z.union([parsedDice, parsedExpression])),
  name: z.string().optional(),
  translationKey: z.string().optional(), // the translation for the roll name
});

export const additionalStringTypes = z.enum([
  'text', 'translatableText', 'nextLine', 'paragraphEnd', 'listStart', 'listEnd', 'listItemStart', 'listItemEnd', 'numberAsWord', 'ordinal', 'feet', '-feet', 'ft', 'range/rangeMax', 'range', 'reach', 'resource', 'tag', 'value', 'valueAsWord', 'diceRoll', 'd20Roll'
]);

// these are TailwindCSS classes
export const format = z.enum(['italic', 'font-bold', 'underline', 'line-through', 'sups', 'subs']);


///////////////////////////////////////////////////////

export const descriptionPartObject = z.object({
  string: z.string(),
  number: z.number().optional(),
  type: z.union([statType, additionalStringTypes]).optional(),
  format: z.array(format).optional(),
  roll: roll.optional(),
  id: z.number().optional(),
  translationKey: z.string().optional(),
  translationVariables: z.record(z.string()).optional(),
});

export const statStringNumber = z.object({
  name: z.string(),
  number: z.number(),
  string: z.string(),
  id: z.number().optional(),
});

export const statStringNumberArray = z.object({
  name: z.string(),
  number: z.number(),
  string: z.string(),
  array: z.array(descriptionPartObject),
  id: z.number().optional(),
});

export const statString = z.object({
  string: z.string(),
  id: z.number().optional(),
});

export const statStringArray = z.object({
  string: z.string(),
  array: z.array(descriptionPartObject),
  id: z.number().optional(),
});

export const statStringArrayWithName = z.object({
  tag: z.string(),
  priority: z.number(),
  string: z.string(),
  array: z.array(descriptionPartObject),
  name: z.string(),
  nameArray: z.array(descriptionPartObject),
  id: z.number().optional(),
  recharge: rechargeTypeEnum.optional(),
  cost: z.number().optional(),
  charges: z.number().optional(),
  // chargesUsed: z.number().optional(),
  // isCharged: z.boolean().optional(),
});

///////////////////////////////////////////////////////

export const abilityObject = z.object({
  score: statStringNumberArray,
  modifier: statStringNumberArray,
  save: statStringNumberArray,
});

export const abilitiesObject = z.object({
  STR: abilityObject,
  DEX: abilityObject,
  CON: abilityObject,
  INT: abilityObject,
  WIS: abilityObject,
  CHA: abilityObject,
});

export const statisticsObject = z.object({
  alignment: statStringNumberArray,
  pronouns: pronounsObject,
  prename: z.string(),
  name: z.string(),
  surname: z.string(),
  fullName: z.string(),
  characterHook: z.array(descriptionPartObject).optional(),
  level: z.number(),
  CR: statStringNumber,
  XP: z.string(),
  AC: statStringNumberArray,
  proficiency: z.number(),
  size: statStringNumber,
  isSwarm: z.boolean().optional(),
  sizeSingleEntityOfSwarm: statStringNumber.optional(),
  abilities: abilitiesObject,
  HP: statStringNumber,
  type: statStringNumber,
  subtypes: z.array(descriptionPartObject).optional(),
  meta: statStringArray,
  speeds: z.array(statStringNumberArray).optional(),
  savingThrows: z.array(statStringNumberArray).optional(),
  skills: z.array(statStringNumberArray).optional(),
  resistances:  z.array(statStringNumberArray).optional(),
  immunities:  z.array(statStringNumberArray).optional(),
  vulnerabilities:  z.array(statStringNumberArray).optional(),
  conditionImmunities:  z.array(statStringNumberArray).optional(),
  senses:  z.array(statStringNumberArray), // never optional: passive perception is always calculated
  languages:   z.array(statStringNumberArray), // never optional: write "—" if no languages are known
  isBlind: z.boolean().optional(),
  canSpeak: z.boolean().optional(),
  telepathy: z.number().optional(),
  traits: z.array(statStringArrayWithName).optional(),
  actions: z.array(statStringArrayWithName).optional(),
  bonusActions: z.array(statStringArrayWithName).optional(),
  reactions: z.array(statStringArrayWithName).optional(),
  legendaryActions: z.array(statStringArrayWithName).optional(),
  legendaryActionsIntro: statStringArray.optional(),
  legendaryActionsMax: z.number().optional(),
  spellcasting: z.array(descriptionPartObject).optional(),
  spells: z.array(statStringArrayWithName).optional(),
  // other
  race: z.string().optional(),
  class: z.string().optional(),
  age: statStringNumber.optional(),
  personality: traitObject.optional(),
  feeling: traitObject.optional(),
  voice: z.string().optional(),
  bodyType: z.string().optional(),
  height: z.string().optional(),
  physicalAppearance: z.string().optional(),
});

/**
 * 2024-01-28 Note on spells:
 * both spell group types ("slots" and "uses/day") will require to have a "name" for: 
 * - the number of uses
 * - the recharge type
 * 
 * the difference between the two types is that they will have a different type of "recharge", and that
 * we need to count the uses for single spells for groups.
 * We don't need to do it in descriptionPart, though. The groups' tag and the spells' id (or name) is
 * enough to identify them and count the uses.
 * */ 
