import { z } from 'zod';
export declare const getRacevariantListResponse: z.ZodObject<{
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
export declare const getRacevariantResponse: z.ZodObject<{
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
export declare const postRacevariant: z.ZodObject<{
    game: z.ZodNumber;
    raceId: z.ZodNumber;
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
    raceId: number;
}, {
    object: {
        [x: string]: any;
    };
    game: number;
    raceId: number;
}>;
export declare const putRacevariant: z.ZodObject<{
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
//# sourceMappingURL=racevariant.d.ts.map