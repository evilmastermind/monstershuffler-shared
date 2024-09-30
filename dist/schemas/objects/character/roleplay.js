"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traitObject = exports.voiceObject = void 0;
const zod_1 = require("zod");
exports.voiceObject = zod_1.z.object({
    person: zod_1.z.string(),
    character: zod_1.z.string().optional(),
    production: zod_1.z.string().optional(),
    filename: zod_1.z.string(),
});
exports.traitObject = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
});
