import { createPart } from './statistics';
import { calculateValue } from './values';
import { calculateAttack } from './attacks';
import { ADVERBS, getNthWord, thirdToFirstPerson } from './words';
import type {
  ChosenAction,
  ActionVariant,
  Character,
  DescriptionPart,
} from '@/types';
import { random, toggle } from '@/functions';

export function replaceTags(
  untrimmedString: string,
  character: Character,
  action: ChosenAction | undefined = undefined,
  variant: ActionVariant | undefined = undefined
) {
  const string = untrimmedString.trim().replace(/^\\n|\\n$/g, '');
  const parts: DescriptionPart[] = [];
  const tags = character.tags!;
  const format: DescriptionPart['format'] = [];
  let isListStarted = false;
  let isListItemStarted = false;
  const stringSize = string.length;
  let position = 0;
  let j = 0;
  let startingPoint = 0;
  let word = '';
  let wordSize = 0;
  let newWord = '';

  while (position < stringSize) {
    const i = position;
    position++;
    // ---------------------------------------------------------
    // replacing tags between [ ] like [name]
    // ---------------------------------------------------------
    if (string.charAt(i) === '[') {
      parts.push(createPart(string.substring(startingPoint, i)));
      startingPoint = i;
      j = i + 1;
      while (string.charAt(j) !== ']' && j < stringSize) {
        j++;
      }
      if (j <= i + 1) {
        continue;
      }
      word = string.substring(i + 1, j);
      wordSize = word.length;
      newWord = word;
      // solving random choices
      if (newWord.includes('|')) {
        newWord = calculateRandomName(newWord);
      }
      if (Object.hasOwn(tags, newWord)) {
        // word found between [] is a tag
        const newWordFromTag = tags[newWord] || '';
        parts.push({
          string: newWordFromTag,
          type: 'tag',
          // translationKey: newWord,
        });
      } else if (newWord.substring(0, 6) === 'spell:') {
        parts.push(
          createPart(newWord.replace('spell:', '').trim(), 'spell', [
            'italic',
            'underline',
          ])
        );
      } else {
        // word found between [] is not recognizable
        parts.push(createPart(newWord));
      }
      position = position + (wordSize + 1);
      startingPoint = position;
    } else if (string.charAt(i) === '{') {
      // ---------------------------------------------------------
      // replacing variables between { } that contain expressions,
      // dice rolls and attacks
      // ---------------------------------------------------------
      parts.push(createPart(string.substring(startingPoint, i)));
      startingPoint = i;
      j = i + 1;
      while (string.charAt(j) !== '}' && j < stringSize) {
        j++;
      }
      if (j <= i + 1) {
        continue;
      }
      word = string.substring(i + 1, j);
      // TODO: firstPart is added here for the new syntax, ex: {attack 1d6 bludgeoning}
      const firstPart = word.split(' ')[0];
      wordSize = word.length;
      newWord = '';

      position = position + (wordSize + 1);
      startingPoint = position;

      const value = action?.values?.find((v) => v.name === firstPart);
      if (value) {
        // VALUES
        parts.push(calculateValue(value, character, variant));
        continue;
      }
      const attack = action?.attacks?.find((a) => a.name === firstPart);
      // ATTACKS (which may contain values that need to be calculated as well)
      if (attack) {
        parts.push(
          ...calculateAttack(attack, character, variant?.name, variant?.ability)
        );
        continue;
      }
      // here I should parse the new syntax

      // ---------------------------------------------------------
      // pseudo-markdown for actions
      // ---------------------------------------------------------
    } else if (string.charAt(i) === '\n') {
      parts.push(createPart(string.substring(startingPoint, i)));
      parts.push(createPart('\n'));
      if (isListItemStarted) {
        // list item end
        parts.push(createPart('', 'listItemEnd', format));
        isListItemStarted = false;
      }
      if (string.charAt(i + 1) === '-') {
        if (!isListStarted) {
          // list start
          parts.push(createPart('', 'listStart', format));
          isListStarted = true;
        }
        // list item start
        parts.push(createPart('-', 'listItemStart', format));
        isListItemStarted = true;
        position++;
      } else if (string.charAt(i + 1) === '\n') {
        // paragraph end (double new line)
        parts.push(createPart('\n', 'paragraphEnd', format));
        position++;
      } else {
        if (isListStarted) {
          // list end
          parts.push(createPart('', 'listEnd', format));
          isListStarted = false;
        }
        // next line
        parts.push(createPart('\n', 'nextLine', format));
      }
      startingPoint = position;
    } else if (string.charAt(i) === '*') {
      parts.push(createPart(string.substring(startingPoint, i)));
      if (string.charAt(i + 1) === '*') {
        // bold
        toggle(format, 'font-bold');
        position++;
      } else {
        // italic
        toggle(format, 'italic');
      }
      startingPoint = position;
    } else if (string.charAt(i) === '_') {
      parts.push(createPart(string.substring(startingPoint, i)));
      // italic
      toggle(format, 'italic');
      startingPoint = position;
    }
  }

  if (startingPoint < stringSize) {
    parts.push(createPart(string.substring(startingPoint, stringSize)));
  }

  if (isListItemStarted) {
    parts.push(createPart('', 'listItemEnd', format));
  }
  if (isListStarted) {
    // list end
    parts.push(createPart('', 'listEnd', format));
    isListStarted = false;
  }

  fixVerbsAfterNeutralThey(parts);

  return parts;
}

// ---------------------------------------------------------------------------
// RANDOM TEXT MANAGEMENT
// ---------------------------------------------------------------------------

export function calculateRandomName(name = '') {
  if (!name) return 'Name';
  const possibleNames = name.split('|') || null;
  if (possibleNames?.length <= 1) return name;

  const randomName = random(0, possibleNames.length - 1);
  return possibleNames[randomName];
}

// ---------------------------------------------------------------------------
// MISCELLANEOUS FUNCTIONS
// ---------------------------------------------------------------------------

function fixVerbsAfterNeutralThey(parts: DescriptionPart[]) {
  let i = 0;
  while (i < parts.length) {
    const part = parts[i];

    // checking for a "they" tag
    if (part.type === 'tag') {
      if (['they', 'They'].includes(part.string)) {
        if (i >= parts.length - 1) {
          i++;
          continue;
        }

        let word = getNthWord(parts[i + 1].string, 1, true);
        if (ADVERBS.includes(word)) {
          word = getNthWord(parts[i + 1].string, 2, true);
        }
        // check if the word has "n't" and separate it
        const hasNt = word.endsWith('n\'t');
        const wordWithoutNt = hasNt ? word.slice(0, -3) : word;
        // replace the word with the new one
        parts[i + 1].string = parts[i + 1].string.replace(
          word,
          thirdToFirstPerson(wordWithoutNt) + (hasNt ? 'n\'t' : '')
        );
      }
    }
    i++;
  }
}
