import { z } from 'zod';
export declare const getFolderContentResponse: z.ZodObject<{
    folders: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
    }, {
        id: number;
        name: string;
    }>, "many">;
    characters: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        size: z.ZodNumber;
        type: z.ZodString;
        cr: z.ZodNumber;
        meta: z.ZodString;
        adds: z.ZodOptional<z.ZodNumber>;
        url: z.ZodOptional<z.ZodString>;
        negativeratings: z.ZodOptional<z.ZodNumber>;
        positiveratings: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: number;
        name: string;
        cr: number;
        size: number;
        meta: string;
        adds?: number | undefined;
        url?: string | undefined;
        negativeratings?: number | undefined;
        positiveratings?: number | undefined;
    }, {
        type: string;
        id: number;
        name: string;
        cr: number;
        size: number;
        meta: string;
        adds?: number | undefined;
        url?: string | undefined;
        negativeratings?: number | undefined;
        positiveratings?: number | undefined;
    }>, "many">;
    races: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        adds: z.ZodOptional<z.ZodNumber>;
        url: z.ZodOptional<z.ZodString>;
        negativeratings: z.ZodOptional<z.ZodNumber>;
        positiveratings: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        adds?: number | undefined;
        url?: string | undefined;
        negativeratings?: number | undefined;
        positiveratings?: number | undefined;
    }, {
        id: number;
        name: string;
        adds?: number | undefined;
        url?: string | undefined;
        negativeratings?: number | undefined;
        positiveratings?: number | undefined;
    }>, "many">;
    classes: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        adds: z.ZodOptional<z.ZodNumber>;
        url: z.ZodOptional<z.ZodString>;
        negativeratings: z.ZodOptional<z.ZodNumber>;
        positiveratings: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        adds?: number | undefined;
        url?: string | undefined;
        negativeratings?: number | undefined;
        positiveratings?: number | undefined;
    }, {
        id: number;
        name: string;
        adds?: number | undefined;
        url?: string | undefined;
        negativeratings?: number | undefined;
        positiveratings?: number | undefined;
    }>, "many">;
    templates: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        adds: z.ZodOptional<z.ZodNumber>;
        url: z.ZodOptional<z.ZodString>;
        negativeratings: z.ZodOptional<z.ZodNumber>;
        positiveratings: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        adds?: number | undefined;
        url?: string | undefined;
        negativeratings?: number | undefined;
        positiveratings?: number | undefined;
    }, {
        id: number;
        name: string;
        adds?: number | undefined;
        url?: string | undefined;
        negativeratings?: number | undefined;
        positiveratings?: number | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    folders: {
        id: number;
        name: string;
    }[];
    characters: {
        type: string;
        id: number;
        name: string;
        cr: number;
        size: number;
        meta: string;
        adds?: number | undefined;
        url?: string | undefined;
        negativeratings?: number | undefined;
        positiveratings?: number | undefined;
    }[];
    races: {
        id: number;
        name: string;
        adds?: number | undefined;
        url?: string | undefined;
        negativeratings?: number | undefined;
        positiveratings?: number | undefined;
    }[];
    classes: {
        id: number;
        name: string;
        adds?: number | undefined;
        url?: string | undefined;
        negativeratings?: number | undefined;
        positiveratings?: number | undefined;
    }[];
    templates: {
        id: number;
        name: string;
        adds?: number | undefined;
        url?: string | undefined;
        negativeratings?: number | undefined;
        positiveratings?: number | undefined;
    }[];
}, {
    folders: {
        id: number;
        name: string;
    }[];
    characters: {
        type: string;
        id: number;
        name: string;
        cr: number;
        size: number;
        meta: string;
        adds?: number | undefined;
        url?: string | undefined;
        negativeratings?: number | undefined;
        positiveratings?: number | undefined;
    }[];
    races: {
        id: number;
        name: string;
        adds?: number | undefined;
        url?: string | undefined;
        negativeratings?: number | undefined;
        positiveratings?: number | undefined;
    }[];
    classes: {
        id: number;
        name: string;
        adds?: number | undefined;
        url?: string | undefined;
        negativeratings?: number | undefined;
        positiveratings?: number | undefined;
    }[];
    templates: {
        id: number;
        name: string;
        adds?: number | undefined;
        url?: string | undefined;
        negativeratings?: number | undefined;
        positiveratings?: number | undefined;
    }[];
}>;
export declare const postFolder: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export declare const postFolderResponse: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
}, {
    id: number;
    name: string;
}>;
//# sourceMappingURL=folder.d.ts.map