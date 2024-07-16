"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateVulnerabilities = void 0;
const functions_1 = require("../../parsers/functions");
function calculateVulnerabilities(character) {
    const s = character.statistics;
    const stats = (0, functions_1.getStatArrayFromObjects)(character, "vulnerabilities");
    s.vulnerabilities = {
        string: "",
        array: [],
    };
    const limit = (0, functions_1.getCurrentStatLimit)(character);
    for (let i = 0; i < stats.length; i++) {
        for (let j = 0; j < stats[i].length; j++) {
            if (stats[i][j].availableAt === undefined ||
                limit >= stats[i][j].availableAt) {
                const string = stats[i][j].value;
                s.vulnerabilities.array.push({
                    string,
                    type: "damageType",
                });
            }
        }
    }
    if (!s.vulnerabilities.array.length) {
        delete s.conditionImmunities;
        return;
    }
    s.vulnerabilities.string = s.vulnerabilities.array.reduce((acc, obj) => acc + obj.string, "");
}
exports.calculateVulnerabilities = calculateVulnerabilities;
