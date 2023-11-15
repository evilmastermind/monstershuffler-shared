"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putAction = exports.postAction = exports.getActionResponse = exports.getActionListResponse = exports.getActionList = void 0;
const zod_1 = require("zod");
const actions_1 = require("../../schemas/objects/character/actions");
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
exports.getActionList = zod_1.z.object({
    game: object_1.game.optional(),
    name: object_1.name.optional(),
    type: type.optional(),
    subtype: subtype.optional(),
    source: source.optional(),
    tag: zod_1.z.string().optional(),
});
exports.getActionListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id: object_1.id,
        userid: object_1.userid,
        actionsdetails,
        actionstags,
    })),
});
exports.getActionResponse = zod_1.z.object({
    id: object_1.id,
    userid: object_1.userid,
    object: actions_1.actionObject,
    actionsdetails,
});
exports.postAction = zod_1.z.object({
    game: object_1.game,
    name: object_1.name,
    type,
    subtype,
    source,
    tags: actionstags,
    object: actions_1.actionObject,
});
exports.putAction = zod_1.z.object({
    name: object_1.name,
    type,
    subtype,
    source,
    tags: actionstags,
    object: actions_1.actionObject,
});
