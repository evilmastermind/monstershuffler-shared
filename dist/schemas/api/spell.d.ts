import { z } from 'zod';
export declare const sGetSpellListBody: z.ZodObject<{
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
export declare const sGetSpellListResponse: z.ZodObject<{
    list: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        userid: z.ZodNumber;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        userid: number;
    }, {
        id: number;
        name: string;
        userid: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    list: {
        id: number;
        name: string;
        userid: number;
    }[];
}, {
    list: {
        id: number;
        name: string;
        userid: number;
    }[];
}>;
export declare const sGetSpellResponse: z.ZodObject<{
    id: z.ZodNumber;
    userid: z.ZodNumber;
    object: z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
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
        id?: number | undefined;
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
        id?: number | undefined;
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
        id?: number | undefined;
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
        id?: number | undefined;
    };
    id: number;
    userid: number;
}>;
export declare const sPostSpellBody: z.ZodObject<{
    game: z.ZodNumber;
    name: z.ZodString;
    object: z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
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
        id?: number | undefined;
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
        id?: number | undefined;
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
        id?: number | undefined;
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
        id?: number | undefined;
    };
    name: string;
    game: number;
}>;
export declare const sPutSpellBody: z.ZodObject<{
    name: z.ZodString;
    object: z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
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
        id?: number | undefined;
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
        id?: number | undefined;
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
        id?: number | undefined;
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
        id?: number | undefined;
    };
    name: string;
}>;
//# sourceMappingURL=spell.d.ts.map