"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAbilityScores = calculateAbilityScores;
const functions_1 = require("../functions");
const stats_1 = require("../stats");
const functions_2 = require("../../functions");
function calculateAbilityScores(character) {
    (0, functions_1.createUserObjectIfNotExists)(character);
    const c = character.character;
    const u = c.user;
    const s = character.statistics;
    const v = character.variables;
    // @ts-expect-error
    s.abilities = {};
    if (!u.abilityScores) {
        u.abilityScores = {};
    }
    const abilityScoresLimit = (0, functions_1.getPrioritizedStatistic)(character, 'abilityScoresLimit') || 30;
    for (const abilityName of stats_1.abilities) {
        // generating abilities scores if they don't exist yet
        // base Ability Score = 3d6, min 8;
        if (u.abilityScores[abilityName] === undefined) {
            u.abilityScores[abilityName] = {
                value: (0, functions_2.random)(1, 6) + (0, functions_2.random)(1, 6) + (0, functions_2.random)(1, 6),
            };
        }
        if (u.abilityScores[abilityName].value < 8) {
            u.abilityScores[abilityName].value = 8;
        }
        // checking if there's a template applied to the creature with
        // a minimum score for this ability
        if (c?.template?.abilityScores &&
            Object.hasOwn(c.template.abilityScores, abilityName) &&
            u.abilityScores[abilityName].value <
                c.template.abilityScores[abilityName].value) {
            u.abilityScores[abilityName].value =
                c.template.abilityScores[abilityName].value;
        }
        let abilityScoreTotal = u.abilityScores[abilityName].value;
        // ability score bonus
        const bonus = (0, functions_1.getBonusAndInfo)(character, abilityName);
        abilityScoreTotal += bonus.value;
        // ------- automatic calculation (CR) -------
        if (
        // c?.CRCalculation?.name === "automatic" &&
        u.abilityScores[abilityName]?.isAutomaticCalcDisabled !== true &&
            !bonus.hadExpressions) {
            abilityScoreTotal = (0, functions_1.calibrateStatistic)(character, abilityScoreTotal, 'abilityScoresAvg');
        }
        // normalizing ability scores out of bounds
        if (abilityScoreTotal > abilityScoresLimit) {
            abilityScoreTotal = abilityScoresLimit;
        }
        else if (abilityScoreTotal < 1) {
            abilityScoreTotal = 1;
        }
        const modifierNumber = Math.floor(abilityScoreTotal / 2) - 5;
        // statistics
        const score = {
            name: stats_1.abilityNames[abilityName],
            number: abilityScoreTotal,
            string: abilityScoreTotal.toString(),
            array: [(0, functions_1.createPart)(abilityScoreTotal.toString())],
        };
        const modifier = {
            name: stats_1.abilityNames[abilityName],
            number: modifierNumber,
            string: (0, functions_1.numberToSignedString)(modifierNumber),
            array: [
                {
                    string: (0, functions_1.numberToSignedString)(modifierNumber),
                    number: modifierNumber,
                    type: 'd20Roll',
                    roll: {
                        name: stats_1.abilityNames[abilityName],
                        translationKey: stats_1.abilityNames[abilityName],
                        dice: [
                            {
                                sides: 20,
                                dice: 1,
                                value: 10 + modifierNumber,
                                bonus: modifierNumber,
                            },
                        ],
                    },
                }
            ],
        };
        // we temporarily assign the modifier to the save
        // and we'll check if there's a save bonus later
        const save = { ...modifier };
        // statistics
        s.abilities[abilityName] = {
            score,
            modifier,
            save,
        };
        // variables
        v[abilityName] = modifierNumber;
        v[`${abilityName}VALUE`] = abilityScoreTotal;
    }
}
