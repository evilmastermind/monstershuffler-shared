import { z } from 'zod';
import { statisticsObject } from './statistics';
import { variablesObject } from './variables';
import { tagsObject } from './tags';
import { variationsObject } from './variations';
import { alignmentStats } from './alignment';
import { namingStats, pronounsStats, abilityScoresStats, skillsStats, roleplayStats, alignmentModifiersStats } from './other';
export declare const raceSpecificGeneratorStats: {
    ageAdult: z.ZodOptional<z.ZodNumber>;
    ageMax: z.ZodOptional<z.ZodNumber>;
    heightMin: z.ZodOptional<z.ZodNumber>;
    heightMax: z.ZodOptional<z.ZodNumber>;
    nameType: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    addSurname: z.ZodOptional<z.ZodNumber>;
};
export declare const userObject: z.ZodObject<any, "strip", z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}>;
export declare const raceObject: z.ZodObject<any, "strict", z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}>;
export declare const racevariantObject: z.ZodObject<any, "strict", z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}>;
export declare const classObject: z.ZodObject<any, "strict", z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}>;
export declare const classvariantObject: z.ZodObject<any, "strict", z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}>;
export declare const templateObject: z.ZodObject<any, "strict", z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}>;
export declare const backgroundObject: z.ZodObject<any, "strict", z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}>;
declare const CRCalculationObject: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
    x1: z.ZodString;
    x2: z.ZodString;
    y1: z.ZodString;
    y2: z.ZodString;
    name: z.ZodLiteral<"twopoints">;
}, "strip", z.ZodTypeAny, {
    name: "twopoints";
    x1: string;
    x2: string;
    y1: string;
    y2: string;
}, {
    name: "twopoints";
    x1: string;
    x2: string;
    y1: string;
    y2: string;
}>, z.ZodObject<{
    name: z.ZodLiteral<"npcstandard">;
}, "strip", z.ZodTypeAny, {
    name: "npcstandard";
}, {
    name: "npcstandard";
}>, z.ZodObject<{
    name: z.ZodLiteral<"automatic">;
    CR: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: "automatic";
    CR: number;
}, {
    name: "automatic";
    CR: number;
}>]>>;
declare const proficiencyCalculationObject: z.ZodOptional<z.ZodEnum<["level", "CR"]>>;
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
    variations: z.ZodOptional<typeof variationsObject>;
}>;
export declare const characterObject: CharacterObject;
export {};
//# sourceMappingURL=objects.d.ts.map