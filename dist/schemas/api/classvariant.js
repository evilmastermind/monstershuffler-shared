"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sPutClassvariantBody = exports.sPostClassvariantBody = exports.sGetClassvariantResponse = exports.sGetClassvariantClassListResponse = exports.sGetClassvariantListResponse = void 0;
const zod_1 = require("zod");
const objects_1 = require("@/schemas/objects/character/objects");
const object_1 = require("./object");
exports.sGetClassvariantListResponse = zod_1.z.object({
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
exports.sGetClassvariantClassListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id: object_1.id,
        userid: object_1.userid,
        name: object_1.name,
    })),
});
exports.sGetClassvariantResponse = zod_1.z.object({
    object: objects_1.classvariantObject,
    id: object_1.id,
});
exports.sPostClassvariantBody = zod_1.z.object({
    game: object_1.game,
    classId: object_1.id,
    object: objects_1.classvariantObject,
});
exports.sPutClassvariantBody = zod_1.z.object({
    object: objects_1.classvariantObject,
    game: object_1.game.optional(),
});
