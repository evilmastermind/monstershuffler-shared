
import { z } from 'zod';

export const id = z.number();
export const userid = z.number();
export const game = z.number();
export const name = z.string().min(2);

export const objectList = z.array(
  z.object({
    id: z.number(),
    userid,
    name,
  })
);

export const objectWithVariantsList = z.array(
  z.object({
    id: z.number(),
    userid,
    name,
    other_objects: z.array(
      z.object({
        id: z.number(),
        name,
        userid,
      })
    ),
  })
);
