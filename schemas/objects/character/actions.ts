import { z } from 'zod';
import { weaponObject } from './weapons';
import { choiceRandomObject } from './choices';
import { abilitiesEnum } from './abilities';

export const actionTypesEnum = z.enum([
  'trait',
  'legendary',
  'action',
  'reaction',
  'bonus',
  'attack',
  'multiattack',
  'mythic',
  'lair',
]);

const damageTypeEnum = z.enum(['acid damage', 'bludgeoning damage', 'cold damage', 'fire damage', 'force damage', 'lightning damage', 'necrotic damage', 'piercing damage', 'poison damage', 'psychic damage', 'radiant damage', 'slashing damage', 'thunder damage']);
export const rechargeTypeEnum = z.enum(['turn', 'short', 'day', 'week', 'month', '3-6', '4-6', '5-6', '6-6', 'spellGroup', 'spellSlot']);
export const variableEnum = z.enum(['','target', 'attack', 'creature', 'humanoid', 'round', 'minute', 'hour', 'day', 'DC Strength', 'DC Dexterity', 'DC Constitution', 'DC Intelligence', 'DC Wisdom', 'DC Charisma', 'DC Strength saving throw', 'DC Dexterity saving throw', 'DC Constitution saving throw', 'DC Intelligence saving throw', 'DC Wisdom saving throw', 'DC Charisma saving throw', 'hit point', 'temporary hit points', '+', '-st-nd-rd', 'feet', '-feet', 'time', 'damage']);
export const valueTypeEnum = z.union([variableEnum, damageTypeEnum]);

export const diceObject = z.object({
  dice: z.number(),
  sides: z.number(),
  diceIncrement: z.number().optional(),
  availableAt: z.number().optional(),
  availableUntil: z.number().optional(),
  availableUnit: z.enum(['level', 'cr']).optional(),
  unitInterval: z.number().optional(),
});

export const valueExpressionObject = z.object({
  name: z.string(),
  type: valueTypeEnum.optional(),
  expression: z.string(),
});
export const valueDiceObject = z.object({
  name: z.string(),
  type: valueTypeEnum.optional(),
  expression: z.string().optional(),
  dice: diceObject,
});
export const enchantmentObject = z.object({
  name: z.string().optional(),
  type: damageTypeEnum.optional(),
  expression: z.string().optional(),
  dice: diceObject.optional(),
});

export const valueIncrProgressionObject = z.object({
  name: z.string(),
  type: valueTypeEnum.optional(),
  incrProgression: z.object({
    unitInterval: z.number(),
    unitIncrement: z.number(),
    availableAt: z.number(),
    availableUnit: z.enum(['level', 'cr']).optional(),
    valueBase: z.number(),
    valueIncrement: z.number(),
  }),
});

export const attackObject = z.object({
  name: z.string(),
  replaceName: z.boolean().optional(),
  attributes: z.union([
    weaponObject,
    choiceRandomObject,
  ]).optional(),
  enchantments: z.array(enchantmentObject).optional(),
});

export const actionVariantObject = z.object({
  name: z.string(),
  type: actionTypesEnum.optional(),
  charges: z.string().optional(),
  recharge: rechargeTypeEnum.optional(),
  description: z.string(),
  availableAt: z.number().optional(),
  ability: abilitiesEnum.optional(),
  cost: z.string().optional(),
});
export const chosenActionObject = z.object({
  id: z.number().optional(),
  tag: z.string(),
  priority: z.number().optional(),
  variants: z.array(actionVariantObject),
  actionType: actionTypesEnum.optional(),
  availableUnit: z.enum(['level', 'cr']).optional(),
  availableUntil: z.number().optional(),
  subType: z.string().optional(),
  source: z.string().optional(),
  tags: z.array(z.string()).optional(),
  values: z
    .array(z.union([valueDiceObject, valueExpressionObject, valueIncrProgressionObject]))
    .optional(),
  attacks: z
    .array(attackObject)
    .optional(),
});
export const actionObject = z.union([chosenActionObject, choiceRandomObject]);
