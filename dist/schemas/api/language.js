"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLanguageListResponse = exports.putLanguage = exports.getLanguageResponse = exports.postLanguage = void 0;
const zod_1 = require("zod");
const id = zod_1.z.number();
const userid = zod_1.z.number();
const name = zod_1.z.string().min(2);
const script = zod_1.z.string().min(2);
exports.postLanguage = zod_1.z.object({
    name,
    script,
});
exports.getLanguageResponse = zod_1.z.object({
    id,
    userid,
    name,
    script,
});
exports.putLanguage = zod_1.z.object({
    name,
    script,
});
exports.getLanguageListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id,
        userid,
        name,
        script,
    })),
});
