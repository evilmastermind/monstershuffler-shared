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
    id: number;
    userid: number;
    name: string;
}, {
    id: number;
    userid: number;
    name: string;
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
        id: number;
        userid: number;
        name: string;
    }, {
        id: number;
        userid: number;
        name: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: number;
    userid: number;
    name: string;
    other_objects: {
        id: number;
        userid: number;
        name: string;
    }[];
}, {
    id: number;
    userid: number;
    name: string;
    other_objects: {
        id: number;
        userid: number;
        name: string;
    }[];
}>, "many">;
//# sourceMappingURL=object.d.ts.map