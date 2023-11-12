"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putUser = exports.getUserResponse = exports.loginResponse = exports.loginSchema = exports.reactivateUser = exports.resetPassword = exports.activateUser = exports.postUserResponse = exports.postUser = void 0;
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
exports.postUser = zod_1.z.object({
    ...userCore,
    password: zod_1.z
        .string({
        required_error: 'Password is a required field',
        invalid_type_error: 'Password must be a string',
    })
        .min(8, { message: 'Password is too short (min 8 character' }),
});
exports.postUserResponse = zod_1.z.object({
    ...userCore,
    id: zod_1.z.number(),
});
exports.activateUser = zod_1.z.object({
    token: zod_1.z.string(),
});
exports.resetPassword = zod_1.z.object({
    token: zod_1.z.string(),
    password: zod_1.z.string().min(8),
});
exports.reactivateUser = zod_1.z.object({
    email: zod_1.z.string().email(),
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: 'Email is a required field',
        invalid_type_error: 'Email must be a string',
    })
        .email({ message: 'Invalid email address' }),
    password: zod_1.z.string(),
});
exports.loginResponse = zod_1.z.object({
    accessToken: zod_1.z.string(),
});
exports.getUserResponse = zod_1.z.object({
    id: zod_1.z.number(),
    ...userCore,
    level: zod_1.z.number(),
    created: zod_1.z.string().datetime(),
    publishsuspension: zod_1.z.string().datetime(),
    avatar: zod_1.z.string(),
});
exports.putUser = zod_1.z.object({
    username: zod_1.z.string().min(2).max(21),
    avatar: zod_1.z.string(),
});
