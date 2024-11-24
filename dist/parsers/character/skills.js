"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSkills = calculateSkills;
const stats_1 = require("../stats");
const functions_1 = require("../../parsers/functions");
function calculateSkills(character) {
    const s = character.statistics;
    const v = character.variables;
    if (!s || !v) {
        return;
    }
    s.skills = [];
    const skills = (0, functions_1.getStatArrayFromObjects)(character, 'skills');
    const proficiency = s.proficiency;
    const limit = (0, functions_1.getCurrentStatLimit)(character);
    let skillValues = {};
    for (let i = 0; i < skills.length; i++) {
        for (let j = 0; j < skills[i].length; j++) {
            const availableAt = skills[i][j].availableAt;
            if (availableAt === undefined ||
                limit >= availableAt) {
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
        if (!(skill in skillValues)) {
            continue;
        }
        const bonus = (0, functions_1.getBonus)(character, `${skill.replace(/\s/g, '')}`);
        if (bonus) {
            skillValues[skill] += bonus;
        }
        s.skills.push({ name: skill, number: skillValues[skill], string: '', array: [] });
        const currentSkill = s.skills[s.skills.length - 1];
        currentSkill.array.push((0, functions_1.createPart)(skill, 'skill'));
        currentSkill.array.push((0, functions_1.createPart)(' '));
        currentSkill.array.push({
            string: (0, functions_1.numberToSignedString)(skillValues[skill]),
            number: skillValues[skill],
            type: 'd20Roll',
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
        currentSkill.string = currentSkill.array.reduce((acc, obj) => acc + obj.string, '');
    }
    for (const skill in stats_1.skillTypes) {
        v[skill.replace(/\s/g, '').toUpperCase()] =
            skillValues[skill] ?? v[stats_1.skillTypes[skill]];
    }
    if (!s.skills.length) {
        delete s.skills;
    }
}
