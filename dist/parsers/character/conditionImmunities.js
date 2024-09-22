"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateConditionImmunities = void 0;
const functions_1 = require("@/parsers/functions");
function calculateConditionImmunities(character) {
    const s = character.statistics;
    const stats = (0, functions_1.getStatArrayFromObjects)(character, 'conditionImmunities');
    s.conditionImmunities = [];
    const limit = (0, functions_1.getCurrentStatLimit)(character);
    for (let i = 0; i < stats.length; i++) {
        for (let j = 0; j < stats[i].length; j++) {
            if (stats[i][j].availableAt === undefined ||
                limit >= stats[i][j].availableAt) {
                const string = stats[i][j].value;
                s.conditionImmunities.push({
                    name: string,
                    number: 0,
                    string: '',
                    array: [],
                });
                const immunity = s.conditionImmunities[s.conditionImmunities.length - 1];
                immunity.array.push({
                    string,
                    type: 'condition',
                });
            }
        }
    }
    if (!s.conditionImmunities.length) {
        delete s.conditionImmunities;
        return;
    }
}
exports.calculateConditionImmunities = calculateConditionImmunities;
