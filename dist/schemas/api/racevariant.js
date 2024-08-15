"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sPutRacevariant = exports.sPostRacevariant = exports.sGetRacevariantResponse = exports.sGetRacevariantListResponse = void 0;
const zod_1 = require("zod");
const objects_1 = require("../../schemas/objects/character/objects");
const object_1 = require("./object");
exports.sGetRacevariantListResponse = zod_1.z.object({
    list: object_1.objectList,
});
exports.sGetRacevariantResponse = zod_1.z.object({
    id: object_1.id,
    object: objects_1.racevariantObject,
});
exports.sPostRacevariant = zod_1.z.object({
    game: object_1.game,
    raceId: object_1.id,
    object: objects_1.racevariantObject,
});
exports.sPutRacevariant = zod_1.z.object({
    object: objects_1.racevariantObject,
    game: object_1.game.optional(),
});
