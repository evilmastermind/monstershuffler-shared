"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAttack = void 0;
const stats_1 = require("../stats");
const expressions_1 = require("./expressions");
const statistics_1 = require("./statistics");
const numbers_1 = require("./numbers");
const values_1 = require("./values");
// ---------------------------------------------------------------------------
// ATTACKS PARSING
// ---------------------------------------------------------------------------
function calculateAttack(attack, character, name = "", ability = "STR") {
    const parts = [];
    const v = character.variables;
    // default attributes
    const attributes = attack?.attributes || {
        name: "Dagger",
        cost: "200",
        dice: "1",
        sides: "4",
        damageType: "piercing damage",
        weight: "1",
        range: "20",
        rangeMax: "60",
        properties: ["one-handed", "melee", "simple", "light", "finesse", "thrown"],
    };
    // ERROR: there's still a choice that needs to be resolved
    if ("choice" in attributes) {
        return parts;
    }
    const isSpell = attributes.properties?.includes("spell");
    const isRanged = attributes.properties?.includes("ranged");
    const isThrown = attributes.properties?.includes("thrown");
    const isReach = attributes.properties?.includes("reach");
    const isVersatile = attributes.properties?.includes("versatile");
    const isSpecial = !!attributes?.special;
    let toHitBonus = 0;
    let damageBonus = 0;
    const attackTypePart = {
        string: "",
        type: "translatableText",
        format: ["italic"],
    };
    // attack type
    if (isRanged) {
        attackTypePart.string += "Ranged ";
        toHitBonus += (0, statistics_1.getBonus)(character, "rangedAttack");
        damageBonus += (0, statistics_1.getBonus)(character, "rangedDamage");
        ability ??= "DEX";
    }
    else {
        attackTypePart.string += "Melee ";
        if (isThrown) {
            attackTypePart.string += "or Ranged ";
        }
        toHitBonus += (0, statistics_1.getBonus)(character, "meleeAttack");
        damageBonus += (0, statistics_1.getBonus)(character, "meleeDamage");
        ability ??= "STR";
    }
    if (isSpell) {
        attackTypePart.string += "Spell Attack:";
        toHitBonus += (0, statistics_1.getBonus)(character, "spellAttack");
        damageBonus += (0, statistics_1.getBonus)(character, "spellDamage");
        ability ??=
            (0, statistics_1.getPrioritizedStatistic)(character, "spells")?.ability || "CHA";
    }
    else {
        attackTypePart.string += "Weapon Attack:";
        toHitBonus += (0, statistics_1.getBonus)(character, "weaponAttack");
        damageBonus += (0, statistics_1.getBonus)(character, "weaponDamage");
    }
    parts.push(attackTypePart);
    parts.push((0, statistics_1.createPart)(" "));
    // to hit bonus
    const toHit = v.PROF + v[ability] + toHitBonus;
    parts.push({
        string: `${(0, statistics_1.numberToSignedString)(toHit)} to hit`,
        number: toHit,
        type: "d20Roll",
        roll: {
            name: name || attributes.name || "Attack",
            dice: [
                {
                    sides: 20,
                    dice: 1,
                    bonus: toHit,
                    value: 10 + toHit,
                },
            ],
        },
        translationKey: "toHit",
        translationVariables: {
            toHit: (0, statistics_1.numberToSignedString)(toHit),
        },
    });
    parts.push((0, statistics_1.createPart)(", "));
    // ranged
    if (isRanged) {
        // range
        const range = (0, expressions_1.parseExpressionNumeric)(attributes.range || "20", character);
        const rangeMax = (0, expressions_1.parseExpressionNumeric)(attributes.rangeMax || "0", character);
        if (rangeMax && rangeMax > range) {
            parts.push({
                string: `range ${range}/${rangeMax} ft`,
                type: "range/rangeMax",
                translationKey: "range/rangeMax",
                translationVariables: {
                    range: range.toString(),
                    rangeMax: rangeMax.toString(),
                },
            });
        }
        else {
            parts.push({
                string: `range ${range} ft`,
                type: "range",
                translationKey: "range",
                translationVariables: {
                    range: range.toString(),
                },
            });
        }
        parts.push((0, statistics_1.createPart)(", "));
    }
    else {
        // reach
        const standardReachForSize = stats_1.sizeStats[v.SIZE.toString()].space;
        const weaponsReach = (0, expressions_1.parseExpressionNumeric)(attributes?.reach || standardReachForSize.toString(), character);
        let totalReach;
        if (isReach) {
            totalReach = standardReachForSize + weaponsReach;
        }
        else {
            totalReach = weaponsReach;
        }
        parts.push({
            string: `reach ${totalReach} ft`,
            type: "reach",
            translationKey: "reach",
            translationVariables: {
                reach: weaponsReach.toString(),
            },
        });
        // thrown
        if (isThrown) {
            parts.push((0, statistics_1.createPart)(" "));
            parts.push((0, statistics_1.createPart)("or", "translatableText"));
            parts.push((0, statistics_1.createPart)(" "));
            const range = (0, expressions_1.parseExpressionNumeric)(attributes.range || "20", character);
            const rangeMax = (0, expressions_1.parseExpressionNumeric)(attributes.rangeMax || "0", character);
            if (rangeMax && rangeMax > range) {
                parts.push({
                    string: `range ${range}/${rangeMax} ft`,
                    type: "range/rangeMax",
                    translationKey: "range/rangeMax",
                    translationVariables: {
                        range: range.toString(),
                        rangeMax: rangeMax.toString(),
                    },
                });
            }
            else {
                parts.push({
                    string: `range ${range} ft`,
                    type: "range",
                    translationKey: "range",
                    translationVariables: {
                        range: range.toString(),
                    },
                });
            }
        }
        parts.push((0, statistics_1.createPart)(", "));
    }
    // targets
    const targets = (0, expressions_1.parseExpressionNumeric)(attributes.targets || "1", character);
    parts.push({
        string: `${(0, numbers_1.numberToWord)(targets)} ${targets === 1 ? "target" : "targets"}`,
        type: "valueAsWord",
        translationKey: "value.target",
        translationVariables: { n: targets.toString() },
    });
    parts.push((0, statistics_1.createPart)(". "));
    // damage
    parts.push((0, statistics_1.createPart)("Hit:", "translatableText", ["italic"]));
    parts.push((0, statistics_1.createPart)(" "));
    if ("dice" in attributes) {
        parts.push(createAttackDamagePart(name, ability, damageBonus, attributes, attack, character));
    }
    else {
        // TODO: there should be an option to allow attacks that deal flat damage not based on dice
        parts.push((0, statistics_1.createPart)(" — "));
    }
    // versatile
    if (isVersatile) {
        parts.push((0, statistics_1.createPart)(", "));
        parts.push((0, statistics_1.createPart)("or", "translatableText"));
        parts.push((0, statistics_1.createPart)(" "));
        parts.push(createAttackDamagePart(name, ability, damageBonus, attributes, attack, character, true));
        parts.push((0, statistics_1.createPart)(" "));
        parts.push((0, statistics_1.createPart)("if used with two hands", "translatableText"));
        if (isThrown) {
            parts.push((0, statistics_1.createPart)(" "));
            parts.push((0, statistics_1.createPart)("to make a melee attack", "translatableText"));
        }
    }
    if (isSpecial) {
        parts.push((0, statistics_1.createPart)(". "));
        parts.push((0, statistics_1.createPart)(attributes.special));
    }
    return parts;
}
exports.calculateAttack = calculateAttack;
function createAttackDamagePart(name, ability, damageBonus, attributes, attack, character, isVersatile = false) {
    const v = character.variables;
    const part = {
        string: "",
        type: "diceRoll",
    };
    const dice = (0, expressions_1.parseExpressionNumeric)((isVersatile ? attributes.diceV : attributes.dice) || "1", character);
    const sides = (0, numbers_1.roundDiceSides)((0, expressions_1.parseExpressionNumeric)((isVersatile ? attributes.sidesV : attributes.sides) || "4", character));
    part.roll = {
        dice: [],
        name: name || attributes.name || "Attack",
    };
    const parsedDice = {
        dice,
        sides,
        type: attributes.damageType,
        value: 1,
    };
    const additionalDamage = v[ability] + damageBonus;
    if (additionalDamage !== 0) {
        parsedDice.bonus = additionalDamage;
    }
    let averageDamage = Math.floor(dice * (sides / 2 + 0.5)) + additionalDamage;
    if (averageDamage < 1) {
        averageDamage = 1;
    }
    parsedDice.value = averageDamage;
    let diceString = `${averageDamage} (${dice}d${sides}`;
    if (additionalDamage > 0) {
        diceString += ` + ${additionalDamage}`;
    }
    else if (additionalDamage < 0) {
        diceString += ` - ${Math.abs(additionalDamage)}`;
    }
    diceString += `)`;
    part.string = `${diceString} ${attributes.damageType}`;
    parsedDice.string = diceString;
    part.roll.dice.push(parsedDice);
    attack.enchantments?.forEach((enchantment) => {
        const parsedEnchantment = (0, values_1.calculateValue)(enchantment, character, undefined, true);
        part.string += ` plus ${parsedEnchantment.string}`;
        if ("roll" in parsedEnchantment && parsedEnchantment.roll) {
            if ("dice" in parsedEnchantment.roll && parsedEnchantment.roll.dice) {
                part.roll.dice.push(...parsedEnchantment.roll.dice);
            }
        }
    });
    return part;
}
