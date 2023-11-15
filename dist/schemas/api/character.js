"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putCharacter = exports.postCharacter = exports.getCharacterResponse = exports.getCharacterListResponse = void 0;
const zod_1 = require("zod");
const objects_1 = require("../../schemas/objects/character/objects");
const object_1 = require("./object");
exports.getCharacterListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id: object_1.id,
        userid: object_1.userid,
        name: object_1.name,
    })),
});
exports.getCharacterResponse = zod_1.z.object({
    id: object_1.id,
    object: objects_1.characterObject,
});
exports.postCharacter = zod_1.z.object({
    game: object_1.game,
    name: object_1.name,
    object: objects_1.characterObject,
});
exports.putCharacter = zod_1.z.object({
    name: object_1.name,
    game: object_1.game,
    object: objects_1.characterObject,
});
