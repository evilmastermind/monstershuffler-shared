"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticsObject = exports.Pronouns = exports.Abilities = void 0;
const zod_1 = require("zod");
const statNumberString = zod_1.z.object({
    number: zod_1.z.number(),
    string: zod_1.z.string(),
    id: zod_1.z.number().optional(),
});
exports.Abilities = zod_1.z.object({
    STR: zod_1.z.number(),
    DEX: zod_1.z.number(),
    CON: zod_1.z.number(),
    INT: zod_1.z.number(),
    WIS: zod_1.z.number(),
    CHA: zod_1.z.number(),
});
const DescriptionPart = zod_1.z.object({
    string: zod_1.z.string(),
    type: zod_1.z.enum(['background', 'spell', 'trait', 'race', 'class', 'template', 'type', 'subtype', 'language', 'skill', 'savingThrow', 'condition', 'resistance', 'immunity', 'vulnerability', 'conditionImmunity']).optional(),
    id: zod_1.z.number().optional(),
});
exports.Pronouns = zod_1.z.enum(['male', 'female', 'neutral', 'thing']);
exports.statisticsObject = zod_1.z.object({
    alignment: zod_1.z.array(zod_1.z.string()),
    pronouns: exports.Pronouns,
    prename: zod_1.z.string(),
    name: zod_1.z.string(),
    surname: zod_1.z.string(),
    fullName: zod_1.z.string(),
    characterHook: zod_1.z.array(DescriptionPart).optional(),
    level: zod_1.z.number(),
    CR: statNumberString,
    XP: zod_1.z.string(),
    proficiency: zod_1.z.number(),
    size: statNumberString,
    sizeSingleEntityOfSwarm: statNumberString.optional(),
    abilityScores: exports.Abilities,
    abilityModifiers: exports.Abilities,
    HP: statNumberString,
    type: statNumberString.optional(),
    subtypes: zod_1.z.array(statNumberString).optional(),
});
