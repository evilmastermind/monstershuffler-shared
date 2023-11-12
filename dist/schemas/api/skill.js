"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSkillResponse = exports.getSkillListResponse = void 0;
const zod_1 = require("zod");
const object_1 = require("./object");
const skill = zod_1.z.object({
    id: object_1.id,
    game: object_1.game,
    name: object_1.name,
});
exports.getSkillListResponse = zod_1.z.object({
    list: zod_1.z.array(skill),
});
exports.getSkillResponse = skill;
