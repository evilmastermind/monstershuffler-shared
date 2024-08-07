import type { AbilitiesEnum, Attack, Character } from "../../types";
export declare function calculateAttack(attack: Attack, character: Character, name?: string, ability?: AbilitiesEnum): {
    string: string;
    number?: number | undefined;
    type?: "damageType" | "range" | "reach" | "type" | "value" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
    format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
    roll?: {
        dice: ({
            dice: number;
            sides: number;
            value: number;
            string?: string | undefined;
            bonus?: number | undefined;
            type?: string | undefined;
        } | {
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
//# sourceMappingURL=attacks.d.ts.map