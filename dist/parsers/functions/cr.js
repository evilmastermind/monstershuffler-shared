"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjustLevel = exports.lowerCR = exports.raiseCR = exports.setCR = void 0;
const character_1 = require("../character");
const parsers_1 = require("../../parsers");
function setCR(character, CR) {
    let CRNumber = (0, parsers_1.getChallengeNumber)(CR);
    if (CRNumber < -3) {
        CRNumber = -3;
    }
    character.variations.currentCR = CRNumber;
    adjustLevel(character);
    (0, character_1.createStats)(character);
}
exports.setCR = setCR;
function raiseCR(character) {
    character.variations.currentCR++;
    adjustLevel(character);
    if (character.variations.currentHD <= character.statistics.level) {
        character.variations.currentHD++;
    }
    if (character.variations.currentHD <= 0) {
        character.variations.currentHD = 1;
    }
    (0, character_1.createStats)(character);
}
function lowerCR(character) {
    if (character.variations.currentHD <= 1) {
        return;
    }
    character.variations.currentCR--;
    if (character.variations.currentCR < -3) {
        character.variations.currentCR = -3;
    }
    adjustLevel(character);
    if (character.variations.currentHD >= character.statistics.level) {
        character.variations.currentHD--;
    }
    if (character.variations.currentHD <= 0) {
        character.variations.currentHD = 1;
    }
    (0, character_1.createStats)(character);
}
function adjustLevel(character) {
    if (character?.character?.CRCalculation?.name === 'automatic') {
        return;
    }
    const CR = character.variations.currentCR;
    if (character?.character?.CRCalculation?.name === 'twopoints') {
        const x1 = parseFloat(character.character?.CRCalculation?.x1);
        const y1 = parseFloat(character.character?.CRCalculation?.y1);
        const x2 = parseFloat(character.character?.CRCalculation?.x2);
        const y2 = parseFloat(character.character?.CRCalculation?.y2);
        character.variations.currentHD = Math.round(((CR - y1) * (x2 - x1)) / (y2 - y1) + x1);
    }
    if (character?.character?.CRCalculation?.name === 'npcstandard') {
        if (CR === -3 || isNaN(CR))
            character.variations.currentHD = 1;
        else if (CR === -2)
            character.variations.currentHD = 1;
        else if (CR === -1)
            character.variations.currentHD = 1;
        else if (CR === 0)
            character.variations.currentHD = 2;
        else if (CR === 1)
            character.variations.currentHD = 3;
        else
            character.variations.currentHD = Math.ceil((CR / 3) * 5);
    }
}
