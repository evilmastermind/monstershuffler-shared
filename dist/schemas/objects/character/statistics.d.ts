import { z } from 'zod';
export declare const abilitiesObject: z.ZodObject<{
    STR: z.ZodNumber;
    DEX: z.ZodNumber;
    CON: z.ZodNumber;
    INT: z.ZodNumber;
    WIS: z.ZodNumber;
    CHA: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    STR: number;
    DEX: number;
    CON: number;
    INT: number;
    WIS: number;
    CHA: number;
}, {
    STR: number;
    DEX: number;
    CON: number;
    INT: number;
    WIS: number;
    CHA: number;
}>;
export declare const descriptionPartObject: z.ZodObject<{
    string: z.ZodString;
    type: z.ZodOptional<z.ZodEnum<["background", "spell", "trait", "race", "class", "template", "type", "subtype", "language", "skill", "savingThrow", "condition", "resistance", "immunity", "vulnerability", "conditionImmunity"]>>;
    id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    string: string;
    type?: "type" | "trait" | "subtype" | "background" | "spell" | "race" | "class" | "template" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
    id?: number | undefined;
}, {
    string: string;
    type?: "type" | "trait" | "subtype" | "background" | "spell" | "race" | "class" | "template" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
    id?: number | undefined;
}>;
export declare const statisticsObject: z.ZodObject<{
    alignment: z.ZodObject<{
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    }>;
    pronouns: z.ZodEnum<["male", "female", "neutral", "thing"]>;
    prename: z.ZodString;
    name: z.ZodString;
    surname: z.ZodString;
    fullName: z.ZodString;
    characterHook: z.ZodOptional<z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["background", "spell", "trait", "race", "class", "template", "type", "subtype", "language", "skill", "savingThrow", "condition", "resistance", "immunity", "vulnerability", "conditionImmunity"]>>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        type?: "type" | "trait" | "subtype" | "background" | "spell" | "race" | "class" | "template" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }, {
        string: string;
        type?: "type" | "trait" | "subtype" | "background" | "spell" | "race" | "class" | "template" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }>, "many">>;
    level: z.ZodNumber;
    CR: z.ZodObject<{
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    }>;
    XP: z.ZodString;
    proficiency: z.ZodNumber;
    size: z.ZodObject<{
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    }>;
    sizeSingleEntityOfSwarm: z.ZodOptional<z.ZodObject<{
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    }>>;
    abilityScores: z.ZodObject<{
        STR: z.ZodNumber;
        DEX: z.ZodNumber;
        CON: z.ZodNumber;
        INT: z.ZodNumber;
        WIS: z.ZodNumber;
        CHA: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        STR: number;
        DEX: number;
        CON: number;
        INT: number;
        WIS: number;
        CHA: number;
    }, {
        STR: number;
        DEX: number;
        CON: number;
        INT: number;
        WIS: number;
        CHA: number;
    }>;
    abilityModifiers: z.ZodObject<{
        STR: z.ZodNumber;
        DEX: z.ZodNumber;
        CON: z.ZodNumber;
        INT: z.ZodNumber;
        WIS: z.ZodNumber;
        CHA: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        STR: number;
        DEX: number;
        CON: number;
        INT: number;
        WIS: number;
        CHA: number;
    }, {
        STR: number;
        DEX: number;
        CON: number;
        INT: number;
        WIS: number;
        CHA: number;
    }>;
    HP: z.ZodObject<{
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    }>;
    type: z.ZodObject<{
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    }>;
    subtypes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    }>, "many">>;
    meta: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    };
    level: number;
    CR: {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    };
    alignment: {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    };
    pronouns: "male" | "female" | "neutral" | "thing";
    prename: string;
    surname: string;
    fullName: string;
    XP: string;
    proficiency: number;
    size: {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    };
    abilityScores: {
        STR: number;
        DEX: number;
        CON: number;
        INT: number;
        WIS: number;
        CHA: number;
    };
    abilityModifiers: {
        STR: number;
        DEX: number;
        CON: number;
        INT: number;
        WIS: number;
        CHA: number;
    };
    HP: {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    };
    meta: string;
    characterHook?: {
        string: string;
        type?: "type" | "trait" | "subtype" | "background" | "spell" | "race" | "class" | "template" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }[] | undefined;
    sizeSingleEntityOfSwarm?: {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    } | undefined;
    subtypes?: {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    }[] | undefined;
}, {
    name: string;
    type: {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    };
    level: number;
    CR: {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    };
    alignment: {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    };
    pronouns: "male" | "female" | "neutral" | "thing";
    prename: string;
    surname: string;
    fullName: string;
    XP: string;
    proficiency: number;
    size: {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    };
    abilityScores: {
        STR: number;
        DEX: number;
        CON: number;
        INT: number;
        WIS: number;
        CHA: number;
    };
    abilityModifiers: {
        STR: number;
        DEX: number;
        CON: number;
        INT: number;
        WIS: number;
        CHA: number;
    };
    HP: {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    };
    meta: string;
    characterHook?: {
        string: string;
        type?: "type" | "trait" | "subtype" | "background" | "spell" | "race" | "class" | "template" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }[] | undefined;
    sizeSingleEntityOfSwarm?: {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    } | undefined;
    subtypes?: {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    }[] | undefined;
}>;
export type Statistics = z.infer<typeof statisticsObject>;
//# sourceMappingURL=statistics.d.ts.map