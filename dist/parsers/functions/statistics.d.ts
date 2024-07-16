import type { Character, Bonus, DescriptionPart } from "@/types";
import { type Challenge } from "../../parsers/stats";
export declare const objects: string[];
export declare function createPart(string: string, type?: DescriptionPart["type"] | undefined, format?: DescriptionPart["format"], id?: number | undefined): {
    string: string;
    number?: number | undefined;
    type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
    format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
    roll?: {
        dice: ({
            dice: number;
            sides: number;
            value: number;
            string?: string | undefined;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[];
        name?: string | undefined;
        translationKey?: string | undefined;
    } | undefined;
    id?: number | undefined;
    translationKey?: string | undefined;
    translationVariables?: Record<string, string> | undefined;
};
export declare function addPlusSign(number: number): string;
export declare function sortObject(obj: {
    [key: string]: any;
}): {
    [key: string]: any;
};
export declare function isNumber(stat: string): boolean;
export declare function getCurrentStatLimit(character: Character): number;
export declare function getStatArrayFromObjects<T>(character: Character, stat: string): T[];
export declare function getBonusesForOneStatistic(character: Character, stat: string): Bonus[];
export declare function getBonus(character: Character, stat: string): number;
export declare function getBonusAndInfo(character: Character, stat: string): {
    value: number;
    hadExpressions: boolean;
};
export declare function getPrioritizedStatistic<T>(character: Character, key: string): T | undefined;
export declare function getPrioritizedStatisticFromPath<T>(character: Character, key: string): T | undefined;
/**
 *  C A L I B R A T E   S T A T I S T I C
 * ---------------------------------------
 * This function recalculates a statistic when the CR changes.
 *
 * Stat Value [New CR] = ( Stat Value Chosen [Original CR] / Stat Value Average [Original CR]) * Stat Value Average [New CR]
 *
 * Example:
 * Zombie: CR 1/4, AC 8
 * Average AC for a CR 1/4 creature is 13
 * Average AC for a CR 10 creature is 16
 * The AC for a Zombie at CR 10 would be: (8/13)*16 = 9.846 => 10
 *
 *
 * I call ( Stat Value Chosen [Original CR] / Stat Value Average [Original CR]) the calibration factor.
 * It is the factor by which the original statistic value is multiplied to get the new statistic value.
 * If the difference between the original CR and the new CR is too big, the calibration factor is reduced (see below).
 *
 * Stat value averages were calculated by Surfarcher
 * https://surfarcher.blogspot.com/2015/07/d-5e-monsters-part-11-construction.html
 *
 */
export declare function calibrateStatistic(character: Character, statValue: number, statName: keyof Challenge): number;
export declare function addCommaIfNotEmpty(array: DescriptionPart[]): void;
export declare function pushWithComma(originalString: string, string2: string): string;
export declare function numberToSignedString(number: number): string;
export declare function unshiftWithComma(originalString: string, string2: string): string;
export declare function feetToOtherUnit(feet: number, unit?: string): number;
export declare function feetDecimalToFeetInches(decimalFeet: number): string;
export declare function feetDecimalToMeters(decimalFeet: number): string;
export declare function getUnitSymbol(unit?: string): "ft" | "m" | "sq" | undefined;
export declare function parseNameChoices(name?: string): string;
//# sourceMappingURL=statistics.d.ts.map