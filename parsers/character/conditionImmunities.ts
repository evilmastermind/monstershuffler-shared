import {
  getStatArrayFromObjects,
  getCurrentStatLimit,
} from '@/parsers/functions';
import { Character, Stat } from '@/types';

export function calculateConditionImmunities(character: Character) {
  const s = character.statistics!;

  const stats = getStatArrayFromObjects<Stat[]>(
    character,
    'conditionImmunities'
  );
  s.conditionImmunities = [];

  const limit = getCurrentStatLimit(character);

  for (let i = 0; i < stats.length; i++) {
    for (let j = 0; j < stats[i].length; j++) {
      if (
        stats[i][j].availableAt === undefined ||
        limit >= stats[i][j].availableAt!
      ) {
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

        immunity.string = immunity.array!.reduce(
          (acc, obj) => acc + obj.string,
          ''
        );
      }
    }
  }

  if (!s.conditionImmunities.length) {
    delete s.conditionImmunities;
    return;
  }
}
