import { getStatArrayFromObjects, getCurrentStatLimit } from '../functions';
import type { Character, ChosenAction } from '@/types';
import { capitalizeFirst } from '@/functions';
import { calculateRandomName } from '@/parsers';

export function createTags(character: Character) {
  const c = character.character;
  const t = character.tags;
  const s = character.statistics;

  if (!t || !s) {
    return;
  }

  // TODO: translate the article. It's possible that some languages will have different ways to handle this.
  t.name = c?.generic
    ? `the ${c.name.toLowerCase() || 'the name'}`
    : c?.name || 'Name';
  t.Name = capitalizeFirst(t.name);
  t.fullname = c?.generic ? `the ${s.fullName.toLowerCase()}` : s.fullName;
  t.Fullname = capitalizeFirst(t.fullname);

  const pronouns = character.statistics?.pronouns || 'thing';

  switch (pronouns) {
  case 'male':
    t.he = 'he';
    t.she = 'he';
    t.his = 'his';
    t.her = 'his';
    t.him = 'him';
    t.hers = 'his';
    t.He = 'He';
    t.His = 'His';
    t.Him = 'Him';
    t.Hers = 'His';
    t.they = 'he';
    t.their = 'his';
    t.them = 'him';
    t.theirs = 'his';
    t.They = 'He';
    t.Their = 'His';
    t.Them = 'Him';
    t.Theirs = 'His';
    t.it = 'he';
    t.its = 'his';
    t.It = 'He';
    t.Its = 'His';
    break;
  case 'female':
    t.he = 'she';
    t.she = 'she';
    t.his = 'her';
    t.her = 'her';
    t.him = 'her';
    t.hers = 'hers';
    t.He = 'She';
    t.His = 'Her';
    t.Him = 'Her';
    t.Hers = 'Hers';
    t.they = 'she';
    t.their = 'her';
    t.them = 'her';
    t.theirs = 'hers';
    t.They = 'She';
    t.Their = 'Her';
    t.Them = 'Her';
    t.Theirs = 'Hers';
    t.it = 'she';
    t.its = 'her';
    t.It = 'She';
    t.Its = 'Her';
    break;
  case 'neutral':
    t.he = 'they';
    t.she = 'they';
    t.his = 'their';
    t.her = 'their';
    t.him = 'them';
    t.hers = 'theirs';
    t.He = 'They';
    t.His = 'Their';
    t.Him = 'Them';
    t.Hers = 'Theirs';
    t.they = 'they';
    t.their = 'their';
    t.them = 'them';
    t.theirs = 'theirs';
    t.They = 'They';
    t.Their = 'Their';
    t.Them = 'Them';
    t.Theirs = 'Theirs';
    t.it = 'they';
    t.its = 'their';
    t.It = 'They';
    t.Its = 'Their';
    break;
  default:
    t.he = 'it';
    t.she = 'it';
    t.his = 'its';
    t.her = 'its';
    t.him = 'it';
    t.hers = 'theirs';
    t.He = 'It';
    t.His = 'Its';
    t.Him = 'It';
    t.Hers = 'Theirs';
    t.they = 'it';
    t.their = 'its';
    t.them = 'it';
    t.theirs = 'theirs';
    t.They = 'It';
    t.Their = 'Its';
    t.Them = 'It';
    t.Theirs = 'Theirs';
    t.it = 'it';
    t.its = 'its';
    t.It = 'It';
    t.Its = 'Its';
    break;
  }

  // race
  t.race = c?.racevariant?.name || c?.race?.name || 'Race';
  t.profession = c?.class?.name || c?.background?.name || 'unemployed';

  // action t
  const actions = getStatArrayFromObjects<ChosenAction[]>(
    character,
    'actions'
  ).flat();

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const limit = getCurrentStatLimit(character);

    if (
      !action?.variants?.length ||
      (action?.availableUntil && limit > action?.availableUntil)
    ) {
      continue;
    }

    let variant = action.variants[0];
    let variantName = (variant.name = calculateRandomName(variant.name));

    // resolving random names for actions
    for (const v of action.variants) {
      v.name = calculateRandomName(v.name);
      const availableAt = v.availableAt ?? -3;
      const currentAvailableAt = variant ? variant.availableAt ?? -3 : -3;
      if (availableAt <= limit && availableAt >= currentAvailableAt) {
        variant = v;
        variantName = v.name;
      }
    }

    // actions that use the name of the attack (weapon)
    if ('attacks' in action) {
      action?.attacks?.forEach((attack) => {
        if (
          attack.replaceName &&
          attack.attributes &&
          'name' in attack.attributes &&
          attack.attributes.name
        ) {
          variantName = attack.attributes.name;
        }
      });
    }

    t[action.tag] = variantName;
  }
}
