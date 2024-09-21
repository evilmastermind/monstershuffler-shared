import {
  getStatArrayFromObjects,
  getCurrentStatLimit,
} from '@/parsers/functions';
import { Character, Stat } from '@/types';

export function calculateVulnerabilities(character: Character) {
  const s = character.statistics!;

  const stats = getStatArrayFromObjects<Stat[]>(character, 'vulnerabilities');
  s.vulnerabilities = [];

  const limit = getCurrentStatLimit(character);

  for (let i = 0; i < stats.length; i++) {
    for (let j = 0; j < stats[i].length; j++) {
      if (
        stats[i][j].availableAt === undefined ||
        limit >= stats[i][j].availableAt!
      ) {
        const string = stats[i][j].value;

        s.vulnerabilities.push({
          name: string,
          number: 0,
          string: '',
          array: [],
        });

        const vulnerability = s.vulnerabilities[s.vulnerabilities.length - 1];

        vulnerability.array!.push({
          string,
          type: 'damageType',
        });

        vulnerability.string = vulnerability.array!.reduce(
          (acc, obj) => acc + obj.string,
          ''
        );
      }
    }
  }

  if (!s.vulnerabilities.length) {
    delete s.conditionImmunities;
    return;
  }
}
