import {
  getStatArrayFromObjects,
  getBonus,
  getCurrentStatLimit,
  createPart,
  numberToSignedString,
} from '../functions';
import { type Ability, abilityNames, abilities } from './../stats';
import type { Character, Stat } from '@/types';
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
    if (!savingThrowValues[ability]) {
      continue;
    }

    s.savingThrows.push({
      name: ability,
      number: savingThrowValues[ability],
      string: '',
      array: []
    });
    
    const savingThrow = s.savingThrows[s.savingThrows.length - 1];
    savingThrow.array.push(
      createPart(capitalizeFirst(ability), 'savingThrow')
    );
    savingThrow.array.push(createPart(' '));
    savingThrow.array.push({
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
    });

    savingThrow.string = savingThrow.array.reduce(
      (acc, obj) => acc + obj.string,
      ''
    );
  }

  abilities.forEach((ability) => {
    v[`${ability}SAVE` as Ability] =
      savingThrowValues[ability as Ability]! ?? v[ability as Ability];
  });


  if (!s.savingThrows.length) {
    delete s.savingThrows;
  }
}
