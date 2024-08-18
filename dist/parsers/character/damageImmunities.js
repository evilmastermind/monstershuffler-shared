"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateImmunities = void 0;
const functions_1 = require("@/parsers/functions");
function calculateImmunities(character) {
    const s = character.statistics;
    const stats = (0, functions_1.getStatArrayFromObjects)(character, "immunities");
    s.immunities = {
        string: "",
        array: [],
    };
    const limit = (0, functions_1.getCurrentStatLimit)(character);
    for (let i = 0; i < stats.length; i++) {
        for (let j = 0; j < stats[i].length; j++) {
            if (stats[i][j].availableAt === undefined ||
                limit >= stats[i][j].availableAt) {
                const string = stats[i][j].value;
                s.immunities.array.push({
                    string,
                    type: "damageType",
                });
            }
        }
    }
    if (!s.immunities.array.length) {
        delete s.conditionImmunities;
        return;
    }
    s.immunities.string = s.immunities.array.reduce((acc, obj) => acc + obj.string, "");
}
exports.calculateImmunities = calculateImmunities;
