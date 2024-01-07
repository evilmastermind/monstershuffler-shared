import { z } from 'zod';
export declare const getActionList: z.ZodObject<{
    game: z.ZodOptional<z.ZodNumber>;
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    subtype: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    source: z.ZodOptional<z.ZodString>;
    tag: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    game?: number | undefined;
    name?: string | undefined;
    type?: string | undefined;
    subtype?: string | undefined;
    source?: string | undefined;
    tag?: string | undefined;
}, {
    game?: number | undefined;
    name?: string | undefined;
    type?: string | undefined;
    subtype?: string | undefined;
    source?: string | undefined;
    tag?: string | undefined;
}>;
export declare const getActionListResponse: z.ZodObject<{
    list: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        userid: z.ZodNumber;
        actionsdetails: z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            subtype: z.ZodOptional<z.ZodString>;
            source: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: string;
            source: string;
            subtype?: string | undefined;
        }, {
            name: string;
            type: string;
            source: string;
            subtype?: string | undefined;
        }>;
        actionstags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        userid: number;
        actionsdetails: {
            name: string;
            type: string;
            source: string;
            subtype?: string | undefined;
        };
        actionstags?: string[] | undefined;
    }, {
        id: number;
        userid: number;
        actionsdetails: {
            name: string;
            type: string;
            source: string;
            subtype?: string | undefined;
        };
        actionstags?: string[] | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    list: {
        id: number;
        userid: number;
        actionsdetails: {
            name: string;
            type: string;
            source: string;
            subtype?: string | undefined;
        };
        actionstags?: string[] | undefined;
    }[];
}, {
    list: {
        id: number;
        userid: number;
        actionsdetails: {
            name: string;
            type: string;
            source: string;
            subtype?: string | undefined;
        };
        actionstags?: string[] | undefined;
    }[];
}>;
export declare const getActionResponse: z.ZodObject<{
    id: z.ZodNumber;
    userid: z.ZodNumber;
    object: z.ZodAny;
    actionsdetails: z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
        subtype: z.ZodOptional<z.ZodString>;
        source: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: string;
        source: string;
        subtype?: string | undefined;
    }, {
        name: string;
        type: string;
        source: string;
        subtype?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    id: number;
    userid: number;
    actionsdetails: {
        name: string;
        type: string;
        source: string;
        subtype?: string | undefined;
    };
    object?: any;
}, {
    id: number;
    userid: number;
    actionsdetails: {
        name: string;
        type: string;
        source: string;
        subtype?: string | undefined;
    };
    object?: any;
}>;
export declare const postAction: z.ZodObject<{
    game: z.ZodNumber;
    name: z.ZodString;
    type: z.ZodString;
    subtype: z.ZodOptional<z.ZodString>;
    source: z.ZodString;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    object: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: string;
    source: string;
    game: number;
    subtype?: string | undefined;
    tags?: string[] | undefined;
    object?: any;
}, {
    name: string;
    type: string;
    source: string;
    game: number;
    subtype?: string | undefined;
    tags?: string[] | undefined;
    object?: any;
}>;
export declare const putAction: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    subtype: z.ZodOptional<z.ZodString>;
    source: z.ZodString;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    object: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: string;
    source: string;
    subtype?: string | undefined;
    tags?: string[] | undefined;
    object?: any;
}, {
    name: string;
    type: string;
    source: string;
    subtype?: string | undefined;
    tags?: string[] | undefined;
    object?: any;
}>;
//# sourceMappingURL=action.d.ts.map