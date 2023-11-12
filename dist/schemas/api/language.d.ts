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
    userid: number;
    name: string;
    script: string;
}, {
    id: number;
    userid: number;
    name: string;
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
        userid: number;
        name: string;
        script: string;
    }, {
        id: number;
        userid: number;
        name: string;
        script: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    list: {
        id: number;
        userid: number;
        name: string;
        script: string;
    }[];
}, {
    list: {
        id: number;
        userid: number;
        name: string;
        script: string;
    }[];
}>;
//# sourceMappingURL=language.d.ts.map