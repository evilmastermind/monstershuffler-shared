import { z } from 'zod';

import { statisticsObject } from './statistics';
import { variablesObject } from './variables';
import { tagsObject } from './tags';
import { variationsObject } from './variations';
import { alignmentStats } from './alignment';
import { 
  namingStats,
  pronounsStats,
  sizeStats,
  swarmStats,
  typeAndSubtypesStats,
  armorStats,
  HDStats,
  abilityScoresStats,
  abilityScoresLimit,
  speedsStats,
  skillsStats,
  resistenceImmunitiesStats,
  sensesStats,
  languagesStats,
  actionsStats,
  bonusesStats,
  spellsStats,
  publicationStats,
  roleplayStats,
  generatorStats,
  alignmentModifiersStats,
  savingThrowsStats,
  ages,
  subtypesStats,
  CRAutomaticObject,
  CRNPCObject,
  CRTwoPointsObject,
} from './other';

export const raceSpecificGeneratorStats = {
  ageAdult: z.number().optional(),
  ageMax: z.number().optional(),
  heightMin: z.number().optional(),
  heightMax: z.number().optional(),
  nameType: z.array(z.string()).optional(),
  addSurname: z.number().optional(),
};

export const userObject = z.object({
  name: z.string().optional(),
  ...pronounsStats,
  ...sizeStats,
  ...swarmStats,
  ...typeAndSubtypesStats,
  ...armorStats,
  ...HDStats,
  ...abilityScoresStats,
  ...abilityScoresLimit,
  ...speedsStats,
  ...skillsStats,
  ...resistenceImmunitiesStats,
  ...sensesStats,
  ...languagesStats,
  ...actionsStats,
  ...bonusesStats,
  ...spellsStats,
  ...publicationStats,
  ...roleplayStats,
});

export const raceObject = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    ...generatorStats,
    ...raceSpecificGeneratorStats,
    ...pronounsStats,
    ...sizeStats,
    ...typeAndSubtypesStats,
    ...swarmStats,
    ...alignmentModifiersStats,
    ...armorStats,
    ...HDStats,
    ...abilityScoresLimit,
    ...speedsStats,
    ...savingThrowsStats,
    ...skillsStats,
    ...resistenceImmunitiesStats,
    ...sensesStats,
    ...languagesStats,
    ...actionsStats,
    ...bonusesStats,
    ...spellsStats,
    ...publicationStats,
  })
  .strict();

export const racevariantObject = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    ...pronounsStats,
    ...alignmentModifiersStats,
    ...armorStats,
    ...subtypesStats,
    ...abilityScoresLimit,
    ...speedsStats,
    ...savingThrowsStats,
    ...skillsStats,
    ...resistenceImmunitiesStats,
    ...sensesStats,
    ...languagesStats,
    ...actionsStats,
    ...bonusesStats,
    ...spellsStats,
    ...generatorStats,
    ...publicationStats,
  })
  .strict();

export const classObject = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    ...generatorStats,
    ...armorStats,
    ...subtypesStats,
    ...speedsStats,
    ...savingThrowsStats,
    ...skillsStats,
    ...resistenceImmunitiesStats,
    ...sensesStats,
    ...languagesStats,
    ...actionsStats,
    ...bonusesStats,
    ...spellsStats,
    ...publicationStats,
  })
  .strict();

export const classvariantObject = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    ...armorStats,
    ...subtypesStats,
    ...speedsStats,
    ...savingThrowsStats,
    ...skillsStats,
    ...resistenceImmunitiesStats,
    ...sensesStats,
    ...languagesStats,
    ...actionsStats,
    ...bonusesStats,
    ...spellsStats,
    ...generatorStats,
    ...publicationStats,
  })
  .strict();

export const templateObject = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    ...pronounsStats,
    ...sizeStats,
    ...typeAndSubtypesStats,
    ...swarmStats,
    ...alignmentModifiersStats,
    ...armorStats,
    ...HDStats,
    ...speedsStats,
    ...abilityScoresStats,
    ...abilityScoresLimit,
    ...savingThrowsStats,
    ...skillsStats,
    ...resistenceImmunitiesStats,
    ...sensesStats,
    ...languagesStats,
    ...actionsStats,
    ...bonusesStats,
    ...spellsStats,
    ...publicationStats,
  })
  .strict();

export const backgroundObject = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    femaleName: z.string(),
    workplace: z.string(),
    compatibleAges: z.array(ages),
    ...armorStats,
    ...alignmentModifiersStats,
    ...subtypesStats,
    ...speedsStats,
    ...abilityScoresLimit,
    ...savingThrowsStats,
    ...skillsStats,
    ...resistenceImmunitiesStats,
    ...sensesStats,
    ...languagesStats,
    ...actionsStats,
    ...bonusesStats,
    ...spellsStats,
    ...generatorStats,
  })
  .strict();

const CRCalculationObject = z
  .union([CRTwoPointsObject, CRNPCObject, CRAutomaticObject])
  .optional();
const proficiencyCalculationObject = z.enum(['level', 'CR']).optional();


// TODO: characterObject is too big that, if I don't define the type myself, TypeScript will raise an error.
// See: https://github.com/colinhacks/zod/issues/1040
export type CharacterObject = z.ZodObject<{
  id: z.ZodOptional<z.ZodNumber>;
  character: z.ZodObject<{
    name: typeof namingStats.name;
    prename: typeof namingStats.prename;
    surname: typeof namingStats.surname;
    generic: typeof namingStats.generic;
    pronouns: typeof pronounsStats.pronouns;
    race: z.ZodOptional<typeof raceObject>;
    racevariant: z.ZodOptional<typeof racevariantObject>;
    class: z.ZodOptional<typeof classObject>;
    classvariant: z.ZodOptional<typeof classvariantObject>;
    background: z.ZodOptional<typeof backgroundObject>;
    template: z.ZodOptional<typeof templateObject>;
    user: z.ZodOptional<typeof userObject>;
    abilityScores: typeof abilityScoresStats.abilityScores;
    alignmentModifiers: typeof alignmentModifiersStats.alignmentModifiers;
    alignmentEthical: typeof alignmentStats.alignmentEthical;
    alignmentMoral: typeof alignmentStats.alignmentMoral;
    skills: typeof skillsStats.skills;
    characterHook: typeof roleplayStats.characterHook;
    trait: typeof roleplayStats.trait;
    feeling: typeof roleplayStats.feeling;
    age: typeof roleplayStats.age;
    height: typeof roleplayStats.height;
    weight: typeof roleplayStats.weight;
    voice: typeof roleplayStats.voice;
    CRCalculation: typeof CRCalculationObject;
    proficiencyCalculation: typeof proficiencyCalculationObject;
  }>;
  statistics: z.ZodOptional<typeof statisticsObject>;
  variables: z.ZodOptional<typeof variablesObject>;
  tags: z.ZodOptional<typeof tagsObject>;
  variations: z.ZodOptional<typeof variationsObject>
}>;

export const characterObject: CharacterObject = z
  .object({
    id: z.number().optional(),
    character: z
      .object({
        // naming
        ...namingStats,
        ...pronounsStats,
        // objects
        race: raceObject.optional(),
        racevariant: racevariantObject.optional(),
        class: classObject.optional(),
        classvariant: classvariantObject.optional(),
        background: backgroundObject.optional(),
        template: templateObject.optional(),
        user: userObject.optional(),
        ...abilityScoresStats,
        ...alignmentModifiersStats,
        ...alignmentStats,
        ...skillsStats,
        ...roleplayStats,
        // CR
        CRCalculation: CRCalculationObject,
        proficiencyCalculation: proficiencyCalculationObject,
      })
      .strict(),
    statistics: statisticsObject.optional(),
    variables: variablesObject.optional(),
    tags: tagsObject.optional(),
    variations: variationsObject.optional(),
  })
  .strict();
