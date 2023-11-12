import { z } from 'zod';

const id = z.number();
const userid = z.number();
const name = z.string().min(2);
const script = z.string().min(2);

export const postLanguage = z.object({
  name,
  script,
});

export const getLanguageResponse = z.object({
  id,
  userid,
  name,
  script,
});

export const putLanguage = z.object({
  name,
  script,
});

export const getLanguageListResponse = z.object({
  list: z.array(
    z.object({
      id,
      userid,
      name,
      script,
    })
  ),
});
