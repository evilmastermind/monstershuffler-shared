"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sGetRandomNameResponse = exports.sGetRandomNameBody = void 0;
const zod_1 = require("zod");
exports.sGetRandomNameBody = zod_1.z.object({
    race: zod_1.z.string().optional(),
    gender: zod_1.z.string().optional(),
});
exports.sGetRandomNameResponse = zod_1.z.object({
    name: zod_1.z.string(),
});
