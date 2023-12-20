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
export declare const additionalStringTypes: z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>;
export declare const format: z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>;
export declare const descriptionPartObject: z.ZodObject<{
    string: z.ZodString;
    type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
    format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
    id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    string: string;
    type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
    format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
    id?: number | undefined;
}, {
    string: string;
    type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
    format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
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
        type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
        format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }, {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }>, "many">;
    id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    string: string;
    number: number;
    array: {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }[];
    id?: number | undefined;
}, {
    string: string;
    number: number;
    array: {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
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
        type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
        format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }, {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }>, "many">;
    id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    string: string;
    array: {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }[];
    id?: number | undefined;
}, {
    string: string;
    array: {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }[];
    id?: number | undefined;
}>;
export declare const statStringArrayWithName: z.ZodObject<{
    string: z.ZodString;
    array: z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
        format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }, {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }>, "many">;
    nameString: z.ZodString;
    nameArray: z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
        format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }, {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }>, "many">;
    id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    string: string;
    array: {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }[];
    nameString: string;
    nameArray: {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }[];
    id?: number | undefined;
}, {
    string: string;
    array: {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }[];
    nameString: string;
    nameArray: {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }[];
    id?: number | undefined;
}>;
export declare const statisticsObject: z.ZodObject<{
    alignment: z.ZodObject<{
        number: z.ZodNumber;
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
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
        type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
        format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }, {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
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
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        number: number;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        number: number;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
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
        type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
        format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }, {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }>, "many">>;
    meta: z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>;
    speeds: z.ZodOptional<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>>;
    savingThrows: z.ZodOptional<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>>;
    skills: z.ZodOptional<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>>;
    resistances: z.ZodOptional<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>>;
    immunities: z.ZodOptional<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>>;
    vulnerabilities: z.ZodOptional<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>>;
    conditionImmunities: z.ZodOptional<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>>;
    senses: z.ZodOptional<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>>;
    languages: z.ZodOptional<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>>;
    isBlind: z.ZodOptional<z.ZodBoolean>;
    canSpeak: z.ZodOptional<z.ZodBoolean>;
    telepathy: z.ZodOptional<z.ZodNumber>;
    traits: z.ZodOptional<z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        nameString: z.ZodString;
        nameArray: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>, "many">>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        nameString: z.ZodString;
        nameArray: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>, "many">>;
    bonusActions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        nameString: z.ZodString;
        nameArray: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>, "many">>;
    reactions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        nameString: z.ZodString;
        nameArray: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>, "many">>;
    legendaryActions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        string: z.ZodString;
        array: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        nameString: z.ZodString;
        nameArray: z.ZodArray<z.ZodObject<{
            string: z.ZodString;
            type: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["armor", "background", "class", "condition", "conditionImmunity", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "size", "skill", "sense", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>, z.ZodEnum<["text", "translatableText", "nextLine", "endOfParagraph", "number", "numberWithSign", "ft", "rollableNumberWithSign"]>]>>;
            format: z.ZodOptional<z.ZodArray<z.ZodEnum<["italic", "bold", "underline", "strikethrough", "superscript", "subscript"]>, "many">>;
            id: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }, {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }>, "many">;
        id: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }, {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: {
        string: string;
        number: number;
        id?: number | undefined;
    };
    pronouns: "male" | "female" | "neutral" | "thing";
    size: {
        string: string;
        number: number;
        id?: number | undefined;
    };
    level: number;
    AC: {
        string: string;
        number: number;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    };
    CR: {
        string: string;
        number: number;
        id?: number | undefined;
    };
    alignment: {
        string: string;
        number: number;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
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
    HP: {
        string: string;
        number: number;
        id?: number | undefined;
    };
    meta: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    };
    characterHook?: {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
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
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }[] | undefined;
    speeds?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    savingThrows?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    skills?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    resistances?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    immunities?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    vulnerabilities?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    conditionImmunities?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    senses?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    languages?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    isBlind?: boolean | undefined;
    canSpeak?: boolean | undefined;
    telepathy?: number | undefined;
    traits?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    actions?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    bonusActions?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    reactions?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    legendaryActions?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
}, {
    name: string;
    type: {
        string: string;
        number: number;
        id?: number | undefined;
    };
    pronouns: "male" | "female" | "neutral" | "thing";
    size: {
        string: string;
        number: number;
        id?: number | undefined;
    };
    level: number;
    AC: {
        string: string;
        number: number;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    };
    CR: {
        string: string;
        number: number;
        id?: number | undefined;
    };
    alignment: {
        string: string;
        number: number;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
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
    HP: {
        string: string;
        number: number;
        id?: number | undefined;
    };
    meta: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    };
    characterHook?: {
        string: string;
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
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
        type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
        format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
        id?: number | undefined;
    }[] | undefined;
    speeds?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    savingThrows?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    skills?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    resistances?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    immunities?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    vulnerabilities?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    conditionImmunities?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    senses?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    languages?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    } | undefined;
    isBlind?: boolean | undefined;
    canSpeak?: boolean | undefined;
    telepathy?: number | undefined;
    traits?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    actions?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    bonusActions?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    reactions?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
    legendaryActions?: {
        string: string;
        array: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        nameString: string;
        nameArray: {
            string: string;
            type?: "number" | "type" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "size" | "skill" | "sense" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "text" | "translatableText" | "nextLine" | "endOfParagraph" | "numberWithSign" | "ft" | "rollableNumberWithSign" | undefined;
            format?: ("italic" | "bold" | "underline" | "strikethrough" | "superscript" | "subscript")[] | undefined;
            id?: number | undefined;
        }[];
        id?: number | undefined;
    }[] | undefined;
}>;
export type Statistics = z.infer<typeof statisticsObject>;
//# sourceMappingURL=statistics.d.ts.map