"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticsObject = exports.parsedActionObject = exports.statStringWithName = exports.statString = exports.statStringNumber = exports.descriptionPartObject = exports.additionalStringTypes = exports.abilitiesObject = void 0;
const zod_1 = require("zod");
const choices_1 = require("./choices");
const other_1 = require("./other");
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
    'text', 'italicText', 'boldText', 'nextLine', 'endOfParagraph', 'number', 'numberWithSign'
]);
exports.descriptionPartObject = zod_1.z.object({
    string: zod_1.z.string(),
    type: zod_1.z.union([choices_1.statType, exports.additionalStringTypes]).optional(),
    id: zod_1.z.number().optional(),
});
exports.statStringNumber = zod_1.z.object({
    number: zod_1.z.number().optional(),
    string: zod_1.z.string(),
    array: zod_1.z.array(exports.descriptionPartObject).optional(),
    id: zod_1.z.number().optional(),
});
exports.statString = zod_1.z.object({
    string: zod_1.z.string(),
    array: zod_1.z.array(exports.descriptionPartObject).optional(),
    id: zod_1.z.number().optional(),
});
exports.statStringWithName = zod_1.z.object({
    string: zod_1.z.string(),
    array: zod_1.z.array(exports.descriptionPartObject).optional(),
    nameString: zod_1.z.string(),
    nameArray: zod_1.z.array(exports.descriptionPartObject).optional(),
    id: zod_1.z.number().optional(),
});
exports.parsedActionObject = zod_1.z.object({
    name: zod_1.z.string(),
    tag: zod_1.z.string(),
    priority: zod_1.z.number(),
    description: zod_1.z.string(),
});
exports.statisticsObject = zod_1.z.object({
    alignment: exports.statStringNumber,
    pronouns: other_1.pronounsObject,
    prename: zod_1.z.string(),
    name: zod_1.z.string(),
    surname: zod_1.z.string(),
    fullName: zod_1.z.string(),
    characterHook: zod_1.z.array(exports.descriptionPartObject).optional(),
    level: zod_1.z.number(),
    CR: exports.statStringNumber,
    XP: zod_1.z.string(),
    AC: exports.statStringNumber,
    proficiency: zod_1.z.number(),
    size: exports.statStringNumber,
    isSwarm: zod_1.z.boolean().optional(),
    sizeSingleEntityOfSwarm: exports.statStringNumber.optional(),
    abilityScores: exports.abilitiesObject,
    abilityModifiers: exports.abilitiesObject,
    HP: exports.statStringNumber,
    type: exports.statStringNumber,
    subtypes: exports.statString.optional(),
    meta: zod_1.z.string(),
    speeds: exports.statString.optional(),
    savingThrows: exports.statString.optional(),
    skills: exports.statString.optional(),
    resistances: exports.statString.optional(),
    immunities: exports.statString.optional(),
    vulnerabilities: exports.statString.optional(),
    conditionImmunities: exports.statString.optional(),
    senses: exports.statString.optional(),
    languages: exports.statString.optional(),
    isBlind: zod_1.z.boolean().optional(),
    canSpeak: zod_1.z.boolean().optional(),
    telepathy: zod_1.z.number().optional(),
    traits: zod_1.z.array(exports.statStringWithName).optional(),
    actions: zod_1.z.array(exports.statStringWithName).optional(),
    bonusActions: zod_1.z.array(exports.statStringWithName).optional(),
    reactions: zod_1.z.array(exports.statStringWithName).optional(),
    legendaryActions: zod_1.z.array(exports.statStringWithName).optional(),
});
