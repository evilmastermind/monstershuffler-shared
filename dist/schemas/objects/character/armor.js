"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.armorObject = exports.armorTypes = void 0;
const zod_1 = require("zod");
exports.armorTypes = zod_1.z.enum(['light', 'medium', 'heavy']);
exports.armorObject = zod_1.z.object({
    id: zod_1.z.number().optional(),
    AC: zod_1.z.string(),
    name: zod_1.z.string(),
    isAutomaticCalcDisabled: zod_1.z.boolean().optional(),
    cost: zod_1.z.string().optional(),
    type: exports.armorTypes.optional(),
    maxDex: zod_1.z.string().optional(),
    minStr: zod_1.z.string().optional(),
    weight: zod_1.z.string().optional(),
    stealthDis: zod_1.z.boolean().optional(),
});
