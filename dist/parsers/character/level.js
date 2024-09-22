"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recalculateLevelAfterAutomaticHP = exports.calculateLevel = void 0;
const parsers_1 = require("@/parsers");
const functions_1 = require("@/parsers/functions");
function calculateLevel(character) {
    // level-based calculation when the level has been already
    // calculated  once
    if (character?.variations?.currentHD !== undefined &&
        character?.character?.CRCalculation?.name !== "automatic") {
        assignLevel(character, character.variations.currentHD);
        return;
    }
    // level-based CR calculation when the level has not been
    // calculated yet, or automatic calculation on its first phase
    let level = 0;
    const HD = (0, functions_1.getStatArrayFromObjects)(character, "HD");
    HD.forEach((hd) => {
        level += hd;
    });
    if (level === 0) {
        level = 1;
    }
    character.variations.currentHD = level;
    assignLevel(character, level);
}
exports.calculateLevel = calculateLevel;
function assignLevel(character, level) {
    // statistics
    character.statistics.level = level;
    // variables
    character.variables.LVL = level;
}
/** ------- automatic calculation (CR) -------
 * This function is called after the HP have been adjusted to the new CR
 * when the Challenge Rating Calculation is set to automatic.
 */
function recalculateLevelAfterAutomaticHP(character) {
    const v = character.variables;
    const HP = v.HP;
    const CON = v.CON;
    const size = v.SIZE;
    const die = parsers_1.sizeStats[size.toString()].hitDice;
    let level = Math.floor(HP / ((die + 1) / 2 + CON));
    if (level === 0) {
        level = 1;
    }
    character.statistics.level = level;
    character.variables.LVL = level;
    character.variations.currentHD = level;
}
exports.recalculateLevelAfterAutomaticHP = recalculateLevelAfterAutomaticHP;
