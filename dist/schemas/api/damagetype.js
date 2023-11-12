"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDamageTypeListResponse = exports.putDamageType = exports.getDamageTypeResponse = exports.postDamageType = void 0;
const zod_1 = require("zod");
const object_1 = require("./object");
const description = zod_1.z.string().min(2);
exports.postDamageType = zod_1.z.object({
    name: object_1.name,
    description,
});
exports.getDamageTypeResponse = zod_1.z.object({
    id: object_1.id,
    userid: object_1.userid,
    name: object_1.name,
    description,
});
exports.putDamageType = zod_1.z.object({
    name: object_1.name,
    description,
});
exports.getDamageTypeListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id: object_1.id,
        userid: object_1.userid,
        name: object_1.name,
        description,
    })),
});
