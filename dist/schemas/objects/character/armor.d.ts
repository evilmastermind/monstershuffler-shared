import { z } from 'zod';
export declare const armorTypes: z.ZodEnum<["light", "medium", "heavy"]>;
export declare const armorObject: z.ZodObject<{
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
    AC: string;
    name: string;
    isAutomaticCalcDisabled?: boolean | undefined;
    cost?: string | undefined;
    type?: "light" | "medium" | "heavy" | undefined;
    maxDex?: string | undefined;
    minStr?: string | undefined;
    weight?: string | undefined;
    stealthDis?: boolean | undefined;
}, {
    AC: string;
    name: string;
    isAutomaticCalcDisabled?: boolean | undefined;
    cost?: string | undefined;
    type?: "light" | "medium" | "heavy" | undefined;
    maxDex?: string | undefined;
    minStr?: string | undefined;
    weight?: string | undefined;
    stealthDis?: boolean | undefined;
}>;
//# sourceMappingURL=armor.d.ts.map