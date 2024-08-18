"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSavingThrows = void 0;
const functions_1 = require("../functions");
const stats_1 = require("./../stats");
const functions_2 = require("../../functions");
function calculateSavingThrows(character) {
    const s = character.statistics;
    const v = character.variables;
    const savingThrows = (0, functions_1.getStatArrayFromObjects)(character, "savingThrows");
    const savingThrowValues = {};
    s.savingThrows = { string: "", array: [] };
    const proficiency = s.proficiency;
    const limit = (0, functions_1.getCurrentStatLimit)(character);
    for (let i = 0; i < savingThrows.length; i++) {
        for (let j = 0; j < savingThrows[i].length; j++) {
            if (savingThrows[i][j].availableAt === undefined ||
                limit >= savingThrows[i][j].availableAt) {
                const savingThrow = savingThrows[i][j].value;
                const savingThrowValue = v[savingThrow] + proficiency;
                savingThrowValues[savingThrow] = savingThrowValue;
            }
        }
    }
    for (const key in savingThrowValues) {
        if (!Object.hasOwn(savingThrowValues, key) ||
            savingThrowValues[key] === undefined) {
            continue;
        }
        const ability = key;
        const bonus = (0, functions_1.getBonus)(character, `${ability}Save`);
        if (bonus) {
            savingThrowValues[ability] += bonus;
        }
        if (savingThrowValues[ability] === 0) {
            continue;
        }
        (0, functions_1.addCommaIfNotEmpty)(s.savingThrows.array);
        s.savingThrows.array.push((0, functions_1.createPart)((0, functions_2.capitalizeFirst)(ability), "savingThrow"));
        s.savingThrows.array.push((0, functions_1.createPart)(" "));
        s.savingThrows.array.push({
            string: (0, functions_1.numberToSignedString)(savingThrowValues[ability]),
            number: savingThrowValues[ability],
            type: "d20Roll",
            roll: {
                name: stats_1.abilityNames[ability],
                translationKey: stats_1.abilityNames[ability],
                dice: [
                    {
                        sides: 20,
                        dice: 1,
                        value: 10 + savingThrowValues[ability],
                        bonus: savingThrowValues[ability],
                    },
                ],
            },
            translationKey: stats_1.abilityNames[ability],
        });
    }
    stats_1.abilities.forEach((ability) => {
        v[`${ability}SAVE`] =
            savingThrowValues[ability] ?? v[ability];
    });
    s.savingThrows.string = s.savingThrows.array.reduce((acc, obj) => acc + obj.string, "");
    if (!s.savingThrows.string) {
        delete s.savingThrows;
    }
}
exports.calculateSavingThrows = calculateSavingThrows;
