"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSize = void 0;
const parsers_1 = require("../../parsers");
const functions_1 = require("../../parsers/functions");
const functions_2 = require("../../functions");
function calculateSize(character) {
    let size = 0;
    const baseSize = (0, functions_1.getPrioritizedStatistic)(character, "size") || 3;
    const sizeBonus = (0, functions_1.getBonus)(character, "size");
    size += sizeBonus;
    const isSwarm = (0, functions_1.getPrioritizedStatistic)(character, "isSwarm");
    if (isSwarm) {
        const swarmSize = (0, parsers_1.parseExpressionNumeric)((0, functions_1.getPrioritizedStatistic)(character, "swarmSize") || "3", character);
        size += swarmSize;
    }
    else {
        size += baseSize;
    }
    // normalizing sizes out of bounds
    if (!size)
        size = 3;
    if (size > 6)
        size = 6;
    if (size < 1)
        size = 1;
    // statistics
    character.statistics.size = {
        string: parsers_1.sizeStats[size.toString()].name,
        number: size,
    };
    if (isSwarm) {
        character.statistics.sizeSingleEntityOfSwarm = {
            string: parsers_1.sizeStats[baseSize.toString()].name,
            number: baseSize,
        };
    }
    // tags
    const sizegreater = size > 5 ? 6 : size + 1;
    const sizesmaller = size < 2 ? 1 : size - 1;
    const sizetwogreater = size > 5 ? 6 : size + 2;
    const sizetwosmaller = size < 3 ? 1 : size - 2;
    character.tags.size = (0, functions_2.capitalizeFirst)(parsers_1.sizeStats[size.toString()].name);
    character.tags.sizegreater = (0, functions_2.capitalizeFirst)(parsers_1.sizeStats[sizegreater.toString()].name);
    character.tags.sizesmaller = (0, functions_2.capitalizeFirst)(parsers_1.sizeStats[sizesmaller.toString()].name);
    character.tags.sizetwogreater = (0, functions_2.capitalizeFirst)(parsers_1.sizeStats[sizetwogreater.toString()].name);
    character.tags.sizetwosmaller = (0, functions_2.capitalizeFirst)(parsers_1.sizeStats[sizetwosmaller.toString()].name);
    // variables
    character.variables.SIZE = size;
    character.variables.HD = parsers_1.sizeStats[size.toString()].hitDice;
}
exports.calculateSize = calculateSize;
