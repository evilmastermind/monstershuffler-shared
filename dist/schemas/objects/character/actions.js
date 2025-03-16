"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionObject = exports.chosenActionObject = exports.actionVariantObject = exports.attackObject = exports.valueIncrProgressionObject = exports.enchantmentObject = exports.valueDiceObject = exports.valueExpressionObject = exports.diceObject = exports.valueTypeEnum = exports.variableEnum = exports.rechargeTypeEnum = exports.actionTypesEnum = void 0;
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
const damageTypeEnum = zod_1.z.enum(['acid damage', 'bludgeoning damage', 'cold damage', 'fire damage', 'force damage', 'lightning damage', 'necrotic damage', 'piercing damage', 'poison damage', 'psychic damage', 'radiant damage', 'slashing damage', 'thunder damage']);
exports.rechargeTypeEnum = zod_1.z.enum(['turn', 'short', 'day', 'week', 'month', '3-6', '4-6', '5-6', '6-6', 'spellGroup', 'spellSlot']);
exports.variableEnum = zod_1.z.enum(['', 'target', 'attack', 'creature', 'humanoid', 'round', 'minute', 'hour', 'day', 'DC Strength', 'DC Dexterity', 'DC Constitution', 'DC Intelligence', 'DC Wisdom', 'DC Charisma', 'DC Strength saving throw', 'DC Dexterity saving throw', 'DC Constitution saving throw', 'DC Intelligence saving throw', 'DC Wisdom saving throw', 'DC Charisma saving throw', 'hit point', 'temporary hit points', '+', '-st-nd-rd', 'feet', '-feet', 'time', 'damage']);
exports.valueTypeEnum = zod_1.z.union([exports.variableEnum, damageTypeEnum]);
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
    type: exports.valueTypeEnum.optional(),
    expression: zod_1.z.string(),
});
exports.valueDiceObject = zod_1.z.object({
    name: zod_1.z.string(),
    type: exports.valueTypeEnum.optional(),
    expression: zod_1.z.string().optional(),
    dice: exports.diceObject,
});
exports.enchantmentObject = zod_1.z.object({
    name: zod_1.z.string().optional(),
    type: damageTypeEnum.optional(),
    expression: zod_1.z.string().optional(),
    dice: exports.diceObject.optional(),
});
exports.valueIncrProgressionObject = zod_1.z.object({
    name: zod_1.z.string(),
    type: exports.valueTypeEnum.optional(),
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
    id: zod_1.z.number().optional(),
    tag: zod_1.z.string(),
    priority: zod_1.z.number().optional(),
    variants: zod_1.z.array(exports.actionVariantObject),
    actionType: exports.actionTypesEnum.optional(),
    availableUnit: zod_1.z.enum(['level', 'cr']).optional(),
    availableUntil: zod_1.z.number().optional(),
    subType: zod_1.z.string().optional(),
    source: zod_1.z.string().optional(),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
    values: zod_1.z
        .array(zod_1.z.union([exports.valueDiceObject, exports.valueExpressionObject, exports.valueIncrProgressionObject]))
        .optional(),
    attacks: zod_1.z
        .array(exports.attackObject)
        .optional(),
});
exports.actionObject = zod_1.z.union([exports.chosenActionObject, choices_1.choiceRandomObject]);
