"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variablesObject = void 0;
const zod_1 = require("zod");
exports.variablesObject = zod_1.z.object({
    LVL: zod_1.z.number(),
    CR: zod_1.z.number(),
    PROF: zod_1.z.number(),
    SIZE: zod_1.z.number(),
    HD: zod_1.z.number(),
    HP: zod_1.z.number(),
    AC: zod_1.z.number(),
    STR: zod_1.z.number(),
    DEX: zod_1.z.number(),
    CON: zod_1.z.number(),
    INT: zod_1.z.number(),
    WIS: zod_1.z.number(),
    CHA: zod_1.z.number(),
    STRVALUE: zod_1.z.number(),
    DEXVALUE: zod_1.z.number(),
    CONVALUE: zod_1.z.number(),
    INTVALUE: zod_1.z.number(),
    WISVALUE: zod_1.z.number(),
    CHAVALUE: zod_1.z.number(),
    WALK: zod_1.z.number(),
    BURROW: zod_1.z.number(),
    CLIMB: zod_1.z.number(),
    FLY: zod_1.z.number(),
    HOVER: zod_1.z.number(),
    SWIM: zod_1.z.number(),
});
