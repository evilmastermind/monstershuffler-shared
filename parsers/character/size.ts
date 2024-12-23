import type { Size } from '@/parsers';
import type { Character } from '@/types';
import { sizeStats, parseExpressionNumeric } from '@/parsers';
import { getBonus, getPrioritizedStatistic } from '@/parsers/functions';
import { capitalizeFirst } from '@/functions';

export function calculateSize(character: Character) {
  let size = 0;

  const baseSize = getPrioritizedStatistic<number>(character, 'size') || 3;
  const sizeBonus = getBonus(character, 'size');

  size += sizeBonus;

  const isSwarm = getPrioritizedStatistic<boolean>(character, 'isSwarm');
  if (isSwarm) {
    const swarmSize = parseExpressionNumeric(
      getPrioritizedStatistic<string>(character, 'swarmSize') || '3',
      character
    );
    size += swarmSize;
  } else {
    size += baseSize;
  }
  // normalizing sizes out of bounds
  if (!size) size = 3;
  if (size > 6) size = 6;
  if (size < 1) size = 1;

  // statistics
  character.statistics!.size = {
    name: sizeStats[size.toString() as Size].name,
    string: sizeStats[size.toString() as Size].name,
    number: size,
  };
  if (isSwarm) {
    character.statistics!.sizeSingleEntityOfSwarm = {
      name: sizeStats[baseSize.toString() as Size].name,
      string: sizeStats[baseSize.toString() as Size].name,
      number: baseSize,
    };
  }
  // tags
  const sizegreater = size > 5 ? 6 : size + 1;
  const sizesmaller = size < 2 ? 1 : size - 1;
  const sizetwogreater = size > 5 ? 6 : size + 2;
  const sizetwosmaller = size < 3 ? 1 : size - 2;
  character.tags!.size = capitalizeFirst(
    sizeStats[size.toString() as Size].name
  );
  character.tags!.sizegreater = capitalizeFirst(
    sizeStats[sizegreater.toString() as Size].name
  );
  character.tags!.sizesmaller = capitalizeFirst(
    sizeStats[sizesmaller.toString() as Size].name
  );
  character.tags!.sizetwogreater = capitalizeFirst(
    sizeStats[sizetwogreater.toString() as Size].name
  );
  character.tags!.sizetwosmaller = capitalizeFirst(
    sizeStats[sizetwosmaller.toString() as Size].name
  );
  // variables
  character.variables!.SIZE = size;
  character.variables!.HD = sizeStats[size.toString() as Size].hitDice;
}
