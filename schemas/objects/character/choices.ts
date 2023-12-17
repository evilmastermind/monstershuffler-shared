import { z } from 'zod';

export const statType = z.enum([
  'background',
  'spell',
  'trait',
  'race',
  'class',
  'template',
  'type',
  'subtype',
  'language',
  'skill',
  'savingThrow',
  'condition',
  'resistance',
  'immunity',
  'vulnerability',
  'conditionImmunity',
  'armor',
  'weapon',
  'item'
]);

// object schemas
export const statObject = z.object({
  id: z.number().optional(),
  value: z.string(),
  type: statType.optional(),
  availableAt: z.number().optional(),
  availableUnit: z.enum(['level', 'cr']).optional(),
});
export const choiceRandomObject = z.object({
  choice: z.object({
    type: z.literal('random'),
    number: z.number().optional(),
    resultType: z.enum(['object', 'nameId']),
    source: z.enum(['objects', 'languages', 'skills']),
    objectType: z.number().optional(),
    filters: z
      .array(
        z.object({
          keyName: z.string(),
          keyValues: z.array(z.string()),
        }),
      )
      .optional(),
    chosenAlready: z.array(statObject).optional(),
  }),
});
export const choiceListObject = z.object({
  choice: z.object({
    type: z.literal('list'),
    number: z.number(),
    list: z.array(statObject),
    isRepeatable: z.boolean().optional(),
  }),
});
export type Choice = z.infer<typeof statObject>;
export type ChoiceRandomObject = z.infer<typeof choiceRandomObject>;
export type ChoiceListObject = z.infer<typeof choiceListObject>;
