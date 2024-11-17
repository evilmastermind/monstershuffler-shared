import { createKeyIfUndefined } from '@/functions';
import {
  calculateChallengeRating,
  assignNewChallengeRating,
} from './challengeRating';
import { calculateAlignment } from './alignment';
import { calculateName } from './name';
import { calculateLevel, recalculateLevelAfterAutomaticHP } from './level';
import { calculateProficiency } from './proficiency';
import { calculateSize } from './size';
import { calculateAbilityScores } from './abilityScores';
import { calculateHitPoints } from './hp';
import { calculatePronouns } from './pronouns';
import { calculateCharacterHook } from './characterHook';
import { calculateType } from './type';
import { createTags } from './tags';
import { calculateSubtype } from './subtype';
import { calculateMeta } from './meta';
import { calculateArmorClass } from './ac';
import { calculateLanguages } from './languages';
import { calculateSpeed } from './speed';
import { calculateSavingThrows } from './savingThrows';
import { calculateSkills } from './skills';
import { calculateVulnerabilities } from './damageVulnerabilities';
import { calculateResistances } from './damageResistances';
import { calculateConditionImmunities } from './conditionImmunities';
import { calculateImmunities } from './damageImmunities';
import { calculateSenses } from './senses';
import { calculateActions } from './actions';
import { calculateRoleplayStats } from './roleplayStats';
import { calculateSpells } from './spells';

import type { Character } from '@/types';

export { calculateCharacterHook } from './characterHook';

export * from './exports';
export function createStats(character: Character) {
  createKeyIfUndefined(character, 'statistics');
  createKeyIfUndefined(character, 'variables');
  createKeyIfUndefined(character, 'tags');
  createKeyIfUndefined(character, 'variations');
  /// /// ///
  /// /// ///
  const CRCalculation = character.character.CRCalculation?.name;
  if (CRCalculation === 'automatic') {
    console.log('parser - Automatic CR calculation');
    /**
     * AUTOMATIC
     * The user creates a monster, gives it some hit dice and chooses an appropriate CR.
     * When increasing or decreasing the CR, some stats like hit points and ability scores
     * are calibrated automatically (unless the user added 'expressions' to them already).
     *
     * "Calibrating" stats:
     * This recalculation is based on a table which contains the average values for the
     * most important stats from CR 1 to CR 30. By determining the increase factor of
     * the average values between the original CR and the new one chosen by the user,
     * we can estimate the new values by multiplying the original values by that
     * increase factor.
     *
     * PHASE 1: use the original CR to determine the original hit points
     */
    console.log('parser - Calculating CR');
    calculateChallengeRating(character, false);
    console.log('parser - Calculating Level');
    calculateLevel(character);
    console.log('parser - Calculating Proficiency');
    calculateSize(character);
    console.log('parser - Calculating Size');
    calculateAbilityScores(character);
    /**
     * the hit points are calculated here for the first time, using the origingal
     * hit dice, size, and ability scores. With the "calibration" method mentioned above,
     * the hit points for the new challenge rating are then estimated.
     */
    console.log('parser - Calculating Hit Points');
    calculateHitPoints(character, false);
    /**
     * PHASE 2: use the new CR to calculate all stats
     */
    console.log('parser - Re-calculating CR');
    assignNewChallengeRating(character);
    // TODO: warn the user that, because of this new automatic calculation,
    // it's no longer possible to use the variable LVL for Size and Ability Scores
    console.log('parser - Re-calculating Level');
    calculateSize(character);
    console.log('parser - Re-calculating Size');
    calculateAbilityScores(character);
    /**
     * the level here is calculated from the hit points estimated for the new CR.
     */
    console.log('parser - Re-calculating Ability Scores');
    recalculateLevelAfterAutomaticHP(character);
    console.log('parser - Re-calculating Level');
    calculateProficiency(character);
    /**
     * the hit points are finally calculated using the new level
     */
    console.log('parser - Re-calculating Hit Points');
    calculateHitPoints(character, true, false);
  } else {
    console.log('parser - Manual CR calculation');
    /**
     * TWO-POINTS METHOD / NPC STANDARD
     * The other two calculations (two-points method and NPC standard) are "Level-Based":
     * we calculate the level first, then the CR, and everything else is calculated
     * from there.
     */
    console.log('parser - Level-based CR calculation');
    calculateLevel(character);
    console.log('parser - Calculating CR');
    calculateChallengeRating(character);
    console.log('parser - Calculating Proficiency');
    calculateProficiency(character);
    console.log('parser - Calculating Size');
    calculateAbilityScores(character);
    console.log('parser - Calculating Ability Scores');
    calculateSize(character);
    console.log('parser - Calculating Hit Points');
    calculateHitPoints(character);
  }
  /// /// ///
  console.log('parser - Calculating Name');
  calculateName(character);
  console.log('parser - Calculating Pronouns');
  calculatePronouns(character);
  console.log('parser - Calculating Alignment');
  calculateAlignment(character);
  console.log('parser - Calculating Tags');
  createTags(character);
  /// /// ///
  console.log('parser - Calculating Character Hook');
  calculateCharacterHook(character);
  /// /// ///
  console.log('parser - Calculating Type');
  calculateType(character);
  console.log('parser - Calculating Subtype');
  calculateSubtype(character);
  console.log('parser - Calculating Meta');
  calculateMeta(character);
  /// /// ///
  console.log('parser - Calculating Armor Class');
  calculateArmorClass(character);
  console.log('parser - Calculating Speed');
  calculateSpeed(character);
  /// /// ///
  console.log('parser - Calculating Saving Throws');
  calculateSavingThrows(character);
  console.log('parser - Calculating Skills');
  calculateSkills(character);
  console.log('parser - Calculating Vulnerabilities');
  calculateVulnerabilities(character);
  console.log('parser - Calculating Resistances');
  calculateResistances(character);
  console.log('parser - Calculating Immunities');
  calculateImmunities(character);
  console.log('parser - Calculating Condition Immunities');
  calculateConditionImmunities(character);
  console.log('parser - Calculating Senses');
  calculateSenses(character);
  /// /// ///
  console.log('parser - Calculating Languages');
  calculateLanguages(character);
  /// /// ///
  console.log('parser - Calculating Actions');
  calculateActions(character);
  console.log('parser - Calculating Spells');
  calculateSpells(character);
  /// /// ///
  console.log('parser - Calculating Roleplay Stats');
  calculateRoleplayStats(character);
}
