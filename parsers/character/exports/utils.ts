import { DescriptionPart } from '@/types';

export function addMarkdown(descriptionObjects: DescriptionPart[]) {
  let output = '';
  for (const description of descriptionObjects) {
    const descriptionWithMarkdown = description.string;
    if (description.format?.includes('font-bold')) {
      output += `**${descriptionWithMarkdown}**`;
    }
    if (description.format?.includes('italic')) {
      output += `*${descriptionWithMarkdown}*`;
    }
    if (description.format?.includes('underline')) {
      output += `__${descriptionWithMarkdown}__`;
    }
    if (description.format?.includes('line-through')) {
      output += `~~${descriptionWithMarkdown}~~`;
    }
  }
  return output;
}
