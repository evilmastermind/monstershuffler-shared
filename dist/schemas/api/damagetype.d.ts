import { z } from 'zod';
export declare const sPostDamageTypeBody: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
}, {
    name: string;
    description: string;
}>;
export declare const sPutDamageTypeBody: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    description?: string | undefined;
}, {
    name?: string | undefined;
    description?: string | undefined;
}>;
export declare const sGetDamageTypeResponse: z.ZodObject<{
    id: z.ZodNumber;
    userid: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    description: string;
    userid: number;
}, {
    id: number;
    name: string;
    description: string;
    userid: number;
}>;
export declare const sGetDamageTypeListResponse: z.ZodObject<{
    list: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        userid: z.ZodNumber;
        name: z.ZodString;
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        description: string;
        userid: number;
    }, {
        id: number;
        name: string;
        description: string;
        userid: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    list: {
        id: number;
        name: string;
        description: string;
        userid: number;
    }[];
}, {
    list: {
        id: number;
        name: string;
        description: string;
        userid: number;
    }[];
}>;
//# sourceMappingURL=damagetype.d.ts.map