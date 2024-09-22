"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportCharacterToVTTFoundry = void 0;
function exportCharacterToVTTFoundry(character) {
    if (!character.statistics) {
        return '';
    }
    const s = character.statistics;
    let output = `${s.fullName}
${s.meta.string}
Armor Class ${s.AC.string}
Hit Points ${s.HP.string}
Speed ${(s.speeds?.map((speed) => speed.string.replace('ft', 'ft.')) || []).join(', ')}
STR
${s.abilities.STR.string}
DEX
${s.abilities.DEX.string}
CON
${s.abilities.CON.string}
INT
${s.abilities.INT.string}
WIS
${s.abilities.WIS.string}
CHA
${s.abilities.CHA.string}`;
    if (s.savingThrows?.length) {
        output += `\nSaving Throws ${s.savingThrows.map((save) => save.string).join(', ')}`;
    }
    if (s.skills?.length) {
        output += `\nSkills ${s.skills.map((skill) => skill.string).join(', ')}`;
    }
    if (s.vulnerabilities?.length) {
        output += `\nDamage Vulnerabilities ${s.vulnerabilities.map((vulnerability) => vulnerability.string).join(', ')}`;
    }
    if (s.resistances?.length) {
        output += `\nDamage Resistances ${s.resistances.map((resistance) => resistance.string).join(', ')}`;
    }
    if (s.immunities?.length) {
        output += `\nDamage Immunities ${s.immunities.map((immunity) => immunity.string).join(', ')}`;
    }
    if (s.conditionImmunities?.length) {
        output += `\nCondition Immunities ${s.conditionImmunities.map((conditionImmunity) => conditionImmunity.string).join(', ')}`;
    }
    if (s.senses?.length) {
        output += `\nSenses ${s.senses.map((sense) => sense.string).join(', ')}`;
    }
    if (s.languages?.length) {
        output += `\nLanguages ${s.languages.map((language) => language.string).join(', ')}`;
    }
    output += `\nChallenge ${s.CR.string} (${s.XP} XP)`;
    if (s.traits?.length) {
        for (const trait of s.traits) {
            output += `\n${trait.name}. ${trait.string}`;
        }
    }
    if (s.actions?.length || s.spells?.length) {
        output += '\nActions';
    }
    if (s.actions?.length) {
        for (const action of s.actions) {
            output += `\n${action.name}. ${action.string}`;
        }
    }
    if (s.spells?.length) {
        if (s.spellcasting?.length) {
            output += `\nSpellcasting. ${s.spellcasting.map((spellcasting) => spellcasting.string).join('')}`;
        }
        for (const spell of s.spells) {
            output += `\n${spell.name}: ${spell.string}`;
        }
    }
    if (s.bonusActions?.length) {
        output += '\nBonus Actions';
        for (const bonusAction of s.bonusActions) {
            output += `\n${bonusAction.name}. ${bonusAction.string}`;
        }
    }
    if (s.reactions?.length) {
        output += '\nReactions';
        for (const reaction of s.reactions) {
            output += `\n${reaction.name}. ${reaction.string}`;
        }
    }
    if (s.legendaryActions?.length) {
        output += '\nLegendary Actions';
        output += `\n${s.legendaryActionsIntro?.string || ''}`;
        for (const legendaryAction of s.legendaryActions) {
            output += `\n${legendaryAction.name}. ${legendaryAction.string}`;
        }
    }
    return output;
}
exports.exportCharacterToVTTFoundry = exportCharacterToVTTFoundry;
