"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sGetWeaponListResponse = exports.sGetWeaponResponse = exports.sGetWeaponParams = exports.sPutWeaponBody = exports.sPostWeaponBody = void 0;
const zod_1 = require("zod");
const weapons_1 = require("@/schemas/objects/character/weapons");
const object_1 = require("./object");
exports.sPostWeaponBody = zod_1.z.object({
    game: object_1.game,
    object: weapons_1.weaponObject,
});
exports.sPutWeaponBody = zod_1.z.object({
    object: weapons_1.weaponObject,
    game: object_1.game.optional(),
});
exports.sGetWeaponParams = zod_1.z.object({
    id: object_1.id,
});
exports.sGetWeaponResponse = zod_1.z.object({
    object: weapons_1.weaponObject,
});
exports.sGetWeaponListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id: object_1.id,
        userid: object_1.userid,
        name: object_1.name,
    })),
});
