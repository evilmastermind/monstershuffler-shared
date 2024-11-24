"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePronouns = calculatePronouns;
const functions_1 = require("../../parsers/functions");
function calculatePronouns(character) {
    const pronouns = (0, functions_1.getPrioritizedStatistic)(character, "pronouns");
    // @ts-expect-error for some reason pronouns definition is not read from the schema
    character.statistics.pronouns = pronouns || "thing";
}
