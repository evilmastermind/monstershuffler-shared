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
    canvasHeightPx: zod_1.z.number().optional(),
    canvasWidthPx: zod_1.z.number().optional(),
    sheetWidthPx: zod_1.z.number().optional(),
    imageHeightPx: zod_1.z.number().optional(),
    imagePositionTopPx: zod_1.z.number().optional(),
    imagePositionLeftPx: zod_1.z.number().optional(),
    mask: zod_1.z.string().optional(),
    token: exports.tokenObject.optional(),
});
exports.sheet = zod_1.z.object({
    images: zod_1.z.array(exports.imageObject),
    layout: zod_1.z.string().optional(),
    showRoleplayStats: zod_1.z.boolean().optional(),
    decoration: zod_1.z.string().optional(),
    statBlockOffsetPx: zod_1.z.number().optional(),
});
