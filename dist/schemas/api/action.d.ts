import { z } from 'zod';
export declare const sGetActionListBody: z.ZodObject<{
    game: z.ZodOptional<z.ZodNumber>;
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    subtype: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    source: z.ZodOptional<z.ZodString>;
    tag: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    type?: string | undefined;
    subtype?: string | undefined;
    source?: string | undefined;
    tag?: string | undefined;
    game?: number | undefined;
}, {
    name?: string | undefined;
    type?: string | undefined;
    subtype?: string | undefined;
    source?: string | undefined;
    tag?: string | undefined;
    game?: number | undefined;
}>;
export declare const sGetActionListResponse: z.ZodObject<{
    list: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        userid: z.ZodNumber;
        actionsdetails: z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            subtype: z.ZodOptional<z.ZodString>;
            source: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            type: string;
            source: string;
            subtype?: string | undefined;
        }, {
            name: string;
            type: string;
            source: string;
            subtype?: string | undefined;
        }>;
        actionstags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        userid: number;
        actionsdetails: {
            name: string;
            type: string;
            source: string;
            subtype?: string | undefined;
        };
        actionstags?: string[] | undefined;
    }, {
        id: number;
        userid: number;
        actionsdetails: {
            name: string;
            type: string;
            source: string;
            subtype?: string | undefined;
        };
        actionstags?: string[] | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    list: {
        id: number;
        userid: number;
        actionsdetails: {
            name: string;
            type: string;
            source: string;
            subtype?: string | undefined;
        };
        actionstags?: string[] | undefined;
    }[];
}, {
    list: {
        id: number;
        userid: number;
        actionsdetails: {
            name: string;
            type: string;
            source: string;
            subtype?: string | undefined;
        };
        actionstags?: string[] | undefined;
    }[];
}>;
export declare const sGetActionResponse: z.ZodObject<{
    id: z.ZodNumber;
    userid: z.ZodNumber;
    object: z.ZodUnion<[z.ZodObject<{
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
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["", "target", "attack", "creature", "humanoid", "round", "minute", "hour", "day", "DC Strength", "DC Dexterity", "DC Constitution", "DC Intelligence", "DC Wisdom", "DC Charisma", "DC Strength saving throw", "DC Dexterity saving throw", "DC Constitution saving throw", "DC Intelligence saving throw", "DC Wisdom saving throw", "DC Charisma saving throw", "hit point", "temporary hit points", "+", "-st-nd-rd", "feet", "-feet", "time", "damage"]>, z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>]>>;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            expression?: string | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["", "target", "attack", "creature", "humanoid", "round", "minute", "hour", "day", "DC Strength", "DC Dexterity", "DC Constitution", "DC Intelligence", "DC Wisdom", "DC Charisma", "DC Strength saving throw", "DC Dexterity saving throw", "DC Constitution saving throw", "DC Intelligence saving throw", "DC Wisdom saving throw", "DC Charisma saving throw", "hit point", "temporary hit points", "+", "-st-nd-rd", "feet", "-feet", "time", "damage"]>, z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>]>>;
            expression: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            expression: string;
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
        }, {
            name: string;
            expression: string;
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["", "target", "attack", "creature", "humanoid", "round", "minute", "hour", "day", "DC Strength", "DC Dexterity", "DC Constitution", "DC Intelligence", "DC Wisdom", "DC Charisma", "DC Strength saving throw", "DC Dexterity saving throw", "DC Constitution saving throw", "DC Intelligence saving throw", "DC Wisdom saving throw", "DC Charisma saving throw", "hit point", "temporary hit points", "+", "-st-nd-rd", "feet", "-feet", "time", "damage"]>, z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>]>>;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
    }>]>;
    actionsdetails: z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
        subtype: z.ZodOptional<z.ZodString>;
        source: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: string;
        source: string;
        subtype?: string | undefined;
    }, {
        name: string;
        type: string;
        source: string;
        subtype?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    object: {
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
    };
    id: number;
    userid: number;
    actionsdetails: {
        name: string;
        type: string;
        source: string;
        subtype?: string | undefined;
    };
}, {
    object: {
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
    };
    id: number;
    userid: number;
    actionsdetails: {
        name: string;
        type: string;
        source: string;
        subtype?: string | undefined;
    };
}>;
export declare const sPostActionBody: z.ZodObject<{
    game: z.ZodNumber;
    name: z.ZodString;
    type: z.ZodString;
    subtype: z.ZodOptional<z.ZodString>;
    source: z.ZodString;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    object: z.ZodUnion<[z.ZodObject<{
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
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["", "target", "attack", "creature", "humanoid", "round", "minute", "hour", "day", "DC Strength", "DC Dexterity", "DC Constitution", "DC Intelligence", "DC Wisdom", "DC Charisma", "DC Strength saving throw", "DC Dexterity saving throw", "DC Constitution saving throw", "DC Intelligence saving throw", "DC Wisdom saving throw", "DC Charisma saving throw", "hit point", "temporary hit points", "+", "-st-nd-rd", "feet", "-feet", "time", "damage"]>, z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>]>>;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            expression?: string | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["", "target", "attack", "creature", "humanoid", "round", "minute", "hour", "day", "DC Strength", "DC Dexterity", "DC Constitution", "DC Intelligence", "DC Wisdom", "DC Charisma", "DC Strength saving throw", "DC Dexterity saving throw", "DC Constitution saving throw", "DC Intelligence saving throw", "DC Wisdom saving throw", "DC Charisma saving throw", "hit point", "temporary hit points", "+", "-st-nd-rd", "feet", "-feet", "time", "damage"]>, z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>]>>;
            expression: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            expression: string;
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
        }, {
            name: string;
            expression: string;
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["", "target", "attack", "creature", "humanoid", "round", "minute", "hour", "day", "DC Strength", "DC Dexterity", "DC Constitution", "DC Intelligence", "DC Wisdom", "DC Charisma", "DC Strength saving throw", "DC Dexterity saving throw", "DC Constitution saving throw", "DC Intelligence saving throw", "DC Wisdom saving throw", "DC Charisma saving throw", "hit point", "temporary hit points", "+", "-st-nd-rd", "feet", "-feet", "time", "damage"]>, z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>]>>;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
    }>]>;
}, "strip", z.ZodTypeAny, {
    object: {
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
    };
    name: string;
    type: string;
    source: string;
    game: number;
    subtype?: string | undefined;
    tags?: string[] | undefined;
}, {
    object: {
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
    };
    name: string;
    type: string;
    source: string;
    game: number;
    subtype?: string | undefined;
    tags?: string[] | undefined;
}>;
export declare const sPutActionBody: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    subtype: z.ZodOptional<z.ZodString>;
    source: z.ZodString;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    object: z.ZodUnion<[z.ZodObject<{
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
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["", "target", "attack", "creature", "humanoid", "round", "minute", "hour", "day", "DC Strength", "DC Dexterity", "DC Constitution", "DC Intelligence", "DC Wisdom", "DC Charisma", "DC Strength saving throw", "DC Dexterity saving throw", "DC Constitution saving throw", "DC Intelligence saving throw", "DC Wisdom saving throw", "DC Charisma saving throw", "hit point", "temporary hit points", "+", "-st-nd-rd", "feet", "-feet", "time", "damage"]>, z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>]>>;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
            expression?: string | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["", "target", "attack", "creature", "humanoid", "round", "minute", "hour", "day", "DC Strength", "DC Dexterity", "DC Constitution", "DC Intelligence", "DC Wisdom", "DC Charisma", "DC Strength saving throw", "DC Dexterity saving throw", "DC Constitution saving throw", "DC Intelligence saving throw", "DC Wisdom saving throw", "DC Charisma saving throw", "hit point", "temporary hit points", "+", "-st-nd-rd", "feet", "-feet", "time", "damage"]>, z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>]>>;
            expression: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            expression: string;
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
        }, {
            name: string;
            expression: string;
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
        }>, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["", "target", "attack", "creature", "humanoid", "round", "minute", "hour", "day", "DC Strength", "DC Dexterity", "DC Constitution", "DC Intelligence", "DC Wisdom", "DC Charisma", "DC Strength saving throw", "DC Dexterity saving throw", "DC Constitution saving throw", "DC Intelligence saving throw", "DC Wisdom saving throw", "DC Charisma saving throw", "hit point", "temporary hit points", "+", "-st-nd-rd", "feet", "-feet", "time", "damage"]>, z.ZodEnum<["acid damage", "bludgeoning damage", "cold damage", "fire damage", "force damage", "lightning damage", "necrotic damage", "piercing damage", "poison damage", "psychic damage", "radiant damage", "slashing damage", "thunder damage"]>]>>;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
    }>]>;
}, "strip", z.ZodTypeAny, {
    object: {
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
    };
    name: string;
    type: string;
    source: string;
    subtype?: string | undefined;
    tags?: string[] | undefined;
}, {
    object: {
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
            type?: "" | "attack" | "acid damage" | "bludgeoning damage" | "cold damage" | "fire damage" | "force damage" | "lightning damage" | "necrotic damage" | "piercing damage" | "poison damage" | "psychic damage" | "radiant damage" | "slashing damage" | "thunder damage" | "day" | "target" | "creature" | "humanoid" | "round" | "minute" | "hour" | "DC Strength" | "DC Dexterity" | "DC Constitution" | "DC Intelligence" | "DC Wisdom" | "DC Charisma" | "DC Strength saving throw" | "DC Dexterity saving throw" | "DC Constitution saving throw" | "DC Intelligence saving throw" | "DC Wisdom saving throw" | "DC Charisma saving throw" | "hit point" | "temporary hit points" | "+" | "-st-nd-rd" | "feet" | "-feet" | "time" | "damage" | undefined;
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
    };
    name: string;
    type: string;
    source: string;
    subtype?: string | undefined;
    tags?: string[] | undefined;
}>;
//# sourceMappingURL=action.d.ts.map