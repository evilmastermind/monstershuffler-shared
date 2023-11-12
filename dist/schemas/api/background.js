"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postBackground = exports.getBackgroundResponse = exports.getBackgroundListResponse = void 0;
const zod_1 = require("zod");
const schemas_1 = require("../../schemas");
const object_1 = require("./object");
const age = zod_1.z.enum([
    'medieval',
    'fantasy',
    'renaissance',
    'modern',
    'future',
    'space',
    'other',
]);
const description = zod_1.z.string();
const object = schemas_1.backgroundObject;
exports.getBackgroundListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id: object_1.id,
        userid: object_1.userid,
        name: object_1.name,
    })),
});
exports.getBackgroundResponse = zod_1.z.object({
    object,
    id: object_1.id,
    name: zod_1.z.string(),
    femaleName: zod_1.z.string(),
    age: zod_1.z.string(),
    description: zod_1.z.string(),
});
exports.postBackground = zod_1.z.object({
    object,
    age,
    description,
    game: object_1.game,
});
