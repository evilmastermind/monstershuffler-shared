import { z } from 'zod';
export declare const id: z.ZodNumber;
export declare const userid: z.ZodNumber;
export declare const game: z.ZodNumber;
export declare const name: z.ZodString;
export declare const objectList: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    userid: z.ZodNumber;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    userid: number;
}, {
    name: string;
    id: number;
    userid: number;
}>, "many">;
export declare const objectWithVariantsList: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    userid: z.ZodNumber;
    name: z.ZodString;
    other_objects: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        userid: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: number;
        userid: number;
    }, {
        name: string;
        id: number;
        userid: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    userid: number;
    other_objects: {
        name: string;
        id: number;
        userid: number;
    }[];
}, {
    name: string;
    id: number;
    userid: number;
    other_objects: {
        name: string;
        id: number;
        userid: number;
    }[];
}>, "many">;
//# sourceMappingURL=object.d.ts.map