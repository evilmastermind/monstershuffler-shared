"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spellObject = exports.spellsObject = exports.spellGroupObject = void 0;
const zod_1 = require("zod");
const choices_1 = require("./choices");
const abilities_1 = require("./abilities");
exports.spellGroupObject = zod_1.z
    .object({
    tag: zod_1.z.string(),
    availableAt: zod_1.z.number().optional(),
    timesDay: zod_1.z.string().optional(),
    timesDayMax: zod_1.z.string().optional(),
    spells: zod_1.z.union([
        zod_1.z.array(choices_1.statObject),
        choices_1.choiceRandomObject,
        choices_1.choiceListObject,
    ]),
})
    .strict();
exports.spellsObject = zod_1.z.object({
    hasSlots: zod_1.z.boolean().optional(),
    ability: abilities_1.abilitiesEnum.optional(),
    availableUnit: zod_1.z.enum(['level', 'cr']).optional(),
    groups: zod_1.z.array(exports.spellGroupObject).optional(),
});
exports.spellObject = zod_1.z
    .object({
    name: zod_1.z.string().min(2),
    level: zod_1.z.number(),
    range: zod_1.z.string(),
    ritual: zod_1.z.boolean(),
    school: zod_1.z.string().min(2),
    source: zod_1.z.string(),
    classes: zod_1.z.array(zod_1.z.string()),
    duration: zod_1.z.string(),
    components: zod_1.z.string(),
    castingTime: zod_1.z.string(),
    description: zod_1.z.string(),
})
    .strict();
