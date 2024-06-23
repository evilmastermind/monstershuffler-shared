"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionObject = exports.chosenActionObject = exports.actionVariantObject = exports.attackObject = exports.valueIncrProgressionObject = exports.enchantmentObject = exports.valueDiceObject = exports.valueExpressionObject = exports.diceObject = exports.rechargeTypeEnum = exports.actionTypesEnum = void 0;
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
    dice: zod_1.z.number(),
    sides: zod_1.z.number(),
    diceIncrement: zod_1.z.number().optional(),
    availableAt: zod_1.z.number().optional(),
    availableUntil: zod_1.z.number().optional(),
    availableUnit: zod_1.z.enum(['level', 'cr']).optional(),
    unitInterval: zod_1.z.number().optional(),
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
exports.enchantmentObject = zod_1.z.object({
    name: zod_1.z.string().optional(),
    type: zod_1.z.string().optional(),
    expression: zod_1.z.string().optional(),
    dice: exports.diceObject.optional(),
});
exports.valueIncrProgressionObject = zod_1.z.object({
    name: zod_1.z.string(),
    type: zod_1.z.string().optional(),
    incrProgression: zod_1.z.object({
        unitInterval: zod_1.z.number(),
        unitIncrement: zod_1.z.number(),
        availableAt: zod_1.z.number(),
        availableUnit: zod_1.z.enum(['level', 'cr']).optional(),
        valueBase: zod_1.z.number(),
        valueIncrement: zod_1.z.number(),
    }),
});
exports.attackObject = zod_1.z.object({
    name: zod_1.z.string(),
    replaceName: zod_1.z.boolean().optional(),
    attributes: zod_1.z.union([
        weapons_1.weaponObject,
        choices_1.choiceRandomObject,
    ]).optional(),
    enchantments: zod_1.z.array(exports.enchantmentObject).optional(),
});
exports.actionVariantObject = zod_1.z.object({
    name: zod_1.z.string(),
    type: exports.actionTypesEnum.optional(),
    charges: zod_1.z.string().optional(),
    recharge: exports.rechargeTypeEnum.optional(),
    description: zod_1.z.string(),
    availableAt: zod_1.z.number().optional(),
    ability: abilities_1.abilitiesEnum.optional(),
    cost: zod_1.z.string().optional(),
});
exports.chosenActionObject = zod_1.z.object({
    tag: zod_1.z.string(),
    priority: zod_1.z.number().optional(),
    variants: zod_1.z.array(exports.actionVariantObject),
    actionType: exports.actionTypesEnum.optional(),
    availableUnit: zod_1.z.enum(['level', 'cr']).optional(),
    availableUntil: zod_1.z.number().optional(),
    subType: zod_1.z.string().optional(),
    source: zod_1.z.string().optional(),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
    // 2024/04/21 - values and attacks moved out of the variant object
    // because random choices should be made only once per action
    values: zod_1.z
        .array(zod_1.z.union([exports.valueDiceObject, exports.valueExpressionObject, exports.valueIncrProgressionObject]))
        .optional(),
    attacks: zod_1.z
        .array(exports.attackObject)
        .optional(),
});
exports.actionObject = zod_1.z.union([exports.chosenActionObject, choices_1.choiceRandomObject]);
