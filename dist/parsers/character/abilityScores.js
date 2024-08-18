"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAbilityScores = void 0;
const functions_1 = require("../functions");
const stats_1 = require("../stats");
const functions_2 = require("../../functions");
function calculateAbilityScores(character) {
    const c = character.character;
    (0, functions_1.createUserObjectIfNotExists)(character);
    const user = c.user;
    // @ts-expect-error
    character.statistics.abilities = {};
    if (!user.abilityScores) {
        user.abilityScores = {};
    }
    const abilityScoresLimit = (0, functions_1.getPrioritizedStatistic)(character, 'abilityScoresLimit') || 30;
    for (const abilityName of stats_1.abilities) {
        // generating abilities scores if they don't exist yet
        // base Ability Score = 3d6, min 8;
        if (user.abilityScores[abilityName] === undefined) {
            user.abilityScores[abilityName] = {
                value: (0, functions_2.random)(1, 6) + (0, functions_2.random)(1, 6) + (0, functions_2.random)(1, 6),
            };
        }
        if (user.abilityScores[abilityName].value < 8) {
            user.abilityScores[abilityName].value = 8;
        }
        // checking if there's a template applied to the creature with
        // a minimum score for this ability
        if (c?.template?.abilityScores &&
            Object.hasOwn(c.template.abilityScores, abilityName) &&
            user.abilityScores[abilityName].value <
                c.template.abilityScores[abilityName].value) {
            user.abilityScores[abilityName].value =
                c.template.abilityScores[abilityName].value;
        }
        let abilityScoreTotal = user.abilityScores[abilityName].value;
        // ability score bonus
        const bonus = (0, functions_1.getBonusAndInfo)(character, abilityName);
        abilityScoreTotal += bonus.value;
        // ------- automatic calculation (CR) -------
        if (
        // c?.CRCalculation?.name === "automatic" &&
        user.abilityScores[abilityName]?.isAutomaticCalcDisabled !== true &&
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
        const modifier = Math.floor(abilityScoreTotal / 2) - 5;
        // statistics
        character.statistics.abilities[abilityName] = {
            number: modifier,
            string: '',
            array: [],
        };
        const parts = character.statistics.abilities[abilityName].array;
        parts.push((0, functions_1.createPart)(`${abilityScoreTotal} (`));
        parts.push({
            string: (0, functions_1.numberToSignedString)(modifier),
            number: modifier,
            type: 'd20Roll',
            roll: {
                name: stats_1.abilityNames[abilityName],
                translationKey: stats_1.abilityNames[abilityName],
                dice: [
                    {
                        sides: 20,
                        dice: 1,
                        value: 10 + modifier,
                        bonus: modifier,
                    },
                ],
            },
        });
        parts.push((0, functions_1.createPart)(')'));
        // variables
        character.variables[abilityName] = modifier;
        character.variables[`${abilityName}VALUE`] = abilityScoreTotal;
    }
}
exports.calculateAbilityScores = calculateAbilityScores;
