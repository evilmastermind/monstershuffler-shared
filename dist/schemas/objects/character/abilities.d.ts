import { z } from 'zod';
export declare const abilitiesEnum: z.ZodEnum<["STR", "DEX", "CON", "INT", "WIS", "CHA"]>;
export declare const abilityScoresObject: z.ZodObject<{
    STR: z.ZodOptional<z.ZodObject<{
        value: z.ZodNumber;
        isAutomaticCalcDisabled: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    }, {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    }>>;
    DEX: z.ZodOptional<z.ZodObject<{
        value: z.ZodNumber;
        isAutomaticCalcDisabled: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    }, {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    }>>;
    CON: z.ZodOptional<z.ZodObject<{
        value: z.ZodNumber;
        isAutomaticCalcDisabled: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    }, {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    }>>;
    INT: z.ZodOptional<z.ZodObject<{
        value: z.ZodNumber;
        isAutomaticCalcDisabled: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    }, {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    }>>;
    WIS: z.ZodOptional<z.ZodObject<{
        value: z.ZodNumber;
        isAutomaticCalcDisabled: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    }, {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    }>>;
    CHA: z.ZodOptional<z.ZodObject<{
        value: z.ZodNumber;
        isAutomaticCalcDisabled: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    }, {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    STR?: {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    } | undefined;
    DEX?: {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    } | undefined;
    CON?: {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    } | undefined;
    INT?: {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    } | undefined;
    WIS?: {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    } | undefined;
    CHA?: {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    } | undefined;
}, {
    STR?: {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    } | undefined;
    DEX?: {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    } | undefined;
    CON?: {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    } | undefined;
    INT?: {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    } | undefined;
    WIS?: {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    } | undefined;
    CHA?: {
        value: number;
        isAutomaticCalcDisabled?: boolean | undefined;
    } | undefined;
}>;
//# sourceMappingURL=abilities.d.ts.map