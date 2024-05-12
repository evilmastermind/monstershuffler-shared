"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sheet = exports.imageObject = exports.tokenObject = void 0;
const zod_1 = require("zod");
exports.tokenObject = zod_1.z.object({
    topPx: zod_1.z.number(),
    leftPx: zod_1.z.number(),
    widthPx: zod_1.z.number(),
});
exports.imageObject = zod_1.z.object({
    url: zod_1.z.string(),
    artist: zod_1.z.string().optional(),
    artistUrl: zod_1.z.string().optional(),
    canvasHeightPx: zod_1.z.number(),
    imageHeightPx: zod_1.z.number(),
    imagePositionTopPx: zod_1.z.number(),
    imagePositionLeftPx: zod_1.z.number(),
    mask: zod_1.z.string().optional(),
    token: exports.tokenObject,
});
exports.sheet = zod_1.z.object({
    images: zod_1.z.array(exports.imageObject),
    layout: zod_1.z.string().optional(),
    showRoleplayStats: zod_1.z.boolean().optional(),
    decoration: zod_1.z.string().optional(),
    statBlockOffsetPx: zod_1.z.number().optional(),
});
