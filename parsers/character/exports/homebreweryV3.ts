import type { Character } from '@/types';
import { addMarkdown } from './utils';

export function exportCharacterToHomebreweryV3(character: Character, columns = 1): string {
  if (!character.statistics) {
    return '';
  }
  const s = character.statistics;

  let output = 
  `{{monster,frame${columns > 1 ? ', wide' : ''}}}
## ${s.fullName}
*${s.meta.string}*
___
**Armor Class** :: ${s.AC.string}
**Hit Points** :: ${s.HP.string}
**Speed** :: ${(s.speeds?.map((speed)=> speed.string.replace('ft', 'ft.')) || []).join(', ')}
___
|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|${s.abilities.STR.string}|${s.abilities.DEX.string}|${s.abilities.CON.string}|${s.abilities.INT.string}|${s.abilities.WIS.string}|${s.abilities.CHA.string}|
___`;

  if (s.savingThrows?.length) {
    output +=`\n**Saving Throws** :: ${(s.savingThrows?.map((save) => save.string).join(', '))}`;
  }
  if (s.skills?.length) {
    output +=`\n**Skills** :: ${(s.skills?.map((skill) => skill.string).join(', '))}`;
  }
  if (s.vulnerabilities?.length) {
    output +=`\n**Damage Vulnerabilities** :: ${(s.vulnerabilities?.map((vulnerability) => vulnerability.string).join(', '))}`;
  }
  if (s.resistances?.length) {
    output +=`\n**Damage Resistances** :: ${(s.resistances?.map((resistance) => resistance.string).join(', '))}`;
  }
  if (s.immunities?.length) {
    output +=`\n**Damage Immunities** :: ${(s.immunities?.map((immunity) => immunity.string).join(', '))}`;
  }
  if (s.conditionImmunities?.length) {
    output +=`\n**Condition Immunities** :: ${(s.conditionImmunities?.map((conditionImmunity) => conditionImmunity.string).join(', '))}`;
  }
  if (s.senses?.length) {
    output +=`\n**Senses** :: ${(s.senses?.map((sense) => sense.string).join(', '))}`;
  }
  if (s.languages?.length) {
    output +=`\n**Languages** :: ${(s.languages?.map((language) => language.string).join(', '))}`;
  }
  output +=`\n**Challenge** :: ${s.CR.string} (${s.XP} XP)`;
  output +='\n___';

  if (s.traits?.length) {
    for (let i=0; i<s.traits.length; i++) {
      output += `\n***${s.traits[i].name}.*** ${addMarkdown(s.traits[i].array)}`;
      if (i < s.traits.length - 1) {
        output += '\n:';
      }
    }
  }

  if (s.actions?.length || s.spells?.length) {
    output += '\n### Actions';
  }
  if (s.actions?.length) {
    for (let i = 0; i < s.actions.length; i++) {
      output += `\n***${s.actions[i].name}.*** ${addMarkdown(s.actions[i].array)}`;
      if (i < s.actions.length - 1) {
        output += '\n:';
      }
    }
  }
  if (s.spells?.length) {
    if (s.spellcasting?.length) {
      output += `\n***Spellcasting***. ${s.spellcasting.map((spellcasting) => spellcasting.string).join('')}:\n`;
    }
    for (const group of s.spells) {
      output += `\n:: ${group.name} ${addMarkdown(group.array)}`;
    }
  }

  if (s.bonusActions?.length) {
    output += '\n### Bonus Actions';
    for (let i=0; i<s.bonusActions.length; i++) {
      output += `\n***${s.bonusActions[i].name}.*** ${addMarkdown(s.bonusActions[i].array)}`;
      if (i < s.bonusActions.length - 1) {
        output += '\n:';
      }
    }
  }

  if (s.reactions?.length) {
    output += '\n### Reactions';
    for (let i=0; i<s.reactions.length; i++) {
      output += `\n ***${s.reactions[i].name}.*** ${addMarkdown(s.reactions[i].array)}`;
      if (i < s.reactions.length - 1) {
        output += '\n:';
      }
    }
  }

  if (s.legendaryActions?.length) {
    output += '\n### Legendary Actions';
    output += `\n${s.legendaryActionsIntro?.string}`;
    for (let i=0; i<s.legendaryActions.length; i++) {
      output += `\n**${s.legendaryActions[i].name}.** ${addMarkdown(s.legendaryActions[i].array)}`;
      if (i < s.legendaryActions.length - 1) {
        output += '\n:';
      }
    }
  }
  output += '\n}}';
  return output;
}
