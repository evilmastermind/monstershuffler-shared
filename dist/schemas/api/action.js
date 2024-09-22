"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sPutActionBody = exports.sPostActionBody = exports.sGetActionResponse = exports.sGetActionListResponse = exports.sGetActionListBody = void 0;
const zod_1 = require("zod");
const actions_1 = require("@/schemas/objects/character/actions");
const object_1 = require("./object");
const type = zod_1.z.string().min(2);
const subtype = zod_1.z.string().min(2).optional();
const source = zod_1.z.string().min(2);
const actionstags = zod_1.z.array(zod_1.z.string()).optional();
const actionsdetails = zod_1.z.object({
    name: object_1.name,
    type,
    subtype,
    source,
});
exports.sGetActionListBody = zod_1.z.object({
    game: object_1.game.optional(),
    name: object_1.name.optional(),
    type: type.optional(),
    subtype: subtype.optional(),
    source: source.optional(),
    tag: zod_1.z.string().optional(),
});
exports.sGetActionListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id: object_1.id,
        userid: object_1.userid,
        actionsdetails,
        actionstags,
    })),
});
exports.sGetActionResponse = zod_1.z.object({
    id: object_1.id,
    userid: object_1.userid,
    object: actions_1.actionObject,
    actionsdetails,
});
exports.sPostActionBody = zod_1.z.object({
    game: object_1.game,
    name: object_1.name,
    type,
    subtype,
    source,
    tags: actionstags,
    object: actions_1.actionObject,
});
exports.sPutActionBody = zod_1.z.object({
    name: object_1.name,
    type,
    subtype,
    source,
    tags: actionstags,
    object: actions_1.actionObject,
});
