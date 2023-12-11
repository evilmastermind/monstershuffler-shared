import { z } from 'zod';
export declare const statNumberString: z.ZodObject<{
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
    type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
    id?: number | undefined;
}, {
    string: string;
    type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
    id?: number | undefined;
}>;
export declare const parsedActionObject: z.ZodObject<{
    name: z.ZodString;
    tag: z.ZodString;
    priority: z.ZodNumber;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
    tag: string;
    priority: number;
}, {
    name: string;
    description: string;
    tag: string;
    priority: number;
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
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }, {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
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
    AC: z.ZodObject<{
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
    isSwarm: z.ZodOptional<z.ZodBoolean>;
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
        string: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["background", "spell", "trait", "race", "class", "template", "type", "subtype", "language", "skill", "savingThrow", "condition", "resistance", "immunity", "vulnerability", "conditionImmunity"]>>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }, {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }>, "many">>;
    meta: z.ZodString;
    speeds: z.ZodOptional<z.ZodObject<{
        values: z.ZodObject<{
            walk: z.ZodOptional<z.ZodNumber>;
            burrow: z.ZodOptional<z.ZodNumber>;
            climb: z.ZodOptional<z.ZodNumber>;
            fly: z.ZodOptional<z.ZodNumber>;
            hover: z.ZodOptional<z.ZodNumber>;
            swim: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            walk?: number | undefined;
            burrow?: number | undefined;
            climb?: number | undefined;
            fly?: number | undefined;
            hover?: number | undefined;
            swim?: number | undefined;
        }, {
            walk?: number | undefined;
            burrow?: number | undefined;
            climb?: number | undefined;
            fly?: number | undefined;
            hover?: number | undefined;
            swim?: number | undefined;
        }>;
        string: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        string: string;
        values: {
            walk?: number | undefined;
            burrow?: number | undefined;
            climb?: number | undefined;
            fly?: number | undefined;
            hover?: number | undefined;
            swim?: number | undefined;
        };
    }, {
        string: string;
        values: {
            walk?: number | undefined;
            burrow?: number | undefined;
            climb?: number | undefined;
            fly?: number | undefined;
            hover?: number | undefined;
            swim?: number | undefined;
        };
    }>>;
    savingThrows: z.ZodOptional<z.ZodObject<{
        values: z.ZodObject<{
            STR: z.ZodOptional<z.ZodNumber>;
            DEX: z.ZodOptional<z.ZodNumber>;
            CON: z.ZodOptional<z.ZodNumber>;
            INT: z.ZodOptional<z.ZodNumber>;
            WIS: z.ZodOptional<z.ZodNumber>;
            CHA: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            STR?: number | undefined;
            DEX?: number | undefined;
            CON?: number | undefined;
            INT?: number | undefined;
            WIS?: number | undefined;
            CHA?: number | undefined;
        }, {
            STR?: number | undefined;
            DEX?: number | undefined;
            CON?: number | undefined;
            INT?: number | undefined;
            WIS?: number | undefined;
            CHA?: number | undefined;
        }>;
        string: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        string: string;
        values: {
            STR?: number | undefined;
            DEX?: number | undefined;
            CON?: number | undefined;
            INT?: number | undefined;
            WIS?: number | undefined;
            CHA?: number | undefined;
        };
    }, {
        string: string;
        values: {
            STR?: number | undefined;
            DEX?: number | undefined;
            CON?: number | undefined;
            INT?: number | undefined;
            WIS?: number | undefined;
            CHA?: number | undefined;
        };
    }>>;
    skills: z.ZodOptional<z.ZodObject<{
        values: z.ZodRecord<z.ZodString, z.ZodNumber>;
        string: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        string: string;
        values: Record<string, number>;
    }, {
        string: string;
        values: Record<string, number>;
    }>>;
    resistances: z.ZodOptional<z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["background", "spell", "trait", "race", "class", "template", "type", "subtype", "language", "skill", "savingThrow", "condition", "resistance", "immunity", "vulnerability", "conditionImmunity"]>>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }, {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }>, "many">>;
    immunities: z.ZodOptional<z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["background", "spell", "trait", "race", "class", "template", "type", "subtype", "language", "skill", "savingThrow", "condition", "resistance", "immunity", "vulnerability", "conditionImmunity"]>>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }, {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }>, "many">>;
    vulnerabilities: z.ZodOptional<z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["background", "spell", "trait", "race", "class", "template", "type", "subtype", "language", "skill", "savingThrow", "condition", "resistance", "immunity", "vulnerability", "conditionImmunity"]>>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }, {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }>, "many">>;
    conditionImmunities: z.ZodOptional<z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["background", "spell", "trait", "race", "class", "template", "type", "subtype", "language", "skill", "savingThrow", "condition", "resistance", "immunity", "vulnerability", "conditionImmunity"]>>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }, {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }>, "many">>;
    senses: z.ZodOptional<z.ZodObject<{
        values: z.ZodRecord<z.ZodString, z.ZodNumber>;
        string: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        string: string;
        values: Record<string, number>;
    }, {
        string: string;
        values: Record<string, number>;
    }>>;
    languages: z.ZodObject<{
        values: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodEnum<["background", "spell", "trait", "race", "class", "template", "type", "subtype", "language", "skill", "savingThrow", "condition", "resistance", "immunity", "vulnerability", "conditionImmunity"]>>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
            id?: number | undefined;
        }>, "many">;
        string: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        string: string;
        values: {
            string: string;
            type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
            id?: number | undefined;
        }[];
    }, {
        string: string;
        values: {
            string: string;
            type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
            id?: number | undefined;
        }[];
    }>;
    isBlind: z.ZodOptional<z.ZodBoolean>;
    canSpeak: z.ZodOptional<z.ZodBoolean>;
    telepathy: z.ZodOptional<z.ZodNumber>;
    traits: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        tag: z.ZodString;
        priority: z.ZodNumber;
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        description: string;
        tag: string;
        priority: number;
    }, {
        name: string;
        description: string;
        tag: string;
        priority: number;
    }>, "many">>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        tag: z.ZodString;
        priority: z.ZodNumber;
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        description: string;
        tag: string;
        priority: number;
    }, {
        name: string;
        description: string;
        tag: string;
        priority: number;
    }>, "many">>;
    bonusActions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        tag: z.ZodString;
        priority: z.ZodNumber;
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        description: string;
        tag: string;
        priority: number;
    }, {
        name: string;
        description: string;
        tag: string;
        priority: number;
    }>, "many">>;
    reactions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        tag: z.ZodString;
        priority: z.ZodNumber;
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        description: string;
        tag: string;
        priority: number;
    }, {
        name: string;
        description: string;
        tag: string;
        priority: number;
    }>, "many">>;
    legendaryActions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        tag: z.ZodString;
        priority: z.ZodNumber;
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        description: string;
        tag: string;
        priority: number;
    }, {
        name: string;
        description: string;
        tag: string;
        priority: number;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    };
    level: number;
    languages: {
        string: string;
        values: {
            string: string;
            type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
            id?: number | undefined;
        }[];
    };
    AC: {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    };
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
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }[] | undefined;
    isSwarm?: boolean | undefined;
    sizeSingleEntityOfSwarm?: {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    } | undefined;
    subtypes?: {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }[] | undefined;
    speeds?: {
        string: string;
        values: {
            walk?: number | undefined;
            burrow?: number | undefined;
            climb?: number | undefined;
            fly?: number | undefined;
            hover?: number | undefined;
            swim?: number | undefined;
        };
    } | undefined;
    savingThrows?: {
        string: string;
        values: {
            STR?: number | undefined;
            DEX?: number | undefined;
            CON?: number | undefined;
            INT?: number | undefined;
            WIS?: number | undefined;
            CHA?: number | undefined;
        };
    } | undefined;
    skills?: {
        string: string;
        values: Record<string, number>;
    } | undefined;
    resistances?: {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }[] | undefined;
    immunities?: {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }[] | undefined;
    vulnerabilities?: {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }[] | undefined;
    conditionImmunities?: {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }[] | undefined;
    senses?: {
        string: string;
        values: Record<string, number>;
    } | undefined;
    isBlind?: boolean | undefined;
    canSpeak?: boolean | undefined;
    telepathy?: number | undefined;
    traits?: {
        name: string;
        description: string;
        tag: string;
        priority: number;
    }[] | undefined;
    actions?: {
        name: string;
        description: string;
        tag: string;
        priority: number;
    }[] | undefined;
    bonusActions?: {
        name: string;
        description: string;
        tag: string;
        priority: number;
    }[] | undefined;
    reactions?: {
        name: string;
        description: string;
        tag: string;
        priority: number;
    }[] | undefined;
    legendaryActions?: {
        name: string;
        description: string;
        tag: string;
        priority: number;
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
    languages: {
        string: string;
        values: {
            string: string;
            type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
            id?: number | undefined;
        }[];
    };
    AC: {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    };
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
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }[] | undefined;
    isSwarm?: boolean | undefined;
    sizeSingleEntityOfSwarm?: {
        string: string;
        number: number;
        array?: string[] | undefined;
        id?: number | undefined;
    } | undefined;
    subtypes?: {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }[] | undefined;
    speeds?: {
        string: string;
        values: {
            walk?: number | undefined;
            burrow?: number | undefined;
            climb?: number | undefined;
            fly?: number | undefined;
            hover?: number | undefined;
            swim?: number | undefined;
        };
    } | undefined;
    savingThrows?: {
        string: string;
        values: {
            STR?: number | undefined;
            DEX?: number | undefined;
            CON?: number | undefined;
            INT?: number | undefined;
            WIS?: number | undefined;
            CHA?: number | undefined;
        };
    } | undefined;
    skills?: {
        string: string;
        values: Record<string, number>;
    } | undefined;
    resistances?: {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }[] | undefined;
    immunities?: {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }[] | undefined;
    vulnerabilities?: {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }[] | undefined;
    conditionImmunities?: {
        string: string;
        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
        id?: number | undefined;
    }[] | undefined;
    senses?: {
        string: string;
        values: Record<string, number>;
    } | undefined;
    isBlind?: boolean | undefined;
    canSpeak?: boolean | undefined;
    telepathy?: number | undefined;
    traits?: {
        name: string;
        description: string;
        tag: string;
        priority: number;
    }[] | undefined;
    actions?: {
        name: string;
        description: string;
        tag: string;
        priority: number;
    }[] | undefined;
    bonusActions?: {
        name: string;
        description: string;
        tag: string;
        priority: number;
    }[] | undefined;
    reactions?: {
        name: string;
        description: string;
        tag: string;
        priority: number;
    }[] | undefined;
    legendaryActions?: {
        name: string;
        description: string;
        tag: string;
        priority: number;
    }[] | undefined;
}>;
export type Statistics = z.infer<typeof statisticsObject>;
//# sourceMappingURL=statistics.d.ts.map