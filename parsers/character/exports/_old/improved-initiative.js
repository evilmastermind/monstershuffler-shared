//------------------------------------------------------------
// IMPROVED INITIATIVE . COM
//------------------------------------------------------------

function characterToII(objectInfo) {
  const character = objectInfo.object;
  const output = {
    'Source':'Monstershuffler.com',
    'MythicActions': [],
    'Description': '',
    'Player': '',
    'Version': '3.2.10',
    'ImageURL': ''
  };
    
    
  //name
  output.Name = character.statistics.FullName;
  //meta
  output.Type = character.statistics.Meta;
    
  //trait
  if(character.statistics?.PersonalityTrait?.length)
    output.Description = 'Personality Trait ' + stripHTML(character.statistics.PersonalityTrait) + '\n';
    //small background
  if(character.statistics?.Smallbackground?.length)
    output.Description += stripHTML(character.statistics.Smallbackground);
    //AC
  output.AC = character.statistics.AC;
  if(!output.AC.Notes) output.AC.Notes = '';
  //HP
  output.HP = character.statistics.HP;
    
  //Speed
  output.Speed = [];
  for(const [speed,value] of Object.entries(character.statistics.Speed)) {
    if(speed==='base') output.Speed.push(`walk ${value} ft.`);
    else if(speed==='hover') output.Speed.push(`fly ${value} ft. (hover)`);
    else output.Speed.push(`${speed} ${value} ft.`);
  }
  //Abilities
  output.Abilities = {};
  for(const [ability,value] of Object.entries(character.statistics.Abilities)) {
    output.Abilities[capitalizeFirst(ability.toLowerCase())] = value;
  };
    
  //Saving Throws
  output.Saves = [];
  for(const [save,value] of Object.entries(character.statistics.SavingThrows)) {
    output.Saves.push({'Name':capitalizeFirst(save),'Modifier':parseInt(value)});
  };
  //Skills
  output.Skills = [];
  for(const [skill,value] of Object.entries(character.statistics.Skills)) {
    output.Skills.push({'Name':capitalizeFirst(skill),'Modifier':parseInt(value)});
  };
    
    
  //Damage Vulnerabilities
  if(character.statistics.hasOwnProperty('DamageVulnerabilities'))
    output.DamageVulnerabilities = character.statistics.DamageVulnerabilities;
  else
    output.DamageVulnerabilities = [];
    
  //Damage Resistances
  if(character.statistics.hasOwnProperty('DamageResistances'))
    output.DamageResistances = character.statistics.DamageResistances;
  else
    output.DamageResistances = [];
    
  //Damage Immunities
  if(character.statistics.hasOwnProperty('DamageImmunities'))
    output.DamageImmunities = character.statistics.DamageImmunities;
  else
    output.DamageImmunities = [];
    
  //Condition Immunities
  if(character.statistics.hasOwnProperty('ConditionImmunities'))
    output.ConditionImmunities = character.statistics.ConditionImmunities;
  else
    output.ConditionImmunities = [];
    
    
    
  //Senses
  output.Senses = [];
  var sensesArray = character.statistics?.Senses;
  const blindness = getStatisticWithPriority('.blind',character);
  let altsense    = '';
  if(blindness=='1') {
    altsense = 'justblind';
    // checking if one of the senses is blindsight or tremorsense
    let mostpowerfulaltsense = 0;
    for(var sense in sensesArray) {
      if(sense=='blindsight' || sense=='tremorsense') {
        // retrieving the most powerful of the two
        if(parseInt(sensesArray[sense])>mostpowerfulaltsense) {
          altsense = sense;
          mostpowerfulaltsense = sensesArray[sense];
        }
      }
    }
  }
    
  for(const [sense,value] of Object.entries(character.statistics.Senses)) {
    if(sense==='passive Perception') output.Senses.push(`passive Perception ${value}`);
    else {
      let string = `${sense} ${value} ft.`;
      if(sense == altsense) {
        string += ' (blind beyond this radius)';
      }		
      output.Senses.push(string);
    }
  }
    
  if(altsense == 'justblind') {
    output.Senses.unshift('Blind');
  }
    
  //Languages
  output.Languages = [];
  if(character.statistics.hasOwnProperty('Languages')) {
    let canspeak = getStatisticWithPriority('.canspeak',character) || '1';
    if(canspeak==='1') {
      output.Languages = character.statistics.Languages;
    }
    else {
      let lastlanguage = '';
      let string       = '';
      let array        = character.statistics.Languages;
    
      array.forEach(function(language){
        if(string.length) {
          if(lastlanguage) {
            string += `, ${lastlanguage}`;
            lastlanguage = capitalizeFirst(language);
          }
          else {
            lastlanguage = capitalizeFirst(language);
          }
        }
        else string = capitalizeFirst(language);
      });
      //lowercase The if it's the first word of the string (Understands the languages..)
      if(string.split(' ')[0].toLowerCase()==='the')
        string = string.charAt(0).toLowerCase() + string.slice(1);
      if(string) {
        string = `Understands ${string}`;
        if(lastlanguage.length) string += ` and ${lastlanguage}`;
        string += ' but can\'t speak';
      }
      else {
        string = 'Can\'t speak';
      }
      output.Languages.push(string);	
    }
  }
  if(character.statistics.hasOwnProperty('Telepathy'))
    output.Languages.push(`Telepathy ${character.statistics.Telepathy} ft.`);
    
  //Challenge
  output.Challenge = character.statistics.Challenge;
    
  //Traits
  output.Traits = [];
  var array = character.statistics.Traits;
  for(const item in array) {
    let Name = removePeriod(stripHTML(array[item]['Name']).trim());
    let Content = checkPeriod(stripHTML(array[item]['Content']).trim());
    output.Traits.push({'Name':Name,'Content':Content});
  }
    
  //ACTIONS
  output.Actions = [];
  var array = character.statistics.Actions;
  for(const item in array) {
    let Name = removePeriod(stripHTML(array[item]['Name']).trim());
    let Content = checkPeriod(stripHTML(array[item]['Content']).trim());
    output.Actions.push({'Name':Name,'Content':Content});
  }
    
  //SPELLS
  if(find(character.statistics.Spellcasting,'Spells')) {
    let Content = `${character.statistics.Spellcasting.Content}\n\n${stripHTML(character.statistics.Spellcasting.Spells)}`;
    output.Actions.push({'Name':'Spellcasting','Content':Content});
  }
    
  //BONUS ACTIONS
  output.BonusActions = [];
  var array = character.statistics.BonusActions;
  for(const item in array) {
    let Name = removePeriod(stripHTML(array[item]['Name']).trim());
    let Content = checkPeriod(stripHTML(array[item]['Content']).trim());
    output.BonusActions.push({'Name':Name,'Content':Content});
  }
    
  //REACTIONS
  output.Reactions = [];
  var array = character.statistics.Reactions;
  for(const item in array) {
    let Name = removePeriod(stripHTML(array[item]['Name']).trim());
    let Content = checkPeriod(stripHTML(array[item]['Content']).trim());
    output.Reactions.push({'Name':Name,'Content':Content});
  }
    
  //LEGENDARY ACTIONS
  output.LegendaryActions = [];
  var array = character.statistics.LegendaryActions;
  for(const item in array) {
    let Name = removePeriod(stripHTML(array[item]['Name']).trim());
    let Content = checkPeriod(stripHTML(array[item]['Content']).trim());
    output.LegendaryActions.push({'Name':Name,'Content':Content});
  }
  //MYTHIC ACTIONS
  output.MythicActions = [];
    
    
    
  return JSON.stringify(output);
    
}
    
    