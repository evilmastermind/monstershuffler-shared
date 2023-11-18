import { z } from 'zod';
export declare const getClassListResponse: z.ZodObject<{
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
export declare const getClassWithVariantsListResponse: z.ZodObject<{
    list: z.ZodArray<z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    list: {
        name: string;
        id: number;
        userid: number;
        other_objects: {
            name: string;
            id: number;
            userid: number;
        }[];
    }[];
}, {
    list: {
        name: string;
        id: number;
        userid: number;
        other_objects: {
            name: string;
            id: number;
            userid: number;
        }[];
    }[];
}>;
export declare const getClassResponse: z.ZodObject<{
    object: z.ZodObject<any, "strict", z.ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>;
    id: z.ZodNumber;
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
export declare const postClass: z.ZodObject<{
    game: z.ZodNumber;
    object: z.ZodObject<any, "strict", z.ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>;
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
export declare const putClass: z.ZodObject<{
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
//# sourceMappingURL=class.d.ts.map