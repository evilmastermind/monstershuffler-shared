"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNameResponse = exports.getRandomName = void 0;
const zod_1 = require("zod");
exports.getRandomName = zod_1.z.object({
    race: zod_1.z.string().optional(),
    gender: zod_1.z.string().optional(),
});
exports.getRandomNameResponse = zod_1.z.object({
    name: zod_1.z.string(),
});
