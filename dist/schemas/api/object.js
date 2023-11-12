"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = exports.game = exports.userid = exports.id = void 0;
const zod_1 = require("zod");
exports.id = zod_1.z.number();
exports.userid = zod_1.z.number();
exports.game = zod_1.z.number();
exports.name = zod_1.z.string().min(2);
