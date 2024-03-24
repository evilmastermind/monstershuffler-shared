import { z } from 'zod';
export declare const postUser: z.ZodObject<{
    password: z.ZodString;
    email: z.ZodString;
    username: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    email: string;
    username: string;
}, {
    password: string;
    email: string;
    username: string;
}>;
export declare const postUserResponse: z.ZodObject<{
    id: z.ZodNumber;
    email: z.ZodString;
    username: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    email: string;
    username: string;
}, {
    id: number;
    email: string;
    username: string;
}>;
export declare const activateUser: z.ZodObject<{
    token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
}, {
    token: string;
}>;
export declare const resetPassword: z.ZodObject<{
    token: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
    password: string;
}, {
    token: string;
    password: string;
}>;
export declare const reactivateUser: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    email: string;
}, {
    password: string;
    email: string;
}>;
export declare const loginResponse: z.ZodObject<{
    accessToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accessToken: string;
}, {
    accessToken: string;
}>;
export declare const userSettingsObject: z.ZodUnion<[z.ZodObject<{
    stats: z.ZodObject<{
        lengthUnit: z.ZodEnum<["feet", "meters", "squares"]>;
    }, "strip", z.ZodTypeAny, {
        lengthUnit: "feet" | "meters" | "squares";
    }, {
        lengthUnit: "feet" | "meters" | "squares";
    }>;
    language: z.ZodEnum<["en", "it"]>;
}, "strip", z.ZodTypeAny, {
    language: "it" | "en";
    stats: {
        lengthUnit: "feet" | "meters" | "squares";
    };
}, {
    language: "it" | "en";
    stats: {
        lengthUnit: "feet" | "meters" | "squares";
    };
}>, z.ZodNull]>;
export declare const getUserResponse: z.ZodObject<{
    level: z.ZodNumber;
    created: z.ZodString;
    publishsuspension: z.ZodString;
    avatar: z.ZodString;
    settings: z.ZodUnion<[z.ZodObject<{
        stats: z.ZodObject<{
            lengthUnit: z.ZodEnum<["feet", "meters", "squares"]>;
        }, "strip", z.ZodTypeAny, {
            lengthUnit: "feet" | "meters" | "squares";
        }, {
            lengthUnit: "feet" | "meters" | "squares";
        }>;
        language: z.ZodEnum<["en", "it"]>;
    }, "strip", z.ZodTypeAny, {
        language: "it" | "en";
        stats: {
            lengthUnit: "feet" | "meters" | "squares";
        };
    }, {
        language: "it" | "en";
        stats: {
            lengthUnit: "feet" | "meters" | "squares";
        };
    }>, z.ZodNull]>;
    email: z.ZodString;
    username: z.ZodString;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
    level: number;
    email: string;
    username: string;
    created: string;
    publishsuspension: string;
    avatar: string;
    settings: {
        language: "it" | "en";
        stats: {
            lengthUnit: "feet" | "meters" | "squares";
        };
    } | null;
}, {
    id: number;
    level: number;
    email: string;
    username: string;
    created: string;
    publishsuspension: string;
    avatar: string;
    settings: {
        language: "it" | "en";
        stats: {
            lengthUnit: "feet" | "meters" | "squares";
        };
    } | null;
}>;
export declare const putUser: z.ZodObject<{
    username: z.ZodString;
    avatar: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    avatar: string;
}, {
    username: string;
    avatar: string;
}>;
//# sourceMappingURL=user.d.ts.map