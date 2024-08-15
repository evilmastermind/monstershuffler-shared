"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sPutUserBody = exports.sGetUserResponse = exports.sLoginResponse = exports.sLoginBody = exports.sReactivateUserBody = exports.sResetPasswordBody = exports.sActivateUserBody = exports.sPostUserResponse = exports.sPostUserBody = exports.userSettingsObject = void 0;
const zod_1 = require("zod");
const userCore = {
    email: zod_1.z
        .string({
        required_error: 'Email is a required field',
        invalid_type_error: 'Email must be a string',
    })
        .email({ message: 'Invalid email address' }),
    username: zod_1.z
        .string({
        required_error: 'Email is a required field',
        invalid_type_error: 'Email must be a string',
    })
        .min(2, { message: 'Username is too short (min 2 characters)' })
        .max(21, { message: 'Username is too long (max 21 characters' }),
};
exports.userSettingsObject = zod_1.z.union([
    zod_1.z.object({
        stats: zod_1.z.object({
            lengthUnit: zod_1.z.enum(['feet', 'meters', 'squares']),
            heightUnit: zod_1.z.enum(['feet', 'meters']),
        }),
        language: zod_1.z.enum(['en', 'it']),
    }),
    zod_1.z.null(),
]);
exports.sPostUserBody = zod_1.z.object({
    ...userCore,
    password: zod_1.z
        .string({
        required_error: 'Password is a required field',
        invalid_type_error: 'Password must be a string',
    })
        .min(8, { message: 'Password is too short (min 8 character' }),
});
exports.sPostUserResponse = zod_1.z.object({
    ...userCore,
    id: zod_1.z.number(),
});
exports.sActivateUserBody = zod_1.z.object({
    token: zod_1.z.string(),
});
exports.sResetPasswordBody = zod_1.z.object({
    token: zod_1.z.string(),
    password: zod_1.z.string().min(8),
});
exports.sReactivateUserBody = zod_1.z.object({
    email: zod_1.z.string().email(),
});
exports.sLoginBody = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: 'Email is a required field',
        invalid_type_error: 'Email must be a string',
    })
        .email({ message: 'Invalid email address' }),
    password: zod_1.z.string(),
});
exports.sLoginResponse = zod_1.z.object({
    accessToken: zod_1.z.string(),
});
exports.sGetUserResponse = zod_1.z.object({
    id: zod_1.z.number(),
    ...userCore,
    level: zod_1.z.number(),
    created: zod_1.z.string().datetime(),
    publishsuspension: zod_1.z.string().datetime(),
    avatar: zod_1.z.string(),
    settings: exports.userSettingsObject,
});
exports.sPutUserBody = zod_1.z.object({
    username: zod_1.z.string().min(2).max(21),
    avatar: zod_1.z.string(),
});
