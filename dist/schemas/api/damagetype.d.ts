import { z } from 'zod';
export declare const postDamageType: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
}, {
    name: string;
    description: string;
}>;
export declare const getDamageTypeResponse: z.ZodObject<{
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
export declare const putDamageType: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
}, {
    name: string;
    description: string;
}>;
export declare const getDamageTypeListResponse: z.ZodObject<{
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