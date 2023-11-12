"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putTemplate = exports.postTemplate = exports.getTemplateResponse = exports.getTemplateListResponse = void 0;
const zod_1 = require("zod");
const schemas_1 = require("../../schemas");
const object_1 = require("./object");
exports.getTemplateListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id: object_1.id,
        userid: object_1.userid,
        name: object_1.name,
    })),
});
exports.getTemplateResponse = zod_1.z.object({
    id: object_1.id,
    object: schemas_1.templateObject,
});
exports.postTemplate = zod_1.z.object({
    object: schemas_1.templateObject,
    game: object_1.game,
});
exports.putTemplate = zod_1.z.object({
    object: schemas_1.templateObject,
    game: object_1.game,
});
