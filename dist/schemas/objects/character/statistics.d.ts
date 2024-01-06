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
export declare const additionalStringTypes: z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>;
export declare const format: z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>;
export declare const parsedDice: z.ZodObject<{
    dice: z.ZodNumber;
    sides: z.ZodNumber;
    bonus: z.ZodOptional<z.ZodNumber>;
    type: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    dice: number;
    sides: number;
    bonus?: number | undefined;
    type?: string | undefined;
}, {
    dice: number;
    sides: number;
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
export declare const descriptionPartObject: z.ZodObject<{
    string: z.ZodString;
    number: z.ZodOptional<z.ZodNumber>;
    type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
    format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
    dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        dice: z.ZodNumber;
        sides: z.ZodNumber;
        bonus: z.ZodOptional<z.ZodNumber>;
        type: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        dice: number;
        sides: number;
        bonus?: number | undefined;
        type?: string | undefined;
    }, {
        dice: number;
        sides: number;
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
    }>]>, "many">>;
    id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    string: string;
    number?: number | undefined;
    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
    format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
    dice?: ({
        dice: number;
        sides: number;
        bonus?: number | undefined;
        type?: string | undefined;
    } | {
        value: number;
        type?: string | undefined;
    })[] | undefined;
    id?: number | undefined;
}, {
    string: string;
    number?: number | undefined;
    type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
    format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
    dice?: ({
        dice: number;
        sides: number;
        bonus?: number | undefined;
        type?: string | undefined;
    } | {
        value: number;
        type?: string | undefined;
    })[] | undefined;
    id?: number | undefined;
}>;
export declare const statStringNumber: z.ZodObject<{
    number: z.ZodNumber;
    string: z.ZodString;
    id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    string: string;
    number: number;
    id?: number | undefined;
}, {
    string: string;
    number: number;
    id?: number | undefined;
}>;
export declare const statStringNumberArray: z.ZodObject<{
    number: z.ZodNumber;
    string: z.ZodString;
    array: z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        number: z.ZodOptional<z.ZodNumber>;
        type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
        format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
        dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            dice: z.ZodNumber;
            sides: z.ZodNumber;
            bonus: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        }, {
            dice: number;
            sides: number;
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
        }>]>, "many">>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }>, "many">;
    id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    string: string;
    number: number;
    array: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }[];
    id?: number | undefined;
}, {
    string: string;
    number: number;
    array: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
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
        type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
        format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
        dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            dice: z.ZodNumber;
            sides: z.ZodNumber;
            bonus: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        }, {
            dice: number;
            sides: number;
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
        }>]>, "many">>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }>, "many">;
    id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    string: string;
    array: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }[];
    id?: number | undefined;
}, {
    string: string;
    array: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
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
        type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
        format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
        dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            dice: z.ZodNumber;
            sides: z.ZodNumber;
            bonus: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        }, {
            dice: number;
            sides: number;
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
        }>]>, "many">>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }>, "many">;
    name: z.ZodString;
    nameArray: z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        number: z.ZodOptional<z.ZodNumber>;
        type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
        format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
        dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            dice: z.ZodNumber;
            sides: z.ZodNumber;
            bonus: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        }, {
            dice: number;
            sides: number;
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
        }>]>, "many">>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
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
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }[];
    tag: string;
    priority: number;
    nameArray: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
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
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }[];
    tag: string;
    priority: number;
    nameArray: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }[];
    id?: number | undefined;
    recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
    cost?: number | undefined;
    charges?: number | undefined;
}>;
export declare const statisticsObject: z.ZodObject<{
    alignment: z.ZodObject<{
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
        type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
        format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
        dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            dice: z.ZodNumber;
            sides: z.ZodNumber;
            bonus: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        }, {
            dice: number;
            sides: number;
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
        }>]>, "many">>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }>, "many">>;
    level: z.ZodNumber;
    CR: z.ZodObject<{
        number: z.ZodNumber;
        string: z.ZodString;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        id?: number | undefined;
    }>;
    XP: z.ZodString;
    AC: z.ZodObject<{
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>;
    proficiency: z.ZodNumber;
    size: z.ZodObject<{
        number: z.ZodNumber;
        string: z.ZodString;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        id?: number | undefined;
    }>;
    isSwarm: z.ZodOptional<z.ZodBoolean>;
    sizeSingleEntityOfSwarm: z.ZodOptional<z.ZodObject<{
        number: z.ZodNumber;
        string: z.ZodString;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        id?: number | undefined;
    }, {
        string: string;
        number: number;
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
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        id?: number | undefined;
    }>;
    type: z.ZodObject<{
        number: z.ZodNumber;
        string: z.ZodString;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        id?: number | undefined;
    }>;
    subtypes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        number: z.ZodOptional<z.ZodNumber>;
        type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
        format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
        dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            dice: z.ZodNumber;
            sides: z.ZodNumber;
            bonus: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        }, {
            dice: number;
            sides: number;
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
        }>]>, "many">>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }, {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }>, "many">>;
    meta: z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>;
    speeds: z.ZodOptional<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>>;
    savingThrows: z.ZodOptional<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>>;
    skills: z.ZodOptional<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>>;
    resistances: z.ZodOptional<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>>;
    immunities: z.ZodOptional<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>>;
    vulnerabilities: z.ZodOptional<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>>;
    conditionImmunities: z.ZodOptional<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>>;
    senses: z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>;
    languages: z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>;
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
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }>, "many">;
        name: z.ZodString;
        nameArray: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }>, "many">;
        name: z.ZodString;
        nameArray: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }>, "many">;
        name: z.ZodString;
        nameArray: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }>, "many">;
        name: z.ZodString;
        nameArray: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }>, "many">;
        name: z.ZodString;
        nameArray: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            number: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "text", "numberWithSign", "numberAsWord", "ordinal", "ft", "rollableNumberWithSign", "feet", "resource", "tag", "rollableDice"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            dice: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                dice: z.ZodNumber;
                sides: z.ZodNumber;
                bonus: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            }, {
                dice: number;
                sides: number;
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
            }>]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>>;
    legendaryActionsMax: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: {
        string: string;
        number: number;
        id?: number | undefined;
    };
    alignment: {
        string: string;
        number: number;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    };
    pronouns: "male" | "female" | "neutral" | "thing";
    size: {
        string: string;
        number: number;
        id?: number | undefined;
    };
    level: number;
    languages: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    };
    AC: {
        string: string;
        number: number;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    };
    CR: {
        string: string;
        number: number;
        id?: number | undefined;
    };
    HP: {
        string: string;
        number: number;
        id?: number | undefined;
    };
    prename: string;
    surname: string;
    fullName: string;
    XP: string;
    proficiency: number;
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
    meta: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    };
    senses: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    };
    characterHook?: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }[] | undefined;
    isSwarm?: boolean | undefined;
    sizeSingleEntityOfSwarm?: {
        string: string;
        number: number;
        id?: number | undefined;
    } | undefined;
    subtypes?: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }[] | undefined;
    speeds?: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    savingThrows?: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    skills?: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    resistances?: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    immunities?: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    vulnerabilities?: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    conditionImmunities?: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    isBlind?: boolean | undefined;
    canSpeak?: boolean | undefined;
    telepathy?: number | undefined;
    traits?: {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    legendaryActionsMax?: number | undefined;
}, {
    name: string;
    type: {
        string: string;
        number: number;
        id?: number | undefined;
    };
    alignment: {
        string: string;
        number: number;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    };
    pronouns: "male" | "female" | "neutral" | "thing";
    size: {
        string: string;
        number: number;
        id?: number | undefined;
    };
    level: number;
    languages: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    };
    AC: {
        string: string;
        number: number;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    };
    CR: {
        string: string;
        number: number;
        id?: number | undefined;
    };
    HP: {
        string: string;
        number: number;
        id?: number | undefined;
    };
    prename: string;
    surname: string;
    fullName: string;
    XP: string;
    proficiency: number;
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
    meta: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    };
    senses: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    };
    characterHook?: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }[] | undefined;
    isSwarm?: boolean | undefined;
    sizeSingleEntityOfSwarm?: {
        string: string;
        number: number;
        id?: number | undefined;
    } | undefined;
    subtypes?: {
        string: string;
        number?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        dice?: ({
            dice: number;
            sides: number;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[] | undefined;
        id?: number | undefined;
    }[] | undefined;
    speeds?: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    savingThrows?: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    skills?: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    resistances?: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    immunities?: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    vulnerabilities?: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    conditionImmunities?: {
        string: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    isBlind?: boolean | undefined;
    canSpeak?: boolean | undefined;
    telepathy?: number | undefined;
    traits?: {
        string: string;
        name: string;
        array: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        tag: string;
        priority: number;
        nameArray: {
            string: string;
            number?: number | undefined;
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
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
            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "numberAsWord" | "ordinal" | "ft" | "rollableNumberWithSign" | "feet" | "resource" | "rollableDice" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            dice?: ({
                dice: number;
                sides: number;
                bonus?: number | undefined;
                type?: string | undefined;
            } | {
                value: number;
                type?: string | undefined;
            })[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    legendaryActionsMax?: number | undefined;
}>;
export type Statistics = z.infer<typeof statisticsObject>;
//# sourceMappingURL=statistics.d.ts.map