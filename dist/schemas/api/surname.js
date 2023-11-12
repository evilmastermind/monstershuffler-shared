"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomSurnameResponse = exports.getRandomSurname = void 0;
const zod_1 = require("zod");
exports.getRandomSurname = zod_1.z.object({
    race: zod_1.z.string().optional(),
    gender: zod_1.z.string().optional(),
});
exports.getRandomSurnameResponse = zod_1.z.object({
    surname: zod_1.z.string(),
});
