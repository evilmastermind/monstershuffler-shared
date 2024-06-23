import { z } from 'zod';
export declare const actionTypesEnum: z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>;
export declare const rechargeTypeEnum: z.ZodEnum<["turn", "short", "day", "week", "month", "3-6", "4-6", "5-6", "6-6", "spellGroup", "spellSlot"]>;
export declare const diceObject: z.ZodObject<{
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
    diceIncrement?: number | undefined;
    availableAt?: number | undefined;
    availableUntil?: number | undefined;
    availableUnit?: "level" | "cr" | undefined;
    unitInterval?: number | undefined;
}, {
    dice: number;
    sides: number;
    diceIncrement?: number | undefined;
    availableAt?: number | undefined;
    availableUntil?: number | undefined;
    availableUnit?: "level" | "cr" | undefined;
    unitInterval?: number | undefined;
}>;
export declare const valueExpressionObject: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodOptional<z.ZodString>;
    expression: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    expression: string;
    type?: string | undefined;
}, {
    name: string;
    expression: string;
    type?: string | undefined;
}>;
export declare const valueDiceObject: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodOptional<z.ZodString>;
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
        diceIncrement?: number | undefined;
        availableAt?: number | undefined;
        availableUntil?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
        unitInterval?: number | undefined;
    }, {
        dice: number;
        sides: number;
        diceIncrement?: number | undefined;
        availableAt?: number | undefined;
        availableUntil?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
        unitInterval?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    name: string;
    dice: {
        dice: number;
        sides: number;
        diceIncrement?: number | undefined;
        availableAt?: number | undefined;
        availableUntil?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
        unitInterval?: number | undefined;
    };
    type?: string | undefined;
    expression?: string | undefined;
}, {
    name: string;
    dice: {
        dice: number;
        sides: number;
        diceIncrement?: number | undefined;
        availableAt?: number | undefined;
        availableUntil?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
        unitInterval?: number | undefined;
    };
    type?: string | undefined;
    expression?: string | undefined;
}>;
export declare const valueIncrProgressionObject: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodOptional<z.ZodString>;
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
    type?: string | undefined;
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
    type?: string | undefined;
}>;
export declare const attackObject: z.ZodObject<{
    name: z.ZodString;
    replaceName: z.ZodOptional<z.ZodBoolean>;
    attributes: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
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
    }>]>>;
    enchantments: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        name: z.ZodString;
        type: z.ZodOptional<z.ZodString>;
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
            diceIncrement?: number | undefined;
            availableAt?: number | undefined;
            availableUntil?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            unitInterval?: number | undefined;
        }, {
            dice: number;
            sides: number;
            diceIncrement?: number | undefined;
            availableAt?: number | undefined;
            availableUntil?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            unitInterval?: number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        dice: {
            dice: number;
            sides: number;
            diceIncrement?: number | undefined;
            availableAt?: number | undefined;
            availableUntil?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            unitInterval?: number | undefined;
        };
        type?: string | undefined;
        expression?: string | undefined;
    }, {
        name: string;
        dice: {
            dice: number;
            sides: number;
            diceIncrement?: number | undefined;
            availableAt?: number | undefined;
            availableUntil?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            unitInterval?: number | undefined;
        };
        type?: string | undefined;
        expression?: string | undefined;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodOptional<z.ZodString>;
        expression: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        expression: string;
        type?: string | undefined;
    }, {
        name: string;
        expression: string;
        type?: string | undefined;
    }>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    replaceName?: boolean | undefined;
    attributes?: {
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
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
            }[] | undefined;
        };
    } | undefined;
    enchantments?: ({
        name: string;
        expression: string;
        type?: string | undefined;
    } | {
        name: string;
        dice: {
            dice: number;
            sides: number;
            diceIncrement?: number | undefined;
            availableAt?: number | undefined;
            availableUntil?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            unitInterval?: number | undefined;
        };
        type?: string | undefined;
        expression?: string | undefined;
    })[] | undefined;
}, {
    name: string;
    replaceName?: boolean | undefined;
    attributes?: {
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
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                properties?: Record<string, string | number> | undefined;
            }[] | undefined;
        };
    } | undefined;
    enchantments?: ({
        name: string;
        expression: string;
        type?: string | undefined;
    } | {
        name: string;
        dice: {
            dice: number;
            sides: number;
            diceIncrement?: number | undefined;
            availableAt?: number | undefined;
            availableUntil?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            unitInterval?: number | undefined;
        };
        type?: string | undefined;
        expression?: string | undefined;
    })[] | undefined;
}>;
export declare const actionVariantObject: z.ZodObject<{
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
    type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
    charges?: string | undefined;
    recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
    availableAt?: number | undefined;
    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
    cost?: string | undefined;
}, {
    name: string;
    description: string;
    type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
    charges?: string | undefined;
    recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
    availableAt?: number | undefined;
    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
    cost?: string | undefined;
}>;
export declare const chosenActionObject: z.ZodObject<{
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
        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
        charges?: string | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        availableAt?: number | undefined;
        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
        cost?: string | undefined;
    }, {
        name: string;
        description: string;
        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
        charges?: string | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        availableAt?: number | undefined;
        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
        cost?: string | undefined;
    }>, "many">;
    actionType: z.ZodOptional<z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>>;
    availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
    availableUntil: z.ZodOptional<z.ZodNumber>;
    subType: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    values: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        name: z.ZodString;
        type: z.ZodOptional<z.ZodString>;
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
            diceIncrement?: number | undefined;
            availableAt?: number | undefined;
            availableUntil?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            unitInterval?: number | undefined;
        }, {
            dice: number;
            sides: number;
            diceIncrement?: number | undefined;
            availableAt?: number | undefined;
            availableUntil?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            unitInterval?: number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        dice: {
            dice: number;
            sides: number;
            diceIncrement?: number | undefined;
            availableAt?: number | undefined;
            availableUntil?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            unitInterval?: number | undefined;
        };
        type?: string | undefined;
        expression?: string | undefined;
    }, {
        name: string;
        dice: {
            dice: number;
            sides: number;
            diceIncrement?: number | undefined;
            availableAt?: number | undefined;
            availableUntil?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            unitInterval?: number | undefined;
        };
        type?: string | undefined;
        expression?: string | undefined;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodOptional<z.ZodString>;
        expression: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        expression: string;
        type?: string | undefined;
    }, {
        name: string;
        expression: string;
        type?: string | undefined;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodOptional<z.ZodString>;
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
        type?: string | undefined;
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
        type?: string | undefined;
    }>]>, "many">>;
    attacks: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        replaceName: z.ZodOptional<z.ZodBoolean>;
        attributes: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
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
        }>]>>;
        enchantments: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            name: z.ZodString;
            type: z.ZodOptional<z.ZodString>;
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
                diceIncrement?: number | undefined;
                availableAt?: number | undefined;
                availableUntil?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                unitInterval?: number | undefined;
            }, {
                dice: number;
                sides: number;
                diceIncrement?: number | undefined;
                availableAt?: number | undefined;
                availableUntil?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                unitInterval?: number | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            dice: {
                dice: number;
                sides: number;
                diceIncrement?: number | undefined;
                availableAt?: number | undefined;
                availableUntil?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                unitInterval?: number | undefined;
            };
            type?: string | undefined;
            expression?: string | undefined;
        }, {
            name: string;
            dice: {
                dice: number;
                sides: number;
                diceIncrement?: number | undefined;
                availableAt?: number | undefined;
                availableUntil?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                unitInterval?: number | undefined;
            };
            type?: string | undefined;
            expression?: string | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodOptional<z.ZodString>;
            expression: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            expression: string;
            type?: string | undefined;
        }, {
            name: string;
            expression: string;
            type?: string | undefined;
        }>]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        replaceName?: boolean | undefined;
        attributes?: {
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
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[] | undefined;
            };
        } | undefined;
        enchantments?: ({
            name: string;
            expression: string;
            type?: string | undefined;
        } | {
            name: string;
            dice: {
                dice: number;
                sides: number;
                diceIncrement?: number | undefined;
                availableAt?: number | undefined;
                availableUntil?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                unitInterval?: number | undefined;
            };
            type?: string | undefined;
            expression?: string | undefined;
        })[] | undefined;
    }, {
        name: string;
        replaceName?: boolean | undefined;
        attributes?: {
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
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[] | undefined;
            };
        } | undefined;
        enchantments?: ({
            name: string;
            expression: string;
            type?: string | undefined;
        } | {
            name: string;
            dice: {
                dice: number;
                sides: number;
                diceIncrement?: number | undefined;
                availableAt?: number | undefined;
                availableUntil?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                unitInterval?: number | undefined;
            };
            type?: string | undefined;
            expression?: string | undefined;
        })[] | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    tag: string;
    variants: {
        name: string;
        description: string;
        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
        charges?: string | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        availableAt?: number | undefined;
        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
        cost?: string | undefined;
    }[];
    priority?: number | undefined;
    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
    availableUnit?: "level" | "cr" | undefined;
    availableUntil?: number | undefined;
    subType?: string | undefined;
    source?: string | undefined;
    tags?: string[] | undefined;
    values?: ({
        name: string;
        expression: string;
        type?: string | undefined;
    } | {
        name: string;
        dice: {
            dice: number;
            sides: number;
            diceIncrement?: number | undefined;
            availableAt?: number | undefined;
            availableUntil?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            unitInterval?: number | undefined;
        };
        type?: string | undefined;
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
        type?: string | undefined;
    })[] | undefined;
    attacks?: {
        name: string;
        replaceName?: boolean | undefined;
        attributes?: {
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
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[] | undefined;
            };
        } | undefined;
        enchantments?: ({
            name: string;
            expression: string;
            type?: string | undefined;
        } | {
            name: string;
            dice: {
                dice: number;
                sides: number;
                diceIncrement?: number | undefined;
                availableAt?: number | undefined;
                availableUntil?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                unitInterval?: number | undefined;
            };
            type?: string | undefined;
            expression?: string | undefined;
        })[] | undefined;
    }[] | undefined;
}, {
    tag: string;
    variants: {
        name: string;
        description: string;
        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
        charges?: string | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        availableAt?: number | undefined;
        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
        cost?: string | undefined;
    }[];
    priority?: number | undefined;
    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
    availableUnit?: "level" | "cr" | undefined;
    availableUntil?: number | undefined;
    subType?: string | undefined;
    source?: string | undefined;
    tags?: string[] | undefined;
    values?: ({
        name: string;
        expression: string;
        type?: string | undefined;
    } | {
        name: string;
        dice: {
            dice: number;
            sides: number;
            diceIncrement?: number | undefined;
            availableAt?: number | undefined;
            availableUntil?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            unitInterval?: number | undefined;
        };
        type?: string | undefined;
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
        type?: string | undefined;
    })[] | undefined;
    attacks?: {
        name: string;
        replaceName?: boolean | undefined;
        attributes?: {
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
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[] | undefined;
            };
        } | undefined;
        enchantments?: ({
            name: string;
            expression: string;
            type?: string | undefined;
        } | {
            name: string;
            dice: {
                dice: number;
                sides: number;
                diceIncrement?: number | undefined;
                availableAt?: number | undefined;
                availableUntil?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                unitInterval?: number | undefined;
            };
            type?: string | undefined;
            expression?: string | undefined;
        })[] | undefined;
    }[] | undefined;
}>;
export declare const actionObject: z.ZodUnion<[z.ZodObject<{
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
        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
        charges?: string | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        availableAt?: number | undefined;
        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
        cost?: string | undefined;
    }, {
        name: string;
        description: string;
        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
        charges?: string | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        availableAt?: number | undefined;
        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
        cost?: string | undefined;
    }>, "many">;
    actionType: z.ZodOptional<z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>>;
    availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
    availableUntil: z.ZodOptional<z.ZodNumber>;
    subType: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    values: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        name: z.ZodString;
        type: z.ZodOptional<z.ZodString>;
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
            diceIncrement?: number | undefined;
            availableAt?: number | undefined;
            availableUntil?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            unitInterval?: number | undefined;
        }, {
            dice: number;
            sides: number;
            diceIncrement?: number | undefined;
            availableAt?: number | undefined;
            availableUntil?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            unitInterval?: number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        dice: {
            dice: number;
            sides: number;
            diceIncrement?: number | undefined;
            availableAt?: number | undefined;
            availableUntil?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            unitInterval?: number | undefined;
        };
        type?: string | undefined;
        expression?: string | undefined;
    }, {
        name: string;
        dice: {
            dice: number;
            sides: number;
            diceIncrement?: number | undefined;
            availableAt?: number | undefined;
            availableUntil?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            unitInterval?: number | undefined;
        };
        type?: string | undefined;
        expression?: string | undefined;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodOptional<z.ZodString>;
        expression: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        expression: string;
        type?: string | undefined;
    }, {
        name: string;
        expression: string;
        type?: string | undefined;
    }>, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodOptional<z.ZodString>;
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
        type?: string | undefined;
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
        type?: string | undefined;
    }>]>, "many">>;
    attacks: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        replaceName: z.ZodOptional<z.ZodBoolean>;
        attributes: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
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
        }>]>>;
        enchantments: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            name: z.ZodString;
            type: z.ZodOptional<z.ZodString>;
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
                diceIncrement?: number | undefined;
                availableAt?: number | undefined;
                availableUntil?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                unitInterval?: number | undefined;
            }, {
                dice: number;
                sides: number;
                diceIncrement?: number | undefined;
                availableAt?: number | undefined;
                availableUntil?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                unitInterval?: number | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            dice: {
                dice: number;
                sides: number;
                diceIncrement?: number | undefined;
                availableAt?: number | undefined;
                availableUntil?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                unitInterval?: number | undefined;
            };
            type?: string | undefined;
            expression?: string | undefined;
        }, {
            name: string;
            dice: {
                dice: number;
                sides: number;
                diceIncrement?: number | undefined;
                availableAt?: number | undefined;
                availableUntil?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                unitInterval?: number | undefined;
            };
            type?: string | undefined;
            expression?: string | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodOptional<z.ZodString>;
            expression: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            expression: string;
            type?: string | undefined;
        }, {
            name: string;
            expression: string;
            type?: string | undefined;
        }>]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        replaceName?: boolean | undefined;
        attributes?: {
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
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[] | undefined;
            };
        } | undefined;
        enchantments?: ({
            name: string;
            expression: string;
            type?: string | undefined;
        } | {
            name: string;
            dice: {
                dice: number;
                sides: number;
                diceIncrement?: number | undefined;
                availableAt?: number | undefined;
                availableUntil?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                unitInterval?: number | undefined;
            };
            type?: string | undefined;
            expression?: string | undefined;
        })[] | undefined;
    }, {
        name: string;
        replaceName?: boolean | undefined;
        attributes?: {
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
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[] | undefined;
            };
        } | undefined;
        enchantments?: ({
            name: string;
            expression: string;
            type?: string | undefined;
        } | {
            name: string;
            dice: {
                dice: number;
                sides: number;
                diceIncrement?: number | undefined;
                availableAt?: number | undefined;
                availableUntil?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                unitInterval?: number | undefined;
            };
            type?: string | undefined;
            expression?: string | undefined;
        })[] | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    tag: string;
    variants: {
        name: string;
        description: string;
        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
        charges?: string | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        availableAt?: number | undefined;
        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
        cost?: string | undefined;
    }[];
    priority?: number | undefined;
    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
    availableUnit?: "level" | "cr" | undefined;
    availableUntil?: number | undefined;
    subType?: string | undefined;
    source?: string | undefined;
    tags?: string[] | undefined;
    values?: ({
        name: string;
        expression: string;
        type?: string | undefined;
    } | {
        name: string;
        dice: {
            dice: number;
            sides: number;
            diceIncrement?: number | undefined;
            availableAt?: number | undefined;
            availableUntil?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            unitInterval?: number | undefined;
        };
        type?: string | undefined;
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
        type?: string | undefined;
    })[] | undefined;
    attacks?: {
        name: string;
        replaceName?: boolean | undefined;
        attributes?: {
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
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[] | undefined;
            };
        } | undefined;
        enchantments?: ({
            name: string;
            expression: string;
            type?: string | undefined;
        } | {
            name: string;
            dice: {
                dice: number;
                sides: number;
                diceIncrement?: number | undefined;
                availableAt?: number | undefined;
                availableUntil?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                unitInterval?: number | undefined;
            };
            type?: string | undefined;
            expression?: string | undefined;
        })[] | undefined;
    }[] | undefined;
}, {
    tag: string;
    variants: {
        name: string;
        description: string;
        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
        charges?: string | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        availableAt?: number | undefined;
        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
        cost?: string | undefined;
    }[];
    priority?: number | undefined;
    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
    availableUnit?: "level" | "cr" | undefined;
    availableUntil?: number | undefined;
    subType?: string | undefined;
    source?: string | undefined;
    tags?: string[] | undefined;
    values?: ({
        name: string;
        expression: string;
        type?: string | undefined;
    } | {
        name: string;
        dice: {
            dice: number;
            sides: number;
            diceIncrement?: number | undefined;
            availableAt?: number | undefined;
            availableUntil?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            unitInterval?: number | undefined;
        };
        type?: string | undefined;
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
        type?: string | undefined;
    })[] | undefined;
    attacks?: {
        name: string;
        replaceName?: boolean | undefined;
        attributes?: {
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
                    availableAt?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    properties?: Record<string, string | number> | undefined;
                }[] | undefined;
            };
        } | undefined;
        enchantments?: ({
            name: string;
            expression: string;
            type?: string | undefined;
        } | {
            name: string;
            dice: {
                dice: number;
                sides: number;
                diceIncrement?: number | undefined;
                availableAt?: number | undefined;
                availableUntil?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                unitInterval?: number | undefined;
            };
            type?: string | undefined;
            expression?: string | undefined;
        })[] | undefined;
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
}>]>;
//# sourceMappingURL=actions.d.ts.map