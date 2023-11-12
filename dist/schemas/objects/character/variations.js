"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variationsObject = void 0;
const zod_1 = require("zod");
exports.variationsObject = zod_1.z.object({
    currentCR: zod_1.z.number().optional(),
    currentHD: zod_1.z.number().optional(),
});
