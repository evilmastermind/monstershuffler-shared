"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sPutBackgroundBody = exports.sPostBackgroundBody = exports.sGetBackgroundResponse = exports.sGetBackgroundListResponse = void 0;
const zod_1 = require("zod");
const objects_1 = require("../../schemas/objects/character/objects");
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
const object = objects_1.backgroundObject;
exports.sGetBackgroundListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id: object_1.id,
        userid: object_1.userid,
        name: object_1.name,
    })),
});
exports.sGetBackgroundResponse = zod_1.z.object({
    object,
    id: object_1.id,
    name: zod_1.z.string(),
    femaleName: zod_1.z.string(),
    age: zod_1.z.string(),
    description: zod_1.z.string(),
});
exports.sPostBackgroundBody = zod_1.z.object({
    object,
    age,
    description,
    game: object_1.game,
});
exports.sPutBackgroundBody = zod_1.z.object({
    object,
    age,
    description,
    game: object_1.game.optional(),
});
