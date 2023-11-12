"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatorStats = exports.namingStats = exports.pronounsStats = exports.sizeStats = exports.HDStats = exports.armorStats = exports.typeAndSubtypesStats = exports.subtypesStats = exports.typeStats = exports.abilityScoresLimit = exports.abilityScoresStats = exports.speedsStats = exports.savingThrowsStats = exports.skillsStats = exports.spellsStats = exports.bonusesStats = exports.actionsStats = exports.sensesStats = exports.languagesStats = exports.publicationStats = exports.alignmentModifiersStats = exports.roleplayStats = exports.WeightObject = exports.AgeObject = exports.ages = exports.resistenceImmunitiesStats = exports.swarmStats = exports.pronounsObject = exports.CRAutomaticObject = exports.CRNPCObject = exports.CRTwoPointsObject = exports.imageObject = exports.bonusesObject = exports.sensesObject = exports.speedsObject = void 0;
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
    base: zod_1.z.string().optional(),
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
const bonusObject = zod_1.z.object({
    name: zod_1.z.string().optional(),
    value: zod_1.z.string(),
});
exports.bonusesObject = zod_1.z.object({
    HPBonus: bonusObject.optional(),
    ACBonus: bonusObject.optional(),
    sizeBonus: bonusObject.optional(),
    speedBaseBonus: bonusObject.optional(),
    speedBurrowBonus: bonusObject.optional(),
    speedClimbBonus: bonusObject.optional(),
    speedFlyBonus: bonusObject.optional(),
    speedHoverBonus: bonusObject.optional(),
    speedSwimBonus: bonusObject.optional(),
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
exports.ages = zod_1.z.enum(['child', 'adolescent', 'young adult', 'adult', 'middle-aged', 'elderly', 'venerable']);
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
