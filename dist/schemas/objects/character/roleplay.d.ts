import { z } from 'zod';
export declare const voiceObject: z.ZodObject<{
    person: z.ZodString;
    character: z.ZodOptional<z.ZodString>;
    production: z.ZodOptional<z.ZodString>;
    filename: z.ZodString;
}, "strip", z.ZodTypeAny, {
    person: string;
    filename: string;
    character?: string | undefined;
    production?: string | undefined;
}, {
    person: string;
    filename: string;
    character?: string | undefined;
    production?: string | undefined;
}>;
export type Voice = z.infer<typeof voiceObject>;
//# sourceMappingURL=roleplay.d.ts.map