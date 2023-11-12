"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abilityScoresObject = exports.abilitiesEnum = void 0;
const zod_1 = require("zod");
exports.abilitiesEnum = zod_1.z.enum(['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']);
const abilityScore = zod_1.z.object({
    value: zod_1.z.number(),
    isAutomaticCalcDisabled: zod_1.z.boolean().optional(),
});
exports.abilityScoresObject = zod_1.z.object({
    STR: abilityScore.optional(),
    DEX: abilityScore.optional(),
    CON: abilityScore.optional(),
    INT: abilityScore.optional(),
    WIS: abilityScore.optional(),
    CHA: abilityScore.optional(),
});
