"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sPostAnswerBody = exports.sGetRandomQuestionResponse = exports.sGetRandomQuestionBody = exports.sAnswer = exports.sQuestion = void 0;
const zod_1 = require("zod");
exports.sQuestion = zod_1.z.object({
    question: zod_1.z.string(),
    type: zod_1.z.enum(['open-ended', 'poll', 'boolean', 'rating']),
    options: zod_1.z.array(zod_1.z.string()).optional(),
});
exports.sAnswer = zod_1.z.object({
    answer: zod_1.z.string().optional(),
    options: zod_1.z.array(zod_1.z.number()).optional(),
    rating: zod_1.z.number().optional(),
    boolean: zod_1.z.boolean().optional(),
});
exports.sGetRandomQuestionBody = zod_1.z.object({
    topic: zod_1.z.string().optional(),
    dateFrom: zod_1.z.string().optional(),
});
exports.sGetRandomQuestionResponse = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    topic: zod_1.z.string(),
    question: exports.sQuestion,
    datecreated: zod_1.z.string(),
});
exports.sPostAnswerBody = zod_1.z.object({
    questionid: zod_1.z.string().uuid(),
    answer: exports.sAnswer,
    userid: zod_1.z.string().optional(),
    sessionid: zod_1.z.string().optional(),
});
