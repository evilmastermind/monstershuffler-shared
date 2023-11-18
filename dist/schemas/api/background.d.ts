import { z } from 'zod';
export declare const getBackgroundListResponse: z.ZodObject<{
    list: z.ZodArray<z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    list: {
        name: string;
        id: number;
        userid: number;
    }[];
}, {
    list: {
        name: string;
        id: number;
        userid: number;
    }[];
}>;
export declare const getBackgroundResponse: z.ZodObject<{
    object: z.ZodObject<any, "strict", z.ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>;
    id: z.ZodNumber;
    name: z.ZodString;
    femaleName: z.ZodString;
    age: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    object: {
        [x: string]: any;
    };
    name: string;
    id: number;
    description: string;
    femaleName: string;
    age: string;
}, {
    object: {
        [x: string]: any;
    };
    name: string;
    id: number;
    description: string;
    femaleName: string;
    age: string;
}>;
export declare const postBackground: z.ZodObject<{
    object: z.ZodObject<any, "strict", z.ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>;
    age: z.ZodEnum<["medieval", "fantasy", "renaissance", "modern", "future", "space", "other"]>;
    description: z.ZodString;
    game: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    object: {
        [x: string]: any;
    };
    description: string;
    game: number;
    age: "medieval" | "fantasy" | "renaissance" | "modern" | "future" | "space" | "other";
}, {
    object: {
        [x: string]: any;
    };
    description: string;
    game: number;
    age: "medieval" | "fantasy" | "renaissance" | "modern" | "future" | "space" | "other";
}>;
//# sourceMappingURL=background.d.ts.map