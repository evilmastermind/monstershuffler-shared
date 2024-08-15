"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sGetLanguageListResponse = exports.sGetLanguageResponse = exports.sPutLanguageBody = exports.sPostLanguageBody = void 0;
const zod_1 = require("zod");
const id = zod_1.z.number();
const userid = zod_1.z.number();
const name = zod_1.z.string().min(2);
const script = zod_1.z.string().min(2);
exports.sPostLanguageBody = zod_1.z.object({
    name,
    script,
});
exports.sPutLanguageBody = zod_1.z.object({
    name: name.optional(),
    script: script.optional(),
});
exports.sGetLanguageResponse = zod_1.z.object({
    id,
    userid,
    name,
    script,
});
exports.sGetLanguageListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id,
        userid,
        name,
        script,
    })),
});
