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

export const rechargeTypeEnum = z.enum(['turn', 'short', 'day', 'week', 'month', '3-6', '4-6', '5-6', '6-6', 'spellGroup', 'spellSlot']);

export const diceObject = z.object({
  dice: z.number(),
  sides: z.number(),
  diceIncrement: z.number().optional(),
  availableAt: z.number().optional(),
  availableUntil: z.number().optional(),
  availableUnit: z.enum(['level', 'cr']).optional(),
  unitInterval: z.number().optional(),
});

export const enchantmentObject = z.object({
  type: z.string(),
  dice: diceObject.optional(),
  expression: z.string().optional(),
});
export const attackAttributesObject = z.object({
  reach: z.string().optional(),
  targets: z.string().optional(),
});
export const attackObject = z.object({
  name: z.string(),
  replaceName: z.boolean().optional(),
  // attributes: z.union([
  //   attackAttributesObject.merge(weaponObject),
  //   choiceRandomObject,
  // ]),
  attributes: z.any().optional(),
  enchantment: enchantmentObject.optional(),
});

export const valueExpressionObject = z.object({
  name: z.string(),
  type: z.string().optional(),
  expression: z.string(),
});
export const valueDiceObject = z.object({
  name: z.string(),
  type: z.string().optional(),
  expression: z.string().optional(),
  dice: diceObject,
});

export const valueIncrProgressionObject = z.object({
  name: z.string(),
  type: z.string().optional(),
  incrProgression: z.object({
    unitInterval: z.number(),
    unitIncrement: z.number(),
    availableAt: z.number(),
    availableUnit: z.enum(['level', 'cr']).optional(),
    valueBase: z.number(),
    valueIncrement: z.number(),
  }),
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
  values: z
    .array(z.union([valueDiceObject, valueExpressionObject, valueIncrProgressionObject]))
    .optional(),
  attacks: z
    .array(attackObject)
    .optional(),
});
export const chosenActionObject = z.object({
  tag: z.string(),
  priority: z.number().optional(),
  variants: z.array(actionVariantObject),
  actionType: actionTypesEnum.optional(),
  availableUnit: z.enum(['level', 'cr']).optional(),
  availableUntil: z.number().optional(),
  subType: z.string().optional(),
  source: z.string().optional(),
  tags: z.array(z.string()).optional(),
});
export const actionObject = z.union([chosenActionObject, choiceRandomObject]);
