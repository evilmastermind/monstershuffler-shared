"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateConditionImmunities = void 0;
const functions_1 = require("@/parsers/functions");
function calculateConditionImmunities(character) {
    const s = character.statistics;
    const stats = (0, functions_1.getStatArrayFromObjects)(character, "conditionImmunities");
    s.conditionImmunities = {
        string: "",
        array: [],
    };
    const limit = (0, functions_1.getCurrentStatLimit)(character);
    for (let i = 0; i < stats.length; i++) {
        for (let j = 0; j < stats[i].length; j++) {
            if (stats[i][j].availableAt === undefined ||
                limit >= stats[i][j].availableAt) {
                const string = stats[i][j].value;
                s.conditionImmunities.array.push({
                    string,
                    type: "condition",
                });
            }
        }
    }
    if (!s.conditionImmunities.array.length) {
        delete s.conditionImmunities;
        return;
    }
    s.conditionImmunities.string = s.conditionImmunities.array.reduce((acc, obj) => acc + obj.string, "");
}
exports.calculateConditionImmunities = calculateConditionImmunities;
