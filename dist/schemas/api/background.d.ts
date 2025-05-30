import { z } from 'zod';
export declare const sGetBackgroundListResponse: z.ZodObject<{
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
export declare const sGetBackgroundResponse: z.ZodObject<{
    object: z.ZodObject<{
        sheet: z.ZodOptional<z.ZodObject<{
            images: z.ZodArray<z.ZodObject<{
                url: z.ZodString;
                artist: z.ZodOptional<z.ZodString>;
                artistUrl: z.ZodOptional<z.ZodString>;
                canvasHeightPx: z.ZodOptional<z.ZodNumber>;
                canvasWidthPx: z.ZodOptional<z.ZodNumber>;
                sheetWidthPx: z.ZodOptional<z.ZodNumber>;
                imageHeightPx: z.ZodOptional<z.ZodNumber>;
                imagePositionTopPx: z.ZodOptional<z.ZodNumber>;
                imagePositionLeftPx: z.ZodOptional<z.ZodNumber>;
                mask: z.ZodOptional<z.ZodString>;
                token: z.ZodOptional<z.ZodObject<{
                    topPx: z.ZodNumber;
                    leftPx: z.ZodNumber;
                    widthPx: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                }, {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                }>>;
            }, "strip", z.ZodTypeAny, {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }, {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }>, "many">;
            layout: z.ZodOptional<z.ZodString>;
            showRoleplayStats: z.ZodOptional<z.ZodBoolean>;
            decoration: z.ZodOptional<z.ZodString>;
            statBlockOffsetPx: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            images: {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }[];
            layout?: string | undefined;
            showRoleplayStats?: boolean | undefined;
            decoration?: string | undefined;
            statBlockOffsetPx?: number | undefined;
        }, {
            images: {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }[];
            layout?: string | undefined;
            showRoleplayStats?: boolean | undefined;
            decoration?: string | undefined;
            statBlockOffsetPx?: number | undefined;
        }>>;
        searchTags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        environments: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        backstory: z.ZodOptional<z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>>;
        enableGenerator: z.ZodOptional<z.ZodBoolean>;
        legendaryActionsMax: z.ZodOptional<z.ZodString>;
        spells: z.ZodOptional<z.ZodObject<{
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }, {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }, {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }>, "many">;
                        isRepeatable: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    }, {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                }>]>;
            }, "strict", z.ZodTypeAny, {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }, {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            availableUnit?: "level" | "cr" | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            hasSlots?: boolean | undefined;
            groups?: {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }[] | undefined;
        }, {
            availableUnit?: "level" | "cr" | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            hasSlots?: boolean | undefined;
            groups?: {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }[] | undefined;
        }>>;
        bonuses: z.ZodOptional<z.ZodObject<{
            HPBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            ACBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            sizeBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            walkBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            burrowBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            climbBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            flyBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            hoverBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            swimBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            STRBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            DEXBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            CONBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            INTBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            WISBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            CHABonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            STRSaveBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            DEXSaveBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            CONSaveBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            INTSaveBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            WISSaveBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            CHASaveBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            AthleticsBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            AcrobaticsBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            SleightOfHandBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            StealthBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            ArcanaBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            HistoryBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            InvestigationBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            NatureBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            ReligionBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            AnimalHandlingBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            InsightBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            MedicineBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            PerceptionBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            SurvivalBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            DeceptionBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            IntimidationBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            PerformanceBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            PersuasionBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            blindsightBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            darkvisionBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            tremorsenseBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            truesightBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            rangedAttackBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            rangedDamageBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            meleeAttackBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            meleeDamageBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            spellAttackBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            spellDamageBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            weaponAttackBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            weaponDamageBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            HPBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ACBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            sizeBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            walkBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            burrowBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            climbBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            flyBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            hoverBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            swimBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHABonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHASaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AthleticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AcrobaticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SleightOfHandBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            StealthBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ArcanaBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            HistoryBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InvestigationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            NatureBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ReligionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AnimalHandlingBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            MedicineBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SurvivalBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DeceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            IntimidationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerformanceBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PersuasionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            blindsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            darkvisionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            tremorsenseBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            truesightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
        }, {
            HPBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ACBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            sizeBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            walkBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            burrowBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            climbBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            flyBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            hoverBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            swimBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHABonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHASaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AthleticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AcrobaticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SleightOfHandBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            StealthBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ArcanaBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            HistoryBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InvestigationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            NatureBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ReligionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AnimalHandlingBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            MedicineBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SurvivalBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DeceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            IntimidationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerformanceBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PersuasionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            blindsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            darkvisionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            tremorsenseBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            truesightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
        }>>;
        actions: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            tag: z.ZodString;
            priority: z.ZodOptional<z.ZodNumber>;
            variants: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodOptional<z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>>;
                charges: z.ZodOptional<z.ZodString>;
                recharge: z.ZodOptional<z.ZodEnum<["turn", "short", "day", "week", "month", "3-6", "4-6", "5-6", "6-6", "spellGroup", "spellSlot"]>>;
                description: z.ZodString;
                availableAt: z.ZodOptional<z.ZodNumber>;
                ability: z.ZodOptional<z.ZodEnum<["STR", "DEX", "CON", "INT", "WIS", "CHA"]>>;
                cost: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }, {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }>, "many">;
            actionType: z.ZodOptional<z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>>;
            availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
            availableUntil: z.ZodOptional<z.ZodNumber>;
            subType: z.ZodOptional<z.ZodString>;
            source: z.ZodOptional<z.ZodString>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            values: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                name: z.ZodString;
                type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["", "target", "attack", "creature", "humanoid", "round", "minute", "hour", "day", "DC Strength", "DC Dexterity", "DC Constitution", "DC Intelligence", "DC Wisdom", "DC Charisma", "DC Strength saving throw", "DC Dexterity saving throw", "DC Constitution saving throw", "DC Intelligence saving throw", "DC Wisdom saving throw", "DC Charisma saving throw", "hit point", "temporary hit point", "+", "-st-nd-rd", "feet", "-feet", "time", "damage"]>, z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>]>>;
                expression: z.ZodOptional<z.ZodString>;
                dice: z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    diceIncrement: z.ZodOptional<z.ZodNumber>;
                    availableAt: z.ZodOptional<z.ZodNumber>;
                    availableUntil: z.ZodOptional<z.ZodNumber>;
                    availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                    unitInterval: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                }, {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            }, {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["", "target", "attack", "creature", "humanoid", "round", "minute", "hour", "day", "DC Strength", "DC Dexterity", "DC Constitution", "DC Intelligence", "DC Wisdom", "DC Charisma", "DC Strength saving throw", "DC Dexterity saving throw", "DC Constitution saving throw", "DC Intelligence saving throw", "DC Wisdom saving throw", "DC Charisma saving throw", "hit point", "temporary hit point", "+", "-st-nd-rd", "feet", "-feet", "time", "damage"]>, z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>]>>;
                expression: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            }, {
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["", "target", "attack", "creature", "humanoid", "round", "minute", "hour", "day", "DC Strength", "DC Dexterity", "DC Constitution", "DC Intelligence", "DC Wisdom", "DC Charisma", "DC Strength saving throw", "DC Dexterity saving throw", "DC Constitution saving throw", "DC Intelligence saving throw", "DC Wisdom saving throw", "DC Charisma saving throw", "hit point", "temporary hit point", "+", "-st-nd-rd", "feet", "-feet", "time", "damage"]>, z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>]>>;
                incrProgression: z.ZodObject<{
                    unitInterval: z.ZodNumber;
                    unitIncrement: z.ZodNumber;
                    availableAt: z.ZodNumber;
                    availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                    valueBase: z.ZodNumber;
                    valueIncrement: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            }, {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            }>]>, "many">>;
            attacks: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                replaceName: z.ZodOptional<z.ZodBoolean>;
                attributes: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                    id: z.ZodOptional<z.ZodNumber>;
                    name: z.ZodOptional<z.ZodString>;
                    cost: z.ZodOptional<z.ZodString>;
                    weight: z.ZodOptional<z.ZodString>;
                    damageType: z.ZodOptional<z.ZodString>;
                    special: z.ZodOptional<z.ZodString>;
                    dice: z.ZodOptional<z.ZodString>;
                    sides: z.ZodOptional<z.ZodString>;
                    diceV: z.ZodOptional<z.ZodString>;
                    sidesV: z.ZodOptional<z.ZodString>;
                    range: z.ZodOptional<z.ZodString>;
                    rangeMax: z.ZodOptional<z.ZodString>;
                    reach: z.ZodOptional<z.ZodString>;
                    targets: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                }, {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                }>, z.ZodObject<{
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }, {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                }>]>>;
                enchantments: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodOptional<z.ZodString>;
                    type: z.ZodOptional<z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>>;
                    expression: z.ZodOptional<z.ZodString>;
                    dice: z.ZodOptional<z.ZodObject<{
                        dice: z.ZodNumber;
                        sides: z.ZodNumber;
                        diceIncrement: z.ZodOptional<z.ZodNumber>;
                        availableAt: z.ZodOptional<z.ZodNumber>;
                        availableUntil: z.ZodOptional<z.ZodNumber>;
                        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                        unitInterval: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    }, {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }, {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }, {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            tag: string;
            variants: {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }[];
            id?: number | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            })[] | undefined;
            availableUnit?: "level" | "cr" | undefined;
            source?: string | undefined;
            availableUntil?: number | undefined;
            priority?: number | undefined;
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            subType?: string | undefined;
            tags?: string[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }, {
            tag: string;
            variants: {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }[];
            id?: number | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            })[] | undefined;
            availableUnit?: "level" | "cr" | undefined;
            source?: string | undefined;
            availableUntil?: number | undefined;
            priority?: number | undefined;
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            subType?: string | undefined;
            tags?: string[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }>, z.ZodObject<{
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        }>]>, "many">>;
        canSpeak: z.ZodOptional<z.ZodBoolean>;
        telepathy: z.ZodOptional<z.ZodString>;
        languages: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }>, "many">;
                isRepeatable: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            }, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        }>]>>;
        senses: z.ZodOptional<z.ZodObject<{
            blindsight: z.ZodOptional<z.ZodString>;
            darkvision: z.ZodOptional<z.ZodString>;
            tremorsense: z.ZodOptional<z.ZodString>;
            truesight: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            blindsight?: string | undefined;
            darkvision?: string | undefined;
            tremorsense?: string | undefined;
            truesight?: string | undefined;
        }, {
            blindsight?: string | undefined;
            darkvision?: string | undefined;
            tremorsense?: string | undefined;
            truesight?: string | undefined;
        }>>;
        isBlind: z.ZodOptional<z.ZodBoolean>;
        resistances: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">>;
        immunities: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">>;
        vulnerabilities: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">>;
        conditionImmunities: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">>;
        skills: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }>, "many">;
                isRepeatable: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            }, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        }>]>>;
        savingThrows: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">>;
        abilityScoresLimit: z.ZodOptional<z.ZodNumber>;
        speeds: z.ZodOptional<z.ZodObject<{
            walk: z.ZodOptional<z.ZodString>;
            burrow: z.ZodOptional<z.ZodString>;
            climb: z.ZodOptional<z.ZodString>;
            fly: z.ZodOptional<z.ZodString>;
            hover: z.ZodOptional<z.ZodString>;
            swim: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            walk?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        }, {
            walk?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        }>>;
        subtypes: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">>;
        alignmentModifiers: z.ZodOptional<z.ZodTuple<[z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber], null>, z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber], null>], null>>;
        armor: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            AC: z.ZodString;
            name: z.ZodString;
            isAutomaticCalcDisabled: z.ZodOptional<z.ZodBoolean>;
            cost: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodEnum<["light", "medium", "heavy"]>>;
            maxDex: z.ZodOptional<z.ZodString>;
            minStr: z.ZodOptional<z.ZodString>;
            weight: z.ZodOptional<z.ZodString>;
            stealthDis: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            AC: string;
            id?: number | undefined;
            cost?: string | undefined;
            weight?: string | undefined;
            type?: "light" | "medium" | "heavy" | undefined;
            isAutomaticCalcDisabled?: boolean | undefined;
            maxDex?: string | undefined;
            minStr?: string | undefined;
            stealthDis?: boolean | undefined;
        }, {
            name: string;
            AC: string;
            id?: number | undefined;
            cost?: string | undefined;
            weight?: string | undefined;
            type?: "light" | "medium" | "heavy" | undefined;
            isAutomaticCalcDisabled?: boolean | undefined;
            maxDex?: string | undefined;
            minStr?: string | undefined;
            stealthDis?: boolean | undefined;
        }>, z.ZodObject<{
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        }>]>>;
        id: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        femaleName: z.ZodString;
        workplace: z.ZodString;
        compatibleAges: z.ZodArray<z.ZodEnum<["child", "adolescent", "young adult", "adult", "middle-aged", "elderly", "venerable"]>, "many">;
    }, "strict", z.ZodTypeAny, {
        name: string;
        femaleName: string;
        workplace: string;
        compatibleAges: ("child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable")[];
        id?: number | undefined;
        armor?: {
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            name: string;
            AC: string;
            id?: number | undefined;
            cost?: string | undefined;
            weight?: string | undefined;
            type?: "light" | "medium" | "heavy" | undefined;
            isAutomaticCalcDisabled?: boolean | undefined;
            maxDex?: string | undefined;
            minStr?: string | undefined;
            stealthDis?: boolean | undefined;
        } | undefined;
        languages?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        skills?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        description?: string | undefined;
        spells?: {
            availableUnit?: "level" | "cr" | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            hasSlots?: boolean | undefined;
            groups?: {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }[] | undefined;
        } | undefined;
        subtypes?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        speeds?: {
            walk?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        } | undefined;
        savingThrows?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        resistances?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        immunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        vulnerabilities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        conditionImmunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        senses?: {
            blindsight?: string | undefined;
            darkvision?: string | undefined;
            tremorsense?: string | undefined;
            truesight?: string | undefined;
        } | undefined;
        isBlind?: boolean | undefined;
        canSpeak?: boolean | undefined;
        telepathy?: string | undefined;
        actions?: ({
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            tag: string;
            variants: {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }[];
            id?: number | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            })[] | undefined;
            availableUnit?: "level" | "cr" | undefined;
            source?: string | undefined;
            availableUntil?: number | undefined;
            priority?: number | undefined;
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            subType?: string | undefined;
            tags?: string[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        })[] | undefined;
        legendaryActionsMax?: string | undefined;
        sheet?: {
            images: {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }[];
            layout?: string | undefined;
            showRoleplayStats?: boolean | undefined;
            decoration?: string | undefined;
            statBlockOffsetPx?: number | undefined;
        } | undefined;
        searchTags?: string[] | undefined;
        environments?: string[] | undefined;
        backstory?: z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        bonuses?: {
            HPBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ACBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            sizeBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            walkBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            burrowBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            climbBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            flyBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            hoverBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            swimBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHABonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHASaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AthleticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AcrobaticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SleightOfHandBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            StealthBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ArcanaBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            HistoryBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InvestigationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            NatureBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ReligionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AnimalHandlingBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            MedicineBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SurvivalBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DeceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            IntimidationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerformanceBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PersuasionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            blindsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            darkvisionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            tremorsenseBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            truesightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
        } | undefined;
        abilityScoresLimit?: number | undefined;
        alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
        enableGenerator?: boolean | undefined;
    }, {
        name: string;
        femaleName: string;
        workplace: string;
        compatibleAges: ("child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable")[];
        id?: number | undefined;
        armor?: {
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            name: string;
            AC: string;
            id?: number | undefined;
            cost?: string | undefined;
            weight?: string | undefined;
            type?: "light" | "medium" | "heavy" | undefined;
            isAutomaticCalcDisabled?: boolean | undefined;
            maxDex?: string | undefined;
            minStr?: string | undefined;
            stealthDis?: boolean | undefined;
        } | undefined;
        languages?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        skills?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        description?: string | undefined;
        spells?: {
            availableUnit?: "level" | "cr" | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            hasSlots?: boolean | undefined;
            groups?: {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }[] | undefined;
        } | undefined;
        subtypes?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        speeds?: {
            walk?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        } | undefined;
        savingThrows?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        resistances?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        immunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        vulnerabilities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        conditionImmunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        senses?: {
            blindsight?: string | undefined;
            darkvision?: string | undefined;
            tremorsense?: string | undefined;
            truesight?: string | undefined;
        } | undefined;
        isBlind?: boolean | undefined;
        canSpeak?: boolean | undefined;
        telepathy?: string | undefined;
        actions?: ({
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            tag: string;
            variants: {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }[];
            id?: number | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            })[] | undefined;
            availableUnit?: "level" | "cr" | undefined;
            source?: string | undefined;
            availableUntil?: number | undefined;
            priority?: number | undefined;
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            subType?: string | undefined;
            tags?: string[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        })[] | undefined;
        legendaryActionsMax?: string | undefined;
        sheet?: {
            images: {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }[];
            layout?: string | undefined;
            showRoleplayStats?: boolean | undefined;
            decoration?: string | undefined;
            statBlockOffsetPx?: number | undefined;
        } | undefined;
        searchTags?: string[] | undefined;
        environments?: string[] | undefined;
        backstory?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        bonuses?: {
            HPBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ACBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            sizeBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            walkBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            burrowBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            climbBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            flyBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            hoverBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            swimBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHABonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHASaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AthleticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AcrobaticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SleightOfHandBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            StealthBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ArcanaBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            HistoryBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InvestigationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            NatureBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ReligionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AnimalHandlingBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            MedicineBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SurvivalBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DeceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            IntimidationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerformanceBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PersuasionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            blindsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            darkvisionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            tremorsenseBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            truesightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
        } | undefined;
        abilityScoresLimit?: number | undefined;
        alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
        enableGenerator?: boolean | undefined;
    }>;
    id: z.ZodNumber;
    name: z.ZodString;
    femaleName: z.ZodString;
    age: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    object: {
        name: string;
        femaleName: string;
        workplace: string;
        compatibleAges: ("child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable")[];
        id?: number | undefined;
        armor?: {
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            name: string;
            AC: string;
            id?: number | undefined;
            cost?: string | undefined;
            weight?: string | undefined;
            type?: "light" | "medium" | "heavy" | undefined;
            isAutomaticCalcDisabled?: boolean | undefined;
            maxDex?: string | undefined;
            minStr?: string | undefined;
            stealthDis?: boolean | undefined;
        } | undefined;
        languages?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        skills?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        description?: string | undefined;
        spells?: {
            availableUnit?: "level" | "cr" | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            hasSlots?: boolean | undefined;
            groups?: {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }[] | undefined;
        } | undefined;
        subtypes?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        speeds?: {
            walk?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        } | undefined;
        savingThrows?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        resistances?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        immunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        vulnerabilities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        conditionImmunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        senses?: {
            blindsight?: string | undefined;
            darkvision?: string | undefined;
            tremorsense?: string | undefined;
            truesight?: string | undefined;
        } | undefined;
        isBlind?: boolean | undefined;
        canSpeak?: boolean | undefined;
        telepathy?: string | undefined;
        actions?: ({
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            tag: string;
            variants: {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }[];
            id?: number | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            })[] | undefined;
            availableUnit?: "level" | "cr" | undefined;
            source?: string | undefined;
            availableUntil?: number | undefined;
            priority?: number | undefined;
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            subType?: string | undefined;
            tags?: string[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        })[] | undefined;
        legendaryActionsMax?: string | undefined;
        sheet?: {
            images: {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }[];
            layout?: string | undefined;
            showRoleplayStats?: boolean | undefined;
            decoration?: string | undefined;
            statBlockOffsetPx?: number | undefined;
        } | undefined;
        searchTags?: string[] | undefined;
        environments?: string[] | undefined;
        backstory?: z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        bonuses?: {
            HPBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ACBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            sizeBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            walkBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            burrowBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            climbBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            flyBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            hoverBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            swimBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHABonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHASaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AthleticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AcrobaticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SleightOfHandBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            StealthBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ArcanaBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            HistoryBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InvestigationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            NatureBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ReligionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AnimalHandlingBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            MedicineBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SurvivalBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DeceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            IntimidationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerformanceBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PersuasionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            blindsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            darkvisionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            tremorsenseBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            truesightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
        } | undefined;
        abilityScoresLimit?: number | undefined;
        alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
        enableGenerator?: boolean | undefined;
    };
    id: number;
    name: string;
    description: string;
    age: string;
    femaleName: string;
}, {
    object: {
        name: string;
        femaleName: string;
        workplace: string;
        compatibleAges: ("child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable")[];
        id?: number | undefined;
        armor?: {
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            name: string;
            AC: string;
            id?: number | undefined;
            cost?: string | undefined;
            weight?: string | undefined;
            type?: "light" | "medium" | "heavy" | undefined;
            isAutomaticCalcDisabled?: boolean | undefined;
            maxDex?: string | undefined;
            minStr?: string | undefined;
            stealthDis?: boolean | undefined;
        } | undefined;
        languages?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        skills?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        description?: string | undefined;
        spells?: {
            availableUnit?: "level" | "cr" | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            hasSlots?: boolean | undefined;
            groups?: {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }[] | undefined;
        } | undefined;
        subtypes?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        speeds?: {
            walk?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        } | undefined;
        savingThrows?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        resistances?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        immunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        vulnerabilities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        conditionImmunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        senses?: {
            blindsight?: string | undefined;
            darkvision?: string | undefined;
            tremorsense?: string | undefined;
            truesight?: string | undefined;
        } | undefined;
        isBlind?: boolean | undefined;
        canSpeak?: boolean | undefined;
        telepathy?: string | undefined;
        actions?: ({
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            tag: string;
            variants: {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }[];
            id?: number | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            })[] | undefined;
            availableUnit?: "level" | "cr" | undefined;
            source?: string | undefined;
            availableUntil?: number | undefined;
            priority?: number | undefined;
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            subType?: string | undefined;
            tags?: string[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        })[] | undefined;
        legendaryActionsMax?: string | undefined;
        sheet?: {
            images: {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }[];
            layout?: string | undefined;
            showRoleplayStats?: boolean | undefined;
            decoration?: string | undefined;
            statBlockOffsetPx?: number | undefined;
        } | undefined;
        searchTags?: string[] | undefined;
        environments?: string[] | undefined;
        backstory?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        bonuses?: {
            HPBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ACBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            sizeBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            walkBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            burrowBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            climbBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            flyBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            hoverBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            swimBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHABonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHASaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AthleticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AcrobaticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SleightOfHandBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            StealthBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ArcanaBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            HistoryBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InvestigationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            NatureBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ReligionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AnimalHandlingBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            MedicineBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SurvivalBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DeceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            IntimidationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerformanceBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PersuasionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            blindsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            darkvisionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            tremorsenseBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            truesightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
        } | undefined;
        abilityScoresLimit?: number | undefined;
        alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
        enableGenerator?: boolean | undefined;
    };
    id: number;
    name: string;
    description: string;
    age: string;
    femaleName: string;
}>;
export declare const sPostBackgroundBody: z.ZodObject<{
    object: z.ZodObject<{
        sheet: z.ZodOptional<z.ZodObject<{
            images: z.ZodArray<z.ZodObject<{
                url: z.ZodString;
                artist: z.ZodOptional<z.ZodString>;
                artistUrl: z.ZodOptional<z.ZodString>;
                canvasHeightPx: z.ZodOptional<z.ZodNumber>;
                canvasWidthPx: z.ZodOptional<z.ZodNumber>;
                sheetWidthPx: z.ZodOptional<z.ZodNumber>;
                imageHeightPx: z.ZodOptional<z.ZodNumber>;
                imagePositionTopPx: z.ZodOptional<z.ZodNumber>;
                imagePositionLeftPx: z.ZodOptional<z.ZodNumber>;
                mask: z.ZodOptional<z.ZodString>;
                token: z.ZodOptional<z.ZodObject<{
                    topPx: z.ZodNumber;
                    leftPx: z.ZodNumber;
                    widthPx: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                }, {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                }>>;
            }, "strip", z.ZodTypeAny, {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }, {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }>, "many">;
            layout: z.ZodOptional<z.ZodString>;
            showRoleplayStats: z.ZodOptional<z.ZodBoolean>;
            decoration: z.ZodOptional<z.ZodString>;
            statBlockOffsetPx: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            images: {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }[];
            layout?: string | undefined;
            showRoleplayStats?: boolean | undefined;
            decoration?: string | undefined;
            statBlockOffsetPx?: number | undefined;
        }, {
            images: {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }[];
            layout?: string | undefined;
            showRoleplayStats?: boolean | undefined;
            decoration?: string | undefined;
            statBlockOffsetPx?: number | undefined;
        }>>;
        searchTags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        environments: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        backstory: z.ZodOptional<z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>>;
        enableGenerator: z.ZodOptional<z.ZodBoolean>;
        legendaryActionsMax: z.ZodOptional<z.ZodString>;
        spells: z.ZodOptional<z.ZodObject<{
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }, {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }, {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }>, "many">;
                        isRepeatable: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    }, {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                }>]>;
            }, "strict", z.ZodTypeAny, {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }, {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            availableUnit?: "level" | "cr" | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            hasSlots?: boolean | undefined;
            groups?: {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }[] | undefined;
        }, {
            availableUnit?: "level" | "cr" | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            hasSlots?: boolean | undefined;
            groups?: {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }[] | undefined;
        }>>;
        bonuses: z.ZodOptional<z.ZodObject<{
            HPBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            ACBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            sizeBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            walkBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            burrowBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            climbBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            flyBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            hoverBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            swimBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            STRBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            DEXBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            CONBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            INTBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            WISBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            CHABonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            STRSaveBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            DEXSaveBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            CONSaveBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            INTSaveBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            WISSaveBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            CHASaveBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            AthleticsBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            AcrobaticsBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            SleightOfHandBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            StealthBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            ArcanaBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            HistoryBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            InvestigationBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            NatureBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            ReligionBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            AnimalHandlingBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            InsightBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            MedicineBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            PerceptionBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            SurvivalBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            DeceptionBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            IntimidationBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            PerformanceBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            PersuasionBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            blindsightBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            darkvisionBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            tremorsenseBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            truesightBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            rangedAttackBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            rangedDamageBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            meleeAttackBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            meleeDamageBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            spellAttackBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            spellDamageBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            weaponAttackBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            weaponDamageBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            HPBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ACBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            sizeBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            walkBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            burrowBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            climbBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            flyBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            hoverBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            swimBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHABonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHASaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AthleticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AcrobaticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SleightOfHandBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            StealthBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ArcanaBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            HistoryBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InvestigationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            NatureBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ReligionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AnimalHandlingBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            MedicineBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SurvivalBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DeceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            IntimidationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerformanceBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PersuasionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            blindsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            darkvisionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            tremorsenseBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            truesightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
        }, {
            HPBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ACBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            sizeBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            walkBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            burrowBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            climbBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            flyBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            hoverBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            swimBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHABonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHASaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AthleticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AcrobaticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SleightOfHandBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            StealthBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ArcanaBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            HistoryBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InvestigationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            NatureBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ReligionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AnimalHandlingBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            MedicineBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SurvivalBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DeceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            IntimidationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerformanceBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PersuasionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            blindsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            darkvisionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            tremorsenseBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            truesightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
        }>>;
        actions: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            tag: z.ZodString;
            priority: z.ZodOptional<z.ZodNumber>;
            variants: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodOptional<z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>>;
                charges: z.ZodOptional<z.ZodString>;
                recharge: z.ZodOptional<z.ZodEnum<["turn", "short", "day", "week", "month", "3-6", "4-6", "5-6", "6-6", "spellGroup", "spellSlot"]>>;
                description: z.ZodString;
                availableAt: z.ZodOptional<z.ZodNumber>;
                ability: z.ZodOptional<z.ZodEnum<["STR", "DEX", "CON", "INT", "WIS", "CHA"]>>;
                cost: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }, {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }>, "many">;
            actionType: z.ZodOptional<z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>>;
            availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
            availableUntil: z.ZodOptional<z.ZodNumber>;
            subType: z.ZodOptional<z.ZodString>;
            source: z.ZodOptional<z.ZodString>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            values: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                name: z.ZodString;
                type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["", "target", "attack", "creature", "humanoid", "round", "minute", "hour", "day", "DC Strength", "DC Dexterity", "DC Constitution", "DC Intelligence", "DC Wisdom", "DC Charisma", "DC Strength saving throw", "DC Dexterity saving throw", "DC Constitution saving throw", "DC Intelligence saving throw", "DC Wisdom saving throw", "DC Charisma saving throw", "hit point", "temporary hit point", "+", "-st-nd-rd", "feet", "-feet", "time", "damage"]>, z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>]>>;
                expression: z.ZodOptional<z.ZodString>;
                dice: z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    diceIncrement: z.ZodOptional<z.ZodNumber>;
                    availableAt: z.ZodOptional<z.ZodNumber>;
                    availableUntil: z.ZodOptional<z.ZodNumber>;
                    availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                    unitInterval: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                }, {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            }, {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["", "target", "attack", "creature", "humanoid", "round", "minute", "hour", "day", "DC Strength", "DC Dexterity", "DC Constitution", "DC Intelligence", "DC Wisdom", "DC Charisma", "DC Strength saving throw", "DC Dexterity saving throw", "DC Constitution saving throw", "DC Intelligence saving throw", "DC Wisdom saving throw", "DC Charisma saving throw", "hit point", "temporary hit point", "+", "-st-nd-rd", "feet", "-feet", "time", "damage"]>, z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>]>>;
                expression: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            }, {
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["", "target", "attack", "creature", "humanoid", "round", "minute", "hour", "day", "DC Strength", "DC Dexterity", "DC Constitution", "DC Intelligence", "DC Wisdom", "DC Charisma", "DC Strength saving throw", "DC Dexterity saving throw", "DC Constitution saving throw", "DC Intelligence saving throw", "DC Wisdom saving throw", "DC Charisma saving throw", "hit point", "temporary hit point", "+", "-st-nd-rd", "feet", "-feet", "time", "damage"]>, z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>]>>;
                incrProgression: z.ZodObject<{
                    unitInterval: z.ZodNumber;
                    unitIncrement: z.ZodNumber;
                    availableAt: z.ZodNumber;
                    availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                    valueBase: z.ZodNumber;
                    valueIncrement: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            }, {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            }>]>, "many">>;
            attacks: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                replaceName: z.ZodOptional<z.ZodBoolean>;
                attributes: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                    id: z.ZodOptional<z.ZodNumber>;
                    name: z.ZodOptional<z.ZodString>;
                    cost: z.ZodOptional<z.ZodString>;
                    weight: z.ZodOptional<z.ZodString>;
                    damageType: z.ZodOptional<z.ZodString>;
                    special: z.ZodOptional<z.ZodString>;
                    dice: z.ZodOptional<z.ZodString>;
                    sides: z.ZodOptional<z.ZodString>;
                    diceV: z.ZodOptional<z.ZodString>;
                    sidesV: z.ZodOptional<z.ZodString>;
                    range: z.ZodOptional<z.ZodString>;
                    rangeMax: z.ZodOptional<z.ZodString>;
                    reach: z.ZodOptional<z.ZodString>;
                    targets: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                }, {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                }>, z.ZodObject<{
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }, {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                }>]>>;
                enchantments: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodOptional<z.ZodString>;
                    type: z.ZodOptional<z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>>;
                    expression: z.ZodOptional<z.ZodString>;
                    dice: z.ZodOptional<z.ZodObject<{
                        dice: z.ZodNumber;
                        sides: z.ZodNumber;
                        diceIncrement: z.ZodOptional<z.ZodNumber>;
                        availableAt: z.ZodOptional<z.ZodNumber>;
                        availableUntil: z.ZodOptional<z.ZodNumber>;
                        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                        unitInterval: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    }, {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }, {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }, {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            tag: string;
            variants: {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }[];
            id?: number | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            })[] | undefined;
            availableUnit?: "level" | "cr" | undefined;
            source?: string | undefined;
            availableUntil?: number | undefined;
            priority?: number | undefined;
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            subType?: string | undefined;
            tags?: string[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }, {
            tag: string;
            variants: {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }[];
            id?: number | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            })[] | undefined;
            availableUnit?: "level" | "cr" | undefined;
            source?: string | undefined;
            availableUntil?: number | undefined;
            priority?: number | undefined;
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            subType?: string | undefined;
            tags?: string[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }>, z.ZodObject<{
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        }>]>, "many">>;
        canSpeak: z.ZodOptional<z.ZodBoolean>;
        telepathy: z.ZodOptional<z.ZodString>;
        languages: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }>, "many">;
                isRepeatable: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            }, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        }>]>>;
        senses: z.ZodOptional<z.ZodObject<{
            blindsight: z.ZodOptional<z.ZodString>;
            darkvision: z.ZodOptional<z.ZodString>;
            tremorsense: z.ZodOptional<z.ZodString>;
            truesight: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            blindsight?: string | undefined;
            darkvision?: string | undefined;
            tremorsense?: string | undefined;
            truesight?: string | undefined;
        }, {
            blindsight?: string | undefined;
            darkvision?: string | undefined;
            tremorsense?: string | undefined;
            truesight?: string | undefined;
        }>>;
        isBlind: z.ZodOptional<z.ZodBoolean>;
        resistances: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">>;
        immunities: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">>;
        vulnerabilities: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">>;
        conditionImmunities: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">>;
        skills: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }>, "many">;
                isRepeatable: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            }, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        }>]>>;
        savingThrows: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">>;
        abilityScoresLimit: z.ZodOptional<z.ZodNumber>;
        speeds: z.ZodOptional<z.ZodObject<{
            walk: z.ZodOptional<z.ZodString>;
            burrow: z.ZodOptional<z.ZodString>;
            climb: z.ZodOptional<z.ZodString>;
            fly: z.ZodOptional<z.ZodString>;
            hover: z.ZodOptional<z.ZodString>;
            swim: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            walk?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        }, {
            walk?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        }>>;
        subtypes: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">>;
        alignmentModifiers: z.ZodOptional<z.ZodTuple<[z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber], null>, z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber], null>], null>>;
        armor: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            AC: z.ZodString;
            name: z.ZodString;
            isAutomaticCalcDisabled: z.ZodOptional<z.ZodBoolean>;
            cost: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodEnum<["light", "medium", "heavy"]>>;
            maxDex: z.ZodOptional<z.ZodString>;
            minStr: z.ZodOptional<z.ZodString>;
            weight: z.ZodOptional<z.ZodString>;
            stealthDis: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            AC: string;
            id?: number | undefined;
            cost?: string | undefined;
            weight?: string | undefined;
            type?: "light" | "medium" | "heavy" | undefined;
            isAutomaticCalcDisabled?: boolean | undefined;
            maxDex?: string | undefined;
            minStr?: string | undefined;
            stealthDis?: boolean | undefined;
        }, {
            name: string;
            AC: string;
            id?: number | undefined;
            cost?: string | undefined;
            weight?: string | undefined;
            type?: "light" | "medium" | "heavy" | undefined;
            isAutomaticCalcDisabled?: boolean | undefined;
            maxDex?: string | undefined;
            minStr?: string | undefined;
            stealthDis?: boolean | undefined;
        }>, z.ZodObject<{
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        }>]>>;
        id: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        femaleName: z.ZodString;
        workplace: z.ZodString;
        compatibleAges: z.ZodArray<z.ZodEnum<["child", "adolescent", "young adult", "adult", "middle-aged", "elderly", "venerable"]>, "many">;
    }, "strict", z.ZodTypeAny, {
        name: string;
        femaleName: string;
        workplace: string;
        compatibleAges: ("child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable")[];
        id?: number | undefined;
        armor?: {
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            name: string;
            AC: string;
            id?: number | undefined;
            cost?: string | undefined;
            weight?: string | undefined;
            type?: "light" | "medium" | "heavy" | undefined;
            isAutomaticCalcDisabled?: boolean | undefined;
            maxDex?: string | undefined;
            minStr?: string | undefined;
            stealthDis?: boolean | undefined;
        } | undefined;
        languages?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        skills?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        description?: string | undefined;
        spells?: {
            availableUnit?: "level" | "cr" | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            hasSlots?: boolean | undefined;
            groups?: {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }[] | undefined;
        } | undefined;
        subtypes?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        speeds?: {
            walk?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        } | undefined;
        savingThrows?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        resistances?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        immunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        vulnerabilities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        conditionImmunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        senses?: {
            blindsight?: string | undefined;
            darkvision?: string | undefined;
            tremorsense?: string | undefined;
            truesight?: string | undefined;
        } | undefined;
        isBlind?: boolean | undefined;
        canSpeak?: boolean | undefined;
        telepathy?: string | undefined;
        actions?: ({
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            tag: string;
            variants: {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }[];
            id?: number | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            })[] | undefined;
            availableUnit?: "level" | "cr" | undefined;
            source?: string | undefined;
            availableUntil?: number | undefined;
            priority?: number | undefined;
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            subType?: string | undefined;
            tags?: string[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        })[] | undefined;
        legendaryActionsMax?: string | undefined;
        sheet?: {
            images: {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }[];
            layout?: string | undefined;
            showRoleplayStats?: boolean | undefined;
            decoration?: string | undefined;
            statBlockOffsetPx?: number | undefined;
        } | undefined;
        searchTags?: string[] | undefined;
        environments?: string[] | undefined;
        backstory?: z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        bonuses?: {
            HPBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ACBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            sizeBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            walkBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            burrowBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            climbBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            flyBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            hoverBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            swimBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHABonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHASaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AthleticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AcrobaticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SleightOfHandBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            StealthBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ArcanaBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            HistoryBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InvestigationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            NatureBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ReligionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AnimalHandlingBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            MedicineBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SurvivalBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DeceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            IntimidationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerformanceBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PersuasionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            blindsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            darkvisionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            tremorsenseBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            truesightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
        } | undefined;
        abilityScoresLimit?: number | undefined;
        alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
        enableGenerator?: boolean | undefined;
    }, {
        name: string;
        femaleName: string;
        workplace: string;
        compatibleAges: ("child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable")[];
        id?: number | undefined;
        armor?: {
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            name: string;
            AC: string;
            id?: number | undefined;
            cost?: string | undefined;
            weight?: string | undefined;
            type?: "light" | "medium" | "heavy" | undefined;
            isAutomaticCalcDisabled?: boolean | undefined;
            maxDex?: string | undefined;
            minStr?: string | undefined;
            stealthDis?: boolean | undefined;
        } | undefined;
        languages?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        skills?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        description?: string | undefined;
        spells?: {
            availableUnit?: "level" | "cr" | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            hasSlots?: boolean | undefined;
            groups?: {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }[] | undefined;
        } | undefined;
        subtypes?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        speeds?: {
            walk?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        } | undefined;
        savingThrows?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        resistances?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        immunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        vulnerabilities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        conditionImmunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        senses?: {
            blindsight?: string | undefined;
            darkvision?: string | undefined;
            tremorsense?: string | undefined;
            truesight?: string | undefined;
        } | undefined;
        isBlind?: boolean | undefined;
        canSpeak?: boolean | undefined;
        telepathy?: string | undefined;
        actions?: ({
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            tag: string;
            variants: {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }[];
            id?: number | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            })[] | undefined;
            availableUnit?: "level" | "cr" | undefined;
            source?: string | undefined;
            availableUntil?: number | undefined;
            priority?: number | undefined;
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            subType?: string | undefined;
            tags?: string[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        })[] | undefined;
        legendaryActionsMax?: string | undefined;
        sheet?: {
            images: {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }[];
            layout?: string | undefined;
            showRoleplayStats?: boolean | undefined;
            decoration?: string | undefined;
            statBlockOffsetPx?: number | undefined;
        } | undefined;
        searchTags?: string[] | undefined;
        environments?: string[] | undefined;
        backstory?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        bonuses?: {
            HPBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ACBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            sizeBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            walkBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            burrowBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            climbBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            flyBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            hoverBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            swimBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHABonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHASaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AthleticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AcrobaticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SleightOfHandBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            StealthBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ArcanaBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            HistoryBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InvestigationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            NatureBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ReligionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AnimalHandlingBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            MedicineBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SurvivalBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DeceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            IntimidationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerformanceBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PersuasionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            blindsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            darkvisionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            tremorsenseBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            truesightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
        } | undefined;
        abilityScoresLimit?: number | undefined;
        alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
        enableGenerator?: boolean | undefined;
    }>;
    age: z.ZodEnum<["medieval", "fantasy", "renaissance", "modern", "future", "space", "other"]>;
    description: z.ZodString;
    game: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    object: {
        name: string;
        femaleName: string;
        workplace: string;
        compatibleAges: ("child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable")[];
        id?: number | undefined;
        armor?: {
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            name: string;
            AC: string;
            id?: number | undefined;
            cost?: string | undefined;
            weight?: string | undefined;
            type?: "light" | "medium" | "heavy" | undefined;
            isAutomaticCalcDisabled?: boolean | undefined;
            maxDex?: string | undefined;
            minStr?: string | undefined;
            stealthDis?: boolean | undefined;
        } | undefined;
        languages?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        skills?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        description?: string | undefined;
        spells?: {
            availableUnit?: "level" | "cr" | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            hasSlots?: boolean | undefined;
            groups?: {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }[] | undefined;
        } | undefined;
        subtypes?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        speeds?: {
            walk?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        } | undefined;
        savingThrows?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        resistances?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        immunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        vulnerabilities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        conditionImmunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        senses?: {
            blindsight?: string | undefined;
            darkvision?: string | undefined;
            tremorsense?: string | undefined;
            truesight?: string | undefined;
        } | undefined;
        isBlind?: boolean | undefined;
        canSpeak?: boolean | undefined;
        telepathy?: string | undefined;
        actions?: ({
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            tag: string;
            variants: {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }[];
            id?: number | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            })[] | undefined;
            availableUnit?: "level" | "cr" | undefined;
            source?: string | undefined;
            availableUntil?: number | undefined;
            priority?: number | undefined;
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            subType?: string | undefined;
            tags?: string[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        })[] | undefined;
        legendaryActionsMax?: string | undefined;
        sheet?: {
            images: {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }[];
            layout?: string | undefined;
            showRoleplayStats?: boolean | undefined;
            decoration?: string | undefined;
            statBlockOffsetPx?: number | undefined;
        } | undefined;
        searchTags?: string[] | undefined;
        environments?: string[] | undefined;
        backstory?: z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        bonuses?: {
            HPBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ACBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            sizeBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            walkBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            burrowBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            climbBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            flyBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            hoverBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            swimBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHABonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHASaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AthleticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AcrobaticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SleightOfHandBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            StealthBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ArcanaBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            HistoryBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InvestigationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            NatureBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ReligionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AnimalHandlingBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            MedicineBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SurvivalBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DeceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            IntimidationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerformanceBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PersuasionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            blindsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            darkvisionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            tremorsenseBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            truesightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
        } | undefined;
        abilityScoresLimit?: number | undefined;
        alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
        enableGenerator?: boolean | undefined;
    };
    description: string;
    game: number;
    age: "medieval" | "fantasy" | "renaissance" | "modern" | "future" | "space" | "other";
}, {
    object: {
        name: string;
        femaleName: string;
        workplace: string;
        compatibleAges: ("child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable")[];
        id?: number | undefined;
        armor?: {
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            name: string;
            AC: string;
            id?: number | undefined;
            cost?: string | undefined;
            weight?: string | undefined;
            type?: "light" | "medium" | "heavy" | undefined;
            isAutomaticCalcDisabled?: boolean | undefined;
            maxDex?: string | undefined;
            minStr?: string | undefined;
            stealthDis?: boolean | undefined;
        } | undefined;
        languages?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        skills?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        description?: string | undefined;
        spells?: {
            availableUnit?: "level" | "cr" | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            hasSlots?: boolean | undefined;
            groups?: {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }[] | undefined;
        } | undefined;
        subtypes?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        speeds?: {
            walk?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        } | undefined;
        savingThrows?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        resistances?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        immunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        vulnerabilities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        conditionImmunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        senses?: {
            blindsight?: string | undefined;
            darkvision?: string | undefined;
            tremorsense?: string | undefined;
            truesight?: string | undefined;
        } | undefined;
        isBlind?: boolean | undefined;
        canSpeak?: boolean | undefined;
        telepathy?: string | undefined;
        actions?: ({
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            tag: string;
            variants: {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }[];
            id?: number | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            })[] | undefined;
            availableUnit?: "level" | "cr" | undefined;
            source?: string | undefined;
            availableUntil?: number | undefined;
            priority?: number | undefined;
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            subType?: string | undefined;
            tags?: string[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        })[] | undefined;
        legendaryActionsMax?: string | undefined;
        sheet?: {
            images: {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }[];
            layout?: string | undefined;
            showRoleplayStats?: boolean | undefined;
            decoration?: string | undefined;
            statBlockOffsetPx?: number | undefined;
        } | undefined;
        searchTags?: string[] | undefined;
        environments?: string[] | undefined;
        backstory?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        bonuses?: {
            HPBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ACBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            sizeBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            walkBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            burrowBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            climbBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            flyBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            hoverBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            swimBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHABonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHASaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AthleticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AcrobaticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SleightOfHandBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            StealthBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ArcanaBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            HistoryBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InvestigationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            NatureBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ReligionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AnimalHandlingBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            MedicineBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SurvivalBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DeceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            IntimidationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerformanceBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PersuasionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            blindsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            darkvisionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            tremorsenseBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            truesightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
        } | undefined;
        abilityScoresLimit?: number | undefined;
        alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
        enableGenerator?: boolean | undefined;
    };
    description: string;
    game: number;
    age: "medieval" | "fantasy" | "renaissance" | "modern" | "future" | "space" | "other";
}>;
export declare const sPutBackgroundBody: z.ZodObject<{
    object: z.ZodObject<{
        sheet: z.ZodOptional<z.ZodObject<{
            images: z.ZodArray<z.ZodObject<{
                url: z.ZodString;
                artist: z.ZodOptional<z.ZodString>;
                artistUrl: z.ZodOptional<z.ZodString>;
                canvasHeightPx: z.ZodOptional<z.ZodNumber>;
                canvasWidthPx: z.ZodOptional<z.ZodNumber>;
                sheetWidthPx: z.ZodOptional<z.ZodNumber>;
                imageHeightPx: z.ZodOptional<z.ZodNumber>;
                imagePositionTopPx: z.ZodOptional<z.ZodNumber>;
                imagePositionLeftPx: z.ZodOptional<z.ZodNumber>;
                mask: z.ZodOptional<z.ZodString>;
                token: z.ZodOptional<z.ZodObject<{
                    topPx: z.ZodNumber;
                    leftPx: z.ZodNumber;
                    widthPx: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                }, {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                }>>;
            }, "strip", z.ZodTypeAny, {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }, {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }>, "many">;
            layout: z.ZodOptional<z.ZodString>;
            showRoleplayStats: z.ZodOptional<z.ZodBoolean>;
            decoration: z.ZodOptional<z.ZodString>;
            statBlockOffsetPx: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            images: {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }[];
            layout?: string | undefined;
            showRoleplayStats?: boolean | undefined;
            decoration?: string | undefined;
            statBlockOffsetPx?: number | undefined;
        }, {
            images: {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }[];
            layout?: string | undefined;
            showRoleplayStats?: boolean | undefined;
            decoration?: string | undefined;
            statBlockOffsetPx?: number | undefined;
        }>>;
        searchTags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        environments: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        backstory: z.ZodOptional<z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>>;
        enableGenerator: z.ZodOptional<z.ZodBoolean>;
        legendaryActionsMax: z.ZodOptional<z.ZodString>;
        spells: z.ZodOptional<z.ZodObject<{
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }, {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }, {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }>, "many">;
                        isRepeatable: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    }, {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                }>]>;
            }, "strict", z.ZodTypeAny, {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }, {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            availableUnit?: "level" | "cr" | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            hasSlots?: boolean | undefined;
            groups?: {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }[] | undefined;
        }, {
            availableUnit?: "level" | "cr" | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            hasSlots?: boolean | undefined;
            groups?: {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }[] | undefined;
        }>>;
        bonuses: z.ZodOptional<z.ZodObject<{
            HPBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            ACBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            sizeBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            walkBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            burrowBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            climbBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            flyBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            hoverBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            swimBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            STRBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            DEXBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            CONBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            INTBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            WISBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            CHABonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            STRSaveBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            DEXSaveBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            CONSaveBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            INTSaveBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            WISSaveBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            CHASaveBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            AthleticsBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            AcrobaticsBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            SleightOfHandBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            StealthBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            ArcanaBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            HistoryBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            InvestigationBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            NatureBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            ReligionBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            AnimalHandlingBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            InsightBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            MedicineBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            PerceptionBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            SurvivalBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            DeceptionBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            IntimidationBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            PerformanceBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            PersuasionBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            blindsightBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            darkvisionBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            tremorsenseBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            truesightBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            rangedAttackBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            rangedDamageBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            meleeAttackBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            meleeDamageBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            spellAttackBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            spellDamageBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            weaponAttackBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            weaponDamageBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            HPBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ACBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            sizeBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            walkBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            burrowBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            climbBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            flyBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            hoverBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            swimBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHABonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHASaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AthleticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AcrobaticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SleightOfHandBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            StealthBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ArcanaBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            HistoryBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InvestigationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            NatureBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ReligionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AnimalHandlingBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            MedicineBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SurvivalBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DeceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            IntimidationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerformanceBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PersuasionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            blindsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            darkvisionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            tremorsenseBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            truesightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
        }, {
            HPBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ACBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            sizeBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            walkBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            burrowBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            climbBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            flyBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            hoverBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            swimBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHABonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHASaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AthleticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AcrobaticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SleightOfHandBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            StealthBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ArcanaBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            HistoryBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InvestigationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            NatureBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ReligionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AnimalHandlingBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            MedicineBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SurvivalBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DeceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            IntimidationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerformanceBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PersuasionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            blindsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            darkvisionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            tremorsenseBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            truesightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
        }>>;
        actions: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            tag: z.ZodString;
            priority: z.ZodOptional<z.ZodNumber>;
            variants: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodOptional<z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>>;
                charges: z.ZodOptional<z.ZodString>;
                recharge: z.ZodOptional<z.ZodEnum<["turn", "short", "day", "week", "month", "3-6", "4-6", "5-6", "6-6", "spellGroup", "spellSlot"]>>;
                description: z.ZodString;
                availableAt: z.ZodOptional<z.ZodNumber>;
                ability: z.ZodOptional<z.ZodEnum<["STR", "DEX", "CON", "INT", "WIS", "CHA"]>>;
                cost: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }, {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }>, "many">;
            actionType: z.ZodOptional<z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>>;
            availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
            availableUntil: z.ZodOptional<z.ZodNumber>;
            subType: z.ZodOptional<z.ZodString>;
            source: z.ZodOptional<z.ZodString>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            values: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                name: z.ZodString;
                type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["", "target", "attack", "creature", "humanoid", "round", "minute", "hour", "day", "DC Strength", "DC Dexterity", "DC Constitution", "DC Intelligence", "DC Wisdom", "DC Charisma", "DC Strength saving throw", "DC Dexterity saving throw", "DC Constitution saving throw", "DC Intelligence saving throw", "DC Wisdom saving throw", "DC Charisma saving throw", "hit point", "temporary hit point", "+", "-st-nd-rd", "feet", "-feet", "time", "damage"]>, z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>]>>;
                expression: z.ZodOptional<z.ZodString>;
                dice: z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    diceIncrement: z.ZodOptional<z.ZodNumber>;
                    availableAt: z.ZodOptional<z.ZodNumber>;
                    availableUntil: z.ZodOptional<z.ZodNumber>;
                    availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                    unitInterval: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                }, {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            }, {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["", "target", "attack", "creature", "humanoid", "round", "minute", "hour", "day", "DC Strength", "DC Dexterity", "DC Constitution", "DC Intelligence", "DC Wisdom", "DC Charisma", "DC Strength saving throw", "DC Dexterity saving throw", "DC Constitution saving throw", "DC Intelligence saving throw", "DC Wisdom saving throw", "DC Charisma saving throw", "hit point", "temporary hit point", "+", "-st-nd-rd", "feet", "-feet", "time", "damage"]>, z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>]>>;
                expression: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            }, {
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["", "target", "attack", "creature", "humanoid", "round", "minute", "hour", "day", "DC Strength", "DC Dexterity", "DC Constitution", "DC Intelligence", "DC Wisdom", "DC Charisma", "DC Strength saving throw", "DC Dexterity saving throw", "DC Constitution saving throw", "DC Intelligence saving throw", "DC Wisdom saving throw", "DC Charisma saving throw", "hit point", "temporary hit point", "+", "-st-nd-rd", "feet", "-feet", "time", "damage"]>, z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>]>>;
                incrProgression: z.ZodObject<{
                    unitInterval: z.ZodNumber;
                    unitIncrement: z.ZodNumber;
                    availableAt: z.ZodNumber;
                    availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                    valueBase: z.ZodNumber;
                    valueIncrement: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            }, {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            }>]>, "many">>;
            attacks: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                replaceName: z.ZodOptional<z.ZodBoolean>;
                attributes: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                    id: z.ZodOptional<z.ZodNumber>;
                    name: z.ZodOptional<z.ZodString>;
                    cost: z.ZodOptional<z.ZodString>;
                    weight: z.ZodOptional<z.ZodString>;
                    damageType: z.ZodOptional<z.ZodString>;
                    special: z.ZodOptional<z.ZodString>;
                    dice: z.ZodOptional<z.ZodString>;
                    sides: z.ZodOptional<z.ZodString>;
                    diceV: z.ZodOptional<z.ZodString>;
                    sidesV: z.ZodOptional<z.ZodString>;
                    range: z.ZodOptional<z.ZodString>;
                    rangeMax: z.ZodOptional<z.ZodString>;
                    reach: z.ZodOptional<z.ZodString>;
                    targets: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                }, {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                }>, z.ZodObject<{
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }, {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                }>]>>;
                enchantments: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodOptional<z.ZodString>;
                    type: z.ZodOptional<z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>>;
                    expression: z.ZodOptional<z.ZodString>;
                    dice: z.ZodOptional<z.ZodObject<{
                        dice: z.ZodNumber;
                        sides: z.ZodNumber;
                        diceIncrement: z.ZodOptional<z.ZodNumber>;
                        availableAt: z.ZodOptional<z.ZodNumber>;
                        availableUntil: z.ZodOptional<z.ZodNumber>;
                        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                        unitInterval: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    }, {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }, {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }, {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            tag: string;
            variants: {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }[];
            id?: number | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            })[] | undefined;
            availableUnit?: "level" | "cr" | undefined;
            source?: string | undefined;
            availableUntil?: number | undefined;
            priority?: number | undefined;
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            subType?: string | undefined;
            tags?: string[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }, {
            tag: string;
            variants: {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }[];
            id?: number | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            })[] | undefined;
            availableUnit?: "level" | "cr" | undefined;
            source?: string | undefined;
            availableUntil?: number | undefined;
            priority?: number | undefined;
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            subType?: string | undefined;
            tags?: string[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        }>, z.ZodObject<{
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        }>]>, "many">>;
        canSpeak: z.ZodOptional<z.ZodBoolean>;
        telepathy: z.ZodOptional<z.ZodString>;
        languages: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }>, "many">;
                isRepeatable: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            }, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        }>]>>;
        senses: z.ZodOptional<z.ZodObject<{
            blindsight: z.ZodOptional<z.ZodString>;
            darkvision: z.ZodOptional<z.ZodString>;
            tremorsense: z.ZodOptional<z.ZodString>;
            truesight: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            blindsight?: string | undefined;
            darkvision?: string | undefined;
            tremorsense?: string | undefined;
            truesight?: string | undefined;
        }, {
            blindsight?: string | undefined;
            darkvision?: string | undefined;
            tremorsense?: string | undefined;
            truesight?: string | undefined;
        }>>;
        isBlind: z.ZodOptional<z.ZodBoolean>;
        resistances: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">>;
        immunities: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">>;
        vulnerabilities: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">>;
        conditionImmunities: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">>;
        skills: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }>, "many">;
                isRepeatable: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            }, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        }>]>>;
        savingThrows: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">>;
        abilityScoresLimit: z.ZodOptional<z.ZodNumber>;
        speeds: z.ZodOptional<z.ZodObject<{
            walk: z.ZodOptional<z.ZodString>;
            burrow: z.ZodOptional<z.ZodString>;
            climb: z.ZodOptional<z.ZodString>;
            fly: z.ZodOptional<z.ZodString>;
            hover: z.ZodOptional<z.ZodString>;
            swim: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            walk?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        }, {
            walk?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        }>>;
        subtypes: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }>, "many">>;
        alignmentModifiers: z.ZodOptional<z.ZodTuple<[z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber], null>, z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber], null>], null>>;
        armor: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            AC: z.ZodString;
            name: z.ZodString;
            isAutomaticCalcDisabled: z.ZodOptional<z.ZodBoolean>;
            cost: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodEnum<["light", "medium", "heavy"]>>;
            maxDex: z.ZodOptional<z.ZodString>;
            minStr: z.ZodOptional<z.ZodString>;
            weight: z.ZodOptional<z.ZodString>;
            stealthDis: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            AC: string;
            id?: number | undefined;
            cost?: string | undefined;
            weight?: string | undefined;
            type?: "light" | "medium" | "heavy" | undefined;
            isAutomaticCalcDisabled?: boolean | undefined;
            maxDex?: string | undefined;
            minStr?: string | undefined;
            stealthDis?: boolean | undefined;
        }, {
            name: string;
            AC: string;
            id?: number | undefined;
            cost?: string | undefined;
            weight?: string | undefined;
            type?: "light" | "medium" | "heavy" | undefined;
            isAutomaticCalcDisabled?: boolean | undefined;
            maxDex?: string | undefined;
            minStr?: string | undefined;
            stealthDis?: boolean | undefined;
        }>, z.ZodObject<{
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        }>]>>;
        id: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        femaleName: z.ZodString;
        workplace: z.ZodString;
        compatibleAges: z.ZodArray<z.ZodEnum<["child", "adolescent", "young adult", "adult", "middle-aged", "elderly", "venerable"]>, "many">;
    }, "strict", z.ZodTypeAny, {
        name: string;
        femaleName: string;
        workplace: string;
        compatibleAges: ("child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable")[];
        id?: number | undefined;
        armor?: {
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            name: string;
            AC: string;
            id?: number | undefined;
            cost?: string | undefined;
            weight?: string | undefined;
            type?: "light" | "medium" | "heavy" | undefined;
            isAutomaticCalcDisabled?: boolean | undefined;
            maxDex?: string | undefined;
            minStr?: string | undefined;
            stealthDis?: boolean | undefined;
        } | undefined;
        languages?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        skills?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        description?: string | undefined;
        spells?: {
            availableUnit?: "level" | "cr" | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            hasSlots?: boolean | undefined;
            groups?: {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }[] | undefined;
        } | undefined;
        subtypes?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        speeds?: {
            walk?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        } | undefined;
        savingThrows?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        resistances?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        immunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        vulnerabilities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        conditionImmunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        senses?: {
            blindsight?: string | undefined;
            darkvision?: string | undefined;
            tremorsense?: string | undefined;
            truesight?: string | undefined;
        } | undefined;
        isBlind?: boolean | undefined;
        canSpeak?: boolean | undefined;
        telepathy?: string | undefined;
        actions?: ({
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            tag: string;
            variants: {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }[];
            id?: number | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            })[] | undefined;
            availableUnit?: "level" | "cr" | undefined;
            source?: string | undefined;
            availableUntil?: number | undefined;
            priority?: number | undefined;
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            subType?: string | undefined;
            tags?: string[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        })[] | undefined;
        legendaryActionsMax?: string | undefined;
        sheet?: {
            images: {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }[];
            layout?: string | undefined;
            showRoleplayStats?: boolean | undefined;
            decoration?: string | undefined;
            statBlockOffsetPx?: number | undefined;
        } | undefined;
        searchTags?: string[] | undefined;
        environments?: string[] | undefined;
        backstory?: z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        bonuses?: {
            HPBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ACBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            sizeBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            walkBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            burrowBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            climbBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            flyBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            hoverBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            swimBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHABonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHASaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AthleticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AcrobaticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SleightOfHandBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            StealthBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ArcanaBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            HistoryBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InvestigationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            NatureBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ReligionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AnimalHandlingBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            MedicineBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SurvivalBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DeceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            IntimidationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerformanceBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PersuasionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            blindsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            darkvisionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            tremorsenseBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            truesightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
        } | undefined;
        abilityScoresLimit?: number | undefined;
        alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
        enableGenerator?: boolean | undefined;
    }, {
        name: string;
        femaleName: string;
        workplace: string;
        compatibleAges: ("child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable")[];
        id?: number | undefined;
        armor?: {
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            name: string;
            AC: string;
            id?: number | undefined;
            cost?: string | undefined;
            weight?: string | undefined;
            type?: "light" | "medium" | "heavy" | undefined;
            isAutomaticCalcDisabled?: boolean | undefined;
            maxDex?: string | undefined;
            minStr?: string | undefined;
            stealthDis?: boolean | undefined;
        } | undefined;
        languages?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        skills?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        description?: string | undefined;
        spells?: {
            availableUnit?: "level" | "cr" | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            hasSlots?: boolean | undefined;
            groups?: {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }[] | undefined;
        } | undefined;
        subtypes?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        speeds?: {
            walk?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        } | undefined;
        savingThrows?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        resistances?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        immunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        vulnerabilities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        conditionImmunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        senses?: {
            blindsight?: string | undefined;
            darkvision?: string | undefined;
            tremorsense?: string | undefined;
            truesight?: string | undefined;
        } | undefined;
        isBlind?: boolean | undefined;
        canSpeak?: boolean | undefined;
        telepathy?: string | undefined;
        actions?: ({
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            tag: string;
            variants: {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }[];
            id?: number | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            })[] | undefined;
            availableUnit?: "level" | "cr" | undefined;
            source?: string | undefined;
            availableUntil?: number | undefined;
            priority?: number | undefined;
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            subType?: string | undefined;
            tags?: string[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        })[] | undefined;
        legendaryActionsMax?: string | undefined;
        sheet?: {
            images: {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }[];
            layout?: string | undefined;
            showRoleplayStats?: boolean | undefined;
            decoration?: string | undefined;
            statBlockOffsetPx?: number | undefined;
        } | undefined;
        searchTags?: string[] | undefined;
        environments?: string[] | undefined;
        backstory?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        bonuses?: {
            HPBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ACBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            sizeBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            walkBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            burrowBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            climbBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            flyBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            hoverBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            swimBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHABonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHASaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AthleticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AcrobaticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SleightOfHandBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            StealthBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ArcanaBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            HistoryBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InvestigationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            NatureBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ReligionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AnimalHandlingBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            MedicineBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SurvivalBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DeceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            IntimidationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerformanceBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PersuasionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            blindsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            darkvisionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            tremorsenseBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            truesightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
        } | undefined;
        abilityScoresLimit?: number | undefined;
        alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
        enableGenerator?: boolean | undefined;
    }>;
    age: z.ZodEnum<["medieval", "fantasy", "renaissance", "modern", "future", "space", "other"]>;
    description: z.ZodString;
    game: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    object: {
        name: string;
        femaleName: string;
        workplace: string;
        compatibleAges: ("child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable")[];
        id?: number | undefined;
        armor?: {
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            name: string;
            AC: string;
            id?: number | undefined;
            cost?: string | undefined;
            weight?: string | undefined;
            type?: "light" | "medium" | "heavy" | undefined;
            isAutomaticCalcDisabled?: boolean | undefined;
            maxDex?: string | undefined;
            minStr?: string | undefined;
            stealthDis?: boolean | undefined;
        } | undefined;
        languages?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        skills?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        description?: string | undefined;
        spells?: {
            availableUnit?: "level" | "cr" | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            hasSlots?: boolean | undefined;
            groups?: {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }[] | undefined;
        } | undefined;
        subtypes?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        speeds?: {
            walk?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        } | undefined;
        savingThrows?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        resistances?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        immunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        vulnerabilities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        conditionImmunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        senses?: {
            blindsight?: string | undefined;
            darkvision?: string | undefined;
            tremorsense?: string | undefined;
            truesight?: string | undefined;
        } | undefined;
        isBlind?: boolean | undefined;
        canSpeak?: boolean | undefined;
        telepathy?: string | undefined;
        actions?: ({
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            tag: string;
            variants: {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }[];
            id?: number | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            })[] | undefined;
            availableUnit?: "level" | "cr" | undefined;
            source?: string | undefined;
            availableUntil?: number | undefined;
            priority?: number | undefined;
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            subType?: string | undefined;
            tags?: string[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        })[] | undefined;
        legendaryActionsMax?: string | undefined;
        sheet?: {
            images: {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }[];
            layout?: string | undefined;
            showRoleplayStats?: boolean | undefined;
            decoration?: string | undefined;
            statBlockOffsetPx?: number | undefined;
        } | undefined;
        searchTags?: string[] | undefined;
        environments?: string[] | undefined;
        backstory?: z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        bonuses?: {
            HPBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ACBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            sizeBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            walkBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            burrowBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            climbBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            flyBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            hoverBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            swimBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHABonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHASaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AthleticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AcrobaticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SleightOfHandBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            StealthBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ArcanaBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            HistoryBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InvestigationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            NatureBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ReligionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AnimalHandlingBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            MedicineBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SurvivalBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DeceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            IntimidationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerformanceBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PersuasionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            blindsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            darkvisionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            tremorsenseBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            truesightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
        } | undefined;
        abilityScoresLimit?: number | undefined;
        alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
        enableGenerator?: boolean | undefined;
    };
    description: string;
    age: "medieval" | "fantasy" | "renaissance" | "modern" | "future" | "space" | "other";
    game?: number | undefined;
}, {
    object: {
        name: string;
        femaleName: string;
        workplace: string;
        compatibleAges: ("child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable")[];
        id?: number | undefined;
        armor?: {
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            name: string;
            AC: string;
            id?: number | undefined;
            cost?: string | undefined;
            weight?: string | undefined;
            type?: "light" | "medium" | "heavy" | undefined;
            isAutomaticCalcDisabled?: boolean | undefined;
            maxDex?: string | undefined;
            minStr?: string | undefined;
            stealthDis?: boolean | undefined;
        } | undefined;
        languages?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        skills?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        } | undefined;
        description?: string | undefined;
        spells?: {
            availableUnit?: "level" | "cr" | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            hasSlots?: boolean | undefined;
            groups?: {
                tag: string;
                spells: {
                    value: string;
                    id?: number | undefined;
                    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                };
                availableAt?: number | undefined;
                level?: number | undefined;
                times?: string | undefined;
                timesMax?: string | undefined;
            }[] | undefined;
        } | undefined;
        subtypes?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        speeds?: {
            walk?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        } | undefined;
        savingThrows?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        resistances?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        immunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        vulnerabilities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        conditionImmunities?: {
            value: string;
            id?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
            properties?: Record<string, string | number> | undefined;
            availableAt?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
        }[] | undefined;
        senses?: {
            blindsight?: string | undefined;
            darkvision?: string | undefined;
            tremorsense?: string | undefined;
            truesight?: string | undefined;
        } | undefined;
        isBlind?: boolean | undefined;
        canSpeak?: boolean | undefined;
        telepathy?: string | undefined;
        actions?: ({
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
                    properties?: Record<string, string | number> | undefined;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                }[] | undefined;
            };
        } | {
            tag: string;
            variants: {
                name: string;
                description: string;
                cost?: string | undefined;
                type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                availableAt?: number | undefined;
                charges?: string | undefined;
                recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
                ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            }[];
            id?: number | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    diceIncrement?: number | undefined;
                    availableUntil?: number | undefined;
                    unitInterval?: number | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit point" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            })[] | undefined;
            availableUnit?: "level" | "cr" | undefined;
            source?: string | undefined;
            availableUntil?: number | undefined;
            priority?: number | undefined;
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            subType?: string | undefined;
            tags?: string[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    id?: number | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    reach?: string | undefined;
                    targets?: string | undefined;
                    properties?: string[] | undefined;
                } | {
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
                            properties?: Record<string, string | number> | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | undefined;
                enchantments?: {
                    name?: string | undefined;
                    dice?: {
                        dice: number;
                        sides: number;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        diceIncrement?: number | undefined;
                        availableUntil?: number | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    type?: "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | undefined;
                    expression?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        })[] | undefined;
        legendaryActionsMax?: string | undefined;
        sheet?: {
            images: {
                url: string;
                artist?: string | undefined;
                artistUrl?: string | undefined;
                canvasHeightPx?: number | undefined;
                canvasWidthPx?: number | undefined;
                sheetWidthPx?: number | undefined;
                imageHeightPx?: number | undefined;
                imagePositionTopPx?: number | undefined;
                imagePositionLeftPx?: number | undefined;
                mask?: string | undefined;
                token?: {
                    topPx: number;
                    leftPx: number;
                    widthPx: number;
                } | undefined;
            }[];
            layout?: string | undefined;
            showRoleplayStats?: boolean | undefined;
            decoration?: string | undefined;
            statBlockOffsetPx?: number | undefined;
        } | undefined;
        searchTags?: string[] | undefined;
        environments?: string[] | undefined;
        backstory?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        bonuses?: {
            HPBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ACBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            sizeBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            walkBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            burrowBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            climbBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            flyBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            hoverBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            swimBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHABonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            STRSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DEXSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CONSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            INTSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            WISSaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            CHASaveBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AthleticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AcrobaticsBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SleightOfHandBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            StealthBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ArcanaBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            HistoryBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InvestigationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            NatureBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            ReligionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            AnimalHandlingBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            InsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            MedicineBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            SurvivalBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            DeceptionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            IntimidationBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PerformanceBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            PersuasionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            blindsightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            darkvisionBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            tremorsenseBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            truesightBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            rangedDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            meleeDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            spellDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponAttackBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
            weaponDamageBonus?: {
                value: string;
                name?: string | undefined;
            } | undefined;
        } | undefined;
        abilityScoresLimit?: number | undefined;
        alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
        enableGenerator?: boolean | undefined;
    };
    description: string;
    age: "medieval" | "fantasy" | "renaissance" | "modern" | "future" | "space" | "other";
    game?: number | undefined;
}>;
//# sourceMappingURL=background.d.ts.map