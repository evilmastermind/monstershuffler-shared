"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionObject = exports.chosenActionObject = exports.actionVariantObject = exports.valueIncrProgressionObject = exports.valueDiceObject = exports.valueExpressionObject = exports.attackObject = exports.attackAttributesObject = exports.enchantmentObject = exports.diceObject = exports.rechargeTypeEnum = exports.actionTypesEnum = void 0;
const zod_1 = require("zod");
const weapons_1 = require("./weapons");
const choices_1 = require("./choices");
const abilities_1 = require("./abilities");
exports.actionTypesEnum = zod_1.z.enum([
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
exports.rechargeTypeEnum = zod_1.z.enum(['turn', 'short', 'day', 'week', 'month', '3-6', '4-6', '5-6', '6-6', 'spellGroup', 'spellSlot']);
exports.diceObject = zod_1.z.object({
    die: zod_1.z.number(),
    diceNumber: zod_1.z.number(),
    diceIncrement: zod_1.z.number().optional(),
    availableAt: zod_1.z.number().optional(),
    availableUntil: zod_1.z.number().optional(),
    availableUnit: zod_1.z.enum(['level', 'cr']).optional(),
    unitInterval: zod_1.z.number().optional(),
});
exports.enchantmentObject = zod_1.z.object({
    type: zod_1.z.string(),
    dice: exports.diceObject.optional(),
    expression: zod_1.z.string().optional(),
});
exports.attackAttributesObject = zod_1.z.object({
    reach: zod_1.z.string().optional(),
    targets: zod_1.z.string().optional(),
});
exports.attackObject = zod_1.z.object({
    name: zod_1.z.string(),
    replaceName: zod_1.z.boolean().optional(),
    attributes: zod_1.z.union([
        exports.attackAttributesObject.merge(weapons_1.weaponObject),
        choices_1.choiceRandomObject,
    ]),
    enchantment: exports.enchantmentObject.optional(),
});
exports.valueExpressionObject = zod_1.z.object({
    name: zod_1.z.string(),
    type: zod_1.z.string().optional(),
    expression: zod_1.z.string(),
});
exports.valueDiceObject = zod_1.z.object({
    name: zod_1.z.string(),
    type: zod_1.z.string().optional(),
    expression: zod_1.z.string().optional(),
    dice: exports.diceObject,
});
exports.valueIncrProgressionObject = zod_1.z.object({
    name: zod_1.z.string(),
    type: zod_1.z.string().optional(),
    incrProgression: zod_1.z.object({
        unitInterval: zod_1.z.string(),
        unitIncrement: zod_1.z.string(),
        availableAt: zod_1.z.string(),
        availableUnit: zod_1.z.enum(['level', 'cr']).optional(),
        valueBase: zod_1.z.string(),
        valueIncrement: zod_1.z.string(),
    }),
});
exports.actionVariantObject = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    type: exports.actionTypesEnum.optional(),
    availableAt: zod_1.z.number().optional(),
    ability: abilities_1.abilitiesEnum.optional(),
    charges: zod_1.z.string().optional(),
    recharge: exports.rechargeTypeEnum.optional(),
    cost: zod_1.z.string().optional(),
    values: zod_1.z
        .array(zod_1.z.union([exports.valueDiceObject, exports.valueExpressionObject, exports.valueIncrProgressionObject]))
        .optional(),
    attacks: zod_1.z.array(exports.attackObject).optional(),
});
exports.chosenActionObject = zod_1.z.object({
    tag: zod_1.z.string(),
    actionType: exports.actionTypesEnum.optional(),
    priority: zod_1.z.number().optional(),
    availableUnit: zod_1.z.enum(['level', 'cr']).optional(),
    availableUntil: zod_1.z.number().optional(),
    subType: zod_1.z.string().optional(),
    source: zod_1.z.string().optional(),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
    variants: zod_1.z.array(exports.actionVariantObject),
});
exports.actionObject = zod_1.z.union([exports.chosenActionObject, choices_1.choiceRandomObject]);
