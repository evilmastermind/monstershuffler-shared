"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sGetArmorListResponse = exports.sGetArmorResponse = exports.sGetArmorParams = exports.sPutArmorBody = exports.sPostArmorBody = void 0;
const zod_1 = require("zod");
const armor_1 = require("../../schemas/objects/character/armor");
const object_1 = require("./object");
exports.sPostArmorBody = zod_1.z.object({
    game: object_1.game,
    name: object_1.name,
    object: armor_1.armorObject,
});
exports.sPutArmorBody = zod_1.z.object({
    name: object_1.name,
    object: armor_1.armorObject,
});
exports.sGetArmorParams = zod_1.z.object({
    id: object_1.id,
});
exports.sGetArmorResponse = zod_1.z.object({
    object: armor_1.armorObject,
});
exports.sGetArmorListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id: object_1.id,
        userid: object_1.userid,
        name: object_1.name,
    })),
});
