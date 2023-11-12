"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putClass = exports.postClass = exports.getClassResponse = exports.getClassWithVariantsListResponse = exports.getClassListResponse = void 0;
const zod_1 = require("zod");
const schemas_1 = require("../../schemas");
const object_1 = require("./object");
exports.getClassListResponse = zod_1.z.object({
    list: object_1.objectList,
});
exports.getClassWithVariantsListResponse = zod_1.z.object({
    list: object_1.objectWithVariantsList,
});
exports.getClassResponse = zod_1.z.object({
    object: schemas_1.classObject,
    id: object_1.id,
});
exports.postClass = zod_1.z.object({
    game: object_1.game,
    object: schemas_1.classObject,
});
exports.putClass = zod_1.z.object({
    object: schemas_1.classObject,
    game: object_1.game,
});
