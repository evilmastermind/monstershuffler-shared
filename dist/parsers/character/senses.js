"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSenses = void 0;
const stats_1 = require("../stats");
const functions_1 = require("@/parsers/functions");
const functions_2 = require("@/functions");
function calculateSenses(character) {
    const s = character.statistics;
    const v = character.variables;
    s.senses = {
        string: "",
        array: [],
    };
    let senses = {};
    for (const sense of stats_1.sensesList) {
        const senseExpression = (0, functions_1.getPrioritizedStatisticFromPath)(character, `.senses.'${sense}'`);
        if (!senseExpression) {
            continue;
        }
        const senseBonus = (0, functions_1.getBonus)(character, sense);
        const senseNumber = (0, functions_1.parseExpressionNumeric)(senseExpression, character) + senseBonus;
        senses[sense] = senseNumber;
    }
    senses = (0, functions_1.sortObject)(senses);
    const passivePerceptionBonus = (0, functions_1.getBonus)(character, "passivePerception");
    senses["passive Perception"] =
        10 + (v?.PERCEPTION || v.WIS) + passivePerceptionBonus;
    const isBlind = (0, functions_1.getPrioritizedStatistic)(character, "isBlind");
    let alternativeSense = "";
    let mostPowerfulSense = 0;
    if (isBlind) {
        s.isBlind = true;
        alternativeSense = "just blind";
        if (Object.hasOwn(senses, "blindsight") &&
            senses.blindsight !== undefined) {
            alternativeSense = "blindsight";
            mostPowerfulSense = senses.blindsight;
        }
        if (Object.hasOwn(senses, "tremorsense") &&
            senses.tremorsense !== undefined) {
            if (senses.tremorsense > mostPowerfulSense) {
                alternativeSense = "tremorsense";
                mostPowerfulSense = senses.tremorsense;
            }
        }
    }
    for (const key in senses) {
        if (!Object.hasOwn(senses, key)) {
            continue;
        }
        if (senses[key] === undefined) {
            continue;
        }
        const sense = key;
        (0, functions_1.addCommaIfNotEmpty)(s.senses.array);
        if (sense === "passive Perception") {
            s.senses.array.push((0, functions_1.createPart)("passive Perception", "sense"));
            s.senses.array.push((0, functions_1.createPart)(" "));
            s.senses.array.push((0, functions_1.createPart)(senses[sense].toString()));
        }
        else {
            s.senses.array.push((0, functions_1.createPart)((0, functions_2.capitalizeFirst)(sense), "sense"));
            s.senses.array.push((0, functions_1.createPart)(" "));
            s.senses.array.push({
                string: `${senses[sense]} ft`,
                number: senses[sense],
                type: "ft",
            });
            if (sense === alternativeSense) {
                s.senses.array.push((0, functions_1.createPart)(" ("));
                s.senses.array.push((0, functions_1.createPart)("blind beyond this radius", "translatableText"));
                s.senses.array.push((0, functions_1.createPart)(")"));
            }
        }
    }
    stats_1.sensesList.forEach((sense) => {
        v[`${sense.toUpperCase().replace(/\s/g, "")}`] =
            senses[sense] ?? 0;
    });
    if (alternativeSense === "just blind") {
        s.senses.array.unshift((0, functions_1.createPart)(", "));
        s.senses.array.unshift((0, functions_1.createPart)("Blind", "translatableText"));
    }
    s.senses.string = s.senses.array.reduce((acc, obj) => acc + obj.string, "");
}
exports.calculateSenses = calculateSenses;
