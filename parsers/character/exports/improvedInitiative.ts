import type { Character } from '@/types';
import { capitalizeFirst } from '@/functions';

export function exportCharacterToImprovedInitiative(character: Character): string {
  const output: { [key: string]: any } = {
    'Source':'Monstershuffler.com',
    'Description': '',
    'Player': '',
    'Version': '3.2.10',
    'ImageURL': '',
    'InitiativeModifier': 0,
    'InitiativeAdvantage': false,
  };
  

  if (!character.statistics) {
    return '';
  }

  const s = character.statistics;

  output.Name = s.fullName;
  output.Type = s.meta.string;

  output.Description += s.characterHook ? s.characterHook?.map((part)=> part.string).join() : '';
  output.Description += s.personality ? '\nPersonality Trait: ' + s.personality : '';
  
  output.AC = {
    'Value': s.AC.number,
    'Notes': s.AC.name? `(${s.AC.name})` : '',
  };
  output.HP = {
    'Value': s.HP.number,
    'Notes': s.HP.name? `(${s.HP.name})` : '',
  };
  output.Speed = s.speeds?.map((speed)=> speed.string.replace('ft', 'ft.')) || [];
  
  output.Abilities = {
    Str: s.abilities.STR.number,
    Dex: s.abilities.DEX.number,
    Con: s.abilities.CON.number,
    Int: s.abilities.INT.number,
    Wis: s.abilities.WIS.number,
    Cha: s.abilities.CHA.number,
  };

  output.Skills = s.skills?.map((skill)=> { 
    return {
      Name: capitalizeFirst(skill.name),
      Modifier: skill.number
    };
  }) || [];
  output.Saves = s.savingThrows?.map((save)=> {
    return {
      Name: capitalizeFirst(save.name),
      Modifier: save.number
    };
  });
  
  output.DamageVulnerabilities = s.vulnerabilities?.map((vulnerability)=> vulnerability.string) || [];
  output.DamageResistances = s.resistances?.map((resistance)=> resistance.string) || [];
  output.DamageImmunities = s.immunities?.map((immunity)=> immunity.string) || [];
  output.ConditionImmunities = s.conditionImmunities?.map((conditionImmunity)=> conditionImmunity.string) || [];
  
  output.Senses = s.senses?.map((sense)=> sense.string.replace('ft', 'ft.')) || [];
  output.Languages = s.languages?.map((language)=> language.string.replace('ft', 'ft.')) || [];
  output.Challenge = s.CR.string;

  output.Traits = s.traits?.map((trait)=> {
    return {
      Name: trait.name,
      Content: trait.string,
    };
  }) || [];
  output.BonusActions = s.bonusActions?.map((bonusAction)=> {
    return {
      Name: bonusAction.name,
      Content: bonusAction.string,
    };
  }) || [];
  output.Actions = s.actions?.map((action)=> {
    return {
      Name: action.name,
      Content: action.string,
    };
  }) || [];
  if (s.spells?.length) {
    output.Actions.push({
      Name: 'Spellcasting',
      Content: `${s.spellcasting?.map((spellcasting)=> spellcasting.string).join('')}\n\n${s.spells.map((group)=> `* ${group.name}. ${group.string}`).join('\n')}`,
    });
  }
  output.Reactions = s.reactions?.map((reaction)=> {
    return {
      Name: reaction.name,
      Content: reaction.string,
    };
  }) || [];
  output.LegendaryActions = s.legendaryActions?.map((legendaryAction)=> {
    return {
      Name: legendaryAction.name,
      Content: legendaryAction.string,
    };
  }) || [];
  output.MythicActions = [];

  return JSON.stringify(output, null, 2);
}
