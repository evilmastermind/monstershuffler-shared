"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomCharacterhookResponse = void 0;
const zod_1 = require("zod");
exports.getRandomCharacterhookResponse = zod_1.z.object({
    id: zod_1.z.number(),
    characterhook: zod_1.z.string(),
});
