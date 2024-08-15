"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sGetRandomCharacterhookResponse = void 0;
const zod_1 = require("zod");
exports.sGetRandomCharacterhookResponse = zod_1.z.object({
    id: zod_1.z.number(),
    characterhook: zod_1.z.string(),
});
