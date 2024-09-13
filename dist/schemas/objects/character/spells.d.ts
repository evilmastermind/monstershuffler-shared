import { z } from 'zod';
export declare const spellGroupObject: z.ZodObject<{
    tag: z.ZodString;
    availableAt: z.ZodOptional<z.ZodNumber>;
    level: z.ZodOptional<z.ZodNumber>;
    times: z.ZodOptional<z.ZodString>;
    timesMax: z.ZodOptional<z.ZodString>;
    spells: z.ZodUnion<[z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
        availableAt: z.ZodOptional<z.ZodNumber>;
        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
        properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
        properties?: Record<string, string | number> | undefined;
    }, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
        properties?: Record<string, string | number> | undefined;
    }>, "many">, z.ZodObject<{
        choice: z.ZodObject<{
            type: z.ZodLiteral<"random">;
            resultType: z.ZodEnum<["object", "nameId"]>;
            source: z.ZodEnum<["objects", "languages", "skills"]>;
            number: z.ZodOptional<z.ZodNumber>;
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
                type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
                availableAt: z.ZodOptional<z.ZodNumber>;
                availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
            }, {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
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
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
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
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
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
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
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
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
            }[] | undefined;
        };
    }>, z.ZodObject<{
        choice: z.ZodObject<{
            type: z.ZodLiteral<"list">;
            number: z.ZodNumber;
            list: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodNumber>;
                value: z.ZodString;
                type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
                availableAt: z.ZodOptional<z.ZodNumber>;
                availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
            }, {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
            }>, "many">;
            isRepeatable: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            number: number;
            type: "list";
            list: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
            }[];
            isRepeatable?: boolean | undefined;
        }, {
            number: number;
            type: "list";
            list: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
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
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
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
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
            }[];
            isRepeatable?: boolean | undefined;
        };
    }>]>;
}, "strict", z.ZodTypeAny, {
    tag: string;
    spells: ({
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
        properties?: Record<string, string | number> | undefined;
    }[] | {
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
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
            }[] | undefined;
        };
    } | {
        choice: {
            number: number;
            type: "list";
            list: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
            }[];
            isRepeatable?: boolean | undefined;
        };
    }) & ({
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
        properties?: Record<string, string | number> | undefined;
    }[] | {
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
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
            }[] | undefined;
        };
    } | {
        choice: {
            number: number;
            type: "list";
            list: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
            }[];
            isRepeatable?: boolean | undefined;
        };
    } | undefined);
    availableAt?: number | undefined;
    level?: number | undefined;
    times?: string | undefined;
    timesMax?: string | undefined;
}, {
    tag: string;
    spells: ({
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
        properties?: Record<string, string | number> | undefined;
    }[] | {
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
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
            }[] | undefined;
        };
    } | {
        choice: {
            number: number;
            type: "list";
            list: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
            }[];
            isRepeatable?: boolean | undefined;
        };
    }) & ({
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
        properties?: Record<string, string | number> | undefined;
    }[] | {
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
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
            }[] | undefined;
        };
    } | {
        choice: {
            number: number;
            type: "list";
            list: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
            }[];
            isRepeatable?: boolean | undefined;
        };
    } | undefined);
    availableAt?: number | undefined;
    level?: number | undefined;
    times?: string | undefined;
    timesMax?: string | undefined;
}>;
export declare const spellsObject: z.ZodObject<{
    hasSlots: z.ZodOptional<z.ZodBoolean>;
    ability: z.ZodOptional<z.ZodEnum<["STR", "DEX", "CON", "INT", "WIS", "CHA"]>>;
    availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
    groups: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodString;
        availableAt: z.ZodOptional<z.ZodNumber>;
        level: z.ZodOptional<z.ZodNumber>;
        times: z.ZodOptional<z.ZodString>;
        timesMax: z.ZodOptional<z.ZodString>;
        spells: z.ZodUnion<[z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            value: z.ZodString;
            type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
            availableAt: z.ZodOptional<z.ZodNumber>;
            availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            properties?: Record<string, string | number> | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            properties?: Record<string, string | number> | undefined;
        }>, "many">, z.ZodObject<{
            choice: z.ZodObject<{
                type: z.ZodLiteral<"random">;
                resultType: z.ZodEnum<["object", "nameId"]>;
                source: z.ZodEnum<["objects", "languages", "skills"]>;
                number: z.ZodOptional<z.ZodNumber>;
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
                    type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
                    availableAt: z.ZodOptional<z.ZodNumber>;
                    availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
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
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
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
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
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
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
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
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[] | undefined;
            };
        }>, z.ZodObject<{
            choice: z.ZodObject<{
                type: z.ZodLiteral<"list">;
                number: z.ZodNumber;
                list: z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodNumber>;
                    value: z.ZodString;
                    type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
                    availableAt: z.ZodOptional<z.ZodNumber>;
                    availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }>, "many">;
                isRepeatable: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            }, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
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
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
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
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        }>]>;
    }, "strict", z.ZodTypeAny, {
        tag: string;
        spells: ({
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            properties?: Record<string, string | number> | undefined;
        }[] | {
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
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[] | undefined;
            };
        } | {
            choice: {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        }) & ({
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            properties?: Record<string, string | number> | undefined;
        }[] | {
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
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[] | undefined;
            };
        } | {
            choice: {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined);
        availableAt?: number | undefined;
        level?: number | undefined;
        times?: string | undefined;
        timesMax?: string | undefined;
    }, {
        tag: string;
        spells: ({
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            properties?: Record<string, string | number> | undefined;
        }[] | {
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
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[] | undefined;
            };
        } | {
            choice: {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        }) & ({
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            properties?: Record<string, string | number> | undefined;
        }[] | {
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
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[] | undefined;
            };
        } | {
            choice: {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined);
        availableAt?: number | undefined;
        level?: number | undefined;
        times?: string | undefined;
        timesMax?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    hasSlots?: boolean | undefined;
    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
    availableUnit?: "level" | "cr" | undefined;
    groups?: {
        tag: string;
        spells: ({
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            properties?: Record<string, string | number> | undefined;
        }[] | {
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
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[] | undefined;
            };
        } | {
            choice: {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        }) & ({
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            properties?: Record<string, string | number> | undefined;
        }[] | {
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
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[] | undefined;
            };
        } | {
            choice: {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined);
        availableAt?: number | undefined;
        level?: number | undefined;
        times?: string | undefined;
        timesMax?: string | undefined;
    }[] | undefined;
}, {
    hasSlots?: boolean | undefined;
    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
    availableUnit?: "level" | "cr" | undefined;
    groups?: {
        tag: string;
        spells: ({
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            properties?: Record<string, string | number> | undefined;
        }[] | {
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
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[] | undefined;
            };
        } | {
            choice: {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        }) & ({
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            properties?: Record<string, string | number> | undefined;
        }[] | {
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
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[] | undefined;
            };
        } | {
            choice: {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined);
        availableAt?: number | undefined;
        level?: number | undefined;
        times?: string | undefined;
        timesMax?: string | undefined;
    }[] | undefined;
}>;
export declare const spellObject: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    level: z.ZodString;
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
    level: string;
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
    level: string;
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
//# sourceMappingURL=spells.d.ts.map