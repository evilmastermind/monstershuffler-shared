//----------------------------------------------------------------
//MARKDOWN V3
//----------------------------------------------------------------

function characterToMarkdownV3(objectInfo) {
  const character = objectInfo.object;
  let string = '{{monster,frame,wide\n' ;
    
  //name
  string += `## ${character.statistics.FullName}\n`;
    
  //meta
  string += `*${character.statistics.Meta}*\n`;
  string += '___\n';
  //AC
  string += `**Armor Class** :: ${character.statistics.AC.Value} ${character.statistics.AC?.Notes || ''}\n`;
    
    
  //HP
  string += `**Hit Points** :: ${character.statistics.HP.Value} ${character.statistics.HP?.Notes || ''}\n`;
    
  //Speed
  string += `**Speed** :: ${character.statistics.SpeedText.replaceAll(' ft',' ft.')}\n`;
  string += '___\n';
    
  //Abilities
  string += '|STR|DEX|CON|INT|WIS|CHA|\n';
  string += '|:---:|:---:|:---:|:---:|:---:|:---:|\n';
  var abilities = character.statistics.Abilities;
  var abilityModifiers = character.statistics.AbilityModifiers;
  var newLine   = '|';
  for (var ability in abilities) {
    newLine += abilities[ability].toString() + (abilityModifiers[ability]>=0?' (+':' (') + abilityModifiers[ability].toString() + ')|';
  }
  string += `${newLine}\n___\n`;
    
  //Saving Throws
  if(find(character.statistics,'SavingThrowsText') && find(character.statistics,'SavingThrowsText')!='')
    string += `**Saving Throws** :: ${character.statistics.SavingThrowsText}\n`;
    
  //Skills
  if(find(character.statistics,'SkillsText') && find(character.statistics,'SkillsText')!='')
    string += `**Skills** :: ${character.statistics.SkillsText}\n`;
    
  //Damage Vulnerabilities
  if(find(character.statistics,'DamageVulnerabilitiesText') && find(character.statistics,'DamageVulnerabilitiesText')!='')
    string += `**Damage Vulnerabilities** :: ${character.statistics.DamageVulnerabilitiesText}\n`;
    
  //Damage Resistances
  if(find(character.statistics,'DamageResistancesText') && find(character.statistics,'DamageResistancesText')!='')
    string += `**Damage Resistances** :: ${character.statistics.DamageResistancesText}\n`;
    
  //Damage Immunities
  if(find(character.statistics,'DamageImmunitiesText') && find(character.statistics,'DamageImmunitiesText')!='')
    string += `**Damage Immunities** :: ${character.statistics.DamageImmunitiesText}\n`;
    
  //Condition Immunities
  if(find(character.statistics,'ConditionImmunitiesText') && find(character.statistics,'ConditionImmunitiesText')!='')
    string += `**Condition Immunities** :: ${character.statistics.ConditionImmunitiesText}\n`;
    
  //Senses
  if(find(character.statistics,'SensesText') && find(character.statistics,'SensesText')!='')
    string += `**Senses** :: ${character.statistics.SensesText.replaceAll(' ft',' ft.')}\n`;
    
  //Languages
  if(find(character.statistics,'LanguagesText') && find(character.statistics,'LanguagesText')!='')
    string += `**Languages** :: ${character.statistics.LanguagesText.replaceAll(' ft',' ft.')}\n`;
    
  //Challenge
  string += `**Challenge** :: ${character.statistics.Challenge} (${character.statistics.XP.toLocaleString('en-US')} XP)\n`;
    
  string += '___\n';
    
  //Traits
  var tempString = '';
  var array = character.statistics.Traits;
  for(var item in array) {
    var Name = checkPeriod(stripHTML(array[item]['Name']));
    let Content = cleanActionContent(array[item]['Content']);
    tempString += `***${Name}*** ${Content}\n:\n`;
  }
  if(tempString!='') string += tempString;
    
  //ACTIONS
  var tempString = '';
  var array = character.statistics.Actions;
  for(var item in array) {
    var Name = checkPeriod(stripHTML(array[item]['Name']));
    let Content = cleanActionContent(array[item]['Content']);
    tempString += `***${Name}*** ${Content}\n:\n`;
  }
  if(tempString!='') {
    string =  removeLastComma(string);
    string += '### Actions\n';
    string += tempString;
  }
  //SPELLS
  if(find(character.statistics.Spellcasting,'Spells')) {
    // spell description
    string += `***Spellcasting.*** ${character.statistics.Spellcasting.Content}\n:\n`;
    // separating spell rows in order to add :: after the times/day description
    let spellRows = character.statistics.Spellcasting.Spells.split('<br />');
    spellRows.forEach(spell => {
      spell = spell.replace('<span',':: <span');
      spell = stripHTML(spell.replaceAll(/(<i>|<\/i>)/g,'*'));
      string += `${spell}\n`;
    });
  }
    
  //BONUS ACTIONS
  var tempString = '';
  var array = character.statistics.BonusActions;
  for(var item in array) {
    var Name = checkPeriod(stripHTML(array[item]['Name']));
    let Content = cleanActionContent(array[item]['Content']);
    tempString += `***${Name}*** ${Content}\n:\n`;
  }
  if(tempString!='') {
    string =  removeLastComma(string);
    string += '### Bonus Actions\n';
    string += tempString;
  }
    
  //REACTIONS
  var tempString = '';
  var array = character.statistics.Reactions;
  for(var item in array) {
    var Name = checkPeriod(stripHTML(array[item]['Name']));
    let Content = cleanActionContent(array[item]['Content']);
    tempString += `***${Name}*** ${Content}\n:\n`;
  }
  if(tempString!='') {
    string =  removeLastComma(string);
    string += '### Reactions\n';
    string += tempString;
  }
    
  //LEGENDARY ACTIONS
  var tempString = '';
  var array = character.statistics.LegendaryActions;
  for(var item in array) {
    var Name = checkPeriod(stripHTML(array[item]['Name']));
    let Content = cleanActionContent(array[item]['Content']);
    tempString += `**${Name}** ${Content}\n:\n`;
  }
  if(tempString!='') {
    string =  removeLastComma(string);
    string += '### Legendary Actions\n';
    string += `${character.statistics.LegendaryDescription}\n:\n`;
    string += tempString;
  }
  string =  removeLastComma(string);
  return string + '}}';
    
  function removeLastComma(s = '') { 
    if(s.substr(s.length-3)==='\n:\n') return s.substr(0,s.length-3) + '\n\n'; 
    else return s;
  }
  function cleanActionContent(s = '') {
    let Content = checkPeriod(stripHTML(s.replaceAll(/(<i>|<\/i>)/g,'*').replaceAll('_','*')));
    //handling new lines
    Content = Content.replaceAll('\n\n','°@?').replaceAll('\n','  \n');
    Content = Content.replaceAll('°@?','\n:\n');
    //other strings
    Content = Content.replaceAll(' ft',' ft.');	
    return Content;
  }
}
