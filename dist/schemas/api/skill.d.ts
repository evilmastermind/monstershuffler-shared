import { z } from 'zod';
export declare const getSkillListResponse: z.ZodObject<{
    list: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        game: z.ZodNumber;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: number;
        game: number;
    }, {
        name: string;
        id: number;
        game: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    list: {
        name: string;
        id: number;
        game: number;
    }[];
}, {
    list: {
        name: string;
        id: number;
        game: number;
    }[];
}>;
export declare const getSkillResponse: z.ZodObject<{
    id: z.ZodNumber;
    game: z.ZodNumber;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    game: number;
}, {
    name: string;
    id: number;
    game: number;
}>;
//# sourceMappingURL=skill.d.ts.map