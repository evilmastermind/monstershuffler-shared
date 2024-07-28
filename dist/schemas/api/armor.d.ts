import { z } from 'zod';
export declare const postArmor: z.ZodObject<{
    game: z.ZodNumber;
    name: z.ZodString;
    object: z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        AC: z.ZodString;
        name: z.ZodString;
        isAutomaticCalcDisabled: z.ZodOptional<z.ZodBoolean>;
        cost: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodEnum<["light", "medium", "heavy"]>>;
        maxDex: z.ZodOptional<z.ZodString>;
        minStr: z.ZodOptional<z.ZodString>;
        weight: z.ZodOptional<z.ZodString>;
        stealthDis: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        AC: string;
        id?: number | undefined;
        isAutomaticCalcDisabled?: boolean | undefined;
        cost?: string | undefined;
        type?: "light" | "medium" | "heavy" | undefined;
        maxDex?: string | undefined;
        minStr?: string | undefined;
        weight?: string | undefined;
        stealthDis?: boolean | undefined;
    }, {
        name: string;
        AC: string;
        id?: number | undefined;
        isAutomaticCalcDisabled?: boolean | undefined;
        cost?: string | undefined;
        type?: "light" | "medium" | "heavy" | undefined;
        maxDex?: string | undefined;
        minStr?: string | undefined;
        weight?: string | undefined;
        stealthDis?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    object: {
        name: string;
        AC: string;
        id?: number | undefined;
        isAutomaticCalcDisabled?: boolean | undefined;
        cost?: string | undefined;
        type?: "light" | "medium" | "heavy" | undefined;
        maxDex?: string | undefined;
        minStr?: string | undefined;
        weight?: string | undefined;
        stealthDis?: boolean | undefined;
    };
    name: string;
    game: number;
}, {
    object: {
        name: string;
        AC: string;
        id?: number | undefined;
        isAutomaticCalcDisabled?: boolean | undefined;
        cost?: string | undefined;
        type?: "light" | "medium" | "heavy" | undefined;
        maxDex?: string | undefined;
        minStr?: string | undefined;
        weight?: string | undefined;
        stealthDis?: boolean | undefined;
    };
    name: string;
    game: number;
}>;
export declare const putArmor: z.ZodObject<{
    name: z.ZodString;
    object: z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        AC: z.ZodString;
        name: z.ZodString;
        isAutomaticCalcDisabled: z.ZodOptional<z.ZodBoolean>;
        cost: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodEnum<["light", "medium", "heavy"]>>;
        maxDex: z.ZodOptional<z.ZodString>;
        minStr: z.ZodOptional<z.ZodString>;
        weight: z.ZodOptional<z.ZodString>;
        stealthDis: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        AC: string;
        id?: number | undefined;
        isAutomaticCalcDisabled?: boolean | undefined;
        cost?: string | undefined;
        type?: "light" | "medium" | "heavy" | undefined;
        maxDex?: string | undefined;
        minStr?: string | undefined;
        weight?: string | undefined;
        stealthDis?: boolean | undefined;
    }, {
        name: string;
        AC: string;
        id?: number | undefined;
        isAutomaticCalcDisabled?: boolean | undefined;
        cost?: string | undefined;
        type?: "light" | "medium" | "heavy" | undefined;
        maxDex?: string | undefined;
        minStr?: string | undefined;
        weight?: string | undefined;
        stealthDis?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    object: {
        name: string;
        AC: string;
        id?: number | undefined;
        isAutomaticCalcDisabled?: boolean | undefined;
        cost?: string | undefined;
        type?: "light" | "medium" | "heavy" | undefined;
        maxDex?: string | undefined;
        minStr?: string | undefined;
        weight?: string | undefined;
        stealthDis?: boolean | undefined;
    };
    name: string;
}, {
    object: {
        name: string;
        AC: string;
        id?: number | undefined;
        isAutomaticCalcDisabled?: boolean | undefined;
        cost?: string | undefined;
        type?: "light" | "medium" | "heavy" | undefined;
        maxDex?: string | undefined;
        minStr?: string | undefined;
        weight?: string | undefined;
        stealthDis?: boolean | undefined;
    };
    name: string;
}>;
export declare const getArmorParams: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
export declare const getArmorResponse: z.ZodObject<{
    object: z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        AC: z.ZodString;
        name: z.ZodString;
        isAutomaticCalcDisabled: z.ZodOptional<z.ZodBoolean>;
        cost: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodEnum<["light", "medium", "heavy"]>>;
        maxDex: z.ZodOptional<z.ZodString>;
        minStr: z.ZodOptional<z.ZodString>;
        weight: z.ZodOptional<z.ZodString>;
        stealthDis: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        AC: string;
        id?: number | undefined;
        isAutomaticCalcDisabled?: boolean | undefined;
        cost?: string | undefined;
        type?: "light" | "medium" | "heavy" | undefined;
        maxDex?: string | undefined;
        minStr?: string | undefined;
        weight?: string | undefined;
        stealthDis?: boolean | undefined;
    }, {
        name: string;
        AC: string;
        id?: number | undefined;
        isAutomaticCalcDisabled?: boolean | undefined;
        cost?: string | undefined;
        type?: "light" | "medium" | "heavy" | undefined;
        maxDex?: string | undefined;
        minStr?: string | undefined;
        weight?: string | undefined;
        stealthDis?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    object: {
        name: string;
        AC: string;
        id?: number | undefined;
        isAutomaticCalcDisabled?: boolean | undefined;
        cost?: string | undefined;
        type?: "light" | "medium" | "heavy" | undefined;
        maxDex?: string | undefined;
        minStr?: string | undefined;
        weight?: string | undefined;
        stealthDis?: boolean | undefined;
    };
}, {
    object: {
        name: string;
        AC: string;
        id?: number | undefined;
        isAutomaticCalcDisabled?: boolean | undefined;
        cost?: string | undefined;
        type?: "light" | "medium" | "heavy" | undefined;
        maxDex?: string | undefined;
        minStr?: string | undefined;
        weight?: string | undefined;
        stealthDis?: boolean | undefined;
    };
}>;
export declare const getArmorListResponse: z.ZodObject<{
    list: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        userid: z.ZodNumber;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        userid: number;
    }, {
        id: number;
        name: string;
        userid: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    list: {
        id: number;
        name: string;
        userid: number;
    }[];
}, {
    list: {
        id: number;
        name: string;
        userid: number;
    }[];
}>;
//# sourceMappingURL=armor.d.ts.map