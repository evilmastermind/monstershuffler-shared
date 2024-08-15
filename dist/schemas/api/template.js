"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sPutTemplate = exports.sPostTemplate = exports.sGetTemplateResponse = exports.sGetTemplateListResponse = void 0;
const zod_1 = require("zod");
const objects_1 = require("../../schemas/objects/character/objects");
const object_1 = require("./object");
exports.sGetTemplateListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id: object_1.id,
        userid: object_1.userid,
        name: object_1.name,
    })),
});
exports.sGetTemplateResponse = zod_1.z.object({
    id: object_1.id,
    object: objects_1.templateObject,
});
exports.sPostTemplate = zod_1.z.object({
    object: objects_1.templateObject,
    game: object_1.game,
});
exports.sPutTemplate = zod_1.z.object({
    object: objects_1.templateObject,
    game: object_1.game.optional(),
});
