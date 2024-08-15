import { z } from 'zod';
export declare const sGetRandomVoiceBody: z.ZodObject<{
    gender: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    gender?: string | undefined;
}, {
    gender?: string | undefined;
}>;
export declare const sGetRandomVoiceResponse: z.ZodObject<{
    id: z.ZodNumber;
    gender: z.ZodString;
    person: z.ZodString;
    character: z.ZodOptional<z.ZodString>;
    production: z.ZodOptional<z.ZodString>;
    filename: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    person: string;
    filename: string;
    gender: string;
    character?: string | undefined;
    production?: string | undefined;
}, {
    id: number;
    person: string;
    filename: string;
    gender: string;
    character?: string | undefined;
    production?: string | undefined;
}>;
//# sourceMappingURL=voice.d.ts.map