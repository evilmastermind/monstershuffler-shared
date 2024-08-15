"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sGetSkillResponse = exports.sGetSkillListResponse = void 0;
const zod_1 = require("zod");
const object_1 = require("./object");
const skill = zod_1.z.object({
    id: object_1.id,
    game: object_1.game,
    name: object_1.name,
});
exports.sGetSkillListResponse = zod_1.z.object({
    list: zod_1.z.array(skill),
});
exports.sGetSkillResponse = skill;
