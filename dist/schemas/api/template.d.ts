import { z } from 'zod';
export declare const getTemplateListResponse: z.ZodObject<{
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
export declare const getTemplateResponse: z.ZodObject<{
    id: z.ZodNumber;
    object: z.ZodObject<any, "strict", z.ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>;
}, "strip", z.ZodTypeAny, {
    object: {
        [x: string]: any;
    };
    id: number;
}, {
    object: {
        [x: string]: any;
    };
    id: number;
}>;
export declare const postTemplate: z.ZodObject<{
    object: z.ZodObject<any, "strict", z.ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>;
    game: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    object: {
        [x: string]: any;
    };
    game: number;
}, {
    object: {
        [x: string]: any;
    };
    game: number;
}>;
export declare const putTemplate: z.ZodObject<{
    object: z.ZodObject<any, "strict", z.ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>;
    game: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    object: {
        [x: string]: any;
    };
    game: number;
}, {
    object: {
        [x: string]: any;
    };
    game: number;
}>;
//# sourceMappingURL=template.d.ts.map