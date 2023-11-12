import { z } from 'zod';
export declare const getRandomName: z.ZodObject<{
    race: z.ZodOptional<z.ZodString>;
    gender: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    race?: string | undefined;
    gender?: string | undefined;
}, {
    race?: string | undefined;
    gender?: string | undefined;
}>;
export declare const getRandomNameResponse: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
//# sourceMappingURL=name.d.ts.map