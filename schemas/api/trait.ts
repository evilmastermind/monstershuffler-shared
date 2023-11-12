import { z } from 'zod';

const name = z.string().min(2);
const type = z.string().min(2);
const subtitle = z.number();
const category = z.string();
const feeling = z.number();
const description = z.string();

export const getRandomTrait = z.object({
  type: type.optional(),
  subtitle: subtitle.optional(),
  category: category.optional(),
  feeling: feeling.optional(),
});

export const getRandomTraitResponse = z.object({
  name,
  type,
  subtitle,
  category,
  feeling,
  description,
});

export const getTraitDescriptionResponse = z.object({
  description,
});
