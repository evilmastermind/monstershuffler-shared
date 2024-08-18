"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sPutCharacterBody = exports.sPostCharacterBody = exports.sGetCharacterResponse = exports.sGetCharacterListResponse = void 0;
const zod_1 = require("zod");
const objects_1 = require("../../schemas/objects/character/objects");
const object_1 = require("./object");
exports.sGetCharacterListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id: object_1.id,
        userid: object_1.userid,
        name: object_1.name,
    })),
});
exports.sGetCharacterResponse = zod_1.z.object({
    id: object_1.id,
    object: objects_1.characterObject,
});
exports.sPostCharacterBody = zod_1.z.object({
    game: object_1.game,
    object: objects_1.characterObject,
});
exports.sPutCharacterBody = zod_1.z.object({
    game: object_1.game.optional(),
    object: objects_1.characterObject,
});
