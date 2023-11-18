import { z } from 'zod';
export declare const getClassvariantListResponse: z.ZodObject<{
    list: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        userid: z.ZodNumber;
        name: z.ZodString;
        objects: z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            id: number;
        }, {
            name: string;
            id: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: number;
        objects: {
            name: string;
            id: number;
        };
        userid: number;
    }, {
        name: string;
        id: number;
        objects: {
            name: string;
            id: number;
        };
        userid: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    list: {
        name: string;
        id: number;
        objects: {
            name: string;
            id: number;
        };
        userid: number;
    }[];
}, {
    list: {
        name: string;
        id: number;
        objects: {
            name: string;
            id: number;
        };
        userid: number;
    }[];
}>;
export declare const getClassvariantClassListResponse: z.ZodObject<{
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
export declare const getClassvariantResponse: z.ZodObject<{
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
export declare const postClassvariant: z.ZodObject<{
    game: z.ZodNumber;
    classId: z.ZodNumber;
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
    classId: number;
}, {
    object: {
        [x: string]: any;
    };
    game: number;
    classId: number;
}>;
export declare const putClassvariant: z.ZodObject<{
    object: z.ZodObject<any, "strict", z.ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>;
}, "strip", z.ZodTypeAny, {
    object: {
        [x: string]: any;
    };
}, {
    object: {
        [x: string]: any;
    };
}>;
//# sourceMappingURL=classvariant.d.ts.map