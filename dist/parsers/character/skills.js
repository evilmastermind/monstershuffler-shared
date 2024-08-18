"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSkills = void 0;
const stats_1 = require("../stats");
const functions_1 = require("@/parsers/functions");
function calculateSkills(character) {
    const s = character.statistics;
    const v = character.variables;
    s.skills = { string: "", array: [] };
    const skills = (0, functions_1.getStatArrayFromObjects)(character, "skills");
    const proficiency = s.proficiency;
    const limit = (0, functions_1.getCurrentStatLimit)(character);
    let skillValues = {};
    for (let i = 0; i < skills.length; i++) {
        for (let j = 0; j < skills[i].length; j++) {
            if (skills[i][j].availableAt === undefined ||
                limit >= skills[i][j].availableAt) {
                const skill = skills[i][j].value;
                const ability = stats_1.skillTypes[skill];
                skillValues[skill] = v[ability] + proficiency;
            }
        }
    }
    if (skillValues.length) {
        skillValues = (0, functions_1.sortObject)(skillValues);
    }
    for (const skill in skillValues) {
        if (!Object.hasOwn(skillValues, skill) ||
            skillValues[skill] === undefined) {
            continue;
        }
        const bonus = (0, functions_1.getBonus)(character, `${skill.replace(/\s/g, "")}`);
        if (bonus) {
            skillValues[skill] += bonus;
        }
        (0, functions_1.addCommaIfNotEmpty)(s.skills.array);
        s.skills.array.push((0, functions_1.createPart)(skill, "skill"));
        s.skills.array.push((0, functions_1.createPart)(" "));
        s.skills.array.push({
            string: (0, functions_1.numberToSignedString)(skillValues[skill]),
            number: skillValues[skill],
            type: "d20Roll",
            roll: {
                name: skill,
                translationKey: `skill.${skill}`,
                dice: [
                    {
                        sides: 20,
                        dice: 1,
                        value: 10 + skillValues[skill],
                        bonus: skillValues[skill],
                    },
                ],
            },
            translationKey: `skill.${skill}`,
        });
    }
    for (const skill in stats_1.skillTypes) {
        v[skill.replace(/\s/g, "").toUpperCase()] =
            skillValues[skill] ?? v[stats_1.skillTypes[skill]];
    }
    s.skills.string = s.skills.array.reduce((acc, obj) => acc + obj.string, "");
    if (!s.skills.array.length) {
        delete s.skills;
    }
}
exports.calculateSkills = calculateSkills;
