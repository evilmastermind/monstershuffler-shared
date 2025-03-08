import {
  getStatArrayFromObjects,
  getBonus,
  getCurrentStatLimit,
  createPart,
  numberToSignedString,
} from '../functions';
import { type Ability, abilityNames, abilities } from './../stats';
import type { Character, Stat, DescriptionPart } from '@/types';
import { capitalizeFirst } from '@/functions';

export function calculateSavingThrows(character: Character) {
  const s = character.statistics!;
  const v = character.variables!;

  const savingThrows = getStatArrayFromObjects<Stat[]>(
    character,
    'savingThrows'
  );
  const savingThrowValues: { [K in Ability]?: number } = {};
  s.savingThrows = [];
  const proficiency = s.proficiency;

  const limit = getCurrentStatLimit(character);

  for (let i = 0; i < savingThrows.length; i++) {
    for (let j = 0; j < savingThrows[i].length; j++) {
      if (
        savingThrows[i][j].availableAt === undefined ||
        limit >= savingThrows[i][j].availableAt!
      ) {
        const savingThrow = savingThrows[i][j].value as Ability;
        const savingThrowValue = v[savingThrow] + proficiency;
        savingThrowValues[savingThrow] = savingThrowValue;
      }
    }
  }

  for (const key in savingThrowValues) {
    if (
      !Object.hasOwn(savingThrowValues, key) ||
      savingThrowValues[key as Ability] === undefined
    ) {
      continue;
    }
    const ability = key as Ability;
    const bonus = getBonus(character, `${ability}Save`);
    if (bonus) {
      savingThrowValues[ability]! += bonus;
    }

    const saveDescription: DescriptionPart[] = [];

    saveDescription.push(
      createPart(capitalizeFirst(ability), 'savingThrow')
    );
    saveDescription.push(createPart(' '));

    const roll: DescriptionPart  = {
      string: numberToSignedString(savingThrowValues[ability]!),
      number: savingThrowValues[ability],
      type: 'd20Roll',
      roll: {
        name: abilityNames[ability],
        translationKey: abilityNames[ability],
        dice: [
          {
            sides: 20,
            dice: 1,
            value: 10 + savingThrowValues[ability]!,
            bonus: savingThrowValues[ability],
          },
        ],
      },
      translationKey: abilityNames[ability],
    };
    saveDescription.push(roll);

    // updating saves in the ability score object (5.5e)
    s.abilities[ability].save = {
      name: ability,
      number: savingThrowValues[ability]!,
      string: numberToSignedString(savingThrowValues[ability]!),
      array: [roll]
    };

    // TODO: is this condition correct? Apparently it just
    // prevents to add a +0 saving throw with proficiency,
    // since we're only cycling through the saves that the
    // monster has proficiency in.
    if (!savingThrowValues[ability]) {
      continue;
    }

    // updating saves (5e)
    s.savingThrows.push({
      name: ability,
      number: savingThrowValues[ability]!,
      string: saveDescription.reduce(
        (acc, obj) => acc + obj.string,
        ''
      ),
      array: saveDescription
    });
  }

  abilities.forEach((ability) => {
    v[`${ability}SAVE` as Ability] =
      savingThrowValues[ability as Ability]! ?? v[ability as Ability];
  });


  if (!s.savingThrows.length) {
    delete s.savingThrows;
  }
}
