import { z } from 'zod';
export declare const weaponObject: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    cost: z.ZodOptional<z.ZodString>;
    weight: z.ZodOptional<z.ZodString>;
    damageType: z.ZodOptional<z.ZodString>;
    special: z.ZodOptional<z.ZodString>;
    die: z.ZodOptional<z.ZodString>;
    diceNumber: z.ZodOptional<z.ZodString>;
    dieV: z.ZodOptional<z.ZodString>;
    diceNumberV: z.ZodOptional<z.ZodString>;
    range: z.ZodOptional<z.ZodString>;
    rangeMax: z.ZodOptional<z.ZodString>;
    properties: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    properties: string[];
    name?: string | undefined;
    cost?: string | undefined;
    weight?: string | undefined;
    damageType?: string | undefined;
    special?: string | undefined;
    die?: string | undefined;
    diceNumber?: string | undefined;
    dieV?: string | undefined;
    diceNumberV?: string | undefined;
    range?: string | undefined;
    rangeMax?: string | undefined;
}, {
    properties: string[];
    name?: string | undefined;
    cost?: string | undefined;
    weight?: string | undefined;
    damageType?: string | undefined;
    special?: string | undefined;
    die?: string | undefined;
    diceNumber?: string | undefined;
    dieV?: string | undefined;
    diceNumberV?: string | undefined;
    range?: string | undefined;
    rangeMax?: string | undefined;
}>;
//# sourceMappingURL=weapons.d.ts.map