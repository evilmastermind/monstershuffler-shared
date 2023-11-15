"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putRace = exports.postRace = exports.getRaceResponse = exports.getRaceWithVariantsListResponse = exports.getRaceListResponse = void 0;
const zod_1 = require("zod");
const objects_1 = require("../../schemas/objects/character/objects");
const object_1 = require("./object");
exports.getRaceListResponse = zod_1.z.object({
    list: object_1.objectList,
});
exports.getRaceWithVariantsListResponse = zod_1.z.object({
    list: object_1.objectWithVariantsList,
});
exports.getRaceResponse = zod_1.z.object({
    object: objects_1.raceObject,
    id: object_1.id,
});
exports.postRace = zod_1.z.object({
    game: object_1.game,
    object: objects_1.raceObject,
});
exports.putRace = zod_1.z.object({
    object: objects_1.raceObject,
    game: object_1.game,
});
