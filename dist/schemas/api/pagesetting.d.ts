import { z } from 'zod';
export declare const pageSettings: z.ZodObject<{
    page: z.ZodString;
    object: z.ZodRecord<z.ZodString, z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    object: Record<string, any>;
    page: string;
}, {
    object: Record<string, any>;
    page: string;
}>;
export declare const settings: z.ZodRecord<z.ZodString, z.ZodAny>;
//# sourceMappingURL=pagesetting.d.ts.map