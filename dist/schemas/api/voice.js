"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sGetRandomVoiceResponse = exports.sGetRandomVoiceBody = void 0;
const zod_1 = require("zod");
exports.sGetRandomVoiceBody = zod_1.z.object({
    gender: zod_1.z.string().optional(),
});
exports.sGetRandomVoiceResponse = zod_1.z.object({
    id: zod_1.z.number(),
    gender: zod_1.z.string(),
    person: zod_1.z.string(),
    character: zod_1.z.string().optional(),
    production: zod_1.z.string().optional(),
    filename: zod_1.z.string(),
});
