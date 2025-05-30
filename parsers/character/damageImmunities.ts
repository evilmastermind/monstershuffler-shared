import {
  getStatArrayFromObjects,
  getCurrentStatLimit,
} from '@/parsers/functions';
import { Character, Stat } from '@/types';

export function calculateImmunities(character: Character) {
  const s = character.statistics!;

  const stats = getStatArrayFromObjects<Stat[]>(character, 'immunities');
  s.immunities = [];

  const limit = getCurrentStatLimit(character);

  for (let i = 0; i < stats.length; i++) {
    for (let j = 0; j < stats[i].length; j++) {
      if (
        stats[i][j].availableAt === undefined ||
        limit >= stats[i][j].availableAt!
      ) {
        const string = stats[i][j].value;

        s.immunities.push({
          name: string,
          number: 0,
          string: '',
          array: [],
        });

        const immunity = s.immunities[s.immunities.length - 1];

        immunity.array!.push({
          string,
          type: 'damageType',
        });

        immunity.string = immunity.array!.reduce(
          (acc, obj) => acc + obj.string,
          ''
        );
      }
    }
  }

  if (!s.immunities.length) {
    delete s.conditionImmunities;
    return;
  }
}
