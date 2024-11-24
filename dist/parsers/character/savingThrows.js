"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSavingThrows = calculateSavingThrows;
const functions_1 = require("../functions");
const stats_1 = require("./../stats");
const functions_2 = require("../../functions");
function calculateSavingThrows(character) {
    const s = character.statistics;
    const v = character.variables;
    const savingThrows = (0, functions_1.getStatArrayFromObjects)(character, 'savingThrows');
    const savingThrowValues = {};
    s.savingThrows = [];
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
        if (!savingThrowValues[ability]) {
            continue;
        }
        s.savingThrows.push({
            name: ability,
            number: savingThrowValues[ability],
            string: '',
            array: []
        });
        const savingThrow = s.savingThrows[s.savingThrows.length - 1];
        savingThrow.array.push((0, functions_1.createPart)((0, functions_2.capitalizeFirst)(ability), 'savingThrow'));
        savingThrow.array.push((0, functions_1.createPart)(' '));
        savingThrow.array.push({
            string: (0, functions_1.numberToSignedString)(savingThrowValues[ability]),
            number: savingThrowValues[ability],
            type: 'd20Roll',
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
        savingThrow.string = savingThrow.array.reduce((acc, obj) => acc + obj.string, '');
    }
    stats_1.abilities.forEach((ability) => {
        v[`${ability}SAVE`] =
            savingThrowValues[ability] ?? v[ability];
    });
    if (!s.savingThrows.length) {
        delete s.savingThrows;
    }
}
