import {
  getPrioritizedStatistic,
  calibrateStatistic,
  getBonusAndInfo,
  createPart,
  numberToSignedString,
  createUserObjectIfNotExists,
} from '../functions';
import { abilities, abilityNames } from '../stats';
import type { Character, StatStringNumberArray } from '@/types';
import { random } from '@/functions';

export function calculateAbilityScores(character: Character) {
  createUserObjectIfNotExists(character);
  
  const c = character.character;
  const u = c.user!;
  const s = character.statistics!;
  const v = character.variables!;

  // @ts-expect-error
  s.abilities = {};
  if (!u.abilityScores) {
    u.abilityScores = {};
  }
  const abilityScoresLimit =
    getPrioritizedStatistic<number>(character, 'abilityScoresLimit') || 30;

  for (const abilityName of abilities) {
    // generating abilities scores if they don't exist yet
    // base Ability Score = 3d6, min 8;
    if (u.abilityScores[abilityName] === undefined) {
      u.abilityScores[abilityName] = {
        value: random(1, 6) + random(1, 6) + random(1, 6),
      };
    }
    if (u.abilityScores[abilityName]!.value < 8) {
      u.abilityScores[abilityName]!.value = 8;
    }

    // checking if there's a template applied to the creature with
    // a minimum score for this ability
    if (
      c?.template?.abilityScores &&
      Object.hasOwn(c.template.abilityScores, abilityName) &&
      u.abilityScores[abilityName]!.value <
        c.template.abilityScores[abilityName]!.value
    ) {
      u.abilityScores[abilityName]!.value =
        c.template.abilityScores[abilityName]!.value;
    }

    let abilityScoreTotal: number = u.abilityScores[abilityName]!.value;
    // ability score bonus
    const bonus = getBonusAndInfo(character, abilityName);
    abilityScoreTotal += bonus.value;

    // ------- automatic calculation (CR) -------
    if (
      // c?.CRCalculation?.name === "automatic" &&
      u.abilityScores[abilityName]?.isAutomaticCalcDisabled !== true &&
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

    const modifierNumber = Math.floor(abilityScoreTotal / 2) - 5;

    // statistics
    const score: StatStringNumberArray = {
      name: abilityNames[abilityName],
      number: abilityScoreTotal,
      string: abilityScoreTotal.toString(),
      array: [createPart(abilityScoreTotal.toString())],
    };

    const modifier: StatStringNumberArray = {
      name: abilityNames[abilityName],
      number: modifierNumber,
      string: numberToSignedString(modifierNumber),
      array: [
        {
          string: numberToSignedString(modifierNumber),
          number: modifierNumber,
          type: 'd20Roll',
          roll: {
            name: abilityNames[abilityName],
            translationKey: abilityNames[abilityName],
            dice: [
              {
                sides: 20,
                dice: 1,
                value: 10 + modifierNumber,
                bonus: modifierNumber,
              },
            ],
          },
        }
      ],
    };

    // we temporarily assign the modifier to the save
    // and we'll check if there's a save bonus later
    const save: StatStringNumberArray = { ...modifier };

    // statistics
    s.abilities[abilityName] = {
      score,
      modifier,
      save,
    };

    // variables
    v[abilityName] = modifierNumber;
    v[`${abilityName}VALUE`] = abilityScoreTotal;
  }
}
