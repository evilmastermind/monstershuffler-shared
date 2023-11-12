"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postFolderResponse = exports.postFolder = exports.getFolderContentResponse = void 0;
const zod_1 = require("zod");
const object_1 = require("./object");
const adds = zod_1.z.number().int().nonnegative().optional();
const url = zod_1.z.string().optional();
const negativeratings = zod_1.z.number().int().optional();
const positiveratings = zod_1.z.number().int().optional();
const folders = zod_1.z.array(zod_1.z.object({
    id: object_1.id,
    name: object_1.name,
}));
const characters = zod_1.z.array(zod_1.z.object({
    id: object_1.id,
    name: object_1.name,
    size: zod_1.z.number().int(),
    type: zod_1.z.string(),
    cr: zod_1.z.number().int(),
    meta: zod_1.z.string(),
    adds,
    url,
    negativeratings,
    positiveratings,
}));
const races = zod_1.z.array(zod_1.z.object({
    id: object_1.id,
    name: object_1.name,
    adds,
    url,
    negativeratings,
    positiveratings,
}));
const classes = zod_1.z.array(zod_1.z.object({
    id: object_1.id,
    name: object_1.name,
    adds,
    url,
    negativeratings,
    positiveratings,
}));
const templates = zod_1.z.array(zod_1.z.object({
    id: object_1.id,
    name: object_1.name,
    adds,
    url,
    negativeratings,
    positiveratings,
}));
exports.getFolderContentResponse = zod_1.z.object({
    folders,
    characters,
    races,
    classes,
    templates,
});
exports.postFolder = zod_1.z.object({
    name: object_1.name,
});
exports.postFolderResponse = zod_1.z.object({
    id: object_1.id,
    name: object_1.name,
});
