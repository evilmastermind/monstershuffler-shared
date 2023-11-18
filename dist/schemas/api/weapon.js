"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeaponListResponse = exports.getWeaponResponse = exports.getWeaponParams = exports.putWeapon = exports.postWeapon = void 0;
const zod_1 = require("zod");
const weapons_1 = require("@/schemas/objects/character/weapons");
const object_1 = require("./object");
exports.postWeapon = zod_1.z.object({
    game: object_1.game,
    object: weapons_1.weaponObject,
});
exports.putWeapon = zod_1.z.object({
    object: weapons_1.weaponObject,
});
exports.getWeaponParams = zod_1.z.object({
    id: object_1.id,
});
exports.getWeaponResponse = zod_1.z.object({
    object: weapons_1.weaponObject,
});
exports.getWeaponListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id: object_1.id,
        userid: object_1.userid,
        name: object_1.name,
    })),
});
