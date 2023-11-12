import { z } from 'zod';
export declare const statObject: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    value: z.ZodString;
    availableAt: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    value: string;
    id?: number | undefined;
    availableAt?: number | undefined;
}, {
    value: string;
    id?: number | undefined;
    availableAt?: number | undefined;
}>;
export declare const choiceRandomObject: z.ZodObject<{
    choice: z.ZodObject<{
        type: z.ZodLiteral<"random">;
        number: z.ZodOptional<z.ZodNumber>;
        resultType: z.ZodEnum<["object", "nameId"]>;
        source: z.ZodEnum<["objects", "languages", "skills"]>;
        objectType: z.ZodOptional<z.ZodNumber>;
        filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
            keyName: z.ZodString;
            keyValues: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            keyName: string;
            keyValues: string[];
        }, {
            keyName: string;
            keyValues: string[];
        }>, "many">>;
        chosenAlready: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            value: z.ZodString;
            availableAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            id?: number | undefined;
            availableAt?: number | undefined;
        }, {
            value: string;
            id?: number | undefined;
            availableAt?: number | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        type: "random";
        resultType: "object" | "nameId";
        source: "objects" | "languages" | "skills";
        number?: number | undefined;
        objectType?: number | undefined;
        filters?: {
            keyName: string;
            keyValues: string[];
        }[] | undefined;
        chosenAlready?: {
            value: string;
            id?: number | undefined;
            availableAt?: number | undefined;
        }[] | undefined;
    }, {
        type: "random";
        resultType: "object" | "nameId";
        source: "objects" | "languages" | "skills";
        number?: number | undefined;
        objectType?: number | undefined;
        filters?: {
            keyName: string;
            keyValues: string[];
        }[] | undefined;
        chosenAlready?: {
            value: string;
            id?: number | undefined;
            availableAt?: number | undefined;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    choice: {
        type: "random";
        resultType: "object" | "nameId";
        source: "objects" | "languages" | "skills";
        number?: number | undefined;
        objectType?: number | undefined;
        filters?: {
            keyName: string;
            keyValues: string[];
        }[] | undefined;
        chosenAlready?: {
            value: string;
            id?: number | undefined;
            availableAt?: number | undefined;
        }[] | undefined;
    };
}, {
    choice: {
        type: "random";
        resultType: "object" | "nameId";
        source: "objects" | "languages" | "skills";
        number?: number | undefined;
        objectType?: number | undefined;
        filters?: {
            keyName: string;
            keyValues: string[];
        }[] | undefined;
        chosenAlready?: {
            value: string;
            id?: number | undefined;
            availableAt?: number | undefined;
        }[] | undefined;
    };
}>;
export declare const choiceListObject: z.ZodObject<{
    choice: z.ZodObject<{
        type: z.ZodLiteral<"list">;
        number: z.ZodNumber;
        list: z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            value: z.ZodString;
            availableAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            id?: number | undefined;
            availableAt?: number | undefined;
        }, {
            value: string;
            id?: number | undefined;
            availableAt?: number | undefined;
        }>, "many">;
        isRepeatable: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        number: number;
        type: "list";
        list: {
            value: string;
            id?: number | undefined;
            availableAt?: number | undefined;
        }[];
        isRepeatable?: boolean | undefined;
    }, {
        number: number;
        type: "list";
        list: {
            value: string;
            id?: number | undefined;
            availableAt?: number | undefined;
        }[];
        isRepeatable?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    choice: {
        number: number;
        type: "list";
        list: {
            value: string;
            id?: number | undefined;
            availableAt?: number | undefined;
        }[];
        isRepeatable?: boolean | undefined;
    };
}, {
    choice: {
        number: number;
        type: "list";
        list: {
            value: string;
            id?: number | undefined;
            availableAt?: number | undefined;
        }[];
        isRepeatable?: boolean | undefined;
    };
}>;
export type Choice = z.infer<typeof statObject>;
export type ChoiceRandomObject = z.infer<typeof choiceRandomObject>;
export type ChoiceListObject = z.infer<typeof choiceListObject>;
//# sourceMappingURL=choices.d.ts.map