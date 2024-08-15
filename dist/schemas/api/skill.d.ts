import { z } from 'zod';
export declare const sGetSkillListResponse: z.ZodObject<{
    list: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        game: z.ZodNumber;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        game: number;
    }, {
        id: number;
        name: string;
        game: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    list: {
        id: number;
        name: string;
        game: number;
    }[];
}, {
    list: {
        id: number;
        name: string;
        game: number;
    }[];
}>;
export declare const sGetSkillResponse: z.ZodObject<{
    id: z.ZodNumber;
    game: z.ZodNumber;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    game: number;
}, {
    id: number;
    name: string;
    game: number;
}>;
//# sourceMappingURL=skill.d.ts.map