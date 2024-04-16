"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weaponObject = void 0;
const zod_1 = require("zod");
exports.weaponObject = zod_1.z.object({
    name: zod_1.z.string().optional(),
    cost: zod_1.z.string().optional(),
    weight: zod_1.z.string().optional(),
    damageType: zod_1.z.string().optional(),
    special: zod_1.z.string().optional(),
    dice: zod_1.z.string().optional(),
    sides: zod_1.z.string().optional(),
    diceV: zod_1.z.string().optional(),
    sidesV: zod_1.z.string().optional(),
    range: zod_1.z.string().optional(),
    rangeMax: zod_1.z.string().optional(),
    reach: zod_1.z.string().optional(),
    targets: zod_1.z.string().optional(),
    properties: zod_1.z.array(zod_1.z.string()).optional(),
});
