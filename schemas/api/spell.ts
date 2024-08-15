import { z } from 'zod';
import { spellObject } from '@/schemas/objects/character/spells';
import { id, userid, name, game } from './object';

const level = z.number();
const range = z.string();
const ritual = z.boolean();
const school = z.string().min(2);
const source = z.string();
const className = z.string().min(2);
const duration = z.string().min(2);
const component = z.string().min(2);
const castingTime = z.string().min(2);
const description = z.string().min(2);

export const sGetSpellListBody = z.object({
  game,
  name: name.optional(),
  level: level.optional(),
  range: range.optional(),
  ritual: ritual.optional(),
  school: school.optional(),
  source: source.optional(),
  className: className.optional(),
  duration: duration.optional(),
  component: component.optional(),
  castingTime: castingTime.optional(),
  description: description.optional(),
});

export const sGetSpellListResponse = z.object({
  list: z.array(
    z.object({
      id,
      userid,
      name,
    }),
  ),
});

export const sGetSpellResponse = z.object({
  id,
  userid,
  object: spellObject,
});

export const sPostSpellBody = z.object({
  game,
  name,
  object: spellObject,
});

export const sPutSpellBody = z.object({
  name,
  object: spellObject,
});
