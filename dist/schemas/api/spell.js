"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putSpell = exports.postSpell = exports.getSpellResponse = exports.getSpellListResponse = exports.getSpellList = void 0;
const zod_1 = require("zod");
const schemas_1 = require("../../schemas");
const object_1 = require("./object");
const level = zod_1.z.number();
const range = zod_1.z.string();
const ritual = zod_1.z.boolean();
const school = zod_1.z.string().min(2);
const source = zod_1.z.string();
const className = zod_1.z.string().min(2);
const duration = zod_1.z.string().min(2);
const component = zod_1.z.string().min(2);
const castingTime = zod_1.z.string().min(2);
const description = zod_1.z.string().min(2);
exports.getSpellList = zod_1.z.object({
    game: object_1.game,
    name: object_1.name.optional(),
    level: level.optional(),
    range: range.optional(),
    ritual: ritual.optional(),
    school: school.optional(),
    source: source.optional(),
    className: className.optional(),
    duration: duration.optional(),
    component: component.optional(),
    castingTime: castingTime.optional(),
    description: description.optional(),
});
exports.getSpellListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id: object_1.id,
        userid: object_1.userid,
        name: object_1.name,
    })),
});
exports.getSpellResponse = zod_1.z.object({
    id: object_1.id,
    userid: object_1.userid,
    object: schemas_1.spellObject,
});
exports.postSpell = zod_1.z.object({
    game: object_1.game,
    name: object_1.name,
    object: schemas_1.spellObject,
});
exports.putSpell = zod_1.z.object({
    name: object_1.name,
    object: schemas_1.spellObject,
});
