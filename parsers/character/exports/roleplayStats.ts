import type { Character } from '@/types';
import { feetDecimalToUnit } from '@/parsers/functions';

export function exportRoleplayStats(character: Character, heightUnit: 'meters' | 'feet' = 'feet'): string {
  if (!character.statistics || !character.tags) {
    return '';
  }
  const c = character.character;
  const s = character.statistics;
  const t = character.tags;

  let output = '';

  output += s.fullName;
  output += `, ${['male','female'].includes(s.pronouns) ? `${s.pronouns }` : ''} ${t.race}`;
  output += `${s.characterHook?.length ? `\n${s.characterHook?.map((chunk) => chunk.string).join('')}` : ''}`;

  output += '\n';
  output += `${s.age ? `\nAge: ${s.age.string}` : ''}`;
  output += `${s.alignment?.string ? `\nAlignment: ${s.alignment.string}` : ''}`;
  output += `${s.personality?.name ? `\nPersonality: ${s.personality.name}` : ''}`;
  output += `${c.height ? `\nHeight: ${feetDecimalToUnit(c.height, heightUnit)}` : ''}`;
  output += `${s.bodyType ? `\nBody Type: ${s.bodyType}` : ''}`;
  output += `${s.voice?.length ? `\nVoice: ${s.voice}` : ''}`;
  
  output += '\n';
  output += `${c.physicalAppearance ? `\n${c.physicalAppearance}` : ''}`;
  return output;
}
