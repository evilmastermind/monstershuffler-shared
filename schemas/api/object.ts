
import { z } from 'zod';

export const id = z.number();
export const userid = z.number();
export const game = z.number();
export const name = z.string().min(2);
