"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sGetRandomSurnameResponse = exports.sGetRandomSurnameBody = void 0;
const zod_1 = require("zod");
exports.sGetRandomSurnameBody = zod_1.z.object({
    race: zod_1.z.string().optional(),
    gender: zod_1.z.string().optional(),
});
exports.sGetRandomSurnameResponse = zod_1.z.object({
    surname: zod_1.z.string(),
});
