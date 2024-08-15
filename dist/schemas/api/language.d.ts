import { z } from 'zod';
export declare const sPostLanguageBody: z.ZodObject<{
    name: z.ZodString;
    script: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    script: string;
}, {
    name: string;
    script: string;
}>;
export declare const sPutLanguageBody: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    script: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    script?: string | undefined;
}, {
    name?: string | undefined;
    script?: string | undefined;
}>;
export declare const sGetLanguageResponse: z.ZodObject<{
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
export declare const sGetLanguageListResponse: z.ZodObject<{
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