"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putClassvariant = exports.postClassvariant = exports.getClassvariantResponse = exports.getClassvariantClassListResponse = exports.getClassvariantListResponse = void 0;
const zod_1 = require("zod");
const schemas_1 = require("../../schemas");
const object_1 = require("./object");
exports.getClassvariantListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id: object_1.id,
        userid: object_1.userid,
        name: object_1.name,
        objects: zod_1.z.object({
            id: object_1.id,
            name: object_1.name,
        }),
    })),
});
exports.getClassvariantClassListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id: object_1.id,
        userid: object_1.userid,
        name: object_1.name,
    })),
});
exports.getClassvariantResponse = zod_1.z.object({
    object: schemas_1.classvariantObject,
    id: object_1.id,
});
exports.postClassvariant = zod_1.z.object({
    game: object_1.game,
    classId: object_1.id,
    object: schemas_1.classvariantObject,
});
exports.putClassvariant = zod_1.z.object({
    object: schemas_1.classvariantObject,
});
