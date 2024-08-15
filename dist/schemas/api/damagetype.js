"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sGetDamageTypeListResponse = exports.sGetDamageTypeResponse = exports.sPutDamageTypeBody = exports.sPostDamageTypeBody = void 0;
const zod_1 = require("zod");
const object_1 = require("./object");
const description = zod_1.z.string().min(2);
exports.sPostDamageTypeBody = zod_1.z.object({
    name: object_1.name,
    description,
});
exports.sPutDamageTypeBody = zod_1.z.object({
    name: object_1.name.optional(),
    description: description.optional(),
});
exports.sGetDamageTypeResponse = zod_1.z.object({
    id: object_1.id,
    userid: object_1.userid,
    name: object_1.name,
    description,
});
exports.sGetDamageTypeListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id: object_1.id,
        userid: object_1.userid,
        name: object_1.name,
        description,
    })),
});
