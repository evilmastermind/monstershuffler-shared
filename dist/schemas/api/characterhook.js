"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sPostRandomCharacterhookBody = exports.sPostRandomCharacterhookResponse = exports.characterHookType = void 0;
const zod_1 = require("zod");
exports.characterHookType = zod_1.z.enum(['youth', 'career', 'plot']);
exports.sPostRandomCharacterhookResponse = zod_1.z.object({
    id: zod_1.z.number(),
    type: exports.characterHookType,
    alignment: zod_1.z.number(),
    locationorclass: zod_1.z.string().nullable(),
    sentence: zod_1.z.string(),
    summary: zod_1.z.string(),
});
exports.sPostRandomCharacterhookBody = zod_1.z.object({
    alignment: zod_1.z.number().optional(),
    type: exports.characterHookType.optional(),
    locationorclass: zod_1.z.string().optional(),
});
