"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateType = void 0;
const functions_1 = require("../functions");
const stats_1 = require("../stats");
function calculateType(character) {
    const type = (0, functions_1.getPrioritizedStatistic)(character, "type") || "Humanoid";
    character.tags.type = type;
    character.statistics.type = {
        string: type,
        number: (0, stats_1.typeToNumber)(type),
    };
}
exports.calculateType = calculateType;
