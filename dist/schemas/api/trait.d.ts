import { z } from 'zod';
export declare const sGetRandomTraitBody: z.ZodObject<{
    type: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodNumber>;
    category: z.ZodOptional<z.ZodString>;
    feeling: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type?: string | undefined;
    feeling?: number | undefined;
    subtitle?: number | undefined;
    category?: string | undefined;
}, {
    type?: string | undefined;
    feeling?: number | undefined;
    subtitle?: number | undefined;
    category?: string | undefined;
}>;
export declare const sGetRandomTraitResponse: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    subtitle: z.ZodNumber;
    category: z.ZodString;
    feeling: z.ZodNumber;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: string;
    description: string;
    feeling: number;
    subtitle: number;
    category: string;
}, {
    name: string;
    type: string;
    description: string;
    feeling: number;
    subtitle: number;
    category: string;
}>;
export declare const sGetTraitDescriptionResponse: z.ZodObject<{
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    description: string;
}, {
    description: string;
}>;
//# sourceMappingURL=trait.d.ts.map