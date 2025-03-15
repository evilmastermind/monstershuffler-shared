import type { Character, StatStringNumberArray } from '@/types';
import { random, } from '@/functions';
import { createPart, getStatArrayFromObjects } from '@/parsers/functions';

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

export function calculateAlignmentNumber(alignmentEthical: string, alignmentMoral: string) {
  let alignmentNumber = 0;
  switch (alignmentEthical) {
  case 'Lawful':
    alignmentNumber += 1;
    break;
  case 'Neutral':
    alignmentNumber += 2;
    break;
  case 'Chaotic':
    alignmentNumber += 3;
    break;
  }
  switch (alignmentMoral) {
  case 'Good':
    alignmentNumber += 10;
    break;
  case 'Neutral':
    alignmentNumber += 20;
    break;
  case 'Evil':
    alignmentNumber += 30;
    break;
  }
  return alignmentNumber;
}

export function calculateAlignmentFromModifiers(character: Character) {
  const c = character.character;
  if (c.alignmentEthical && c.alignmentMoral) {
    return;
  }
  /* 
    ======================================
    ALIGNMENT CALCULATION FOR GENERATED NPCs
    ======================================
    Objects like Character, Race, Class, Template might include arrays called 'alignmentModifiers'
    that look like this:

    [[number, number, number], [number, number, number]]
    [[lawfulness, ethicalNeutrality, chaoticness], [goodness, moralNeutrality, evilness]]

    The values inside those arrays make a character lean towards a certain alignment.
    The following calculations will add up all the numbers to determine the alignment.
    No matter how much the array makes the character lean towards a certain alignment,
    there will always be at least a 5% chance of the character being of a different alignment.
    */
    type AlignmentArray = [[number, number, number], [number, number, number]];

    const array = getStatArrayFromObjects<AlignmentArray[]>(
      character,
      'alignmentModifiers'
    ).flat();

    const totalModifiers = [
      [0, 0, 0],
      [0, 0, 0],
    ];

    // distributing the numbers
    array.forEach((modifiers) => {
      modifiers.forEach((modifier, index) => {
        modifier.forEach((value, index2) => {
          totalModifiers[index][index2] += value;
        });
      });
    });

    // now that I have all modifiers, I can calculate the alignment
    const BASE_PERCENTAGE = 33.3;
    let lawfulness = BASE_PERCENTAGE;
    let chaoticness = BASE_PERCENTAGE;
    let goodness = BASE_PERCENTAGE;
    let evilness = 15;

    if (
      totalModifiers[0][0] < 1 &&
      totalModifiers[0][1] < 1 &&
      totalModifiers[0][2] < 1
    ) {
      totalModifiers[0][0] += 1;
      totalModifiers[0][1] += 1;
      totalModifiers[0][2] += 1;
    }

    if (
      totalModifiers[1][0] < 1 &&
      totalModifiers[1][1] < 1 &&
      totalModifiers[1][2] < 1
    ) {
      totalModifiers[1][0] += 1;
      totalModifiers[1][1] += 1;
      totalModifiers[1][2] += 1;
    }

    const ethicalTotal =
      totalModifiers[0][0] + totalModifiers[0][1] + totalModifiers[0][2];
    if (ethicalTotal !== 0) {
      lawfulness = 85 * (totalModifiers[0][0] / ethicalTotal) + 5;
      chaoticness = 85 * (totalModifiers[0][2] / ethicalTotal) + 5;
    }
    let random100 = random(1, 100);
    if (random100 <= lawfulness) {
      c.alignmentEthical ??= 'Lawful';
    } else if (random100 <= lawfulness + chaoticness) {
      c.alignmentEthical ??= 'Chaotic';
    } else {
      c.alignmentEthical ??= 'Neutral';
    }

    const moralTotal =
      totalModifiers[1][0] + totalModifiers[1][1] + totalModifiers[1][2];
    if (moralTotal !== 0) {
      goodness = 85 * (totalModifiers[1][0] / moralTotal) + 5;
      evilness = 85 * (totalModifiers[1][2] / moralTotal) + 5;
    }
    random100 = random(1, 100);
    if (random100 <= goodness) {
      c.alignmentMoral ??= 'Good';
    } else if (random100 <= goodness + evilness) {
      c.alignmentMoral ??= 'Evil';
    } else {
      c.alignmentMoral ??= 'Neutral';
    }
}
