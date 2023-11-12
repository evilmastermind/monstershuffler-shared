import { z } from 'zod';
export declare const getRandomTrait: z.ZodObject<{
    type: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodNumber>;
    category: z.ZodOptional<z.ZodString>;
    feeling: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type?: string | undefined;
    subtitle?: number | undefined;
    category?: string | undefined;
    feeling?: number | undefined;
}, {
    type?: string | undefined;
    subtitle?: number | undefined;
    category?: string | undefined;
    feeling?: number | undefined;
}>;
export declare const getRandomTraitResponse: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    subtitle: z.ZodNumber;
    category: z.ZodString;
    feeling: z.ZodNumber;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    name: string;
    description: string;
    feeling: number;
    subtitle: number;
    category: string;
}, {
    type: string;
    name: string;
    description: string;
    feeling: number;
    subtitle: number;
    category: string;
}>;
export declare const getTraitDescriptionResponse: z.ZodObject<{
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    description: string;
}, {
    description: string;
}>;
//# sourceMappingURL=trait.d.ts.map