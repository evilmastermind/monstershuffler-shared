import { z } from 'zod';

export const weaponObject = z.object({
  name: z.string().optional(),
  cost: z.string().optional(),
  weight: z.string().optional(),
  damageType: z.string().optional(),
  special: z.string().optional(),
  dice: z.string().optional(),
  sides: z.string().optional(),
  diceV: z.string().optional(),
  sidesV: z.string().optional(),
  range: z.string().optional(),
  rangeMax: z.string().optional(),
  reach: z.string().optional(),
  targets: z.string().optional(),
  properties: z.array(z.string()).optional(),
});
