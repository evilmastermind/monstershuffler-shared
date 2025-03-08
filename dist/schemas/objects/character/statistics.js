"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticsObject = exports.abilitiesObject = exports.abilityObject = exports.statStringArrayWithName = exports.statStringArray = exports.statString = exports.statStringNumberArray = exports.statStringNumber = exports.descriptionPartObject = exports.format = exports.additionalStringTypes = exports.roll = exports.parsedExpression = exports.parsedDice = void 0;
const roleplay_1 = require("./roleplay");
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
exports.parsedDice = zod_1.z.object({
    dice: zod_1.z.number(),
    sides: zod_1.z.number(),
    value: zod_1.z.number(),
    string: zod_1.z.string().optional(),
    bonus: zod_1.z.number().optional(),
    type: zod_1.z.string().optional(),
});
exports.parsedExpression = zod_1.z.object({
    value: zod_1.z.number(),
    type: zod_1.z.string().optional(),
});
exports.roll = zod_1.z.object({
    dice: zod_1.z.array(zod_1.z.union([exports.parsedDice, exports.parsedExpression])),
    name: zod_1.z.string().optional(),
    translationKey: zod_1.z.string().optional(), // the translation for the roll name
});
exports.additionalStringTypes = zod_1.z.enum([
    'text', 'translatableText', 'nextLine', 'paragraphEnd', 'listStart', 'listEnd', 'listItemStart', 'listItemEnd', 'numberAsWord', 'ordinal', 'feet', '-feet', 'ft', 'range/rangeMax', 'range', 'reach', 'resource', 'tag', 'value', 'valueAsWord', 'diceRoll', 'd20Roll'
]);
// these are TailwindCSS classes
exports.format = zod_1.z.enum(['italic', 'font-bold', 'underline', 'line-through', 'sups', 'subs']);
///////////////////////////////////////////////////////
exports.descriptionPartObject = zod_1.z.object({
    string: zod_1.z.string(),
    number: zod_1.z.number().optional(),
    type: zod_1.z.union([choices_1.statType, exports.additionalStringTypes]).optional(),
    format: zod_1.z.array(exports.format).optional(),
    roll: exports.roll.optional(),
    id: zod_1.z.number().optional(),
    translationKey: zod_1.z.string().optional(),
    translationVariables: zod_1.z.record(zod_1.z.string()).optional(),
});
exports.statStringNumber = zod_1.z.object({
    name: zod_1.z.string(),
    number: zod_1.z.number(),
    string: zod_1.z.string(),
    id: zod_1.z.number().optional(),
});
exports.statStringNumberArray = zod_1.z.object({
    name: zod_1.z.string(),
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
///////////////////////////////////////////////////////
exports.abilityObject = zod_1.z.object({
    score: exports.statStringNumberArray,
    modifier: exports.statStringNumberArray,
    save: exports.statStringNumberArray,
});
exports.abilitiesObject = zod_1.z.object({
    STR: exports.abilityObject,
    DEX: exports.abilityObject,
    CON: exports.abilityObject,
    INT: exports.abilityObject,
    WIS: exports.abilityObject,
    CHA: exports.abilityObject,
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
    abilities: exports.abilitiesObject,
    HP: exports.statStringNumber,
    type: exports.statStringNumber,
    subtypes: zod_1.z.array(exports.descriptionPartObject).optional(),
    meta: exports.statStringArray,
    speeds: zod_1.z.array(exports.statStringNumberArray).optional(),
    savingThrows: zod_1.z.array(exports.statStringNumberArray).optional(),
    skills: zod_1.z.array(exports.statStringNumberArray).optional(),
    resistances: zod_1.z.array(exports.statStringNumberArray).optional(),
    immunities: zod_1.z.array(exports.statStringNumberArray).optional(),
    vulnerabilities: zod_1.z.array(exports.statStringNumberArray).optional(),
    conditionImmunities: zod_1.z.array(exports.statStringNumberArray).optional(),
    senses: zod_1.z.array(exports.statStringNumberArray), // never optional: passive perception is always calculated
    languages: zod_1.z.array(exports.statStringNumberArray), // never optional: write "—" if no languages are known
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
    spellcasting: zod_1.z.array(exports.descriptionPartObject).optional(),
    spells: zod_1.z.array(exports.statStringArrayWithName).optional(),
    // other
    race: zod_1.z.string().optional(),
    class: zod_1.z.string().optional(),
    age: exports.statStringNumber.optional(),
    personality: roleplay_1.traitObject.optional(),
    feeling: roleplay_1.traitObject.optional(),
    voice: zod_1.z.string().optional(),
    bodyType: zod_1.z.string().optional(),
    height: zod_1.z.string().optional(),
    physicalAppearance: zod_1.z.string().optional(),
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
