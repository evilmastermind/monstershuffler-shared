"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArmorListResponse = exports.getArmorResponse = exports.getArmorParams = exports.putArmor = exports.postArmor = void 0;
const zod_1 = require("zod");
const armor_1 = require("../../schemas/objects/character/armor");
const object_1 = require("./object");
exports.postArmor = zod_1.z.object({
    game: object_1.game,
    name: object_1.name,
    object: armor_1.armorObject,
});
exports.putArmor = zod_1.z.object({
    name: object_1.name,
    object: armor_1.armorObject,
});
exports.getArmorParams = zod_1.z.object({
    id: object_1.id,
});
exports.getArmorResponse = zod_1.z.object({
    object: armor_1.armorObject,
});
exports.getArmorListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id: object_1.id,
        userid: object_1.userid,
        name: object_1.name,
    })),
});
