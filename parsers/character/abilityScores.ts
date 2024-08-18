import {
  getPrioritizedStatistic,
  calibrateStatistic,
  getBonusAndInfo,
  createPart,
  numberToSignedString,
  createUserObjectIfNotExists,
} from '../functions';
import { abilities, abilityNames } from '../stats';
import type { Character } from '@/types';
import { random, createKeyIfUndefined } from '@/functions';

export function calculateAbilityScores(character: Character) {
  const c = character.character;
  createUserObjectIfNotExists(character);
  const user = c.user!;
  // @ts-expect-error
  character.statistics!.abilities = {};
  if (!user.abilityScores) {
    user.abilityScores = {};
  }
  const abilityScoresLimit =
    getPrioritizedStatistic<number>(character, 'abilityScoresLimit') || 30;
  for (const abilityName of abilities) {
    // generating abilities scores if they don't exist yet
    // base Ability Score = 3d6, min 8;
    if (user.abilityScores[abilityName] === undefined) {
      user.abilityScores[abilityName] = {
        value: random(1, 6) + random(1, 6) + random(1, 6),
      };
    }
    if (user.abilityScores[abilityName]!.value < 8) {
      user.abilityScores[abilityName]!.value = 8;
    }

    // checking if there's a template applied to the creature with
    // a minimum score for this ability
    if (
      c?.template?.abilityScores &&
      Object.hasOwn(c.template.abilityScores, abilityName) &&
      user.abilityScores[abilityName]!.value <
        c.template.abilityScores[abilityName]!.value
    ) {
      user.abilityScores[abilityName]!.value =
        c.template.abilityScores[abilityName]!.value;
    }
    let abilityScoreTotal: number = user.abilityScores[abilityName]!.value;

    // ability score bonus
    const bonus = getBonusAndInfo(character, abilityName);

    abilityScoreTotal += bonus.value;
    // ------- automatic calculation (CR) -------
    if (
      // c?.CRCalculation?.name === "automatic" &&
      user.abilityScores[abilityName]?.isAutomaticCalcDisabled !== true &&
      !bonus.hadExpressions
    ) {
      abilityScoreTotal = calibrateStatistic(
        character,
        abilityScoreTotal,
        'abilityScoresAvg'
      );
    }

    // normalizing ability scores out of bounds
    if (abilityScoreTotal > abilityScoresLimit) {
      abilityScoreTotal = abilityScoresLimit;
    } else if (abilityScoreTotal < 1) {
      abilityScoreTotal = 1;
    }

    const modifier = Math.floor(abilityScoreTotal / 2) - 5;
    // statistics
    character.statistics!.abilities[abilityName] = {
      number: modifier,
      string: '',
      array: [],
    };
    const parts = character.statistics!.abilities[abilityName].array;
    parts.push(createPart(`${abilityScoreTotal} (`));
    parts.push({
      string: numberToSignedString(modifier),
      number: modifier,
      type: 'd20Roll',
      roll: {
        name: abilityNames[abilityName],
        translationKey: abilityNames[abilityName],
        dice: [
          {
            sides: 20,
            dice: 1,
            value: 10 + modifier,
            bonus: modifier,
          },
        ],
      },
    });
    parts.push(createPart(')'));
    // variables
    character.variables![abilityName] = modifier;
    character.variables![`${abilityName}VALUE`] = abilityScoreTotal;
  }
}
