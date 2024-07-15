"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGeneratorDataResponse = exports.postFourRandomNpcsResponse = exports.postRandomNpcResponse = exports.npcDetailsObject = exports.postRandomNpcInput = void 0;
const zod_1 = require("zod");
const objects_1 = require("../../schemas/objects/character/objects");
const other_1 = require("../../schemas/objects/character/other");
const object_1 = require("./object");
exports.postRandomNpcInput = zod_1.z.object({
    levelType: zod_1.z.enum(['random', 'randomPeasantsMostly']).optional(),
    classType: zod_1.z
        .enum(['none', 'randomSometimes', 'randomAlways', 'specific'])
        .optional(),
    backgroundType: zod_1.z.enum(['none', 'random', 'specific']).optional(),
    classId: object_1.id.optional(),
    classvariantId: object_1.id.optional(),
    backgroundId: object_1.id.optional(),
    primaryRaceId: object_1.id.optional(),
    secondaryRaceId: object_1.id.optional(),
    primaryRacevariantId: object_1.id.optional(),
    secondaryRacevariantId: object_1.id.optional(),
    primaryRacePercentage: zod_1.z.number().min(0).max(100).optional(),
    secondaryRacePercentage: zod_1.z.number().min(0).max(100).optional(),
    addVoice: zod_1.z.boolean().optional(),
    includeChildren: zod_1.z.boolean().optional(),
    includeBodyType: zod_1.z.boolean().optional(),
    pronounsChosen: other_1.pronounsObject.optional(),
});
exports.npcDetailsObject = zod_1.z.object({
    id: zod_1.z.string(),
    token: zod_1.z.string(),
    object: objects_1.characterObject,
});
exports.postRandomNpcResponse = exports.npcDetailsObject;
exports.postFourRandomNpcsResponse = zod_1.z.object({
    npcs: zod_1.z.array(exports.npcDetailsObject),
});
exports.getGeneratorDataResponse = zod_1.z.object({
    races: object_1.objectWithVariantsList,
    classes: object_1.objectWithVariantsList,
    backgrounds: object_1.objectList,
});
