"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settings = exports.pageSettings = void 0;
const zod_1 = require("zod");
exports.pageSettings = zod_1.z.object({
    page: zod_1.z.string(),
    object: zod_1.z.record(zod_1.z.any()),
});
exports.settings = zod_1.z.record(zod_1.z.any());
