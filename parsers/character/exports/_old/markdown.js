//----------------------------------------------------------------
//MARKDOWN
//----------------------------------------------------------------

function characterToMarkdown(objectInfo) {
  const character = objectInfo.object;
  var string = '___\n___\n' ;
    
  //name
  string += `> ## ${character.statistics.FullName}\n`;
    
  //meta
  string += `>*${character.statistics.Meta}*\n`;
  string += '>___\n';
  //AC
  string += `> - **Armor Class** ${character.statistics.AC.Value} ${character.statistics.AC?.Notes || ''}\n`;
    
    
  //HP
  string += `> - **Hit Points** ${character.statistics.HP.Value} ${character.statistics.HP?.Notes || ''}\n`;
    
  //Speed
  string += `> - **Speed** ${character.statistics.SpeedText.replaceAll(' ft',' ft.')}\n`;
  string += '>___\n';
    
  //Abilities
  string += '>|STR|DEX|CON|INT|WIS|CHA|\n';
  string += '>|:---:|:---:|:---:|:---:|:---:|:---:|\n';
  var abilities = character.statistics.Abilities;
  var abilityModifiers = character.statistics.AbilityModifiers;
  var newLine   = '>|';
  for (var ability in abilities) {
    newLine += abilities[ability].toString() + (abilityModifiers[ability]>=0?' (+':' (') + abilityModifiers[ability].toString() + ')|';
  }
  string += `${newLine}\n>___\n`;
    
  //Saving Throws
  if(find(character.statistics,'SavingThrowsText') && find(character.statistics,'SavingThrowsText')!='')
    string += `> - **Saving Throws** ${character.statistics.SavingThrowsText}\n`;
    
  //Skills
  if(find(character.statistics,'SkillsText') && find(character.statistics,'SkillsText')!='')
    string += `> - **Skills** ${character.statistics.SkillsText}\n`;
    
  //Damage Vulnerabilities
  if(find(character.statistics,'DamageVulnerabilitiesText') && find(character.statistics,'DamageVulnerabilitiesText')!='')
    string += `> - **Damage Vulnerabilities** ${character.statistics.DamageVulnerabilitiesText}\n`;
    
  //Damage Resistances
  if(find(character.statistics,'DamageResistancesText') && find(character.statistics,'DamageResistancesText')!='')
    string += `> - **Damage Resistances** ${character.statistics.DamageResistancesText}\n`;
    
  //Damage Immunities
  if(find(character.statistics,'DamageImmunitiesText') && find(character.statistics,'DamageImmunitiesText')!='')
    string += `> - **Damage Immunities** ${character.statistics.DamageImmunitiesText}\n`;
    
  //Condition Immunities
  if(find(character.statistics,'ConditionImmunitiesText') && find(character.statistics,'ConditionImmunitiesText')!='')
    string += `> - **Condition Immunities** ${character.statistics.ConditionImmunitiesText}\n`;
    
  //Senses
  if(find(character.statistics,'SensesText') && find(character.statistics,'SensesText')!='')
    string += `> - **Senses** ${character.statistics.SensesText.replaceAll(' ft',' ft.')}\n`;
    
  //Languages
  if(find(character.statistics,'LanguagesText') && find(character.statistics,'LanguagesText')!='')
    string += `> - **Languages** ${character.statistics.LanguagesText.replaceAll(' ft',' ft.')}\n`;
    
  //Challenge
  string += `> - **Challenge** ${character.statistics.Challenge} (${character.statistics.XP.toLocaleString('en-US')} XP)\n`;
    
  string += '>___\n';
    
  //Traits
  var tempString = '';
  var array = character.statistics.Traits;
  for(var item in array) {
    var Name = checkPeriod(stripHTML(array[item]['Name']));
    var Content = checkPeriod(stripHTML(array[item]['Content'].replaceAll(/(<i>|<\/i>)/g,'_'))).replaceAll('\n\n','\n').replaceAll('\n','\n>\n> ').replaceAll(' ft',' ft.');
    tempString += `> ***${Name}*** ${Content}\n>\n`;
  }
  if(tempString!='') string += tempString;
    
  //ACTIONS
  var tempString = '';
  var array = character.statistics.Actions;
  for(var item in array) {
    var Name = checkPeriod(stripHTML(array[item]['Name']));
    var Content = checkPeriod(stripHTML(array[item]['Content'].replaceAll(/(<i>|<\/i>)/g,'_'))).replaceAll('\n\n','\n').replaceAll('\n','\n>\n> ').replaceAll(' ft',' ft.');
    tempString += `> ***${Name}*** ${Content}\n>\n`;
  }
  if(tempString!='') {
    string += '> ### Actions\n';
    string += tempString;
  }
  //SPELLS
  if(find(character.statistics.Spellcasting,'Spells')) {
    const spells = stripHTML(character.statistics.Spellcasting.Spells.replaceAll(/(<i>|<\/i>)/g,'_').replaceAll('<br />', '°°°\n>')).replaceAll('°°°','<br>');
    string += `> ***Spellcasting.*** ${character.statistics.Spellcasting.Content}\n>\n> ${spells} \n>\n`;
  }
    
  //BONUS ACTIONS
  var tempString = '';
  var array = character.statistics.BonusActions;
  for(var item in array) {
    var Name = checkPeriod(stripHTML(array[item]['Name']));
    var Content = checkPeriod(stripHTML(array[item]['Content'].replaceAll(/(<i>|<\/i>)/g,'_'))).replaceAll('\n\n','\n').replaceAll('\n','\n>\n> ').replaceAll(' ft',' ft.');
    tempString += `> ***${Name}*** ${Content}\n>\n`;
  }
  if(tempString!='') {
    string += '> ### Bonus Actions\n';
    string += tempString;
  }
    
  //REACTIONS
  var tempString = '';
  var array = character.statistics.Reactions;
  for(var item in array) {
    var Name = checkPeriod(stripHTML(array[item]['Name']));
    var Content = checkPeriod(stripHTML(array[item]['Content'].replaceAll(/(<i>|<\/i>)/g,'_'))).replaceAll('\n\n','\n').replaceAll('\n','\n>\n> ').replaceAll(' ft',' ft.');
    tempString += `> ***${Name}*** ${Content}\n>\n`;
  }
  if(tempString!='') {
    string += '> ### Reactions\n';
    string += tempString;
  }
    
  //LEGENDARY ACTIONS
  var tempString = '';
  var array = character.statistics.LegendaryActions;
  for(var item in array) {
    var Name = checkPeriod(stripHTML(array[item]['Name']));
    var Content = checkPeriod(stripHTML(array[item]['Content'].replaceAll(/(<i>|<\/i>)/g,'_'))).replaceAll('\n\n','\n').replaceAll('\n','\n>\n> ').replaceAll(' ft',' ft.');
    tempString += `> **${Name}** ${Content}\n>\n`;
  }
  if(tempString!='') {
    string += '> ### Legendary Actions\n';
    string += `> ${character.statistics.LegendaryDescription}\n>\n`;
    string += tempString;
  }
    
  if(string.substr(string.length-3)==='\n>\n') string = string.substr(0,string.length-4);
  return string;
    
}
    