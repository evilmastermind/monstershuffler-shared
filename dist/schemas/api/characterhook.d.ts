import { z } from 'zod';
export declare const characterHookType: z.ZodEnum<["youth", "career", "plot"]>;
export declare const sPostRandomCharacterhookResponse: z.ZodObject<{
    id: z.ZodNumber;
    type: z.ZodEnum<["youth", "career", "plot"]>;
    alignment: z.ZodNumber;
    locationorclass: z.ZodNullable<z.ZodString>;
    sentence: z.ZodString;
    summary: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    type: "youth" | "career" | "plot";
    alignment: number;
    sentence: string;
    summary: string;
    locationorclass: string | null;
}, {
    id: number;
    type: "youth" | "career" | "plot";
    alignment: number;
    sentence: string;
    summary: string;
    locationorclass: string | null;
}>;
export declare const sPostRandomCharacterhookBody: z.ZodObject<{
    alignment: z.ZodOptional<z.ZodNumber>;
    type: z.ZodOptional<z.ZodEnum<["youth", "career", "plot"]>>;
    locationorclass: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type?: "youth" | "career" | "plot" | undefined;
    alignment?: number | undefined;
    locationorclass?: string | undefined;
}, {
    type?: "youth" | "career" | "plot" | undefined;
    alignment?: number | undefined;
    locationorclass?: string | undefined;
}>;
//# sourceMappingURL=characterhook.d.ts.map