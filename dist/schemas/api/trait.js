"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sGetTraitDescriptionResponse = exports.sGetRandomTraitResponse = exports.sGetRandomTraitBody = void 0;
const zod_1 = require("zod");
const name = zod_1.z.string().min(2);
const type = zod_1.z.string().min(2);
const subtitle = zod_1.z.number();
const category = zod_1.z.string();
const feeling = zod_1.z.number();
const description = zod_1.z.string();
exports.sGetRandomTraitBody = zod_1.z.object({
    type: type.optional(),
    subtitle: subtitle.optional(),
    category: category.optional(),
    feeling: feeling.optional(),
});
exports.sGetRandomTraitResponse = zod_1.z.object({
    name,
    type,
    subtitle,
    category,
    feeling,
    description,
});
exports.sGetTraitDescriptionResponse = zod_1.z.object({
    description,
});
