"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportCharacterToHomebreweryV3 = void 0;
const utils_1 = require("./utils");
function exportCharacterToHomebreweryV3(character) {
    if (!character.statistics) {
        return '';
    }
    const s = character.statistics;
    let output = `{{monster,frame
## ${s.fullName}
*${s.meta.string}*
___
**Armor Class** :: ${s.AC.string}
**Hit Points** :: ${s.HP.string}
**Speed** :: ${(s.speeds?.map((speed) => speed.string.replace('ft', 'ft.')) || []).join(', ')}
___
|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|${s.abilities.STR.string}|${s.abilities.DEX.string}|${s.abilities.CON.string}|${s.abilities.INT.string}|${s.abilities.WIS.string}|${s.abilities.CHA.string}|
___`;
    if (s.savingThrows?.length) {
        output += `\n**Saving Throws** :: ${(s.savingThrows?.map((save) => save.string).join(', '))}`;
    }
    if (s.skills?.length) {
        output += `\n**Skills** :: ${(s.skills?.map((skill) => skill.string).join(', '))}`;
    }
    if (s.vulnerabilities?.length) {
        output += `\n**Damage Vulnerabilities** :: ${(s.vulnerabilities?.map((vulnerability) => vulnerability.string).join(', '))}`;
    }
    if (s.resistances?.length) {
        output += `\n**Damage Resistances** :: ${(s.resistances?.map((resistance) => resistance.string).join(', '))}`;
    }
    if (s.immunities?.length) {
        output += `\n**Damage Immunities** :: ${(s.immunities?.map((immunity) => immunity.string).join(', '))}`;
    }
    if (s.conditionImmunities?.length) {
        output += `\n**Condition Immunities** :: ${(s.conditionImmunities?.map((conditionImmunity) => conditionImmunity.string).join(', '))}`;
    }
    if (s.senses?.length) {
        output += `\n**Senses** :: ${(s.senses?.map((sense) => sense.string).join(', '))}`;
    }
    if (s.languages?.length) {
        output += `\n**Languages** :: ${(s.languages?.map((language) => language.string).join(', '))}`;
    }
    output += `\n**Challenge** :: ${s.CR.string} (${s.XP} XP)`;
    output += '\n___';
    if (s.traits?.length) {
        for (const trait of s.traits) {
            output += `\n***${trait.name}.*** ${(0, utils_1.addMarkdown)(trait.array)}`;
        }
    }
    if (s.actions?.length || s.spells?.length) {
        output += '\n### Actions';
    }
    if (s.actions?.length) {
        for (const action of s.actions) {
            output += `\n***${action.name}.*** ${(0, utils_1.addMarkdown)(action.array)}\n:`;
        }
    }
    if (s.spells?.length) {
        if (s.spellcasting?.length) {
            output += `\n***Spellcasting***. ${s.spellcasting.map((spellcasting) => spellcasting.string).join('')}\n:`;
        }
        for (const group of s.spells) {
            output += `\n ${group.name} ${(0, utils_1.addMarkdown)(group.array)}`;
        }
    }
    if (s.bonusActions?.length) {
        output += '\n### Bonus Actions';
        for (const bonusAction of s.bonusActions) {
            output += `\n***${bonusAction.name}.*** ${(0, utils_1.addMarkdown)(bonusAction.array)}\n:`;
        }
    }
    if (s.reactions?.length) {
        output += '\n### Reactions';
        for (const reaction of s.reactions) {
            output += `\n ***${reaction.name}.*** ${(0, utils_1.addMarkdown)(reaction.array)}\n:`;
        }
    }
    if (s.legendaryActions?.length) {
        output += '\n### Legendary Actions';
        output += `\n${s.legendaryActionsIntro?.string}`;
        for (const legendaryAction of s.legendaryActions) {
            output += `\n**${legendaryAction.name}.** ${(0, utils_1.addMarkdown)(legendaryAction.array)}\n:`;
        }
    }
    output += '\n}}';
    return output;
}
exports.exportCharacterToHomebreweryV3 = exportCharacterToHomebreweryV3;
