import {
  getStatArrayFromObjects,
  getCurrentStatLimit,
} from '@/parsers/functions';
import { Character, Stat } from '@/types';

export function calculateResistances(character: Character) {
  const s = character.statistics!;

  const stats = getStatArrayFromObjects<Stat[]>(character, 'resistances');
  s.resistances = [];

  const limit = getCurrentStatLimit(character);

  for (let i = 0; i < stats.length; i++) {
    for (let j = 0; j < stats[i].length; j++) {
      if (
        stats[i][j].availableAt === undefined ||
        limit >= stats[i][j].availableAt!
      ) {
        const string = stats[i][j].value;

        s.resistances.push({
          name: string,
          number: 0,
          string: '',
          array: [],
        });

        const resistance = s.resistances[s.resistances.length - 1];

        resistance.array.push({
          string,
          type: 'damageType',
        });

        resistance.string = resistance.array.reduce((acc, obj) => acc + obj.string, '');
      }
    }
  }

  if (!s.resistances.length) {
    delete s.conditionImmunities;
    return;
  }
}
