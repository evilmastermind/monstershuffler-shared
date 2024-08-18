"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sPutSpellBody = exports.sPostSpellBody = exports.sGetSpellResponse = exports.sGetSpellListResponse = exports.sGetSpellListBody = void 0;
const zod_1 = require("zod");
const spells_1 = require("@/schemas/objects/character/spells");
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
exports.sGetSpellListBody = zod_1.z.object({
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
exports.sGetSpellListResponse = zod_1.z.object({
    list: zod_1.z.array(zod_1.z.object({
        id: object_1.id,
        userid: object_1.userid,
        name: object_1.name,
    })),
});
exports.sGetSpellResponse = zod_1.z.object({
    id: object_1.id,
    userid: object_1.userid,
    object: spells_1.spellObject,
});
exports.sPostSpellBody = zod_1.z.object({
    game: object_1.game,
    name: object_1.name,
    object: spells_1.spellObject,
});
exports.sPutSpellBody = zod_1.z.object({
    name: object_1.name,
    object: spells_1.spellObject,
});
