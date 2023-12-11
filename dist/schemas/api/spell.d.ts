import { z } from 'zod';
export declare const getSpellList: z.ZodObject<{
    game: z.ZodNumber;
    name: z.ZodOptional<z.ZodString>;
    level: z.ZodOptional<z.ZodNumber>;
    range: z.ZodOptional<z.ZodString>;
    ritual: z.ZodOptional<z.ZodBoolean>;
    school: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodString>;
    className: z.ZodOptional<z.ZodString>;
    duration: z.ZodOptional<z.ZodString>;
    component: z.ZodOptional<z.ZodString>;
    castingTime: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    game: number;
    name?: string | undefined;
    level?: number | undefined;
    range?: string | undefined;
    ritual?: boolean | undefined;
    school?: string | undefined;
    source?: string | undefined;
    className?: string | undefined;
    duration?: string | undefined;
    component?: string | undefined;
    castingTime?: string | undefined;
    description?: string | undefined;
}, {
    game: number;
    name?: string | undefined;
    level?: number | undefined;
    range?: string | undefined;
    ritual?: boolean | undefined;
    school?: string | undefined;
    source?: string | undefined;
    className?: string | undefined;
    duration?: string | undefined;
    component?: string | undefined;
    castingTime?: string | undefined;
    description?: string | undefined;
}>;
export declare const getSpellListResponse: z.ZodObject<{
    list: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        userid: z.ZodNumber;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: number;
        userid: number;
    }, {
        name: string;
        id: number;
        userid: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    list: {
        name: string;
        id: number;
        userid: number;
    }[];
}, {
    list: {
        name: string;
        id: number;
        userid: number;
    }[];
}>;
export declare const getSpellResponse: z.ZodObject<{
    id: z.ZodNumber;
    userid: z.ZodNumber;
    object: z.ZodObject<{
        name: z.ZodString;
        level: z.ZodNumber;
        range: z.ZodString;
        ritual: z.ZodBoolean;
        school: z.ZodString;
        source: z.ZodString;
        classes: z.ZodArray<z.ZodString, "many">;
        duration: z.ZodString;
        components: z.ZodString;
        castingTime: z.ZodString;
        description: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        name: string;
        range: string;
        level: number;
        source: string;
        description: string;
        ritual: boolean;
        school: string;
        classes: string[];
        duration: string;
        components: string;
        castingTime: string;
    }, {
        name: string;
        range: string;
        level: number;
        source: string;
        description: string;
        ritual: boolean;
        school: string;
        classes: string[];
        duration: string;
        components: string;
        castingTime: string;
    }>;
}, "strip", z.ZodTypeAny, {
    object: {
        name: string;
        range: string;
        level: number;
        source: string;
        description: string;
        ritual: boolean;
        school: string;
        classes: string[];
        duration: string;
        components: string;
        castingTime: string;
    };
    id: number;
    userid: number;
}, {
    object: {
        name: string;
        range: string;
        level: number;
        source: string;
        description: string;
        ritual: boolean;
        school: string;
        classes: string[];
        duration: string;
        components: string;
        castingTime: string;
    };
    id: number;
    userid: number;
}>;
export declare const postSpell: z.ZodObject<{
    game: z.ZodNumber;
    name: z.ZodString;
    object: z.ZodObject<{
        name: z.ZodString;
        level: z.ZodNumber;
        range: z.ZodString;
        ritual: z.ZodBoolean;
        school: z.ZodString;
        source: z.ZodString;
        classes: z.ZodArray<z.ZodString, "many">;
        duration: z.ZodString;
        components: z.ZodString;
        castingTime: z.ZodString;
        description: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        name: string;
        range: string;
        level: number;
        source: string;
        description: string;
        ritual: boolean;
        school: string;
        classes: string[];
        duration: string;
        components: string;
        castingTime: string;
    }, {
        name: string;
        range: string;
        level: number;
        source: string;
        description: string;
        ritual: boolean;
        school: string;
        classes: string[];
        duration: string;
        components: string;
        castingTime: string;
    }>;
}, "strip", z.ZodTypeAny, {
    object: {
        name: string;
        range: string;
        level: number;
        source: string;
        description: string;
        ritual: boolean;
        school: string;
        classes: string[];
        duration: string;
        components: string;
        castingTime: string;
    };
    name: string;
    game: number;
}, {
    object: {
        name: string;
        range: string;
        level: number;
        source: string;
        description: string;
        ritual: boolean;
        school: string;
        classes: string[];
        duration: string;
        components: string;
        castingTime: string;
    };
    name: string;
    game: number;
}>;
export declare const putSpell: z.ZodObject<{
    name: z.ZodString;
    object: z.ZodObject<{
        name: z.ZodString;
        level: z.ZodNumber;
        range: z.ZodString;
        ritual: z.ZodBoolean;
        school: z.ZodString;
        source: z.ZodString;
        classes: z.ZodArray<z.ZodString, "many">;
        duration: z.ZodString;
        components: z.ZodString;
        castingTime: z.ZodString;
        description: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        name: string;
        range: string;
        level: number;
        source: string;
        description: string;
        ritual: boolean;
        school: string;
        classes: string[];
        duration: string;
        components: string;
        castingTime: string;
    }, {
        name: string;
        range: string;
        level: number;
        source: string;
        description: string;
        ritual: boolean;
        school: string;
        classes: string[];
        duration: string;
        components: string;
        castingTime: string;
    }>;
}, "strip", z.ZodTypeAny, {
    object: {
        name: string;
        range: string;
        level: number;
        source: string;
        description: string;
        ritual: boolean;
        school: string;
        classes: string[];
        duration: string;
        components: string;
        castingTime: string;
    };
    name: string;
}, {
    object: {
        name: string;
        range: string;
        level: number;
        source: string;
        description: string;
        ritual: boolean;
        school: string;
        classes: string[];
        duration: string;
        components: string;
        castingTime: string;
    };
    name: string;
}>;
//# sourceMappingURL=spell.d.ts.map