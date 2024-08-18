"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sPutClassBody = exports.sPostClassBody = exports.sGetClassResponse = exports.sGetClassWithVariantsListResponse = exports.sGetClassListResponse = void 0;
const zod_1 = require("zod");
const objects_1 = require("@/schemas/objects/character/objects");
const object_1 = require("./object");
exports.sGetClassListResponse = zod_1.z.object({
    list: object_1.objectList,
});
exports.sGetClassWithVariantsListResponse = zod_1.z.object({
    list: object_1.objectWithVariantsList,
});
exports.sGetClassResponse = zod_1.z.object({
    object: objects_1.classObject,
    id: object_1.id,
});
exports.sPostClassBody = zod_1.z.object({
    game: object_1.game,
    object: objects_1.classObject,
});
exports.sPutClassBody = zod_1.z.object({
    object: objects_1.classObject,
    game: object_1.game.optional(),
});
