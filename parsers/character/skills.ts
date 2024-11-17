import { skillTypes } from '../stats';
import {
  getStatArrayFromObjects,
  getCurrentStatLimit,
  getBonus,
  createPart,
  sortObject,
  numberToSignedString,
} from '@/parsers/functions';
import type { Character, Stat } from '@/types';

export function calculateSkills(character: Character) {
  const s = character.statistics;
  const v = character.variables;

  if (!s || !v) {
    return;
  }

  s.skills = [];
  console.time('getStatArrayFromObjects');
  const skills = getStatArrayFromObjects<Stat[]>(character, 'skills');
  console.timeEnd('getStatArrayFromObjects');
  const proficiency = s.proficiency;
  console.time('getCurrentStatLimit');
  const limit = getCurrentStatLimit(character);
  console.timeEnd('getCurrentStatLimit');

  let skillValues: {
    [key in keyof typeof skillTypes]: number;
  } = {};

  console.time('calculating skills');
  for (let i = 0; i < skills.length; i++) {
    for (let j = 0; j < skills[i].length; j++) {
      const availableAt = skills[i][j].availableAt;
      if (
        availableAt === undefined ||
        limit >= availableAt
      ) {
        const skill = skills[i][j].value;
        const ability = skillTypes[skill];
        skillValues[skill] = v[ability] + proficiency;
      }
    }
  }
  console.timeEnd('calculating skills');

  console.time('sorting skills');
  if (skillValues.length) {
    skillValues = sortObject(skillValues);
  }
  console.timeEnd('sorting skills');

  console.time('adding skills');
  for (const skill in skillValues) {
    if (
      !(skill in skillValues)
    ) {
      continue;
    }
    console.time('getBonus');
    const bonus = getBonus(character, `${skill.replace(/\s/g, '')}`);
    console.timeEnd('getBonus');
    if (bonus) {
      skillValues[skill] += bonus;
    }

    s.skills.push(
      { name: skill, number: skillValues[skill], string: '', array: [] }
    );

    const currentSkill = s.skills[s.skills.length - 1];

    currentSkill.array.push(createPart(skill, 'skill'));
    currentSkill.array.push(createPart(' '));
    currentSkill.array.push({
      string: numberToSignedString(skillValues[skill]),
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

    console.time('reduce');
    currentSkill.string = currentSkill.array.reduce((acc, obj) => acc + obj.string, '');
    console.timeEnd('reduce');
  }
  console.timeEnd('adding skills');

  console.time('deleting skills');
  for (const skill in skillTypes) {
    v[skill.replace(/\s/g, '').toUpperCase() as 'PERSUASION'] =
      skillValues[skill] ?? v[skillTypes[skill]];
  }
  console.timeEnd('deleting skills');

  if (!s.skills.length) {
    delete s.skills;
  }
}
