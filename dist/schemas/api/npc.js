"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sPostNpcRatingBody = exports.sPostNpcBody = exports.sGenerateBackstoryBody = exports.sAddBackstoryToNpcBody = exports.sPostNpcToSentAlreadyListBody = exports.sPostNpcRatingResponse = exports.sGetGeneratorDataResponse = exports.sPostFourRandomNpcsResponse = exports.sPostRandomNpcResponse = exports.npcDetailsObject = exports.sPostRandomNpcBody = void 0;
const zod_1 = require("zod");
const objects_1 = require("@/schemas/objects/character/objects");
const other_1 = require("@/schemas/objects/character/other");
const alignment_1 = require("@/schemas/objects/character/alignment");
const object_1 = require("./object");
exports.sPostRandomNpcBody = zod_1.z.object({
    sessionId: zod_1.z.string().optional(),
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
    alignmentEthicalChosen: alignment_1.alignmentEthical.optional(),
    alignmentMoralChosen: alignment_1.alignmentMoral.optional(),
    CRChosen: zod_1.z.number().optional(),
});
exports.npcDetailsObject = zod_1.z.object({
    id: zod_1.z.number(),
    object: objects_1.characterObject,
});
exports.sPostRandomNpcResponse = exports.npcDetailsObject;
exports.sPostFourRandomNpcsResponse = zod_1.z.object({
    npcs: zod_1.z.array(exports.npcDetailsObject),
});
exports.sGetGeneratorDataResponse = zod_1.z.object({
    races: object_1.objectWithVariantsList,
    classes: object_1.objectWithVariantsList,
    backgrounds: object_1.objectList,
});
exports.sPostNpcRatingResponse = zod_1.z.object({
    id: zod_1.z.number(),
    rating: zod_1.z.number()
});
exports.sPostNpcToSentAlreadyListBody = zod_1.z.object({
    npcid: zod_1.z.number(),
    userid: zod_1.z.number().optional(),
    sessionid: zod_1.z.string().optional(),
});
exports.sAddBackstoryToNpcBody = zod_1.z.object({
    id: zod_1.z.number(),
    backstory: zod_1.z.string(),
    object: objects_1.characterObject,
});
exports.sGenerateBackstoryBody = zod_1.z.object({
    id: zod_1.z.number(),
});
exports.sPostNpcBody = zod_1.z.object({
    object: objects_1.characterObject,
    userid: zod_1.z.number().optional(),
    sessionid: zod_1.z.string().optional(),
});
exports.sPostNpcRatingBody = zod_1.z.object({
    id: zod_1.z.number(),
    rating: zod_1.z.number(),
    sessionid: zod_1.z.string().optional(),
});
