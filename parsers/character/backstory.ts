import type { Character } from '@/types';

export function calculateBackstoryInfo(character: Character) {
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
    s.age = `${c?.age.string}`;
  }
  if (c.trait) {
    s.personality = c.trait;
  }
  if (c.weight) {
    s.bodyType = c.weight;
  }
  if (c.height !== undefined) {
    s.height = c.height.toString();
  }
  if (c.voice) {
    s.voice = c.voice?.character ? `${c.voice.character} (${c.voice.person})` : c.voice.person;
    s.voice = c.voice?.production ? `${s.voice} in ${c.voice.production}` : s.voice;
  }
}
