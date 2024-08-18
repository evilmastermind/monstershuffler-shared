"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sPutRaceBody = exports.sPostRaceBody = exports.sGetRaceResponse = exports.sGetRaceWithVariantsListResponse = exports.sGetRaceListResponse = void 0;
const zod_1 = require("zod");
const objects_1 = require("@/schemas/objects/character/objects");
const object_1 = require("./object");
exports.sGetRaceListResponse = zod_1.z.object({
    list: object_1.objectList,
});
exports.sGetRaceWithVariantsListResponse = zod_1.z.object({
    list: object_1.objectWithVariantsList,
});
exports.sGetRaceResponse = zod_1.z.object({
    object: objects_1.raceObject,
    id: object_1.id,
});
exports.sPostRaceBody = zod_1.z.object({
    game: object_1.game,
    object: objects_1.raceObject,
});
exports.sPutRaceBody = zod_1.z.object({
    object: objects_1.raceObject,
    game: object_1.game.optional(),
});
