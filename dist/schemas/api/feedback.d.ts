import { z } from 'zod';
export declare const sQuestion: z.ZodObject<{
    question: z.ZodString;
    type: z.ZodEnum<["open-ended", "poll", "boolean", "rating"]>;
    options: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "boolean" | "open-ended" | "poll" | "rating";
    question: string;
    options?: string[] | undefined;
}, {
    type: "boolean" | "open-ended" | "poll" | "rating";
    question: string;
    options?: string[] | undefined;
}>;
export declare const sAnswer: z.ZodObject<{
    answer: z.ZodOptional<z.ZodString>;
    options: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    data: z.ZodOptional<z.ZodAny>;
    rating: z.ZodOptional<z.ZodNumber>;
    boolean: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    boolean?: boolean | undefined;
    options?: number[] | undefined;
    rating?: number | undefined;
    answer?: string | undefined;
    data?: any;
}, {
    boolean?: boolean | undefined;
    options?: number[] | undefined;
    rating?: number | undefined;
    answer?: string | undefined;
    data?: any;
}>;
export declare const sGetRandomQuestionBody: z.ZodObject<{
    topic: z.ZodOptional<z.ZodString>;
    dateFrom: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    topic?: string | undefined;
    dateFrom?: string | undefined;
}, {
    topic?: string | undefined;
    dateFrom?: string | undefined;
}>;
export declare const sGetRandomQuestionResponse: z.ZodObject<{
    id: z.ZodString;
    topic: z.ZodString;
    question: z.ZodObject<{
        question: z.ZodString;
        type: z.ZodEnum<["open-ended", "poll", "boolean", "rating"]>;
        options: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        type: "boolean" | "open-ended" | "poll" | "rating";
        question: string;
        options?: string[] | undefined;
    }, {
        type: "boolean" | "open-ended" | "poll" | "rating";
        question: string;
        options?: string[] | undefined;
    }>;
    datecreated: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    question: {
        type: "boolean" | "open-ended" | "poll" | "rating";
        question: string;
        options?: string[] | undefined;
    };
    topic: string;
    datecreated: string;
}, {
    id: string;
    question: {
        type: "boolean" | "open-ended" | "poll" | "rating";
        question: string;
        options?: string[] | undefined;
    };
    topic: string;
    datecreated: string;
}>;
export declare const sPostAnswerBody: z.ZodObject<{
    questionid: z.ZodString;
    answer: z.ZodObject<{
        answer: z.ZodOptional<z.ZodString>;
        options: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        data: z.ZodOptional<z.ZodAny>;
        rating: z.ZodOptional<z.ZodNumber>;
        boolean: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        boolean?: boolean | undefined;
        options?: number[] | undefined;
        rating?: number | undefined;
        answer?: string | undefined;
        data?: any;
    }, {
        boolean?: boolean | undefined;
        options?: number[] | undefined;
        rating?: number | undefined;
        answer?: string | undefined;
        data?: any;
    }>;
    userid: z.ZodOptional<z.ZodNumber>;
    sessionid: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    answer: {
        boolean?: boolean | undefined;
        options?: number[] | undefined;
        rating?: number | undefined;
        answer?: string | undefined;
        data?: any;
    };
    questionid: string;
    userid?: number | undefined;
    sessionid?: string | undefined;
}, {
    answer: {
        boolean?: boolean | undefined;
        options?: number[] | undefined;
        rating?: number | undefined;
        answer?: string | undefined;
        data?: any;
    };
    questionid: string;
    userid?: number | undefined;
    sessionid?: string | undefined;
}>;
//# sourceMappingURL=feedback.d.ts.map