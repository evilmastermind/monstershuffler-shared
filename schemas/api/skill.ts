import { z } from 'zod';
import { id, game, name } from './object';
const skill = z.object({
  id,
  game,
  name,
});

export const getSkillListResponse = z.object({
  list: z.array(skill),
});

export const getSkillResponse = skill;
