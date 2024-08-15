import { z } from 'zod';
export declare const sGetRandomNameBody: z.ZodObject<{
    race: z.ZodOptional<z.ZodString>;
    gender: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    race?: string | undefined;
    gender?: string | undefined;
}, {
    race?: string | undefined;
    gender?: string | undefined;
}>;
export declare const sGetRandomNameResponse: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
//# sourceMappingURL=name.d.ts.map