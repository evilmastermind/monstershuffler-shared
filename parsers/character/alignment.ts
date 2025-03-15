import type { Character, StatStringNumberArray } from '@/types';
import { createPart, calculateAlignmentFromModifiers, calculateAlignmentNumber } from '@/parsers/functions';

export function calculateAlignment(character: Character) {
  const c = character.character;
  const generic = c?.generic || null;
  const typically = generic === true ? 'Typically' : '';
  const alignment: StatStringNumberArray = {
    name: 'Alignment',
    number: 0,
    string: '',
    array: [],
  };

  // calculate alignment from modifiers if it hasn't been defined yet
  calculateAlignmentFromModifiers(character);

  if (c.alignmentEthical === 'Unaligned') {
    // unaligned
    alignment.array!.push(createPart('Unaligned', 'alignment'));
  } else if (
    // any
    c.alignmentEthical === c.alignmentMoral &&
    c.alignmentMoral === 'Any'
  ) {
    alignment.array!.push(createPart('Any Alignment', 'alignment'));
  } else if (
    ['Any'].includes(c.alignmentEthical || '') &&
    c.alignmentMoral
  ) {
    // any (lawful, neutral, chaotic)
    alignment.array!.push(createPart('Any', 'alignment'));
    alignment.array!.push(createPart(' '));
  } else if (
    ['Any'].includes(c.alignmentMoral || '') &&
    c.alignmentEthical
  ) {
    // any (good, neutral, evil)
    alignment.array!.push(createPart('Any', 'alignment'));
    alignment.array!.push(createPart(' '));
  } else if (c.alignmentEthical && c.alignmentMoral) {
    // neutral
    if (c.alignmentEthical === c.alignmentMoral) {
      alignment.array!.push(createPart(c.alignmentEthical, 'alignment'));
    } else {
      // any other defined alignment
      alignment.array!.push(createPart(c.alignmentEthical, 'alignment'));
      alignment.array!.push(createPart(' '));
      alignment.array!.push(createPart(c.alignmentMoral, 'alignment'));
    }
    if (typically) {
      alignment.array!.unshift(createPart(' ', 'text'));
      alignment.array!.unshift(createPart(typically, 'alignment'));
    }
  }

  alignment.number = calculateAlignmentNumber(
    c.alignmentEthical || '',
    c.alignmentMoral || ''
  );
  character.statistics!.alignment = alignment;
  character.statistics!.alignment.string = alignment.array!.reduce(
    (acc, obj) => acc + obj.string,
    ''
  );
}
