import type { ActionVariant, Character, DescriptionPart, ValueDice, ValueExpression, ValueIncrProgression, Enchantment } from '../../types';
export declare function calculateValue(value: ValueDice | ValueExpression | ValueIncrProgression | Enchantment, character: Character, variant?: ActionVariant | undefined, isEnchantment?: boolean): {
    string: string;
    number?: number | undefined;
    id?: number | undefined;
    type?: "damageType" | "range" | "reach" | "value" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | "tag" | "text" | "translatableText" | "nextLine" | "paragraphEnd" | "listStart" | "listEnd" | "listItemStart" | "listItemEnd" | "numberAsWord" | "ordinal" | "feet" | "-feet" | "ft" | "range/rangeMax" | "resource" | "valueAsWord" | "diceRoll" | "d20Roll" | undefined;
    translationKey?: string | undefined;
    format?: ("italic" | "font-bold" | "underline" | "line-through" | "sups" | "subs")[] | undefined;
    roll?: {
        dice: ({
            dice: number;
            sides: number;
            value: number;
            string?: string | undefined;
            type?: string | undefined;
            bonus?: number | undefined;
        } | {
            value: number;
            type?: string | undefined;
        })[];
        name?: string | undefined;
        translationKey?: string | undefined;
    } | undefined;
    translationVariables?: Record<string, string> | undefined;
};
export declare function addAdditionalDescriptionParts(part: DescriptionPart, type?: string, average?: number): void;
//# sourceMappingURL=values.d.ts.map