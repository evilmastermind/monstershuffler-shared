import { type Ability, skillTypes } from "../stats";
import {
  getStatArrayFromObjects,
  getCurrentStatLimit,
  getBonus,
  createPart,
  sortObject,
  addCommaIfNotEmpty,
  numberToSignedString,
} from "@/parsers/functions";
import type { Character, Stat } from "@/types";
import { capitalizeFirst } from "@/functions";

export function calculateSkills(character: Character) {
  const s = character.statistics!;
  const v = character.variables!;

  s.skills = { string: "", array: [] };

  const skills = getStatArrayFromObjects<Stat[]>(character, "skills");

  const proficiency = s.proficiency;

  const limit = getCurrentStatLimit(character);

  let skillValues: {
    [key in keyof typeof skillTypes]?: number;
  } = {};

  for (let i = 0; i < skills.length; i++) {
    for (let j = 0; j < skills[i].length; j++) {
      if (
        skills[i][j].availableAt === undefined ||
        limit >= skills[i][j].availableAt!
      ) {
        const skill = skills[i][j].value;
        const ability = skillTypes[skill];
        skillValues[skill] = v[ability] + proficiency;
      }
    }
  }

  if (skillValues.length) {
    skillValues = sortObject(skillValues);
  }

  for (const skill in skillValues) {
    if (
      !Object.hasOwn(skillValues, skill) ||
      skillValues[skill] === undefined
    ) {
      continue;
    }
    const bonus = getBonus(character, `${skill.replace(/\s/g, "")}`);
    if (bonus) {
      skillValues[skill]! += bonus;
    }

    addCommaIfNotEmpty(s.skills.array);
    s.skills.array.push(createPart(skill, "skill"));
    s.skills.array.push(createPart(" "));
    s.skills.array!.push({
      string: numberToSignedString(skillValues[skill]!),
      number: skillValues[skill],
      type: "d20Roll",
      roll: {
        name: skill,
        translationKey: `skill.${skill}`,
        dice: [
          {
            sides: 20,
            dice: 1,
            value: 10 + skillValues[skill]!,
            bonus: skillValues[skill],
          },
        ],
      },
      translationKey: `skill.${skill}`,
    });
  }

  for (const skill in skillTypes) {
    v[skill.replace(/\s/g, "").toUpperCase() as "PERSUASION"] =
      skillValues[skill] ?? v[skillTypes[skill]];
  }

  s.skills.string = s.skills.array!.reduce((acc, obj) => acc + obj.string, "");

  if (!s.skills.array.length) {
    delete s.skills;
  }
}
