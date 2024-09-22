import { z } from 'zod';
/**
 * About the .statistics object and how it should be constructed:
 * Parsed stats inside .statistics must follow these rules:
 *
 * - the special words included, which are part of the d&d standard rules
 * ( like the stat name, conditions, damage types, etc. ) must be provided
 * in a way that can be isolated and translated;
 *
 * - if the stat includes values/words that a) can be rolled with dice b)
 * define a limited resource or c) may trigger some changes within this
 * stat block or another creature's, those values must be isolated so that
 * they can be processed or extracted for additional functionalities
 * provided by the interface (ex: dice roll, resource tracking, applying
 * conditions or templates, etc.)
 *
 * - it must always be possible to write the stats (in English) in their
 * final form by using the words and values provided within the
 * object and without relying on other resources (like other parsers,
 * tables, etc) so that partners and third-party software can use the
 * .statistics object to draw the stat block. When this is not
 * possible, provide an alternative string that can be used instead.
 *
 */
/**
 * Parsed Dice & translating dice rolls
 * - a parsed dice object's type property can be
 *   something like "acid damage", "hit point", etc.
 * - the string property contains the dice roll in the
 *   format usually found inside stat blocks, like
 *   "10 (2d6 + 3)"
 * - I can create a translated description for the roll
 *   with vue-i18n like this:
 *   $t(`statBlock.value.${type}`, { n: string }, average)
 */
export declare const parsedDice: z.ZodObject<{
    dice: z.ZodNumber;
    sides: z.ZodNumber;
    value: z.ZodNumber;
    string: z.ZodOptional<z.ZodString>;
    bonus: z.ZodOptional<z.ZodNumber>;
    type: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    dice: number;
    sides: number;
    value: number;
    string?: string | undefined;
    bonus?: number | undefined;
    type?: string | undefined;
}, {
    dice: number;
    sides: number;
    value: number;
    string?: string | undefined;
    bonus?: number | undefined;
    type?: string | undefined;
}>;
export declare const parsedExpression: z.ZodObject<{
    value: z.ZodNumber;
    type: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    value: number;
    type?: string | undefined;
}, {
    value: number;
    type?: string | undefined;
}>;
export declare const roll: z.ZodObject<{
    dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        dice: z.ZodNumber;
        sides: z.ZodNumber;
        value: z.ZodNumber;
        string: z.ZodOptional<z.ZodString>;
        bonus: z.ZodOptional<z.ZodNumber>;
        type: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        dice: number;
        sides: number;
        value: number;
        string?: string | undefined;
        bonus?: number | undefined;
        type?: string | undefined;
    }, {
        dice: number;
        sides: number;
        value: number;
        string?: string | undefined;
        bonus?: number | undefined;
        type?: string | undefined;
    }>, z.ZodObject<{
        value: z.ZodNumber;
        type: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value: number;
        type?: string | undefined;
    }, {
        value: number;
        type?: string | undefined;
    }>]>, "many">;
    name: z.ZodOptional<z.ZodString>;
    translationKey: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    dice: ({
        dice: number;
        sides: number;
        value: number;
        string?: string | undefined;
        bonus?: number | undefined;
        type?: string | undefined;
    } | {
        value: number;
        type?: string | undefined;
    })[];
    name?: string | undefined;
    translationKey?: string | undefined;
}, {
    dice: ({
        dice: number;
        sides: number;
        value: number;
        string?: string | undefined;
        bonus?: number | undefined;
        type?: string | undefined;
    } | {
        value: number;
        type?: string | undefined;
    })[];
    name?: string | undefined;
    translationKey?: string | undefined;
}>;
export declare const additionalStringTypes: z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>;
export declare const format: z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>;
export declare const descriptionPartObject: z.ZodObject<{
    string: z.ZodString;
    number: z.ZodOptional<z.ZodNumber>;
    type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
    format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
    roll: z.ZodOptional<z.ZodObject<{
        dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
            dice: z.ZodNumber;
            sides: z.ZodNumber;
            value: z.ZodNumber;
            string: z.ZodOptional<z.ZodString>;
            bonus: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            dice: number;
            sides: number;
            value: number;
            string?: string | undefined;
            bonus?: number | undefined;
            type?: string | undefined;
        }, {
            dice: number;
            sides: number;
            value: number;
            string?: string | undefined;
            bonus?: number | undefined;
            type?: string | undefined;
        }>, z.ZodObject<{
            value: z.ZodNumber;
            type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value: number;
            type?: string | undefined;
        }, {
            value: number;
            type?: string | undefined;
        }>]>, "many">;
        name: z.ZodOptional<z.ZodString>;
        translationKey: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        dice: ({
            dice: number;
            sides: number;
            value: number;
            string?: string | undefined;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[];
        name?: string | undefined;
        translationKey?: string | undefined;
    }, {
        dice: ({
            dice: number;
            sides: number;
            value: number;
            string?: string | undefined;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[];
        name?: string | undefined;
        translationKey?: string | undefined;
    }>>;
    id: z.ZodOptional<z.ZodNumber>;
    translationKey: z.ZodOptional<z.ZodString>;
    translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    string: string;
    number?: number | undefined;
    type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
    format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
    roll?: {
        dice: ({
            dice: number;
            sides: number;
            value: number;
            string?: string | undefined;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[];
        name?: string | undefined;
        translationKey?: string | undefined;
    } | undefined;
    id?: number | undefined;
    translationKey?: string | undefined;
    translationVariables?: Record<string, string> | undefined;
}, {
    string: string;
    number?: number | undefined;
    type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
    format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
    roll?: {
        dice: ({
            dice: number;
            sides: number;
            value: number;
            string?: string | undefined;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[];
        name?: string | undefined;
        translationKey?: string | undefined;
    } | undefined;
    id?: number | undefined;
    translationKey?: string | undefined;
    translationVariables?: Record<string, string> | undefined;
}>;
export declare const statStringNumber: z.ZodObject<{
    name: z.ZodString;
    number: z.ZodNumber;
    string: z.ZodString;
    id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    string: string;
    number: number;
    name: string;
    id?: number | undefined;
}, {
    string: string;
    number: number;
    name: string;
    id?: number | undefined;
}>;
export declare const statStringNumberArray: z.ZodObject<{
    name: z.ZodString;
    number: z.ZodNumber;
    string: z.ZodString;
    array: z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        number: z.ZodOptional<z.ZodNumber>;
        type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
        format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
        roll: z.ZodOptional<z.ZodObject<{
            dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                value: z.ZodNumber;
                string: z.ZodOptional<z.ZodString>;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            }>, z.ZodObject<{
                value: z.ZodNumber;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value: number;
                type?: string | undefined;
            }, {
                value: number;
                type?: string | undefined;
            }>]>, "many">;
            name: z.ZodOptional<z.ZodString>;
            translationKey: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        }, {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        }>>;
        id: z.ZodOptional<z.ZodNumber>;
        translationKey: z.ZodOptional<z.ZodString>;
        translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }>, "many">;
    id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    string: string;
    number: number;
    name: string;
    array: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }[];
    id?: number | undefined;
}, {
    string: string;
    number: number;
    name: string;
    array: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }[];
    id?: number | undefined;
}>;
export declare const statString: z.ZodObject<{
    string: z.ZodString;
    id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    string: string;
    id?: number | undefined;
}, {
    string: string;
    id?: number | undefined;
}>;
export declare const statStringArray: z.ZodObject<{
    string: z.ZodString;
    array: z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        number: z.ZodOptional<z.ZodNumber>;
        type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
        format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
        roll: z.ZodOptional<z.ZodObject<{
            dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                value: z.ZodNumber;
                string: z.ZodOptional<z.ZodString>;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            }>, z.ZodObject<{
                value: z.ZodNumber;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value: number;
                type?: string | undefined;
            }, {
                value: number;
                type?: string | undefined;
            }>]>, "many">;
            name: z.ZodOptional<z.ZodString>;
            translationKey: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        }, {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        }>>;
        id: z.ZodOptional<z.ZodNumber>;
        translationKey: z.ZodOptional<z.ZodString>;
        translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }>, "many">;
    id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    string: string;
    array: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }[];
    id?: number | undefined;
}, {
    string: string;
    array: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }[];
    id?: number | undefined;
}>;
export declare const statStringArrayWithName: z.ZodObject<{
    tag: z.ZodString;
    priority: z.ZodNumber;
    string: z.ZodString;
    array: z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        number: z.ZodOptional<z.ZodNumber>;
        type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
        format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
        roll: z.ZodOptional<z.ZodObject<{
            dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                value: z.ZodNumber;
                string: z.ZodOptional<z.ZodString>;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            }>, z.ZodObject<{
                value: z.ZodNumber;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value: number;
                type?: string | undefined;
            }, {
                value: number;
                type?: string | undefined;
            }>]>, "many">;
            name: z.ZodOptional<z.ZodString>;
            translationKey: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        }, {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        }>>;
        id: z.ZodOptional<z.ZodNumber>;
        translationKey: z.ZodOptional<z.ZodString>;
        translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }>, "many">;
    name: z.ZodString;
    nameArray: z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        number: z.ZodOptional<z.ZodNumber>;
        type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
        format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
        roll: z.ZodOptional<z.ZodObject<{
            dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                value: z.ZodNumber;
                string: z.ZodOptional<z.ZodString>;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            }>, z.ZodObject<{
                value: z.ZodNumber;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value: number;
                type?: string | undefined;
            }, {
                value: number;
                type?: string | undefined;
            }>]>, "many">;
            name: z.ZodOptional<z.ZodString>;
            translationKey: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        }, {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        }>>;
        id: z.ZodOptional<z.ZodNumber>;
        translationKey: z.ZodOptional<z.ZodString>;
        translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }>, "many">;
    id: z.ZodOptional<z.ZodNumber>;
    recharge: z.ZodOptional<z.ZodEnum<["turn", "short", "day", "week", "month", "3-6", "4-6", "5-6", "6-6", "spellGroup", "spellSlot"]>>;
    cost: z.ZodOptional<z.ZodNumber>;
    charges: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    string: string;
    name: string;
    array: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }[];
    tag: string;
    priority: number;
    nameArray: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }[];
    id?: number | undefined;
    recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
    cost?: number | undefined;
    charges?: number | undefined;
}, {
    string: string;
    name: string;
    array: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }[];
    tag: string;
    priority: number;
    nameArray: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }[];
    id?: number | undefined;
    recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
    cost?: number | undefined;
    charges?: number | undefined;
}>;
export declare const abilitiesObject: z.ZodObject<{
    STR: z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }>;
    DEX: z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }>;
    CON: z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }>;
    INT: z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }>;
    WIS: z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }>;
    CHA: z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    STR: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    };
    DEX: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    };
    CON: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    };
    INT: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    };
    WIS: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    };
    CHA: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    };
}, {
    STR: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    };
    DEX: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    };
    CON: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    };
    INT: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    };
    WIS: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    };
    CHA: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    };
}>;
export declare const statisticsObject: z.ZodObject<{
    alignment: z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }>;
    pronouns: z.ZodEnum<["male", "female", "neutral", "thing"]>;
    prename: z.ZodString;
    name: z.ZodString;
    surname: z.ZodString;
    fullName: z.ZodString;
    characterHook: z.ZodOptional<z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        number: z.ZodOptional<z.ZodNumber>;
        type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
        format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
        roll: z.ZodOptional<z.ZodObject<{
            dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                value: z.ZodNumber;
                string: z.ZodOptional<z.ZodString>;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            }>, z.ZodObject<{
                value: z.ZodNumber;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value: number;
                type?: string | undefined;
            }, {
                value: number;
                type?: string | undefined;
            }>]>, "many">;
            name: z.ZodOptional<z.ZodString>;
            translationKey: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        }, {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        }>>;
        id: z.ZodOptional<z.ZodNumber>;
        translationKey: z.ZodOptional<z.ZodString>;
        translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }>, "many">>;
    level: z.ZodNumber;
    CR: z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    }>;
    XP: z.ZodString;
    AC: z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }>;
    proficiency: z.ZodNumber;
    size: z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    }>;
    isSwarm: z.ZodOptional<z.ZodBoolean>;
    sizeSingleEntityOfSwarm: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    }>>;
    abilities: z.ZodObject<{
        STR: z.ZodObject<{
            name: z.ZodString;
            number: z.ZodNumber;
            string: z.ZodString;
            array: z.ZodArray<z.ZodObject<{
                string: z.ZodString;
                number: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
                format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
                roll: z.ZodOptional<z.ZodObject<{
                    dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                        dice: z.ZodNumber;
                        sides: z.ZodNumber;
                        value: z.ZodNumber;
                        string: z.ZodOptional<z.ZodString>;
                        bonus: z.ZodOptional<z.ZodNumber>;
                        type: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    }, {
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    }>, z.ZodObject<{
                        value: z.ZodNumber;
                        type: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value: number;
                        type?: string | undefined;
                    }, {
                        value: number;
                        type?: string | undefined;
                    }>]>, "many">;
                    name: z.ZodOptional<z.ZodString>;
                    translationKey: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                }, {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                }>>;
                id: z.ZodOptional<z.ZodNumber>;
                translationKey: z.ZodOptional<z.ZodString>;
                translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }, {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }>, "many">;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        }, {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        }>;
        DEX: z.ZodObject<{
            name: z.ZodString;
            number: z.ZodNumber;
            string: z.ZodString;
            array: z.ZodArray<z.ZodObject<{
                string: z.ZodString;
                number: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
                format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
                roll: z.ZodOptional<z.ZodObject<{
                    dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                        dice: z.ZodNumber;
                        sides: z.ZodNumber;
                        value: z.ZodNumber;
                        string: z.ZodOptional<z.ZodString>;
                        bonus: z.ZodOptional<z.ZodNumber>;
                        type: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    }, {
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    }>, z.ZodObject<{
                        value: z.ZodNumber;
                        type: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value: number;
                        type?: string | undefined;
                    }, {
                        value: number;
                        type?: string | undefined;
                    }>]>, "many">;
                    name: z.ZodOptional<z.ZodString>;
                    translationKey: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                }, {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                }>>;
                id: z.ZodOptional<z.ZodNumber>;
                translationKey: z.ZodOptional<z.ZodString>;
                translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }, {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }>, "many">;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        }, {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        }>;
        CON: z.ZodObject<{
            name: z.ZodString;
            number: z.ZodNumber;
            string: z.ZodString;
            array: z.ZodArray<z.ZodObject<{
                string: z.ZodString;
                number: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
                format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
                roll: z.ZodOptional<z.ZodObject<{
                    dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                        dice: z.ZodNumber;
                        sides: z.ZodNumber;
                        value: z.ZodNumber;
                        string: z.ZodOptional<z.ZodString>;
                        bonus: z.ZodOptional<z.ZodNumber>;
                        type: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    }, {
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    }>, z.ZodObject<{
                        value: z.ZodNumber;
                        type: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value: number;
                        type?: string | undefined;
                    }, {
                        value: number;
                        type?: string | undefined;
                    }>]>, "many">;
                    name: z.ZodOptional<z.ZodString>;
                    translationKey: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                }, {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                }>>;
                id: z.ZodOptional<z.ZodNumber>;
                translationKey: z.ZodOptional<z.ZodString>;
                translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }, {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }>, "many">;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        }, {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        }>;
        INT: z.ZodObject<{
            name: z.ZodString;
            number: z.ZodNumber;
            string: z.ZodString;
            array: z.ZodArray<z.ZodObject<{
                string: z.ZodString;
                number: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
                format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
                roll: z.ZodOptional<z.ZodObject<{
                    dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                        dice: z.ZodNumber;
                        sides: z.ZodNumber;
                        value: z.ZodNumber;
                        string: z.ZodOptional<z.ZodString>;
                        bonus: z.ZodOptional<z.ZodNumber>;
                        type: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    }, {
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    }>, z.ZodObject<{
                        value: z.ZodNumber;
                        type: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value: number;
                        type?: string | undefined;
                    }, {
                        value: number;
                        type?: string | undefined;
                    }>]>, "many">;
                    name: z.ZodOptional<z.ZodString>;
                    translationKey: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                }, {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                }>>;
                id: z.ZodOptional<z.ZodNumber>;
                translationKey: z.ZodOptional<z.ZodString>;
                translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }, {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }>, "many">;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        }, {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        }>;
        WIS: z.ZodObject<{
            name: z.ZodString;
            number: z.ZodNumber;
            string: z.ZodString;
            array: z.ZodArray<z.ZodObject<{
                string: z.ZodString;
                number: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
                format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
                roll: z.ZodOptional<z.ZodObject<{
                    dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                        dice: z.ZodNumber;
                        sides: z.ZodNumber;
                        value: z.ZodNumber;
                        string: z.ZodOptional<z.ZodString>;
                        bonus: z.ZodOptional<z.ZodNumber>;
                        type: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    }, {
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    }>, z.ZodObject<{
                        value: z.ZodNumber;
                        type: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value: number;
                        type?: string | undefined;
                    }, {
                        value: number;
                        type?: string | undefined;
                    }>]>, "many">;
                    name: z.ZodOptional<z.ZodString>;
                    translationKey: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                }, {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                }>>;
                id: z.ZodOptional<z.ZodNumber>;
                translationKey: z.ZodOptional<z.ZodString>;
                translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }, {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }>, "many">;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        }, {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        }>;
        CHA: z.ZodObject<{
            name: z.ZodString;
            number: z.ZodNumber;
            string: z.ZodString;
            array: z.ZodArray<z.ZodObject<{
                string: z.ZodString;
                number: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
                format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
                roll: z.ZodOptional<z.ZodObject<{
                    dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                        dice: z.ZodNumber;
                        sides: z.ZodNumber;
                        value: z.ZodNumber;
                        string: z.ZodOptional<z.ZodString>;
                        bonus: z.ZodOptional<z.ZodNumber>;
                        type: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    }, {
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    }>, z.ZodObject<{
                        value: z.ZodNumber;
                        type: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        value: number;
                        type?: string | undefined;
                    }, {
                        value: number;
                        type?: string | undefined;
                    }>]>, "many">;
                    name: z.ZodOptional<z.ZodString>;
                    translationKey: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                }, {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                }>>;
                id: z.ZodOptional<z.ZodNumber>;
                translationKey: z.ZodOptional<z.ZodString>;
                translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }, {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }>, "many">;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        }, {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        STR: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        DEX: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        CON: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        INT: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        WIS: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        CHA: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
    }, {
        STR: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        DEX: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        CON: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        INT: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        WIS: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        CHA: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
    }>;
    HP: z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    }>;
    type: z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    }>;
    subtypes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        number: z.ZodOptional<z.ZodNumber>;
        type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
        format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
        roll: z.ZodOptional<z.ZodObject<{
            dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                value: z.ZodNumber;
                string: z.ZodOptional<z.ZodString>;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            }>, z.ZodObject<{
                value: z.ZodNumber;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value: number;
                type?: string | undefined;
            }, {
                value: number;
                type?: string | undefined;
            }>]>, "many">;
            name: z.ZodOptional<z.ZodString>;
            translationKey: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        }, {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        }>>;
        id: z.ZodOptional<z.ZodNumber>;
        translationKey: z.ZodOptional<z.ZodString>;
        translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }>, "many">>;
    meta: z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }>;
    speeds: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }>, "many">>;
    savingThrows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }>, "many">>;
    skills: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }>, "many">>;
    resistances: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }>, "many">>;
    immunities: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }>, "many">>;
    vulnerabilities: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }>, "many">>;
    conditionImmunities: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }>, "many">>;
    senses: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }>, "many">;
    languages: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }>, "many">;
    isBlind: z.ZodOptional<z.ZodBoolean>;
    canSpeak: z.ZodOptional<z.ZodBoolean>;
    telepathy: z.ZodOptional<z.ZodNumber>;
    traits: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodString;
        priority: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        name: z.ZodString;
        nameArray: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
        recharge: z.ZodOptional<z.ZodEnum<["turn", "short", "day", "week", "month", "3-6", "4-6", "5-6", "6-6", "spellGroup", "spellSlot"]>>;
        cost: z.ZodOptional<z.ZodNumber>;
        charges: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }, {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }>, "many">>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodString;
        priority: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        name: z.ZodString;
        nameArray: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
        recharge: z.ZodOptional<z.ZodEnum<["turn", "short", "day", "week", "month", "3-6", "4-6", "5-6", "6-6", "spellGroup", "spellSlot"]>>;
        cost: z.ZodOptional<z.ZodNumber>;
        charges: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }, {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }>, "many">>;
    bonusActions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodString;
        priority: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        name: z.ZodString;
        nameArray: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
        recharge: z.ZodOptional<z.ZodEnum<["turn", "short", "day", "week", "month", "3-6", "4-6", "5-6", "6-6", "spellGroup", "spellSlot"]>>;
        cost: z.ZodOptional<z.ZodNumber>;
        charges: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }, {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }>, "many">>;
    reactions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodString;
        priority: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        name: z.ZodString;
        nameArray: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
        recharge: z.ZodOptional<z.ZodEnum<["turn", "short", "day", "week", "month", "3-6", "4-6", "5-6", "6-6", "spellGroup", "spellSlot"]>>;
        cost: z.ZodOptional<z.ZodNumber>;
        charges: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }, {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }>, "many">>;
    legendaryActions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodString;
        priority: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        name: z.ZodString;
        nameArray: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
        recharge: z.ZodOptional<z.ZodEnum<["turn", "short", "day", "week", "month", "3-6", "4-6", "5-6", "6-6", "spellGroup", "spellSlot"]>>;
        cost: z.ZodOptional<z.ZodNumber>;
        charges: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }, {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }>, "many">>;
    legendaryActionsIntro: z.ZodOptional<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }>>;
    legendaryActionsMax: z.ZodOptional<z.ZodNumber>;
    spellcasting: z.ZodOptional<z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        number: z.ZodOptional<z.ZodNumber>;
        type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
        format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
        roll: z.ZodOptional<z.ZodObject<{
            dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                value: z.ZodNumber;
                string: z.ZodOptional<z.ZodString>;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            }>, z.ZodObject<{
                value: z.ZodNumber;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                value: number;
                type?: string | undefined;
            }, {
                value: number;
                type?: string | undefined;
            }>]>, "many">;
            name: z.ZodOptional<z.ZodString>;
            translationKey: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        }, {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        }>>;
        id: z.ZodOptional<z.ZodNumber>;
        translationKey: z.ZodOptional<z.ZodString>;
        translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }>, "many">>;
    spells: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodString;
        priority: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        name: z.ZodString;
        nameArray: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "paragraphEnd", "listStart", "listEnd", "listItemStart", "listItemEnd", "numberAsWord", "ordinal", "feet", "-feet", "ft", "range/rangeMax", "range", "reach", "resource", "tag", "value", "valueAsWord", "diceRoll", "d20Roll"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "font-bold", "underline", "line-through", "sups", "subs"]>, "many">>;
            roll: z.ZodOptional<z.ZodObject<{
                dice: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    value: z.ZodNumber;
                    string: z.ZodOptional<z.ZodString>;
                    bonus: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }, {
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                }>, z.ZodObject<{
                    value: z.ZodNumber;
                    type: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    value: number;
                    type?: string | undefined;
                }, {
                    value: number;
                    type?: string | undefined;
                }>]>, "many">;
                name: z.ZodOptional<z.ZodString>;
                translationKey: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }, {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            }>>;
            id: z.ZodOptional<z.ZodNumber>;
            translationKey: z.ZodOptional<z.ZodString>;
            translationVariables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
        recharge: z.ZodOptional<z.ZodEnum<["turn", "short", "day", "week", "month", "3-6", "4-6", "5-6", "6-6", "spellGroup", "spellSlot"]>>;
        cost: z.ZodOptional<z.ZodNumber>;
        charges: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }, {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }>, "many">>;
    race: z.ZodOptional<z.ZodString>;
    class: z.ZodOptional<z.ZodString>;
    age: z.ZodOptional<z.ZodString>;
    personality: z.ZodOptional<z.ZodString>;
    voice: z.ZodOptional<z.ZodString>;
    bodyType: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    };
    alignment: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    };
    pronouns: "male" | "female" | "neutral" | "thing";
    size: {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    };
    level: number;
    languages: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }[];
    AC: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    };
    CR: {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    };
    HP: {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    };
    prename: string;
    surname: string;
    fullName: string;
    XP: string;
    proficiency: number;
    abilities: {
        STR: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        DEX: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        CON: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        INT: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        WIS: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        CHA: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
    };
    meta: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    };
    senses: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }[];
    characterHook?: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }[] | undefined;
    isSwarm?: boolean | undefined;
    sizeSingleEntityOfSwarm?: {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    } | undefined;
    subtypes?: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }[] | undefined;
    speeds?: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    savingThrows?: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    skills?: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    resistances?: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    immunities?: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    vulnerabilities?: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    conditionImmunities?: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    isBlind?: boolean | undefined;
    canSpeak?: boolean | undefined;
    telepathy?: number | undefined;
    traits?: {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }[] | undefined;
    actions?: {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }[] | undefined;
    bonusActions?: {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }[] | undefined;
    reactions?: {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }[] | undefined;
    legendaryActions?: {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }[] | undefined;
    legendaryActionsIntro?: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    legendaryActionsMax?: number | undefined;
    spellcasting?: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }[] | undefined;
    spells?: {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }[] | undefined;
    race?: string | undefined;
    class?: string | undefined;
    age?: string | undefined;
    personality?: string | undefined;
    voice?: string | undefined;
    bodyType?: string | undefined;
}, {
    name: string;
    type: {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    };
    alignment: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    };
    pronouns: "male" | "female" | "neutral" | "thing";
    size: {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    };
    level: number;
    languages: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }[];
    AC: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    };
    CR: {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    };
    HP: {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    };
    prename: string;
    surname: string;
    fullName: string;
    XP: string;
    proficiency: number;
    abilities: {
        STR: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        DEX: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        CON: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        INT: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        WIS: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
        CHA: {
            string: string;
            number: number;
            name: string;
            array: {
                string: string;
                number?: number | undefined;
                type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
                format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
                roll?: {
                    dice: ({
                        dice: number;
                        sides: number;
                        value: number;
                        string?: string | undefined;
                        bonus?: number | undefined;
                        type?: string | undefined;
                    } | {
                        value: number;
                        type?: string | undefined;
                    })[];
                    name?: string | undefined;
                    translationKey?: string | undefined;
                } | undefined;
                id?: number | undefined;
                translationKey?: string | undefined;
                translationVariables?: Record<string, string> | undefined;
            }[];
            id?: number | undefined;
        };
    };
    meta: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    };
    senses: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }[];
    characterHook?: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }[] | undefined;
    isSwarm?: boolean | undefined;
    sizeSingleEntityOfSwarm?: {
        string: string;
        number: number;
        name: string;
        id?: number | undefined;
    } | undefined;
    subtypes?: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }[] | undefined;
    speeds?: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    savingThrows?: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    skills?: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    resistances?: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    immunities?: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    vulnerabilities?: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    conditionImmunities?: {
        string: string;
        number: number;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    isBlind?: boolean | undefined;
    canSpeak?: boolean | undefined;
    telepathy?: number | undefined;
    traits?: {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }[] | undefined;
    actions?: {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }[] | undefined;
    bonusActions?: {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }[] | undefined;
    reactions?: {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }[] | undefined;
    legendaryActions?: {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }[] | undefined;
    legendaryActionsIntro?: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    legendaryActionsMax?: number | undefined;
    spellcasting?: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
        format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
        roll?: {
            dice: ({
                dice: number;
                sides: number;
                value: number;
                string?: string | undefined;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[];
            name?: string | undefined;
            translationKey?: string | undefined;
        } | undefined;
        id?: number | undefined;
        translationKey?: string | undefined;
        translationVariables?: Record<string, string> | undefined;
    }[] | undefined;
    spells?: {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
            format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
            roll?: {
                dice: ({
                    dice: number;
                    sides: number;
                    value: number;
                    string?: string | undefined;
                    bonus?: number | undefined;
                    type?: string | undefined;
                } | {
                    value: number;
                    type?: string | undefined;
                })[];
                name?: string | undefined;
                translationKey?: string | undefined;
            } | undefined;
            id?: number | undefined;
            translationKey?: string | undefined;
            translationVariables?: Record<string, string> | undefined;
        }[];
        id?: number | undefined;
        recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
        cost?: number | undefined;
        charges?: number | undefined;
    }[] | undefined;
    race?: string | undefined;
    class?: string | undefined;
    age?: string | undefined;
    personality?: string | undefined;
    voice?: string | undefined;
    bodyType?: string | undefined;
}>;
/**
 * 2024-01-28 Note on spells:
 * both spell slots and uses/day will require the "name" part to have
 * - number of uses
 * - recharge type
 *
 * the difference between them is that they will have a different type of "recharge", and that
 * we need to count the uses for single spells for groups.
 * We don't need to do it in descriptionPart, though. The groups' tag and the spells' id (or name) is
 * enough to be able to identify them
 * */
//# sourceMappingURL=statistics.d.ts.map