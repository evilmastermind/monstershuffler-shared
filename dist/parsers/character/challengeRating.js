"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateChallengeRating = calculateChallengeRating;
exports.assignNewChallengeRating = assignNewChallengeRating;
const stats_1 = require("../../parsers/stats");
function calculateChallengeRating(character, assignToVariations = true) {
    if (character?.variations?.currentCR !== undefined) {
        assignChallengeRating(character, character.variations.currentCR, (0, stats_1.getChallengeString)(character.variations.currentCR));
        return;
    }
    const level = character.statistics.level;
    const c = character.character;
    let CR = 0;
    if (c?.CRCalculation?.name === 'twopoints') {
        // two-point calculation:
        // the cr of a creature is given by the user at two different levels
        //
        // LVL
        //  |          /
        //  |         x
        //  |        /
        //  |       /
        //  |      x
        //  |     /
        // _|_______________ CR
        //  |
        //
        // all the other CRs per level are then calculated with the "line between two points" equation
        // https://en.wikipedia.org/wiki/Linear_equation#Two-point_form
        //
        // x = Level, y = CR
        const x1 = parseFloat(c.CRCalculation.x1) || 1;
        const y1 = parseFloat(c.CRCalculation.y1) || 0;
        const x2 = parseFloat(c.CRCalculation.x2) || 20;
        const y2 = parseFloat(c.CRCalculation.y2) || 12;
        CR = ((level - x1) * (y2 - y1)) / (x2 - x1) + y1;
    }
    else if (c?.CRCalculation?.name === 'npcstandard') {
        // NPC standard calculation:
        // CR 1/4 = LVL 1
        // CR 1/2 = LVL 2
        // CR 1   = LVL 3
        // ...
        // CR 12  = LVL 20
        if (level === 0) {
            CR = -3;
        }
        else if (level === 1) {
            CR = -1;
        }
        else if (level === 2) {
            CR = 0;
        }
        else if (level === 3) {
            CR = 1;
        }
        else {
            CR = Math.floor((level / 5) * 3);
        }
    }
    else if (c?.CRCalculation?.name === 'automatic') {
        CR = c.CRCalculation.CR || 0;
    }
    if (assignToVariations) {
        character.variations.currentCR = CR;
    }
    assignChallengeRating(character, CR, (0, stats_1.getChallengeString)(CR));
}
function assignNewChallengeRating(character) {
    let CR = character?.variations?.currentCR;
    if (CR === null || CR === undefined) {
        CR = character.variables.CR || 0;
    }
    character.variations.currentCR = CR;
    assignChallengeRating(character, CR, (0, stats_1.getChallengeString)(CR));
}
function assignChallengeRating(character, CR, CRString) {
    // statistics
    character.statistics.CR = {
        number: CR,
        name: CRString,
        string: CRString,
    };
    // variables
    character.statistics.XP =
        // @ts-expect-error CRString is a valid key
        CR <= 30 ? stats_1.challengeStats[CRString].xp.toString() : '???';
    character.variables.CR = (0, stats_1.getChallengeDecimal)(CR);
}
