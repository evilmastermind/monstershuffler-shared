"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAlignmentNumber = calculateAlignmentNumber;
exports.calculateAlignmentFromModifiers = calculateAlignmentFromModifiers;
const functions_1 = require("../../functions");
const functions_2 = require("../../parsers/functions");
function calculateAlignmentNumber(alignmentEthical, alignmentMoral) {
    let alignmentNumber = 0;
    switch (alignmentEthical) {
        case 'Lawful':
            alignmentNumber += 1;
            break;
        case 'Neutral':
            alignmentNumber += 2;
            break;
        case 'Chaotic':
            alignmentNumber += 3;
            break;
    }
    switch (alignmentMoral) {
        case 'Good':
            alignmentNumber += 10;
            break;
        case 'Neutral':
            alignmentNumber += 20;
            break;
        case 'Evil':
            alignmentNumber += 30;
            break;
    }
    return alignmentNumber;
}
function calculateAlignmentFromModifiers(character) {
    const c = character.character;
    if (c.alignmentEthical && c.alignmentMoral) {
        return;
    }
    const array = (0, functions_2.getStatArrayFromObjects)(character, 'alignmentModifiers');
    const totalModifiers = [
        [0, 0, 0],
        [0, 0, 0],
    ];
    // distributing the numbers
    array.forEach((modifiers) => {
        modifiers.forEach((modifier, index) => {
            modifier.forEach((value, index2) => {
                totalModifiers[index][index2] += value;
            });
        });
    });
    // now that I have all modifiers, I can calculate the alignment
    const BASE_PERCENTAGE = 33.3;
    let lawfulness = BASE_PERCENTAGE;
    let chaoticness = BASE_PERCENTAGE;
    let goodness = BASE_PERCENTAGE;
    let evilness = 15;
    if (totalModifiers[0][0] < 1 &&
        totalModifiers[0][1] < 1 &&
        totalModifiers[0][2] < 1) {
        totalModifiers[0][0] += 1;
        totalModifiers[0][1] += 1;
        totalModifiers[0][2] += 1;
    }
    if (totalModifiers[1][0] < 1 &&
        totalModifiers[1][1] < 1 &&
        totalModifiers[1][2] < 1) {
        totalModifiers[1][0] += 1;
        totalModifiers[1][1] += 1;
        totalModifiers[1][2] += 1;
    }
    const ethicalTotal = totalModifiers[0][0] + totalModifiers[0][1] + totalModifiers[0][2];
    if (ethicalTotal !== 0) {
        lawfulness = 85 * (totalModifiers[0][0] / ethicalTotal) + 5;
        chaoticness = 85 * (totalModifiers[0][2] / ethicalTotal) + 5;
    }
    let random100 = (0, functions_1.random)(1, 100);
    if (random100 <= lawfulness) {
        c.alignmentEthical ??= 'Lawful';
    }
    else if (random100 <= lawfulness + chaoticness) {
        c.alignmentEthical ??= 'Chaotic';
    }
    else {
        c.alignmentEthical ??= 'Neutral';
    }
    const moralTotal = totalModifiers[1][0] + totalModifiers[1][1] + totalModifiers[1][2];
    if (moralTotal !== 0) {
        goodness = 85 * (totalModifiers[1][0] / moralTotal) + 5;
        evilness = 85 * (totalModifiers[1][2] / moralTotal) + 5;
    }
    random100 = (0, functions_1.random)(1, 100);
    if (random100 <= goodness) {
        c.alignmentMoral ??= 'Good';
    }
    else if (random100 <= goodness + evilness) {
        c.alignmentMoral ??= 'Evil';
    }
    else {
        c.alignmentMoral ??= 'Neutral';
    }
}
