import { z } from 'zod';
export declare const getRandomSurname: z.ZodObject<{
    race: z.ZodOptional<z.ZodString>;
    gender: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    race?: string | undefined;
    gender?: string | undefined;
}, {
    race?: string | undefined;
    gender?: string | undefined;
}>;
export declare const getRandomSurnameResponse: z.ZodObject<{
    surname: z.ZodString;
}, "strip", z.ZodTypeAny, {
    surname: string;
}, {
    surname: string;
}>;
//# sourceMappingURL=surname.d.ts.map