"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticsObject = exports.statStringArrayWithName = exports.statStringArray = exports.statString = exports.statStringNumberArray = exports.statStringNumber = exports.descriptionPartObject = exports.parsedExpression = exports.parsedDice = exports.format = exports.additionalStringTypes = exports.abilitiesObject = void 0;
const zod_1 = require("zod");
const choices_1 = require("./choices");
const other_1 = require("./other");
const _1 = require(".");
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
exports.abilitiesObject = zod_1.z.object({
    STR: zod_1.z.number(),
    DEX: zod_1.z.number(),
    CON: zod_1.z.number(),
    INT: zod_1.z.number(),
    WIS: zod_1.z.number(),
    CHA: zod_1.z.number(),
});
exports.additionalStringTypes = zod_1.z.enum([
    'text', 'translatableText', 'nextLine', 'endOfParagraph', 'numberAsWord', 'ordinal', 'rollableNumberWithSign', 'feet', '-feet', 'ft', 'range/rangeMax', 'range', 'resource', 'tag', 'rollableDice'
]);
// these are TailwindCSS classes
exports.format = zod_1.z.enum(['italic', 'font-bold', 'underline', 'line-through', 'sups', 'subs']);
exports.parsedDice = zod_1.z.object({
    dice: zod_1.z.number(),
    sides: zod_1.z.number(),
    bonus: zod_1.z.number().optional(),
    type: zod_1.z.string().optional(),
});
exports.parsedExpression = zod_1.z.object({
    value: zod_1.z.number(),
    type: zod_1.z.string().optional(),
});
exports.descriptionPartObject = zod_1.z.object({
    string: zod_1.z.string(),
    number: zod_1.z.number().optional(),
    type: zod_1.z.union([choices_1.statType, exports.additionalStringTypes]).optional(),
    format: zod_1.z.array(exports.format).optional(),
    dice: zod_1.z.array(zod_1.z.union([exports.parsedDice, exports.parsedExpression])).optional(),
    id: zod_1.z.number().optional(),
    translationKey: zod_1.z.string().optional(),
    translationVariables: zod_1.z.record(zod_1.z.string()).optional(),
});
exports.statStringNumber = zod_1.z.object({
    number: zod_1.z.number(),
    string: zod_1.z.string(),
    id: zod_1.z.number().optional(),
});
exports.statStringNumberArray = zod_1.z.object({
    number: zod_1.z.number(),
    string: zod_1.z.string(),
    array: zod_1.z.array(exports.descriptionPartObject),
    id: zod_1.z.number().optional(),
});
exports.statString = zod_1.z.object({
    string: zod_1.z.string(),
    id: zod_1.z.number().optional(),
});
exports.statStringArray = zod_1.z.object({
    string: zod_1.z.string(),
    array: zod_1.z.array(exports.descriptionPartObject),
    id: zod_1.z.number().optional(),
});
exports.statStringArrayWithName = zod_1.z.object({
    tag: zod_1.z.string(),
    priority: zod_1.z.number(),
    string: zod_1.z.string(),
    array: zod_1.z.array(exports.descriptionPartObject),
    name: zod_1.z.string(),
    nameArray: zod_1.z.array(exports.descriptionPartObject),
    id: zod_1.z.number().optional(),
    recharge: _1.rechargeTypeEnum.optional(),
    cost: zod_1.z.number().optional(),
    charges: zod_1.z.number().optional(),
    // chargesUsed: z.number().optional(),
    // isCharged: z.boolean().optional(),
});
exports.statisticsObject = zod_1.z.object({
    alignment: exports.statStringNumberArray,
    pronouns: other_1.pronounsObject,
    prename: zod_1.z.string(),
    name: zod_1.z.string(),
    surname: zod_1.z.string(),
    fullName: zod_1.z.string(),
    characterHook: zod_1.z.array(exports.descriptionPartObject).optional(),
    level: zod_1.z.number(),
    CR: exports.statStringNumber,
    XP: zod_1.z.string(),
    AC: exports.statStringNumberArray,
    proficiency: zod_1.z.number(),
    size: exports.statStringNumber,
    isSwarm: zod_1.z.boolean().optional(),
    sizeSingleEntityOfSwarm: exports.statStringNumber.optional(),
    abilityScores: exports.abilitiesObject,
    abilityModifiers: exports.abilitiesObject,
    HP: exports.statStringNumber,
    type: exports.statStringNumber,
    subtypes: zod_1.z.array(exports.descriptionPartObject).optional(),
    meta: exports.statStringArray,
    speeds: exports.statStringArray.optional(),
    savingThrows: exports.statStringArray.optional(),
    skills: exports.statStringArray.optional(),
    resistances: exports.statStringArray.optional(),
    immunities: exports.statStringArray.optional(),
    vulnerabilities: exports.statStringArray.optional(),
    conditionImmunities: exports.statStringArray.optional(),
    senses: exports.statStringArray,
    languages: exports.statStringArray,
    isBlind: zod_1.z.boolean().optional(),
    canSpeak: zod_1.z.boolean().optional(),
    telepathy: zod_1.z.number().optional(),
    traits: zod_1.z.array(exports.statStringArrayWithName).optional(),
    actions: zod_1.z.array(exports.statStringArrayWithName).optional(),
    bonusActions: zod_1.z.array(exports.statStringArrayWithName).optional(),
    reactions: zod_1.z.array(exports.statStringArrayWithName).optional(),
    legendaryActions: zod_1.z.array(exports.statStringArrayWithName).optional(),
    legendaryActionsIntro: exports.statStringArray.optional(),
    legendaryActionsMax: zod_1.z.number().optional(),
});
