import { z } from 'zod';
import { voiceObject } from './roleplay';
import { armorObject } from './armor';
import { statObject } from './choices';
import { choiceRandomObject, choiceListObject } from './choices';
import { actionObject } from './actions';
import { spellsObject } from './spells';
import { abilityScoresObject } from './abilities';
import { alignmentModifiers } from './alignment';

export const speedsObject = z.object({
  walk: z.string().optional(),
  burrow: z.string().optional(),
  climb: z.string().optional(),
  fly: z.string().optional(),
  hover: z.string().optional(),
  swim: z.string().optional(),
});

export const sensesObject = z.object({
  blindsight: z.string().optional(),
  darkvision: z.string().optional(),
  tremorsense: z.string().optional(),
  truesight: z.string().optional(),
});

export const bonusObject = z.object({
  name: z.string().optional(),
  value: z.string(),
});

export const legendaryActionsPerRoundStats = {
  legendaryActionsPerRound: z.number().optional(),
};

export const bonusesObject = z.object({
  HPBonus: bonusObject.optional(),
  ACBonus: bonusObject.optional(),
  sizeBonus: bonusObject.optional(),
  walkBonus: bonusObject.optional(),
  burrowBonus: bonusObject.optional(),
  climbBonus: bonusObject.optional(),
  flyBonus: bonusObject.optional(),
  hoverBonus: bonusObject.optional(),
  swimBonus: bonusObject.optional(),
  STRBonus: bonusObject.optional(),
  DEXBonus: bonusObject.optional(),
  CONBonus: bonusObject.optional(),
  INTBonus: bonusObject.optional(),
  WISBonus: bonusObject.optional(),
  CHABonus: bonusObject.optional(),
  STRSaveBonus: bonusObject.optional(),
  DEXSaveBonus: bonusObject.optional(),
  CONSaveBonus: bonusObject.optional(),
  INTSaveBonus: bonusObject.optional(),
  WISSaveBonus: bonusObject.optional(),
  CHASaveBonus: bonusObject.optional(),
  AthleticsBonus: bonusObject.optional(),
  AcrobaticsBonus: bonusObject.optional(),
  SleightOfHandBonus: bonusObject.optional(),
  StealthBonus: bonusObject.optional(),
  ArcanaBonus: bonusObject.optional(),
  HistoryBonus: bonusObject.optional(),
  InvestigationBonus: bonusObject.optional(),
  NatureBonus: bonusObject.optional(),
  ReligionBonus: bonusObject.optional(),
  AnimalHandlingBonus: bonusObject.optional(),
  InsightBonus: bonusObject.optional(),
  MedicineBonus: bonusObject.optional(),
  PerceptionBonus: bonusObject.optional(),
  SurvivalBonus: bonusObject.optional(),
  DeceptionBonus: bonusObject.optional(),
  IntimidationBonus: bonusObject.optional(),
  PerformanceBonus: bonusObject.optional(),
  PersuasionBonus: bonusObject.optional(),
  blindsightBonus: bonusObject.optional(),
  darkvisionBonus: bonusObject.optional(),
  tremorsenseBonus: bonusObject.optional(),
  truesightBonus: bonusObject.optional(),
  rangedAttackBonus: bonusObject.optional(),
  rangedDamageBonus: bonusObject.optional(),
  meleeAttackBonus: bonusObject.optional(),
  meleeDamageBonus: bonusObject.optional(),
  spellAttackBonus: bonusObject.optional(),
  spellDamageBonus: bonusObject.optional(),
  weaponAttackBonus: bonusObject.optional(),
  weaponDamageBonus: bonusObject.optional(),
});

export const imageObject = z.object({
  imgdir: z.string(),
  lastedited: z.number(),
});

export const CRTwoPointsObject = z.object({
  x1: z.string(),
  x2: z.string(),
  y1: z.string(),
  y2: z.string(),
  name: z.literal('twopoints'),
});
export const CRNPCObject = z.object({
  name: z.literal('npcstandard'),
});
export const CRAutomaticObject = z.object({
  name: z.literal('automatic'),
  CR: z.number(),
});

export const pronounsObject = z.enum(['male', 'female', 'neutral', 'thing']);

export const swarmStats = {
  isSwarm: z.boolean().optional(),
  swarmSize: z.string().optional(),
};
export const resistenceImmunitiesStats = {
  resistances: z.array(statObject).optional(),
  immunities: z.array(statObject).optional(),
  vulnerabilities: z.array(statObject).optional(),
  conditionImmunities: z.array(statObject).optional(),
};
export const ages = z.enum([
  'child',
  'adolescent',
  'young adult',
  'adult',
  'middle-aged',
  'elderly',
  'venerable',
]);
export const AgeObject = z.object({
  number: z.number(),
  string: ages,
});
export const WeightObject = z.enum(['skinny', 'average', 'chubby', 'obese']);
export const roleplayStats = {
  characterHook: z.string().optional(),
  trait: z.string().optional(),
  feeling: z.string().optional(),
  age: AgeObject.optional(),
  height: z.number().optional(),
  weight: WeightObject.optional(),
  voice: voiceObject.optional(),
};
export const alignmentModifiersStats = {
  alignmentModifiers: alignmentModifiers.optional(),
};
export const publicationStats = {
  image: imageObject.optional(),
  imageBackground: z.string().optional(),
  searchTags: z.array(z.string()).optional(),
  environments: z.array(z.string()).optional(),
  backstory: z.object({}).passthrough().optional(),
};
export const languagesStats = {
  canSpeak: z.boolean().optional(),
  telepathy: z.string().optional(),
  languages: z
    .union([z.array(statObject), choiceRandomObject, choiceListObject])
    .optional(),
};
export const sensesStats = {
  senses: sensesObject.optional(),
  isBlind: z.boolean().optional(),
};
export const actionsStats = {
  actions: z.array(actionObject).optional(),
};
export const bonusesStats = {
  bonuses: bonusesObject.optional(),
};
export const spellsStats = {
  spells: spellsObject.optional(),
};
export const skillsStats = {
  skills: z
    .union([z.array(statObject), choiceRandomObject, choiceListObject])
    .optional(),
};
export const savingThrowsStats = {
  savingThrows: z.array(statObject).optional(),
};
export const speedsStats = {
  speeds: speedsObject.optional(),
};
export const abilityScoresStats = {
  abilityScores: abilityScoresObject.optional(),
};
export const abilityScoresLimit = {
  abilityScoresLimit: z.number().optional(),
};
export const typeStats = {
  type: z.string().optional(),
};
export const subtypesStats = {
  subtypes: z.array(statObject).optional(),
};
export const typeAndSubtypesStats = {
  ...typeStats,
  ...subtypesStats,
};

export const armorStats = {
  armor: z.union([armorObject, choiceRandomObject]).optional(),
};

export const HDStats = {
  HD: z.number().optional(),
};
export const sizeStats = {
  size: z.number().optional(),
};
export const pronounsStats = {
  pronouns: pronounsObject.optional(),
};

export const namingStats = {
  name: z.string(),
  prename: z.string().optional(),
  surname: z.string().optional(),
  generic: z.boolean().optional(),
};

export const generatorStats = {
  enableGenerator: z.boolean().optional(),
};
