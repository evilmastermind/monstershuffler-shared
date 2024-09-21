import {
  createPart,
  getBonus,
  getPrioritizedStatisticFromPath,
  parseExpressionNumeric,
} from '../functions';
import { speedTypes } from '../stats';
import type { Character } from '@/types';

export function calculateSpeed(character: Character) {
  const s = character.statistics!;
  const v = character.variables!;
  s.speeds = [];

  type Speeds = 'walk' | 'fly' | 'climb' | 'swim' | 'burrow' | 'hover';

  const speeds: { [key in Speeds]: number } = {
    walk: 0,
    fly: 0,
    climb: 0,
    swim: 0,
    burrow: 0,
    hover: 0,
  };
  for (const type of speedTypes) {
    const speedExpression = getPrioritizedStatisticFromPath<string>(
      character,
      `.speeds.${type}`
    );
    if (!speedExpression) {
      continue;
    }
    const speedBonus = getBonus(character, type);
    const speedNumber =
      parseExpressionNumeric(speedExpression, character) + speedBonus;

    if (speedNumber <= 0) {
      continue;
    }

    s.speeds.push({
      name: type,
      number: speedNumber,
      string: '',
      array: [],
    });

    const speed = s.speeds[s.speeds.length - 1];

    switch (type as Speeds) {
    case 'walk':
      speed.array.push({
        string: `${speedNumber} ft`,
        number: speedNumber,
        type: 'ft',
      });
      break;
    case 'hover':
      speed.array.push(createPart('fly', 'speed'));
      speed.array.push(createPart(' '));
      speed.array.push({
        string: `${speedNumber} ft`,
        number: speedNumber,
        type: 'ft',
      });
      speed.array.push(createPart(' ('));
      speed.array.push(createPart('hover', 'speed'));
      speed.array.push(createPart(')'));
      break;
    default:
      speed.array.push(createPart(type, 'speed'));
      speed.array.push(createPart(' '));
      speed.array.push({
        string: `${speedNumber} ft`,
        number: speedNumber,
        type: 'ft',
      });
      break;
    }
    speeds[type as Speeds] = speedNumber;
    speed.string = speed.array.reduce((acc, obj) => acc + obj.string, '');
  }
  for (const speed in speeds) {
    // 2024-07-17: variables object expects all speeds defined
    // if (
    //   !Object.hasOwn(speeds, speed) ||
    //   speeds[speed as Speeds] === undefined
    // ) {
    //   continue;
    // }
    if (speed === 'walk') {
      v.SPEED = speeds[speed as Speeds];
    } else {
      v[speed.toUpperCase() as 'FLY'] = speeds[speed as Speeds];
    }
  }
  if (!s.speeds.length) {
    delete s.speeds;
  }
}
