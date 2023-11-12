"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticsObject = exports.abilitiesObject = void 0;
const zod_1 = require("zod");
const other_1 = require("./other");
const statNumberString = zod_1.z.object({
    number: zod_1.z.number(),
    string: zod_1.z.string(),
    array: zod_1.z.array(zod_1.z.string()).optional(),
    id: zod_1.z.number().optional(),
});
exports.abilitiesObject = zod_1.z.object({
    STR: zod_1.z.number(),
    DEX: zod_1.z.number(),
    CON: zod_1.z.number(),
    INT: zod_1.z.number(),
    WIS: zod_1.z.number(),
    CHA: zod_1.z.number(),
});
const descriptionPartObject = zod_1.z.object({
    string: zod_1.z.string(),
    type: zod_1.z.enum(['background', 'spell', 'trait', 'race', 'class', 'template', 'type', 'subtype', 'language', 'skill', 'savingThrow', 'condition', 'resistance', 'immunity', 'vulnerability', 'conditionImmunity']).optional(),
    id: zod_1.z.number().optional(),
});
exports.statisticsObject = zod_1.z.object({
    alignment: statNumberString,
    pronouns: other_1.pronounsObject,
    prename: zod_1.z.string(),
    name: zod_1.z.string(),
    surname: zod_1.z.string(),
    fullName: zod_1.z.string(),
    characterHook: zod_1.z.array(descriptionPartObject).optional(),
    level: zod_1.z.number(),
    CR: statNumberString,
    XP: zod_1.z.string(),
    proficiency: zod_1.z.number(),
    size: statNumberString,
    sizeSingleEntityOfSwarm: statNumberString.optional(),
    abilityScores: exports.abilitiesObject,
    abilityModifiers: exports.abilitiesObject,
    HP: statNumberString,
    type: statNumberString,
    subtypes: zod_1.z.array(statNumberString).optional(),
    meta: zod_1.z.string(),
});
