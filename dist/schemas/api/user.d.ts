import { z } from 'zod';
export declare const userSettingsObject: z.ZodNullable<z.ZodObject<{
    stats: z.ZodObject<{
        lengthUnit: z.ZodEnum<["feet", "meters", "squares"]>;
        heightUnit: z.ZodEnum<["feet", "meters"]>;
    }, "strip", z.ZodTypeAny, {
        lengthUnit: "feet" | "meters" | "squares";
        heightUnit: "feet" | "meters";
    }, {
        lengthUnit: "feet" | "meters" | "squares";
        heightUnit: "feet" | "meters";
    }>;
    language: z.ZodEnum<["en", "it"]>;
}, "strip", z.ZodTypeAny, {
    language: "it" | "en";
    stats: {
        lengthUnit: "feet" | "meters" | "squares";
        heightUnit: "feet" | "meters";
    };
}, {
    language: "it" | "en";
    stats: {
        lengthUnit: "feet" | "meters" | "squares";
        heightUnit: "feet" | "meters";
    };
}>>;
export declare const sPostUserBody: z.ZodObject<{
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
export declare const sPostUserResponse: z.ZodObject<{
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
export declare const sActivateUserBody: z.ZodObject<{
    token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
}, {
    token: string;
}>;
export declare const sResetPasswordBody: z.ZodObject<{
    token: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
    password: string;
}, {
    token: string;
    password: string;
}>;
export declare const sReactivateUserBody: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const sLoginBody: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    email: string;
}, {
    password: string;
    email: string;
}>;
export declare const sLoginResponse: z.ZodObject<{
    accessToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accessToken: string;
}, {
    accessToken: string;
}>;
export declare const sGetUserResponse: z.ZodObject<{
    level: z.ZodNumber;
    created: z.ZodString;
    publishsuspension: z.ZodString;
    avatar: z.ZodString;
    settings: z.ZodNullable<z.ZodObject<{
        stats: z.ZodObject<{
            lengthUnit: z.ZodEnum<["feet", "meters", "squares"]>;
            heightUnit: z.ZodEnum<["feet", "meters"]>;
        }, "strip", z.ZodTypeAny, {
            lengthUnit: "feet" | "meters" | "squares";
            heightUnit: "feet" | "meters";
        }, {
            lengthUnit: "feet" | "meters" | "squares";
            heightUnit: "feet" | "meters";
        }>;
        language: z.ZodEnum<["en", "it"]>;
    }, "strip", z.ZodTypeAny, {
        language: "it" | "en";
        stats: {
            lengthUnit: "feet" | "meters" | "squares";
            heightUnit: "feet" | "meters";
        };
    }, {
        language: "it" | "en";
        stats: {
            lengthUnit: "feet" | "meters" | "squares";
            heightUnit: "feet" | "meters";
        };
    }>>;
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
            heightUnit: "feet" | "meters";
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
            heightUnit: "feet" | "meters";
        };
    } | null;
}>;
export declare const sPutUserBody: z.ZodObject<{
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