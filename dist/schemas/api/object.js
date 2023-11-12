"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectWithVariantsList = exports.objectList = exports.name = exports.game = exports.userid = exports.id = void 0;
const zod_1 = require("zod");
exports.id = zod_1.z.number();
exports.userid = zod_1.z.number();
exports.game = zod_1.z.number();
exports.name = zod_1.z.string().min(2);
exports.objectList = zod_1.z.array(zod_1.z.object({
    id: zod_1.z.number(),
    userid: exports.userid,
    name: exports.name,
}));
exports.objectWithVariantsList = zod_1.z.array(zod_1.z.object({
    id: zod_1.z.number(),
    userid: exports.userid,
    name: exports.name,
    other_objects: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.number(),
        name: exports.name,
        userid: exports.userid,
    })),
}));
