"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStats = exports.calculateCharacterHook = void 0;
const functions_1 = require("../../functions");
const challengeRating_1 = require("./challengeRating");
const alignment_1 = require("./alignment");
const name_1 = require("./name");
const level_1 = require("./level");
const proficiency_1 = require("./proficiency");
const size_1 = require("./size");
const abilityScores_1 = require("./abilityScores");
const hp_1 = require("./hp");
const pronouns_1 = require("./pronouns");
const characterHook_1 = require("./characterHook");
const type_1 = require("./type");
const tags_1 = require("./tags");
const subtype_1 = require("./subtype");
const meta_1 = require("./meta");
const ac_1 = require("./ac");
const languages_1 = require("./languages");
const speed_1 = require("./speed");
const savingThrows_1 = require("./savingThrows");
const skills_1 = require("./skills");
const damageVulnerabilities_1 = require("./damageVulnerabilities");
const damageResistances_1 = require("./damageResistances");
const conditionImmunities_1 = require("./conditionImmunities");
const damageImmunities_1 = require("./damageImmunities");
const senses_1 = require("./senses");
const actions_1 = require("./actions");
const backstory_1 = require("./backstory");
const spells_1 = require("./spells");
var characterHook_2 = require("./characterHook");
Object.defineProperty(exports, "calculateCharacterHook", { enumerable: true, get: function () { return characterHook_2.calculateCharacterHook; } });
__exportStar(require("./exports"), exports);
function createStats(character) {
    (0, functions_1.createKeyIfUndefined)(character, 'statistics');
    (0, functions_1.createKeyIfUndefined)(character, 'variables');
    (0, functions_1.createKeyIfUndefined)(character, 'tags');
    (0, functions_1.createKeyIfUndefined)(character, 'variations');
    /// /// ///
    /// /// ///
    const CRCalculation = character.character.CRCalculation?.name;
    if (CRCalculation === 'automatic') {
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
        (0, challengeRating_1.calculateChallengeRating)(character, false);
        (0, level_1.calculateLevel)(character);
        (0, size_1.calculateSize)(character);
        (0, abilityScores_1.calculateAbilityScores)(character);
        /**
         * the hit points are calculated here for the first time, using the origingal
         * hit dice, size, and ability scores. With the "calibration" method mentioned above,
         * the hit points for the new challenge rating are then estimated.
         */
        (0, hp_1.calculateHitPoints)(character, false);
        /**
         * PHASE 2: use the new CR to calculate all stats
         */
        (0, challengeRating_1.assignNewChallengeRating)(character);
        // TODO: warn the user that, because of this new automatic calculation,
        // it's no longer possible to use the variable LVL for Size and Ability Scores
        (0, size_1.calculateSize)(character);
        (0, abilityScores_1.calculateAbilityScores)(character);
        /**
         * the level here is calculated from the hit points estimated for the new CR.
         */
        (0, level_1.recalculateLevelAfterAutomaticHP)(character);
        (0, proficiency_1.calculateProficiency)(character);
        /**
         * the hit points are finally calculated using the new level
         */
        (0, hp_1.calculateHitPoints)(character, true, false);
    }
    else {
        /**
         * TWO-POINTS METHOD / NPC STANDARD
         * The other two calculations (two-points method and NPC standard) are "Level-Based":
         * we calculate the level first, then the CR, and everything else is calculated
         * from there.
         */
        (0, level_1.calculateLevel)(character);
        (0, challengeRating_1.calculateChallengeRating)(character);
        (0, proficiency_1.calculateProficiency)(character);
        (0, abilityScores_1.calculateAbilityScores)(character);
        (0, size_1.calculateSize)(character);
        (0, hp_1.calculateHitPoints)(character);
    }
    /// /// ///
    (0, name_1.calculateName)(character);
    (0, pronouns_1.calculatePronouns)(character);
    (0, alignment_1.calculateAlignment)(character);
    (0, tags_1.createTags)(character);
    /// /// ///
    (0, characterHook_1.calculateCharacterHook)(character);
    /// /// ///
    (0, type_1.calculateType)(character);
    (0, subtype_1.calculateSubtype)(character);
    (0, meta_1.calculateMeta)(character);
    /// /// ///
    (0, ac_1.calculateArmorClass)(character);
    (0, speed_1.calculateSpeed)(character);
    /// /// ///
    (0, savingThrows_1.calculateSavingThrows)(character);
    (0, skills_1.calculateSkills)(character);
    (0, damageVulnerabilities_1.calculateVulnerabilities)(character);
    (0, damageResistances_1.calculateResistances)(character);
    (0, damageImmunities_1.calculateImmunities)(character);
    (0, conditionImmunities_1.calculateConditionImmunities)(character);
    (0, senses_1.calculateSenses)(character);
    (0, languages_1.calculateLanguages)(character);
    /// /// ///
    (0, actions_1.calculateActions)(character);
    (0, spells_1.calculateSpells)(character);
    /// /// ///
    (0, backstory_1.calculateBackstoryInfo)(character);
}
exports.createStats = createStats;
