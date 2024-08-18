"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterObject = exports.backgroundObject = exports.templateObject = exports.classvariantObject = exports.classObject = exports.racevariantObject = exports.raceObject = exports.userObject = exports.raceSpecificGeneratorStats = void 0;
const zod_1 = require("zod");
const statistics_1 = require("./statistics");
const variables_1 = require("./variables");
const tags_1 = require("./tags");
const variations_1 = require("./variations");
const alignment_1 = require("./alignment");
const other_1 = require("./other");
exports.raceSpecificGeneratorStats = {
    ageAdult: zod_1.z.number().optional(),
    ageMax: zod_1.z.number().optional(),
    heightMin: zod_1.z.number().optional(),
    heightMax: zod_1.z.number().optional(),
    nameType: zod_1.z.array(zod_1.z.string()).optional(),
    addSurname: zod_1.z.number().optional(),
};
exports.userObject = zod_1.z.object({
    name: zod_1.z.string().optional(),
    ...other_1.pronounsStats,
    ...other_1.sizeStatsObject,
    ...other_1.swarmStats,
    ...other_1.typeAndSubtypesStats,
    ...other_1.armorStats,
    ...other_1.HDStats,
    ...other_1.abilityScoresStats,
    ...other_1.abilityScoresLimit,
    ...other_1.speedsStats,
    ...other_1.skillsStats,
    ...other_1.resistenceImmunitiesStats,
    ...other_1.sensesStats,
    ...other_1.languagesStats,
    ...other_1.actionsStats,
    ...other_1.bonusesStats,
    ...other_1.spellsStats,
    ...other_1.legendaryActionsPerRoundStats,
    ...other_1.publicationStats,
    ...other_1.roleplayStats,
});
exports.raceObject = zod_1.z
    .object({
    id: zod_1.z.number().optional(),
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    ...other_1.generatorStats,
    ...exports.raceSpecificGeneratorStats,
    ...other_1.pronounsStats,
    ...other_1.sizeStatsObject,
    ...other_1.typeAndSubtypesStats,
    ...other_1.swarmStats,
    ...other_1.alignmentModifiersStats,
    ...other_1.armorStats,
    ...other_1.HDStats,
    ...other_1.abilityScoresLimit,
    ...other_1.speedsStats,
    ...other_1.savingThrowsStats,
    ...other_1.skillsStats,
    ...other_1.resistenceImmunitiesStats,
    ...other_1.sensesStats,
    ...other_1.languagesStats,
    ...other_1.actionsStats,
    ...other_1.bonusesStats,
    ...other_1.spellsStats,
    ...other_1.legendaryActionsPerRoundStats,
    ...other_1.publicationStats,
})
    .strict();
exports.racevariantObject = zod_1.z
    .object({
    id: zod_1.z.number().optional(),
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    ...exports.raceSpecificGeneratorStats,
    ...other_1.pronounsStats,
    ...other_1.alignmentModifiersStats,
    ...other_1.armorStats,
    ...other_1.sizeStatsObject,
    ...other_1.subtypesStats,
    ...other_1.abilityScoresLimit,
    ...other_1.speedsStats,
    ...other_1.savingThrowsStats,
    ...other_1.skillsStats,
    ...other_1.resistenceImmunitiesStats,
    ...other_1.sensesStats,
    ...other_1.languagesStats,
    ...other_1.actionsStats,
    ...other_1.bonusesStats,
    ...other_1.spellsStats,
    ...other_1.legendaryActionsPerRoundStats,
    ...other_1.generatorStats,
    ...other_1.publicationStats,
})
    .strict();
exports.classObject = zod_1.z
    .object({
    id: zod_1.z.number().optional(),
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    ...other_1.generatorStats,
    ...other_1.armorStats,
    ...other_1.subtypesStats,
    ...other_1.speedsStats,
    ...other_1.savingThrowsStats,
    ...other_1.skillsStats,
    ...other_1.resistenceImmunitiesStats,
    ...other_1.sensesStats,
    ...other_1.languagesStats,
    ...other_1.actionsStats,
    ...other_1.bonusesStats,
    ...other_1.spellsStats,
    ...other_1.legendaryActionsPerRoundStats,
    ...other_1.publicationStats,
})
    .strict();
exports.classvariantObject = zod_1.z
    .object({
    id: zod_1.z.number().optional(),
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    ...other_1.armorStats,
    ...other_1.subtypesStats,
    ...other_1.speedsStats,
    ...other_1.savingThrowsStats,
    ...other_1.skillsStats,
    ...other_1.resistenceImmunitiesStats,
    ...other_1.sensesStats,
    ...other_1.languagesStats,
    ...other_1.actionsStats,
    ...other_1.bonusesStats,
    ...other_1.spellsStats,
    ...other_1.legendaryActionsPerRoundStats,
    ...other_1.generatorStats,
    ...other_1.publicationStats,
})
    .strict();
exports.templateObject = zod_1.z
    .object({
    id: zod_1.z.number().optional(),
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    ...other_1.pronounsStats,
    ...other_1.sizeStatsObject,
    ...other_1.typeAndSubtypesStats,
    ...other_1.swarmStats,
    ...other_1.alignmentModifiersStats,
    ...other_1.armorStats,
    ...other_1.HDStats,
    ...other_1.speedsStats,
    ...other_1.abilityScoresStats,
    ...other_1.abilityScoresLimit,
    ...other_1.savingThrowsStats,
    ...other_1.skillsStats,
    ...other_1.resistenceImmunitiesStats,
    ...other_1.sensesStats,
    ...other_1.languagesStats,
    ...other_1.actionsStats,
    ...other_1.bonusesStats,
    ...other_1.spellsStats,
    ...other_1.legendaryActionsPerRoundStats,
    ...other_1.publicationStats,
})
    .strict();
exports.backgroundObject = zod_1.z
    .object({
    id: zod_1.z.number().optional(),
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    femaleName: zod_1.z.string(),
    workplace: zod_1.z.string(),
    compatibleAges: zod_1.z.array(other_1.ages),
    ...other_1.armorStats,
    ...other_1.alignmentModifiersStats,
    ...other_1.subtypesStats,
    ...other_1.speedsStats,
    ...other_1.abilityScoresLimit,
    ...other_1.savingThrowsStats,
    ...other_1.skillsStats,
    ...other_1.resistenceImmunitiesStats,
    ...other_1.sensesStats,
    ...other_1.languagesStats,
    ...other_1.actionsStats,
    ...other_1.bonusesStats,
    ...other_1.spellsStats,
    ...other_1.legendaryActionsPerRoundStats,
    ...other_1.generatorStats,
    ...other_1.publicationStats,
})
    .strict();
const CRCalculationObject = zod_1.z
    .union([other_1.CRTwoPointsObject, other_1.CRNPCObject, other_1.CRAutomaticObject])
    .optional();
const proficiencyCalculationObject = zod_1.z.enum(['level', 'CR']).optional();
const conditionsObject = zod_1.z.array(exports.userObject);
exports.characterObject = zod_1.z
    .object({
    id: zod_1.z.number().optional(),
    description: zod_1.z.string().optional(),
    character: zod_1.z
        .object({
        // naming
        ...other_1.namingStats,
        ...other_1.pronounsStats,
        // objects
        race: exports.raceObject.optional(),
        racevariant: exports.racevariantObject.optional(),
        class: exports.classObject.optional(),
        classvariant: exports.classvariantObject.optional(),
        background: exports.backgroundObject.optional(),
        template: exports.templateObject.optional(),
        user: exports.userObject.optional(),
        conditions: conditionsObject.optional(),
        ...other_1.alignmentModifiersStats,
        ...alignment_1.alignmentStats,
        ...other_1.roleplayStats,
        // CR
        CRCalculation: CRCalculationObject,
        proficiencyCalculation: proficiencyCalculationObject,
    })
        .strict(),
    statistics: statistics_1.statisticsObject.optional(),
    variables: variables_1.variablesObject.optional(),
    tags: tags_1.tagsObject.optional(),
    variations: variations_1.variationsObject.optional(),
})
    .strict();
