import type { Character, CharacterHook, DescriptionPart } from '@/types';
import { createPart, replaceTags, parseDescriptionChoices } from '@/parsers';

export function calculateCharacterHook(character: Character) {
  const c = character.character;
  const hooks = c?.user?.characterHooks || c?.characterHooks;
  if (!hooks?.length) {
    return;
  }
  const hook = getPrimaryCharacterHook(hooks);
  if (!hook) {
    return;
  }
  const hookSummary = parseDescriptionChoices(hook.summary);
  const hookParts = replaceTags(hookSummary, character);

  const characterHook: DescriptionPart[] = [{ string: 'The' }];

  if (c?.class?.name) {
    characterHook.push(createPart(' '));
    characterHook.push(createPart(c.class.name, 'class', [], c?.class?.id));
  }

  if (c?.background?.name) {
    const pronouns = character.statistics!.pronouns!;
    const backgroundName =
      pronouns === 'female' ? c.background.femaleName : c.background.name;
    characterHook.push(createPart(' '));
    characterHook.push(
      createPart(backgroundName, 'background', [], c.background?.id)
    );
  }

  if (characterHook.length === 1) {
    characterHook.push(createPart(' '));
    characterHook.push(
      createPart(
        c?.racevariant?.name || c?.race?.name || 'person',
        'race',
        [],
        c?.racevariant?.id || c?.race?.id
      )
    );
  }

  characterHook.push(createPart(' '));
  if (hook) {
    characterHook.push(...hookParts);
  }
  character.statistics!.characterHook = characterHook;
}

function getPrimaryCharacterHook(hooks: CharacterHook[]) {
  if (!hooks.length) {
    return;
  }
  let primaryHook = hooks.find((hook) => hook.isPrimaryCharacterHook);

  if (!primaryHook) {
    const randomIndex = Math.floor(Math.random() * hooks.length);
    hooks[randomIndex].isPrimaryCharacterHook = true;
    primaryHook = hooks[randomIndex];
  }

  return primaryHook;
}
