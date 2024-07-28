import { z } from 'zod';
export declare const postLanguage: z.ZodObject<{
    name: z.ZodString;
    script: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    script: string;
}, {
    name: string;
    script: string;
}>;
export declare const getLanguageResponse: z.ZodObject<{
    id: z.ZodNumber;
    userid: z.ZodNumber;
    name: z.ZodString;
    script: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    userid: number;
    script: string;
}, {
    id: number;
    name: string;
    userid: number;
    script: string;
}>;
export declare const putLanguage: z.ZodObject<{
    name: z.ZodString;
    script: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    script: string;
}, {
    name: string;
    script: string;
}>;
export declare const getLanguageListResponse: z.ZodObject<{
    list: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        userid: z.ZodNumber;
        name: z.ZodString;
        script: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        userid: number;
        script: string;
    }, {
        id: number;
        name: string;
        userid: number;
        script: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    list: {
        id: number;
        name: string;
        userid: number;
        script: string;
    }[];
}, {
    list: {
        id: number;
        name: string;
        userid: number;
        script: string;
    }[];
}>;
//# sourceMappingURL=language.d.ts.map