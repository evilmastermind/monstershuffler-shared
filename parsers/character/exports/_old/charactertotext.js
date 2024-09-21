function characterToText(objectInfo) {
  const character = objectInfo.object;
  var string = '' ;

  //name
  string += character.statistics.FullName + '\n';

  //meta
  string += character.statistics.Meta + '\n';


  //small background
  if(character.statistics?.Smallbackground?.length)
    string += stripHTML(character.statistics.Smallbackground) + '\n';


  //trait
  if(character.statistics?.PersonalityTrait?.length)
    string += 'Personality Trait ' + stripHTML(character.statistics.PersonalityTrait) + '\n';


  //AC
  string += 'Armor Class ' + character.statistics.AC.Value;
  if(find(character.statistics.AC,'Notes') && find(character.statistics.AC,'Notes') != '')
    string += ' ' + character.statistics.AC.Notes;
  string +=  '\n';


  //HP
  string += 'Hit Points ' + character.statistics.HP.Value + ' ' +character.statistics.HP.Notes + '\n';

  //Speed
  string += 'Speed ' + character.statistics.SpeedText + '\n';


  //Abilities
  var abilities = character.statistics.Abilities;
  var abilityModifiers = character.statistics.AbilityModifiers;

  for (var ability in abilities) {
    string += ability + ' ' + abilities[ability].toString() + (abilityModifiers[ability]>=0?'(+':'(') + abilityModifiers[ability].toString() + ') ';
  }
  string = string.trimEnd() + '\n';


  //Saving Throws
  if(find(character.statistics,'SavingThrowsText') && find(character.statistics,'SavingThrowsText')!='')
    string += 'Saving Throws ' + character.statistics.SavingThrowsText + '\n';

  //Skills
  if(find(character.statistics,'SkillsText') && find(character.statistics,'SkillsText')!='')
    string += 'Skills ' + character.statistics.SkillsText + '\n';

  //Damage Vulnerabilities
  if(find(character.statistics,'DamageVulnerabilitiesText') && find(character.statistics,'DamageVulnerabilitiesText')!='')
    string += 'Damage Vulnerabilities ' + character.statistics.DamageVulnerabilitiesText + '\n';

  //Damage Resistances
  if(find(character.statistics,'DamageResistancesText') && find(character.statistics,'DamageResistancesText')!='')
    string += 'Damage Resistances ' + character.statistics.DamageResistancesText + '\n';

  //Damage Immunities
  if(find(character.statistics,'DamageImmunitiesText') && find(character.statistics,'DamageImmunitiesText')!='')
    string += 'Damage Immunities ' + character.statistics.DamageImmunitiesText + '\n';

  //Condition Immunities
  if(find(character.statistics,'ConditionImmunitiesText') && find(character.statistics,'ConditionImmunitiesText')!='')
    string += 'Condition Immunities ' + character.statistics.ConditionImmunitiesText + '\n';


  //Senses
  if(find(character.statistics,'SensesText') && find(character.statistics,'SensesText')!='')
    string += 'Senses ' + character.statistics.SensesText + '\n';

  //Languages
  if(find(character.statistics,'LanguagesText') && find(character.statistics,'LanguagesText')!='')
    string += 'Languages ' + character.statistics.LanguagesText + '\n';

  //Proficiency
  string += 'Proficiency ' + (character.statistics.Proficiency>=0? '+' + character.statistics.Proficiency: character.statistics.Proficiency) + '\n';

  //Challenge
  string += 'Challenge ' + character.statistics.Challenge + ' ' + '(' + character.statistics.XP.toLocaleString('en-US') + ' XP)\n';

  //Traits
  var tempString = '';
  var array = character.statistics.Traits;
  for(var item in array) {
    var Name = checkPeriod(array[item]['Name']) + ' ';
    var Content = checkPeriod(array[item]['Content']);
    tempString += Name + ' ' + Content + '\n';
  }
  if(tempString!='') string +='TRAITS\n' + stripHTML(tempString);

  //ACTIONS
  var tempString = '';
  var array = character.statistics.Actions;
  for(var item in array) {
    var Name = checkPeriod(array[item]['Name']) + ' ';
    var Content = checkPeriod(array[item]['Content'].replaceAll(/<[^>]*>?/gm, ''));
    tempString += Name + ' ' + Content + '\n';
  }
  if(tempString!='') string +='ACTIONS\n' + stripHTML(tempString);

  //SPELLS
  if(find(character.statistics.Spellcasting,'Spells')) {
    string += 'Spellcasting. ' + character.statistics.Spellcasting.Content + '\n' + character.statistics.Spellcasting.Spells.replaceAll('<br />', '\n').replaceAll(/<[^>]*>?/gm, '') + '\n';
  }

  //BONUS ACTIONS
  var tempString = '';
  var array = character.statistics.BonusActions;
  for(var item in array) {
    var Name = checkPeriod(array[item]['Name']) + ' ';
    var Content = checkPeriod(array[item]['Content'].replaceAll(/<[^>]*>?/gm, ''));
    tempString += Name + ' ' + Content + '\n';
  }
  if(tempString!='') string +='BONUS ACTIONS\n' + stripHTML(tempString);

  //REACTIONS
  var tempString = '';
  var array = character.statistics.Reactions;
  for(var item in array) {
    var Name = checkPeriod(array[item]['Name']) + ' ';
    var Content = checkPeriod(array[item]['Content'].replaceAll(/<[^>]*>?/gm, ''));
    tempString += Name + ' ' + Content + '\n';
  }
  if(tempString!='') string +='REACTIONS\n' + stripHTML(tempString);

  //LEGENDARY ACTIONS
  var tempString = '';
  var array = character.statistics.LegendaryActions;
  for(var item in array) {
    var Name = checkPeriod(array[item]['Name']) + ' ';
    var Content = checkPeriod(array[item]['Content'].replaceAll(/<[^>]*>?/gm, ''));
    tempString += Name + ' ' + Content + '\n';
  }
  if(tempString!='') string +='LEGENDARY ACTIONS\n' + stripHTML(tempString);



  return string;

}
