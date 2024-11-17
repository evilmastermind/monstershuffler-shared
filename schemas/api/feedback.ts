import { z } from 'zod';



export const sQuestion = z.object({
  question: z.string(),
  type: z.enum(['open-ended','poll', 'boolean', 'rating']),
  options: z.array(z.string()).optional(),
});

export const sAnswer = z.object({
  answer: z.string().optional(),
  options: z.array(z.number()).optional(),
  data: z.any().optional(),
  rating: z.number().optional(),
  boolean: z.boolean().optional(),
});

export const sGetRandomQuestionBody = z.object({
  topic: z.string().optional(),
  dateFrom: z.string().optional(),
});

export const sGetRandomQuestionResponse = z.object({
  id: z.string().uuid(),
  topic: z.string(),
  question: sQuestion,
  datecreated: z.string(),
});

export const sPostAnswerBody = z.object({
  questionid: z.string().uuid(),
  answer: sAnswer,
  userid: z.number().optional(),
  sessionid: z.string().optional(),
});
