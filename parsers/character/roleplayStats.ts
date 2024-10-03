import type { Character } from '@/types';
import { capitalizeFirst } from '@/functions';
import { feetDecimalToFeetInches } from '../functions';

export function calculateRoleplayStats(character: Character) {
  if (!character.statistics) {
    return;
  }
  const s = character.statistics!;
  const c = character.character;

  s.race =
    c?.racevariant?.name ||
    c?.race?.name ||
    s.type.string;
  if ('class' in c && c.class) {
    s.class = c?.class?.name || '';
  }
  if ('age' in c && c.age) {
    s.age = {
      name: c.age.string,
      number: c.age.number,
      string: `${capitalizeFirst(c.age.string)} (${c.age.number} years old)`,
    };
  }
  if (c.trait) {
    s.personality = c.trait;
  }
  if (c.weight) {
    s.bodyType = capitalizeFirst(c.weight);
  }
  if (c.height !== undefined) {
    s.height = feetDecimalToFeetInches(c.height);
  }
  if (c.voice) {
    s.voice = c.voice?.character ? `${c.voice.character} (${c.voice.person})` : c.voice.person;
    s.voice = c.voice?.production ? `${s.voice} in ${c.voice.production}` : s.voice;
  }

  if (c.physicalAppearance) {
    s.physicalAppearance = c.physicalAppearance;
  }
}
