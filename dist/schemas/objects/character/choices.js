"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.choiceListObject = exports.choiceRandomObject = exports.statObject = exports.statType = void 0;
const zod_1 = require("zod");
exports.statType = zod_1.z.enum([
    'alignment',
    'armor',
    'background',
    'class',
    'condition',
    'conditionImmunity',
    'damageType',
    'immunity',
    'item',
    'language',
    'pronouns',
    'race',
    'resistance',
    'savingThrow',
    'sense',
    'size',
    'skill',
    'speed',
    'spell',
    'subtype',
    'template',
    'trait',
    'type',
    'vulnerability',
    'weapon',
]);
// object schemas
exports.statObject = zod_1.z.object({
    id: zod_1.z.number().optional(),
    value: zod_1.z.string(),
    type: exports.statType.optional(),
    availableAt: zod_1.z.number().optional(),
    availableUnit: zod_1.z.enum(['level', 'cr']).optional(),
    properties: zod_1.z.record(zod_1.z.union([zod_1.z.string(), zod_1.z.number()])).optional(),
});
exports.choiceRandomObject = zod_1.z.object({
    choice: zod_1.z.object({
        type: zod_1.z.literal('random'),
        resultType: zod_1.z.enum(['object', 'nameId']),
        source: zod_1.z.enum(['objects', 'languages', 'skills']),
        number: zod_1.z.number().optional(),
        objectType: zod_1.z.number().optional(),
        filters: zod_1.z
            .array(zod_1.z.object({
            keyName: zod_1.z.string(),
            keyValues: zod_1.z.array(zod_1.z.string()),
        }))
            .optional(),
        chosenAlready: zod_1.z.array(exports.statObject).optional(),
    }),
});
exports.choiceListObject = zod_1.z.object({
    choice: zod_1.z.object({
        type: zod_1.z.literal('list'),
        number: zod_1.z.number(),
        list: zod_1.z.array(exports.statObject),
        isRepeatable: zod_1.z.boolean().optional(),
    }),
});
