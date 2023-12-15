"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatorStats = exports.namingStats = exports.pronounsStats = exports.sizeStats = exports.HDStats = exports.armorStats = exports.typeAndSubtypesStats = exports.subtypesStats = exports.typeStats = exports.abilityScoresLimit = exports.abilityScoresStats = exports.speedsStats = exports.savingThrowsStats = exports.skillsStats = exports.spellsStats = exports.bonusesStats = exports.actionsStats = exports.sensesStats = exports.languagesStats = exports.publicationStats = exports.alignmentModifiersStats = exports.roleplayStats = exports.WeightObject = exports.AgeObject = exports.ages = exports.resistenceImmunitiesStats = exports.swarmStats = exports.pronounsObject = exports.CRAutomaticObject = exports.CRNPCObject = exports.CRTwoPointsObject = exports.imageObject = exports.bonusesObject = exports.legendaryActionsPerTurnStats = exports.bonusObject = exports.sensesObject = exports.speedsObject = void 0;
const zod_1 = require("zod");
const roleplay_1 = require("./roleplay");
const armor_1 = require("./armor");
const choices_1 = require("./choices");
const choices_2 = require("./choices");
const actions_1 = require("./actions");
const spells_1 = require("./spells");
const abilities_1 = require("./abilities");
const alignment_1 = require("./alignment");
exports.speedsObject = zod_1.z.object({
    walk: zod_1.z.string().optional(),
    burrow: zod_1.z.string().optional(),
    climb: zod_1.z.string().optional(),
    fly: zod_1.z.string().optional(),
    hover: zod_1.z.string().optional(),
    swim: zod_1.z.string().optional(),
});
exports.sensesObject = zod_1.z.object({
    blindsight: zod_1.z.string().optional(),
    darkvision: zod_1.z.string().optional(),
    tremorsense: zod_1.z.string().optional(),
    truesight: zod_1.z.string().optional(),
});
exports.bonusObject = zod_1.z.object({
    name: zod_1.z.string().optional(),
    value: zod_1.z.string(),
});
exports.legendaryActionsPerTurnStats = {
    legendaryActionsPerTurn: zod_1.z.number().optional(),
};
exports.bonusesObject = zod_1.z.object({
    HPBonus: exports.bonusObject.optional(),
    ACBonus: exports.bonusObject.optional(),
    sizeBonus: exports.bonusObject.optional(),
    walkBonus: exports.bonusObject.optional(),
    burrowBonus: exports.bonusObject.optional(),
    climbBonus: exports.bonusObject.optional(),
    flyBonus: exports.bonusObject.optional(),
    hoverBonus: exports.bonusObject.optional(),
    swimBonus: exports.bonusObject.optional(),
    STRBonus: exports.bonusObject.optional(),
    DEXBonus: exports.bonusObject.optional(),
    CONBonus: exports.bonusObject.optional(),
    INTBonus: exports.bonusObject.optional(),
    WISBonus: exports.bonusObject.optional(),
    CHABonus: exports.bonusObject.optional(),
    STRSaveBonus: exports.bonusObject.optional(),
    DEXSaveBonus: exports.bonusObject.optional(),
    CONSaveBonus: exports.bonusObject.optional(),
    INTSaveBonus: exports.bonusObject.optional(),
    WISSaveBonus: exports.bonusObject.optional(),
    CHASaveBonus: exports.bonusObject.optional(),
    AthleticsBonus: exports.bonusObject.optional(),
    AcrobaticsBonus: exports.bonusObject.optional(),
    SleightOfHandBonus: exports.bonusObject.optional(),
    StealthBonus: exports.bonusObject.optional(),
    ArcanaBonus: exports.bonusObject.optional(),
    HistoryBonus: exports.bonusObject.optional(),
    InvestigationBonus: exports.bonusObject.optional(),
    NatureBonus: exports.bonusObject.optional(),
    ReligionBonus: exports.bonusObject.optional(),
    AnimalHandlingBonus: exports.bonusObject.optional(),
    InsightBonus: exports.bonusObject.optional(),
    MedicineBonus: exports.bonusObject.optional(),
    PerceptionBonus: exports.bonusObject.optional(),
    SurvivalBonus: exports.bonusObject.optional(),
    DeceptionBonus: exports.bonusObject.optional(),
    IntimidationBonus: exports.bonusObject.optional(),
    PerformanceBonus: exports.bonusObject.optional(),
    PersuasionBonus: exports.bonusObject.optional(),
    blindsightBonus: exports.bonusObject.optional(),
    darkvisionBonus: exports.bonusObject.optional(),
    tremorsenseBonus: exports.bonusObject.optional(),
    truesightBonus: exports.bonusObject.optional(),
    rangedAttackBonus: exports.bonusObject.optional(),
    rangedDamageBonus: exports.bonusObject.optional(),
    meleeAttackBonus: exports.bonusObject.optional(),
    meleeDamageBonus: exports.bonusObject.optional(),
    spellAttackBonus: exports.bonusObject.optional(),
    spellDamageBonus: exports.bonusObject.optional(),
    weaponAttackBonus: exports.bonusObject.optional(),
    weaponDamageBonus: exports.bonusObject.optional(),
});
exports.imageObject = zod_1.z.object({
    imgdir: zod_1.z.string(),
    lastedited: zod_1.z.number(),
});
exports.CRTwoPointsObject = zod_1.z.object({
    x1: zod_1.z.string(),
    x2: zod_1.z.string(),
    y1: zod_1.z.string(),
    y2: zod_1.z.string(),
    name: zod_1.z.literal('twopoints'),
});
exports.CRNPCObject = zod_1.z.object({
    name: zod_1.z.literal('npcstandard'),
});
exports.CRAutomaticObject = zod_1.z.object({
    name: zod_1.z.literal('automatic'),
    CR: zod_1.z.number(),
});
exports.pronounsObject = zod_1.z.enum(['male', 'female', 'neutral', 'thing']);
exports.swarmStats = {
    isSwarm: zod_1.z.boolean().optional(),
    swarmSize: zod_1.z.string().optional(),
};
exports.resistenceImmunitiesStats = {
    resistances: zod_1.z.array(choices_1.statObject).optional(),
    immunities: zod_1.z.array(choices_1.statObject).optional(),
    vulnerabilities: zod_1.z.array(choices_1.statObject).optional(),
    conditionImmunities: zod_1.z.array(choices_1.statObject).optional(),
};
exports.ages = zod_1.z.enum([
    'child',
    'adolescent',
    'young adult',
    'adult',
    'middle-aged',
    'elderly',
    'venerable',
]);
exports.AgeObject = zod_1.z.object({
    number: zod_1.z.number(),
    string: exports.ages,
});
exports.WeightObject = zod_1.z.enum(['skinny', 'average', 'chubby', 'obese']);
exports.roleplayStats = {
    characterHook: zod_1.z.string().optional(),
    trait: zod_1.z.string().optional(),
    feeling: zod_1.z.string().optional(),
    age: exports.AgeObject.optional(),
    height: zod_1.z.number().optional(),
    weight: exports.WeightObject.optional(),
    voice: roleplay_1.voiceObject.optional(),
};
exports.alignmentModifiersStats = {
    alignmentModifiers: alignment_1.alignmentModifiers.optional(),
};
exports.publicationStats = {
    image: exports.imageObject.optional(),
    imageBackground: zod_1.z.string().optional(),
    searchTags: zod_1.z.array(zod_1.z.string()).optional(),
    environments: zod_1.z.array(zod_1.z.string()).optional(),
    backstory: zod_1.z.object({}).passthrough().optional(),
};
exports.languagesStats = {
    canSpeak: zod_1.z.boolean().optional(),
    telepathy: zod_1.z.string().optional(),
    languages: zod_1.z
        .union([zod_1.z.array(choices_1.statObject), choices_2.choiceRandomObject, choices_2.choiceListObject])
        .optional(),
};
exports.sensesStats = {
    senses: exports.sensesObject.optional(),
    isBlind: zod_1.z.boolean().optional(),
};
exports.actionsStats = {
    actions: zod_1.z.array(actions_1.actionObject).optional(),
};
exports.bonusesStats = {
    bonuses: exports.bonusesObject.optional(),
};
exports.spellsStats = {
    spells: spells_1.spellsObject.optional(),
};
exports.skillsStats = {
    skills: zod_1.z
        .union([zod_1.z.array(choices_1.statObject), choices_2.choiceRandomObject, choices_2.choiceListObject])
        .optional(),
};
exports.savingThrowsStats = {
    savingThrows: zod_1.z.array(choices_1.statObject).optional(),
};
exports.speedsStats = {
    speeds: exports.speedsObject.optional(),
};
exports.abilityScoresStats = {
    abilityScores: abilities_1.abilityScoresObject.optional(),
};
exports.abilityScoresLimit = {
    abilityScoresLimit: zod_1.z.number().optional(),
};
exports.typeStats = {
    type: zod_1.z.string().optional(),
};
exports.subtypesStats = {
    subtypes: zod_1.z.array(choices_1.statObject).optional(),
};
exports.typeAndSubtypesStats = {
    ...exports.typeStats,
    ...exports.subtypesStats,
};
exports.armorStats = {
    armor: zod_1.z.union([armor_1.armorObject, choices_2.choiceRandomObject]).optional(),
};
exports.HDStats = {
    HD: zod_1.z.number().optional(),
};
exports.sizeStats = {
    size: zod_1.z.number().optional(),
};
exports.pronounsStats = {
    pronouns: exports.pronounsObject.optional(),
};
exports.namingStats = {
    name: zod_1.z.string(),
    prename: zod_1.z.string().optional(),
    surname: zod_1.z.string().optional(),
    generic: zod_1.z.boolean().optional(),
};
exports.generatorStats = {
    enableGenerator: zod_1.z.boolean().optional(),
};
