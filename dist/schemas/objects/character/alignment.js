"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alignmentStats = exports.alignmentMoral = exports.alignmentEthical = exports.alignmentModifiers = exports.alignmentModifiersSingle = void 0;
const zod_1 = require("zod");
exports.alignmentModifiersSingle = zod_1.z.tuple([
    zod_1.z.number(),
    zod_1.z.number(),
    zod_1.z.number(),
]);
exports.alignmentModifiers = zod_1.z.tuple([
    zod_1.z.tuple([zod_1.z.number(), zod_1.z.number(), zod_1.z.number()]),
    zod_1.z.tuple([zod_1.z.number(), zod_1.z.number(), zod_1.z.number()]),
]);
exports.alignmentEthical = zod_1.z.enum([
    'Lawful',
    'Neutral',
    'Chaotic',
    'Any',
    'Unaligned',
]);
exports.alignmentMoral = zod_1.z.enum(['Good', 'Neutral', 'Evil', 'Any']);
exports.alignmentStats = {
    alignmentEthical: exports.alignmentEthical.optional(),
    alignmentMoral: exports.alignmentMoral.optional(),
};
