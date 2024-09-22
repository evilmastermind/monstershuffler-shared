"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAlignment = void 0;
const functions_1 = require("../../functions");
const functions_2 = require("../../parsers/functions");
function calculateAlignment(character) {
    const c = character.character;
    const generic = c?.generic || null;
    const typically = generic === true ? "Typically" : "";
    const alignment = {
        name: "Alignment",
        number: 0,
        string: "",
        array: [],
    };
    /*
    alignments that have already been defined
    */
    if (c.alignmentEthical === "Unaligned") {
        // unaligned
        alignment.array.push((0, functions_2.createPart)("Unaligned", "alignment"));
    }
    else if (
    // any
    c.alignmentEthical === c.alignmentMoral &&
        c.alignmentMoral === "Any") {
        alignment.array.push((0, functions_2.createPart)("Any Alignment", "alignment"));
    }
    else if (["Any"].includes(c.alignmentEthical || "") &&
        c.alignmentMoral) {
        // any (lawful, neutral, chaotic)
        alignment.array.push((0, functions_2.createPart)("Any", "alignment"));
        alignment.array.push((0, functions_2.createPart)(" "));
    }
    else if (["Any"].includes(c.alignmentMoral || "") &&
        c.alignmentEthical) {
        // any (good, neutral, evil)
        alignment.array.push((0, functions_2.createPart)("Any", "alignment"));
        alignment.array.push((0, functions_2.createPart)(" "));
    }
    else if (c.alignmentEthical && c.alignmentMoral) {
        // neutral
        if (c.alignmentEthical === c.alignmentMoral) {
            alignment.array.push((0, functions_2.createPart)(c.alignmentEthical, "alignment"));
        }
        else {
            // any other defined alignment
            alignment.array.push((0, functions_2.createPart)(c.alignmentEthical, "alignment"));
            alignment.array.push((0, functions_2.createPart)(" "));
            alignment.array.push((0, functions_2.createPart)(c.alignmentMoral, "alignment"));
        }
        if (typically) {
            alignment.array.unshift((0, functions_2.createPart)(" ", "text"));
            alignment.array.unshift((0, functions_2.createPart)(typically, "alignment"));
        }
    }
    else {
        const array = [];
        // getStatArrayFromObjects<AlignmentArray>(
        //   character,
        //   "alignmentModifiers"
        // );
        // alignmentModifiers from traits
        if ("alignmentModifiers" in c && c.alignmentModifiers) {
            array.push(c.alignmentModifiers);
        }
        // alignmentModifiers from racevariant (or race)
        if (c?.racevariant &&
            Object.hasOwn(c?.racevariant, "alignmentModifiers") &&
            c.racevariant.alignmentModifiers) {
            array.push(c.racevariant.alignmentModifiers);
        }
        else if (c?.race &&
            Object.hasOwn(c?.race, "alignmentModifiers") &&
            c.race.alignmentModifiers) {
            array.push(c.race.alignmentModifiers);
        }
        // alignmentModifiers from template
        if (c?.template &&
            Object.hasOwn(c?.template, "alignmentModifiers") &&
            c.template.alignmentModifiers) {
            array.push(c.template.alignmentModifiers);
        }
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
            c.alignmentEthical ??= "Lawful";
        }
        else if (random100 <= lawfulness + chaoticness) {
            c.alignmentEthical ??= "Chaotic";
        }
        else {
            c.alignmentEthical ??= "Neutral";
        }
        const moralTotal = totalModifiers[1][0] + totalModifiers[1][1] + totalModifiers[1][2];
        if (moralTotal !== 0) {
            goodness = 85 * (totalModifiers[1][0] / moralTotal) + 5;
            evilness = 85 * (totalModifiers[1][2] / moralTotal) + 5;
        }
        random100 = (0, functions_1.random)(1, 100);
        if (random100 <= goodness) {
            c.alignmentMoral ??= "Good";
        }
        else if (random100 <= goodness + evilness) {
            c.alignmentMoral ??= "Evil";
        }
        else {
            c.alignmentMoral ??= "Neutral";
        }
        if (typically) {
            alignment.array.unshift((0, functions_2.createPart)(" ", "text"));
            alignment.array.unshift((0, functions_2.createPart)(typically, "translatableText"));
        }
        if (c.alignmentEthical === c.alignmentMoral) {
            alignment.array.push((0, functions_2.createPart)(c.alignmentEthical, "translatableText"));
        }
        else {
            alignment.array.push((0, functions_2.createPart)(c.alignmentEthical, "translatableText"));
            alignment.array.push((0, functions_2.createPart)(" "));
            alignment.array.push((0, functions_2.createPart)(c.alignmentMoral, "translatableText"));
        }
    }
    let alignmentNumber = 0;
    switch (c.alignmentEthical) {
        case "Lawful":
            alignmentNumber += 1;
            break;
        case "Neutral":
            alignmentNumber += 2;
            break;
        case "Chaotic":
            alignmentNumber += 3;
            break;
    }
    switch (c.alignmentMoral) {
        case "Good":
            alignmentNumber += 10;
            break;
        case "Neutral":
            alignmentNumber += 20;
            break;
        case "Evil":
            alignmentNumber += 30;
            break;
    }
    alignment.number = alignmentNumber;
    character.statistics.alignment = alignment;
    character.statistics.alignment.string = alignment.array.reduce((acc, obj) => acc + obj.string, "");
}
exports.calculateAlignment = calculateAlignment;
