"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sGetRandomQuirkResponse = void 0;
const zod_1 = require("zod");
exports.sGetRandomQuirkResponse = zod_1.z.object({
    id: zod_1.z.number(),
    quirk: zod_1.z.string(),
});
