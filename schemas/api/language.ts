import { z } from 'zod';

const id = z.number();
const userid = z.number();
const name = z.string().min(2);
const script = z.string().min(2);

export const sPostLanguageBody = z.object({
  name,
  script,
});

export const sPutLanguageBody = z.object({
  name: name.optional(),
  script: script.optional(),
});

export const sGetLanguageResponse = z.object({
  id,
  userid,
  name,
  script,
});

export const sGetLanguageListResponse = z.object({
  list: z.array(
    z.object({
      id,
      userid,
      name,
      script,
    })
  ),
});
