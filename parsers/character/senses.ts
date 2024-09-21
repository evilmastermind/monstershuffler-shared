import { sensesList } from '../stats';
import {
  getBonus,
  getPrioritizedStatistic,
  getPrioritizedStatisticFromPath,
  parseExpressionNumeric,
  sortObject,
  createPart,
} from '@/parsers/functions';
import type { Character } from '@/types';
import { capitalizeFirst } from '@/functions';

export function calculateSenses(character: Character) {
  const s = character.statistics!;
  const v = character.variables!;

  s.senses = [];

  type Senses = (typeof sensesList)[number];

  let senses: { [key in Senses]?: number } = {};

  for (const sense of sensesList) {
    const senseExpression = getPrioritizedStatisticFromPath<string>(
      character,
      `.senses.'${sense}'`
    );
    if (!senseExpression) {
      continue;
    }
    const senseBonus = getBonus(character, sense);
    const senseNumber =
      parseExpressionNumeric(senseExpression, character) + senseBonus;
    senses[sense] = senseNumber;
  }

  senses = sortObject(senses);

  const passivePerceptionBonus = getBonus(character, 'passivePerception');
  senses['passive Perception'] =
    10 + (v?.PERCEPTION || v.WIS) + passivePerceptionBonus;

  const isBlind = getPrioritizedStatistic<boolean>(character, 'isBlind');
  let alternativeSense = '';
  let mostPowerfulSense = 0;

  if (isBlind) {
    s.isBlind = true;
    alternativeSense = 'just blind';
    if (
      Object.hasOwn(senses, 'blindsight') &&
      senses.blindsight !== undefined
    ) {
      alternativeSense = 'blindsight';
      mostPowerfulSense = senses.blindsight;
    }
    if (
      Object.hasOwn(senses, 'tremorsense') &&
      senses.tremorsense !== undefined
    ) {
      if (senses.tremorsense > mostPowerfulSense) {
        alternativeSense = 'tremorsense';
        mostPowerfulSense = senses.tremorsense;
      }
    }
  }

  for (const key in senses) {
    if (!Object.hasOwn(senses, key)) {
      continue;
    }
    if (senses[key as Senses] === undefined) {
      continue;
    }
    const sense = key as Senses;
    
    s.senses.push(
      {
        name: sense,
        number: senses[sense]!,
        string: '',
        array: [],
      }
    );

    const currentSense = s.senses[s.senses.length - 1];


    if (sense === 'passive Perception') {
      currentSense.array.push(createPart('passive Perception', 'sense'));
      currentSense.array.push(createPart(' '));
      currentSense.array.push(createPart(senses[sense]!.toString()));
    } else {
      currentSense.array.push(createPart(capitalizeFirst(sense), 'sense'));
      currentSense.array.push(createPart(' '));
      currentSense.array.push({
        string: `${senses[sense]} ft`,
        number: senses[sense],
        type: 'ft',
      });
      if (sense === alternativeSense) {
        currentSense.array.push(createPart(' ('));
        currentSense.array.push(
          createPart('blind beyond this radius', 'translatableText')
        );
        currentSense.array.push(createPart(')'));
      }
    }

    currentSense.string = currentSense.array.reduce(
      (acc, obj) => acc + obj.string,
      ''
    );
  }

  sensesList.forEach((sense) => {
    v[`${sense.toUpperCase().replace(/\s/g, '')}` as 'DARKVISION'] =
      senses[sense] ?? 0;
  });

  if (alternativeSense === 'just blind') {
    s.senses.push({
      name: 'Blind',
      number: 0,
      string: 'Blind',
      array: [createPart('Blind', 'translatableText')],
    });
  }
}
