import { z } from 'zod';
export declare const speedsObject: z.ZodObject<{
    walk: z.ZodOptional<z.ZodString>;
    burrow: z.ZodOptional<z.ZodString>;
    climb: z.ZodOptional<z.ZodString>;
    fly: z.ZodOptional<z.ZodString>;
    hover: z.ZodOptional<z.ZodString>;
    swim: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    walk?: string | undefined;
    burrow?: string | undefined;
    climb?: string | undefined;
    fly?: string | undefined;
    hover?: string | undefined;
    swim?: string | undefined;
}, {
    walk?: string | undefined;
    burrow?: string | undefined;
    climb?: string | undefined;
    fly?: string | undefined;
    hover?: string | undefined;
    swim?: string | undefined;
}>;
export declare const sensesObject: z.ZodObject<{
    blindsight: z.ZodOptional<z.ZodString>;
    darkvision: z.ZodOptional<z.ZodString>;
    tremorsense: z.ZodOptional<z.ZodString>;
    truesight: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    blindsight?: string | undefined;
    darkvision?: string | undefined;
    tremorsense?: string | undefined;
    truesight?: string | undefined;
}, {
    blindsight?: string | undefined;
    darkvision?: string | undefined;
    tremorsense?: string | undefined;
    truesight?: string | undefined;
}>;
export declare const bonusObject: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    name?: string | undefined;
}, {
    value: string;
    name?: string | undefined;
}>;
export declare const legendaryActionsPerRoundStats: {
    legendaryActionsMax: z.ZodOptional<z.ZodString>;
};
export declare const bonusesObject: z.ZodObject<{
    HPBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    ACBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    sizeBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    walkBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    burrowBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    climbBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    flyBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    hoverBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    swimBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    STRBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    DEXBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    CONBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    INTBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    WISBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    CHABonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    STRSaveBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    DEXSaveBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    CONSaveBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    INTSaveBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    WISSaveBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    CHASaveBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    AthleticsBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    AcrobaticsBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    SleightOfHandBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    StealthBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    ArcanaBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    HistoryBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    InvestigationBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    NatureBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    ReligionBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    AnimalHandlingBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    InsightBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    MedicineBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    PerceptionBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    SurvivalBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    DeceptionBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    IntimidationBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    PerformanceBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    PersuasionBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    blindsightBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    darkvisionBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    tremorsenseBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    truesightBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    rangedAttackBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    rangedDamageBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    meleeAttackBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    meleeDamageBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    spellAttackBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    spellDamageBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    weaponAttackBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
    weaponDamageBonus: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name?: string | undefined;
    }, {
        value: string;
        name?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    HPBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    ACBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    sizeBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    walkBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    burrowBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    climbBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    flyBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    hoverBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    swimBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    STRBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    DEXBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    CONBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    INTBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    WISBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    CHABonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    STRSaveBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    DEXSaveBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    CONSaveBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    INTSaveBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    WISSaveBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    CHASaveBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    AthleticsBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    AcrobaticsBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    SleightOfHandBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    StealthBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    ArcanaBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    HistoryBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    InvestigationBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    NatureBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    ReligionBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    AnimalHandlingBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    InsightBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    MedicineBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    PerceptionBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    SurvivalBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    DeceptionBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    IntimidationBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    PerformanceBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    PersuasionBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    blindsightBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    darkvisionBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    tremorsenseBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    truesightBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    rangedAttackBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    rangedDamageBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    meleeAttackBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    meleeDamageBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    spellAttackBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    spellDamageBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    weaponAttackBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    weaponDamageBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
}, {
    HPBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    ACBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    sizeBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    walkBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    burrowBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    climbBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    flyBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    hoverBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    swimBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    STRBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    DEXBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    CONBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    INTBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    WISBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    CHABonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    STRSaveBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    DEXSaveBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    CONSaveBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    INTSaveBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    WISSaveBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    CHASaveBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    AthleticsBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    AcrobaticsBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    SleightOfHandBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    StealthBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    ArcanaBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    HistoryBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    InvestigationBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    NatureBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    ReligionBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    AnimalHandlingBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    InsightBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    MedicineBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    PerceptionBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    SurvivalBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    DeceptionBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    IntimidationBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    PerformanceBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    PersuasionBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    blindsightBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    darkvisionBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    tremorsenseBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    truesightBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    rangedAttackBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    rangedDamageBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    meleeAttackBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    meleeDamageBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    spellAttackBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    spellDamageBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    weaponAttackBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
    weaponDamageBonus?: {
        value: string;
        name?: string | undefined;
    } | undefined;
}>;
export declare const imageObject: z.ZodObject<{
    imgdir: z.ZodString;
    lastedited: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    imgdir: string;
    lastedited: number;
}, {
    imgdir: string;
    lastedited: number;
}>;
export declare const CRTwoPointsObject: z.ZodObject<{
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
}>;
export declare const CRNPCObject: z.ZodObject<{
    name: z.ZodLiteral<"npcstandard">;
}, "strip", z.ZodTypeAny, {
    name: "npcstandard";
}, {
    name: "npcstandard";
}>;
export declare const CRAutomaticObject: z.ZodObject<{
    name: z.ZodLiteral<"automatic">;
    CR: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: "automatic";
    CR: number;
}, {
    name: "automatic";
    CR: number;
}>;
export declare const pronounsObject: z.ZodEnum<["male", "female", "neutral", "thing"]>;
export declare const swarmStats: {
    isSwarm: z.ZodOptional<z.ZodBoolean>;
    swarmSize: z.ZodOptional<z.ZodString>;
};
export declare const resistenceImmunitiesStats: {
    resistances: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
        availableAt: z.ZodOptional<z.ZodNumber>;
        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
    }, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
    }>, "many">>;
    immunities: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
        availableAt: z.ZodOptional<z.ZodNumber>;
        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
    }, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
    }>, "many">>;
    vulnerabilities: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
        availableAt: z.ZodOptional<z.ZodNumber>;
        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
    }, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
    }>, "many">>;
    conditionImmunities: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
        availableAt: z.ZodOptional<z.ZodNumber>;
        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
    }, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
    }>, "many">>;
};
export declare const ages: z.ZodEnum<["child", "adolescent", "young adult", "adult", "middle-aged", "elderly", "venerable"]>;
export declare const AgeObject: z.ZodObject<{
    number: z.ZodNumber;
    string: z.ZodEnum<["child", "adolescent", "young adult", "adult", "middle-aged", "elderly", "venerable"]>;
}, "strip", z.ZodTypeAny, {
    string: "child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable";
    number: number;
}, {
    string: "child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable";
    number: number;
}>;
export declare const WeightObject: z.ZodEnum<["skinny", "average", "chubby", "obese"]>;
export declare const roleplayStats: {
    characterHook: z.ZodOptional<z.ZodString>;
    trait: z.ZodOptional<z.ZodString>;
    feeling: z.ZodOptional<z.ZodString>;
    age: z.ZodOptional<z.ZodObject<{
        number: z.ZodNumber;
        string: z.ZodEnum<["child", "adolescent", "young adult", "adult", "middle-aged", "elderly", "venerable"]>;
    }, "strip", z.ZodTypeAny, {
        string: "child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable";
        number: number;
    }, {
        string: "child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable";
        number: number;
    }>>;
    height: z.ZodOptional<z.ZodNumber>;
    weight: z.ZodOptional<z.ZodEnum<["skinny", "average", "chubby", "obese"]>>;
    voice: z.ZodOptional<z.ZodObject<{
        person: z.ZodString;
        character: z.ZodOptional<z.ZodString>;
        production: z.ZodOptional<z.ZodString>;
        filename: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        person: string;
        filename: string;
        character?: string | undefined;
        production?: string | undefined;
    }, {
        person: string;
        filename: string;
        character?: string | undefined;
        production?: string | undefined;
    }>>;
};
export declare const alignmentModifiersStats: {
    alignmentModifiers: z.ZodOptional<z.ZodTuple<[z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber], null>, z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber], null>], null>>;
};
export declare const publicationStats: {
    image: z.ZodOptional<z.ZodObject<{
        imgdir: z.ZodString;
        lastedited: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        imgdir: string;
        lastedited: number;
    }, {
        imgdir: string;
        lastedited: number;
    }>>;
    imageBackground: z.ZodOptional<z.ZodString>;
    searchTags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    environments: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    backstory: z.ZodOptional<z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>>;
};
export declare const languagesStats: {
    canSpeak: z.ZodOptional<z.ZodBoolean>;
    telepathy: z.ZodOptional<z.ZodString>;
    languages: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
        availableAt: z.ZodOptional<z.ZodNumber>;
        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
    }, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
    }>, "many">, z.ZodObject<{
        choice: z.ZodObject<{
            type: z.ZodLiteral<"random">;
            resultType: z.ZodEnum<["object", "nameId"]>;
            source: z.ZodEnum<["objects", "languages", "skills"]>;
            number: z.ZodOptional<z.ZodNumber>;
            objectType: z.ZodOptional<z.ZodNumber>;
            filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
                keyName: z.ZodString;
                keyValues: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                keyName: string;
                keyValues: string[];
            }, {
                keyName: string;
                keyValues: string[];
            }>, "many">>;
            chosenAlready: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodNumber>;
                value: z.ZodString;
                type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
                availableAt: z.ZodOptional<z.ZodNumber>;
                availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }, {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            type: "random";
            resultType: "object" | "nameId";
            source: "objects" | "languages" | "skills";
            number?: number | undefined;
            objectType?: number | undefined;
            filters?: {
                keyName: string;
                keyValues: string[];
            }[] | undefined;
            chosenAlready?: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | undefined;
        }, {
            type: "random";
            resultType: "object" | "nameId";
            source: "objects" | "languages" | "skills";
            number?: number | undefined;
            objectType?: number | undefined;
            filters?: {
                keyName: string;
                keyValues: string[];
            }[] | undefined;
            chosenAlready?: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        choice: {
            type: "random";
            resultType: "object" | "nameId";
            source: "objects" | "languages" | "skills";
            number?: number | undefined;
            objectType?: number | undefined;
            filters?: {
                keyName: string;
                keyValues: string[];
            }[] | undefined;
            chosenAlready?: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | undefined;
        };
    }, {
        choice: {
            type: "random";
            resultType: "object" | "nameId";
            source: "objects" | "languages" | "skills";
            number?: number | undefined;
            objectType?: number | undefined;
            filters?: {
                keyName: string;
                keyValues: string[];
            }[] | undefined;
            chosenAlready?: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | undefined;
        };
    }>, z.ZodObject<{
        choice: z.ZodObject<{
            type: z.ZodLiteral<"list">;
            number: z.ZodNumber;
            list: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodNumber>;
                value: z.ZodString;
                type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
                availableAt: z.ZodOptional<z.ZodNumber>;
                availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }, {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }>, "many">;
            isRepeatable: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            number: number;
            type: "list";
            list: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[];
            isRepeatable?: boolean | undefined;
        }, {
            number: number;
            type: "list";
            list: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[];
            isRepeatable?: boolean | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        choice: {
            number: number;
            type: "list";
            list: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[];
            isRepeatable?: boolean | undefined;
        };
    }, {
        choice: {
            number: number;
            type: "list";
            list: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[];
            isRepeatable?: boolean | undefined;
        };
    }>]>>;
};
export declare const sensesStats: {
    senses: z.ZodOptional<z.ZodObject<{
        blindsight: z.ZodOptional<z.ZodString>;
        darkvision: z.ZodOptional<z.ZodString>;
        tremorsense: z.ZodOptional<z.ZodString>;
        truesight: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        blindsight?: string | undefined;
        darkvision?: string | undefined;
        tremorsense?: string | undefined;
        truesight?: string | undefined;
    }, {
        blindsight?: string | undefined;
        darkvision?: string | undefined;
        tremorsense?: string | undefined;
        truesight?: string | undefined;
    }>>;
    isBlind: z.ZodOptional<z.ZodBoolean>;
};
export declare const actionsStats: {
    actions: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        tag: z.ZodString;
        priority: z.ZodOptional<z.ZodNumber>;
        variants: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodOptional<z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>>;
            charges: z.ZodOptional<z.ZodString>;
            recharge: z.ZodOptional<z.ZodEnum<["turn", "short", "day", "week", "month", "3-6", "4-6", "5-6", "6-6", "spellGroup", "spellSlot"]>>;
            description: z.ZodString;
            availableAt: z.ZodOptional<z.ZodNumber>;
            ability: z.ZodOptional<z.ZodEnum<["STR", "DEX", "CON", "INT", "WIS", "CHA"]>>;
            cost: z.ZodOptional<z.ZodString>;
            values: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                name: z.ZodString;
                type: z.ZodOptional<z.ZodString>;
                expression: z.ZodOptional<z.ZodString>;
                dice: z.ZodObject<{
                    dice: z.ZodNumber;
                    sides: z.ZodNumber;
                    diceIncrement: z.ZodOptional<z.ZodNumber>;
                    availableAt: z.ZodOptional<z.ZodNumber>;
                    availableUntil: z.ZodOptional<z.ZodNumber>;
                    availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                    unitInterval: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    dice: number;
                    sides: number;
                    diceIncrement?: number | undefined;
                    availableAt?: number | undefined;
                    availableUntil?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    unitInterval?: number | undefined;
                }, {
                    dice: number;
                    sides: number;
                    diceIncrement?: number | undefined;
                    availableAt?: number | undefined;
                    availableUntil?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    unitInterval?: number | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    diceIncrement?: number | undefined;
                    availableAt?: number | undefined;
                    availableUntil?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    unitInterval?: number | undefined;
                };
                type?: string | undefined;
                expression?: string | undefined;
            }, {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    diceIncrement?: number | undefined;
                    availableAt?: number | undefined;
                    availableUntil?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    unitInterval?: number | undefined;
                };
                type?: string | undefined;
                expression?: string | undefined;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodOptional<z.ZodString>;
                expression: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                expression: string;
                type?: string | undefined;
            }, {
                name: string;
                expression: string;
                type?: string | undefined;
            }>, z.ZodObject<{
                name: z.ZodString;
                type: z.ZodOptional<z.ZodString>;
                incrProgression: z.ZodObject<{
                    unitInterval: z.ZodNumber;
                    unitIncrement: z.ZodNumber;
                    availableAt: z.ZodNumber;
                    availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                    valueBase: z.ZodNumber;
                    valueIncrement: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                }, {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: string | undefined;
            }, {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: string | undefined;
            }>]>, "many">>;
            attacks: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                replaceName: z.ZodOptional<z.ZodBoolean>;
                attributes: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                    reach: z.ZodOptional<z.ZodString>;
                    targets: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                    cost: z.ZodOptional<z.ZodString>;
                    weight: z.ZodOptional<z.ZodString>;
                    damageType: z.ZodOptional<z.ZodString>;
                    special: z.ZodOptional<z.ZodString>;
                    dice: z.ZodOptional<z.ZodString>;
                    sides: z.ZodOptional<z.ZodString>;
                    diceV: z.ZodOptional<z.ZodString>;
                    sidesV: z.ZodOptional<z.ZodString>;
                    range: z.ZodOptional<z.ZodString>;
                    rangeMax: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    reach?: string | undefined;
                    targets?: string | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    properties?: string[] | undefined;
                }, {
                    reach?: string | undefined;
                    targets?: string | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    properties?: string[] | undefined;
                }>, z.ZodObject<{
                    choice: z.ZodObject<{
                        type: z.ZodLiteral<"random">;
                        resultType: z.ZodEnum<["object", "nameId"]>;
                        source: z.ZodEnum<["objects", "languages", "skills"]>;
                        number: z.ZodOptional<z.ZodNumber>;
                        objectType: z.ZodOptional<z.ZodNumber>;
                        filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            keyName: z.ZodString;
                            keyValues: z.ZodArray<z.ZodString, "many">;
                        }, "strip", z.ZodTypeAny, {
                            keyName: string;
                            keyValues: string[];
                        }, {
                            keyName: string;
                            keyValues: string[];
                        }>, "many">>;
                        chosenAlready: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            id: z.ZodOptional<z.ZodNumber>;
                            value: z.ZodString;
                            type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
                            availableAt: z.ZodOptional<z.ZodNumber>;
                            availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                        }, "strip", z.ZodTypeAny, {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }, {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }>, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        type: "random";
                        resultType: "object" | "nameId";
                        source: "objects" | "languages" | "skills";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    }, {
                        type: "random";
                        resultType: "object" | "nameId";
                        source: "objects" | "languages" | "skills";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    choice: {
                        type: "random";
                        resultType: "object" | "nameId";
                        source: "objects" | "languages" | "skills";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                }, {
                    choice: {
                        type: "random";
                        resultType: "object" | "nameId";
                        source: "objects" | "languages" | "skills";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                }>]>>;
                enchantment: z.ZodOptional<z.ZodObject<{
                    type: z.ZodString;
                    dice: z.ZodOptional<z.ZodObject<{
                        dice: z.ZodNumber;
                        sides: z.ZodNumber;
                        diceIncrement: z.ZodOptional<z.ZodNumber>;
                        availableAt: z.ZodOptional<z.ZodNumber>;
                        availableUntil: z.ZodOptional<z.ZodNumber>;
                        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                        unitInterval: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        dice: number;
                        sides: number;
                        diceIncrement?: number | undefined;
                        availableAt?: number | undefined;
                        availableUntil?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        unitInterval?: number | undefined;
                    }, {
                        dice: number;
                        sides: number;
                        diceIncrement?: number | undefined;
                        availableAt?: number | undefined;
                        availableUntil?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        unitInterval?: number | undefined;
                    }>>;
                    expression: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    dice?: {
                        dice: number;
                        sides: number;
                        diceIncrement?: number | undefined;
                        availableAt?: number | undefined;
                        availableUntil?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    expression?: string | undefined;
                }, {
                    type: string;
                    dice?: {
                        dice: number;
                        sides: number;
                        diceIncrement?: number | undefined;
                        availableAt?: number | undefined;
                        availableUntil?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    expression?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    choice: {
                        type: "random";
                        resultType: "object" | "nameId";
                        source: "objects" | "languages" | "skills";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | {
                    reach?: string | undefined;
                    targets?: string | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    properties?: string[] | undefined;
                } | undefined;
                enchantment?: {
                    type: string;
                    dice?: {
                        dice: number;
                        sides: number;
                        diceIncrement?: number | undefined;
                        availableAt?: number | undefined;
                        availableUntil?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    expression?: string | undefined;
                } | undefined;
            }, {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    choice: {
                        type: "random";
                        resultType: "object" | "nameId";
                        source: "objects" | "languages" | "skills";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | {
                    reach?: string | undefined;
                    targets?: string | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    properties?: string[] | undefined;
                } | undefined;
                enchantment?: {
                    type: string;
                    dice?: {
                        dice: number;
                        sides: number;
                        diceIncrement?: number | undefined;
                        availableAt?: number | undefined;
                        availableUntil?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    expression?: string | undefined;
                } | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            description: string;
            type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            charges?: string | undefined;
            recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
            availableAt?: number | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            cost?: string | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: string | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    diceIncrement?: number | undefined;
                    availableAt?: number | undefined;
                    availableUntil?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    unitInterval?: number | undefined;
                };
                type?: string | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: string | undefined;
            })[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    choice: {
                        type: "random";
                        resultType: "object" | "nameId";
                        source: "objects" | "languages" | "skills";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | {
                    reach?: string | undefined;
                    targets?: string | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    properties?: string[] | undefined;
                } | undefined;
                enchantment?: {
                    type: string;
                    dice?: {
                        dice: number;
                        sides: number;
                        diceIncrement?: number | undefined;
                        availableAt?: number | undefined;
                        availableUntil?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    expression?: string | undefined;
                } | undefined;
            }[] | undefined;
        }, {
            name: string;
            description: string;
            type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            charges?: string | undefined;
            recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
            availableAt?: number | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            cost?: string | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: string | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    diceIncrement?: number | undefined;
                    availableAt?: number | undefined;
                    availableUntil?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    unitInterval?: number | undefined;
                };
                type?: string | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: string | undefined;
            })[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    choice: {
                        type: "random";
                        resultType: "object" | "nameId";
                        source: "objects" | "languages" | "skills";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | {
                    reach?: string | undefined;
                    targets?: string | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    properties?: string[] | undefined;
                } | undefined;
                enchantment?: {
                    type: string;
                    dice?: {
                        dice: number;
                        sides: number;
                        diceIncrement?: number | undefined;
                        availableAt?: number | undefined;
                        availableUntil?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    expression?: string | undefined;
                } | undefined;
            }[] | undefined;
        }>, "many">;
        actionType: z.ZodOptional<z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>>;
        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
        availableUntil: z.ZodOptional<z.ZodNumber>;
        subType: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodString>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        tag: string;
        variants: {
            name: string;
            description: string;
            type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            charges?: string | undefined;
            recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
            availableAt?: number | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            cost?: string | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: string | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    diceIncrement?: number | undefined;
                    availableAt?: number | undefined;
                    availableUntil?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    unitInterval?: number | undefined;
                };
                type?: string | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: string | undefined;
            })[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    choice: {
                        type: "random";
                        resultType: "object" | "nameId";
                        source: "objects" | "languages" | "skills";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | {
                    reach?: string | undefined;
                    targets?: string | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    properties?: string[] | undefined;
                } | undefined;
                enchantment?: {
                    type: string;
                    dice?: {
                        dice: number;
                        sides: number;
                        diceIncrement?: number | undefined;
                        availableAt?: number | undefined;
                        availableUntil?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    expression?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[];
        priority?: number | undefined;
        actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
        availableUnit?: "level" | "cr" | undefined;
        availableUntil?: number | undefined;
        subType?: string | undefined;
        source?: string | undefined;
        tags?: string[] | undefined;
    }, {
        tag: string;
        variants: {
            name: string;
            description: string;
            type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            charges?: string | undefined;
            recharge?: "turn" | "short" | "day" | "week" | "month" | "3-6" | "4-6" | "5-6" | "6-6" | "spellGroup" | "spellSlot" | undefined;
            availableAt?: number | undefined;
            ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
            cost?: string | undefined;
            values?: ({
                name: string;
                expression: string;
                type?: string | undefined;
            } | {
                name: string;
                dice: {
                    dice: number;
                    sides: number;
                    diceIncrement?: number | undefined;
                    availableAt?: number | undefined;
                    availableUntil?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    unitInterval?: number | undefined;
                };
                type?: string | undefined;
                expression?: string | undefined;
            } | {
                name: string;
                incrProgression: {
                    availableAt: number;
                    unitInterval: number;
                    unitIncrement: number;
                    valueBase: number;
                    valueIncrement: number;
                    availableUnit?: "level" | "cr" | undefined;
                };
                type?: string | undefined;
            })[] | undefined;
            attacks?: {
                name: string;
                replaceName?: boolean | undefined;
                attributes?: {
                    choice: {
                        type: "random";
                        resultType: "object" | "nameId";
                        source: "objects" | "languages" | "skills";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                            availableAt?: number | undefined;
                            availableUnit?: "level" | "cr" | undefined;
                        }[] | undefined;
                    };
                } | {
                    reach?: string | undefined;
                    targets?: string | undefined;
                    name?: string | undefined;
                    cost?: string | undefined;
                    weight?: string | undefined;
                    damageType?: string | undefined;
                    special?: string | undefined;
                    dice?: string | undefined;
                    sides?: string | undefined;
                    diceV?: string | undefined;
                    sidesV?: string | undefined;
                    range?: string | undefined;
                    rangeMax?: string | undefined;
                    properties?: string[] | undefined;
                } | undefined;
                enchantment?: {
                    type: string;
                    dice?: {
                        dice: number;
                        sides: number;
                        diceIncrement?: number | undefined;
                        availableAt?: number | undefined;
                        availableUntil?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                        unitInterval?: number | undefined;
                    } | undefined;
                    expression?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[];
        priority?: number | undefined;
        actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
        availableUnit?: "level" | "cr" | undefined;
        availableUntil?: number | undefined;
        subType?: string | undefined;
        source?: string | undefined;
        tags?: string[] | undefined;
    }>, z.ZodObject<{
        choice: z.ZodObject<{
            type: z.ZodLiteral<"random">;
            resultType: z.ZodEnum<["object", "nameId"]>;
            source: z.ZodEnum<["objects", "languages", "skills"]>;
            number: z.ZodOptional<z.ZodNumber>;
            objectType: z.ZodOptional<z.ZodNumber>;
            filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
                keyName: z.ZodString;
                keyValues: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                keyName: string;
                keyValues: string[];
            }, {
                keyName: string;
                keyValues: string[];
            }>, "many">>;
            chosenAlready: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodNumber>;
                value: z.ZodString;
                type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
                availableAt: z.ZodOptional<z.ZodNumber>;
                availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }, {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            type: "random";
            resultType: "object" | "nameId";
            source: "objects" | "languages" | "skills";
            number?: number | undefined;
            objectType?: number | undefined;
            filters?: {
                keyName: string;
                keyValues: string[];
            }[] | undefined;
            chosenAlready?: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | undefined;
        }, {
            type: "random";
            resultType: "object" | "nameId";
            source: "objects" | "languages" | "skills";
            number?: number | undefined;
            objectType?: number | undefined;
            filters?: {
                keyName: string;
                keyValues: string[];
            }[] | undefined;
            chosenAlready?: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        choice: {
            type: "random";
            resultType: "object" | "nameId";
            source: "objects" | "languages" | "skills";
            number?: number | undefined;
            objectType?: number | undefined;
            filters?: {
                keyName: string;
                keyValues: string[];
            }[] | undefined;
            chosenAlready?: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | undefined;
        };
    }, {
        choice: {
            type: "random";
            resultType: "object" | "nameId";
            source: "objects" | "languages" | "skills";
            number?: number | undefined;
            objectType?: number | undefined;
            filters?: {
                keyName: string;
                keyValues: string[];
            }[] | undefined;
            chosenAlready?: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | undefined;
        };
    }>]>, "many">>;
};
export declare const bonusesStats: {
    bonuses: z.ZodOptional<z.ZodObject<{
        HPBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        ACBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        sizeBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        walkBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        burrowBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        climbBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        flyBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        hoverBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        swimBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        STRBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        DEXBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        CONBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        INTBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        WISBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        CHABonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        STRSaveBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        DEXSaveBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        CONSaveBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        INTSaveBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        WISSaveBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        CHASaveBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        AthleticsBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        AcrobaticsBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        SleightOfHandBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        StealthBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        ArcanaBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        HistoryBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        InvestigationBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        NatureBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        ReligionBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        AnimalHandlingBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        InsightBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        MedicineBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        PerceptionBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        SurvivalBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        DeceptionBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        IntimidationBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        PerformanceBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        PersuasionBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        blindsightBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        darkvisionBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        tremorsenseBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        truesightBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        rangedAttackBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        rangedDamageBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        meleeAttackBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        meleeDamageBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        spellAttackBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        spellDamageBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        weaponAttackBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
        weaponDamageBonus: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name?: string | undefined;
        }, {
            value: string;
            name?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        HPBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        ACBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        sizeBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        walkBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        burrowBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        climbBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        flyBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        hoverBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        swimBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        STRBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        DEXBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        CONBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        INTBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        WISBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        CHABonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        STRSaveBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        DEXSaveBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        CONSaveBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        INTSaveBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        WISSaveBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        CHASaveBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        AthleticsBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        AcrobaticsBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        SleightOfHandBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        StealthBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        ArcanaBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        HistoryBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        InvestigationBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        NatureBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        ReligionBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        AnimalHandlingBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        InsightBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        MedicineBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        PerceptionBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        SurvivalBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        DeceptionBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        IntimidationBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        PerformanceBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        PersuasionBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        blindsightBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        darkvisionBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        tremorsenseBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        truesightBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        rangedAttackBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        rangedDamageBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        meleeAttackBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        meleeDamageBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        spellAttackBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        spellDamageBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        weaponAttackBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        weaponDamageBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
    }, {
        HPBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        ACBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        sizeBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        walkBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        burrowBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        climbBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        flyBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        hoverBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        swimBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        STRBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        DEXBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        CONBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        INTBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        WISBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        CHABonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        STRSaveBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        DEXSaveBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        CONSaveBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        INTSaveBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        WISSaveBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        CHASaveBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        AthleticsBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        AcrobaticsBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        SleightOfHandBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        StealthBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        ArcanaBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        HistoryBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        InvestigationBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        NatureBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        ReligionBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        AnimalHandlingBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        InsightBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        MedicineBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        PerceptionBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        SurvivalBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        DeceptionBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        IntimidationBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        PerformanceBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        PersuasionBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        blindsightBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        darkvisionBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        tremorsenseBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        truesightBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        rangedAttackBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        rangedDamageBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        meleeAttackBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        meleeDamageBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        spellAttackBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        spellDamageBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        weaponAttackBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
        weaponDamageBonus?: {
            value: string;
            name?: string | undefined;
        } | undefined;
    }>>;
};
export declare const spellsStats: {
    spells: z.ZodOptional<z.ZodObject<{
        hasSlots: z.ZodOptional<z.ZodBoolean>;
        ability: z.ZodOptional<z.ZodEnum<["STR", "DEX", "CON", "INT", "WIS", "CHA"]>>;
        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
        groups: z.ZodOptional<z.ZodArray<z.ZodObject<{
            tag: z.ZodString;
            availableAt: z.ZodOptional<z.ZodString>;
            timesDay: z.ZodOptional<z.ZodString>;
            timesDayMax: z.ZodOptional<z.ZodString>;
            spells: z.ZodUnion<[z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodNumber>;
                value: z.ZodString;
                type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
                availableAt: z.ZodOptional<z.ZodNumber>;
                availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }, {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }>, "many">, z.ZodObject<{
                choice: z.ZodObject<{
                    type: z.ZodLiteral<"random">;
                    resultType: z.ZodEnum<["object", "nameId"]>;
                    source: z.ZodEnum<["objects", "languages", "skills"]>;
                    number: z.ZodOptional<z.ZodNumber>;
                    objectType: z.ZodOptional<z.ZodNumber>;
                    filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        keyName: z.ZodString;
                        keyValues: z.ZodArray<z.ZodString, "many">;
                    }, "strip", z.ZodTypeAny, {
                        keyName: string;
                        keyValues: string[];
                    }, {
                        keyName: string;
                        keyValues: string[];
                    }>, "many">>;
                    chosenAlready: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        id: z.ZodOptional<z.ZodNumber>;
                        value: z.ZodString;
                        type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
                        availableAt: z.ZodOptional<z.ZodNumber>;
                        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }, {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    type: "random";
                    resultType: "object" | "nameId";
                    source: "objects" | "languages" | "skills";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
                        keyName: string;
                        keyValues: string[];
                    }[] | undefined;
                    chosenAlready?: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[] | undefined;
                }, {
                    type: "random";
                    resultType: "object" | "nameId";
                    source: "objects" | "languages" | "skills";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
                        keyName: string;
                        keyValues: string[];
                    }[] | undefined;
                    chosenAlready?: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[] | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                choice: {
                    type: "random";
                    resultType: "object" | "nameId";
                    source: "objects" | "languages" | "skills";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
                        keyName: string;
                        keyValues: string[];
                    }[] | undefined;
                    chosenAlready?: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[] | undefined;
                };
            }, {
                choice: {
                    type: "random";
                    resultType: "object" | "nameId";
                    source: "objects" | "languages" | "skills";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
                        keyName: string;
                        keyValues: string[];
                    }[] | undefined;
                    chosenAlready?: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[] | undefined;
                };
            }>, z.ZodObject<{
                choice: z.ZodObject<{
                    type: z.ZodLiteral<"list">;
                    number: z.ZodNumber;
                    list: z.ZodArray<z.ZodObject<{
                        id: z.ZodOptional<z.ZodNumber>;
                        value: z.ZodString;
                        type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
                        availableAt: z.ZodOptional<z.ZodNumber>;
                        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }, {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }>, "many">;
                    isRepeatable: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                }, {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                choice: {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                };
            }, {
                choice: {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                };
            }>]>;
        }, "strict", z.ZodTypeAny, {
            tag: string;
            spells: ({
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | {
                choice: {
                    type: "random";
                    resultType: "object" | "nameId";
                    source: "objects" | "languages" | "skills";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
                        keyName: string;
                        keyValues: string[];
                    }[] | undefined;
                    chosenAlready?: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[] | undefined;
                };
            } | {
                choice: {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                };
            }) & ({
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | {
                choice: {
                    type: "random";
                    resultType: "object" | "nameId";
                    source: "objects" | "languages" | "skills";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
                        keyName: string;
                        keyValues: string[];
                    }[] | undefined;
                    chosenAlready?: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[] | undefined;
                };
            } | {
                choice: {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                };
            } | undefined);
            availableAt?: string | undefined;
            timesDay?: string | undefined;
            timesDayMax?: string | undefined;
        }, {
            tag: string;
            spells: ({
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | {
                choice: {
                    type: "random";
                    resultType: "object" | "nameId";
                    source: "objects" | "languages" | "skills";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
                        keyName: string;
                        keyValues: string[];
                    }[] | undefined;
                    chosenAlready?: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[] | undefined;
                };
            } | {
                choice: {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                };
            }) & ({
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | {
                choice: {
                    type: "random";
                    resultType: "object" | "nameId";
                    source: "objects" | "languages" | "skills";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
                        keyName: string;
                        keyValues: string[];
                    }[] | undefined;
                    chosenAlready?: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[] | undefined;
                };
            } | {
                choice: {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                };
            } | undefined);
            availableAt?: string | undefined;
            timesDay?: string | undefined;
            timesDayMax?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        hasSlots?: boolean | undefined;
        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
        availableUnit?: "level" | "cr" | undefined;
        groups?: {
            tag: string;
            spells: ({
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | {
                choice: {
                    type: "random";
                    resultType: "object" | "nameId";
                    source: "objects" | "languages" | "skills";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
                        keyName: string;
                        keyValues: string[];
                    }[] | undefined;
                    chosenAlready?: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[] | undefined;
                };
            } | {
                choice: {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                };
            }) & ({
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | {
                choice: {
                    type: "random";
                    resultType: "object" | "nameId";
                    source: "objects" | "languages" | "skills";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
                        keyName: string;
                        keyValues: string[];
                    }[] | undefined;
                    chosenAlready?: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[] | undefined;
                };
            } | {
                choice: {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                };
            } | undefined);
            availableAt?: string | undefined;
            timesDay?: string | undefined;
            timesDayMax?: string | undefined;
        }[] | undefined;
    }, {
        hasSlots?: boolean | undefined;
        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
        availableUnit?: "level" | "cr" | undefined;
        groups?: {
            tag: string;
            spells: ({
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | {
                choice: {
                    type: "random";
                    resultType: "object" | "nameId";
                    source: "objects" | "languages" | "skills";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
                        keyName: string;
                        keyValues: string[];
                    }[] | undefined;
                    chosenAlready?: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[] | undefined;
                };
            } | {
                choice: {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                };
            }) & ({
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | {
                choice: {
                    type: "random";
                    resultType: "object" | "nameId";
                    source: "objects" | "languages" | "skills";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
                        keyName: string;
                        keyValues: string[];
                    }[] | undefined;
                    chosenAlready?: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[] | undefined;
                };
            } | {
                choice: {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                        availableAt?: number | undefined;
                        availableUnit?: "level" | "cr" | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                };
            } | undefined);
            availableAt?: string | undefined;
            timesDay?: string | undefined;
            timesDayMax?: string | undefined;
        }[] | undefined;
    }>>;
};
export declare const skillsStats: {
    skills: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
        availableAt: z.ZodOptional<z.ZodNumber>;
        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
    }, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
    }>, "many">, z.ZodObject<{
        choice: z.ZodObject<{
            type: z.ZodLiteral<"random">;
            resultType: z.ZodEnum<["object", "nameId"]>;
            source: z.ZodEnum<["objects", "languages", "skills"]>;
            number: z.ZodOptional<z.ZodNumber>;
            objectType: z.ZodOptional<z.ZodNumber>;
            filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
                keyName: z.ZodString;
                keyValues: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                keyName: string;
                keyValues: string[];
            }, {
                keyName: string;
                keyValues: string[];
            }>, "many">>;
            chosenAlready: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodNumber>;
                value: z.ZodString;
                type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
                availableAt: z.ZodOptional<z.ZodNumber>;
                availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }, {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            type: "random";
            resultType: "object" | "nameId";
            source: "objects" | "languages" | "skills";
            number?: number | undefined;
            objectType?: number | undefined;
            filters?: {
                keyName: string;
                keyValues: string[];
            }[] | undefined;
            chosenAlready?: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | undefined;
        }, {
            type: "random";
            resultType: "object" | "nameId";
            source: "objects" | "languages" | "skills";
            number?: number | undefined;
            objectType?: number | undefined;
            filters?: {
                keyName: string;
                keyValues: string[];
            }[] | undefined;
            chosenAlready?: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        choice: {
            type: "random";
            resultType: "object" | "nameId";
            source: "objects" | "languages" | "skills";
            number?: number | undefined;
            objectType?: number | undefined;
            filters?: {
                keyName: string;
                keyValues: string[];
            }[] | undefined;
            chosenAlready?: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | undefined;
        };
    }, {
        choice: {
            type: "random";
            resultType: "object" | "nameId";
            source: "objects" | "languages" | "skills";
            number?: number | undefined;
            objectType?: number | undefined;
            filters?: {
                keyName: string;
                keyValues: string[];
            }[] | undefined;
            chosenAlready?: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | undefined;
        };
    }>, z.ZodObject<{
        choice: z.ZodObject<{
            type: z.ZodLiteral<"list">;
            number: z.ZodNumber;
            list: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodNumber>;
                value: z.ZodString;
                type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
                availableAt: z.ZodOptional<z.ZodNumber>;
                availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }, {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }>, "many">;
            isRepeatable: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            number: number;
            type: "list";
            list: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[];
            isRepeatable?: boolean | undefined;
        }, {
            number: number;
            type: "list";
            list: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[];
            isRepeatable?: boolean | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        choice: {
            number: number;
            type: "list";
            list: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[];
            isRepeatable?: boolean | undefined;
        };
    }, {
        choice: {
            number: number;
            type: "list";
            list: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[];
            isRepeatable?: boolean | undefined;
        };
    }>]>>;
};
export declare const savingThrowsStats: {
    savingThrows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
        availableAt: z.ZodOptional<z.ZodNumber>;
        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
    }, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
    }>, "many">>;
};
export declare const speedsStats: {
    speeds: z.ZodOptional<z.ZodObject<{
        walk: z.ZodOptional<z.ZodString>;
        burrow: z.ZodOptional<z.ZodString>;
        climb: z.ZodOptional<z.ZodString>;
        fly: z.ZodOptional<z.ZodString>;
        hover: z.ZodOptional<z.ZodString>;
        swim: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        walk?: string | undefined;
        burrow?: string | undefined;
        climb?: string | undefined;
        fly?: string | undefined;
        hover?: string | undefined;
        swim?: string | undefined;
    }, {
        walk?: string | undefined;
        burrow?: string | undefined;
        climb?: string | undefined;
        fly?: string | undefined;
        hover?: string | undefined;
        swim?: string | undefined;
    }>>;
};
export declare const abilityScoresStats: {
    abilityScores: z.ZodOptional<z.ZodObject<{
        STR: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            isAutomaticCalcDisabled: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        }, {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        }>>;
        DEX: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            isAutomaticCalcDisabled: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        }, {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        }>>;
        CON: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            isAutomaticCalcDisabled: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        }, {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        }>>;
        INT: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            isAutomaticCalcDisabled: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        }, {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        }>>;
        WIS: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            isAutomaticCalcDisabled: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        }, {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        }>>;
        CHA: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            isAutomaticCalcDisabled: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        }, {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        STR?: {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        } | undefined;
        DEX?: {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        } | undefined;
        CON?: {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        } | undefined;
        INT?: {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        } | undefined;
        WIS?: {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        } | undefined;
        CHA?: {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        } | undefined;
    }, {
        STR?: {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        } | undefined;
        DEX?: {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        } | undefined;
        CON?: {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        } | undefined;
        INT?: {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        } | undefined;
        WIS?: {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        } | undefined;
        CHA?: {
            value: number;
            isAutomaticCalcDisabled?: boolean | undefined;
        } | undefined;
    }>>;
};
export declare const abilityScoresLimit: {
    abilityScoresLimit: z.ZodOptional<z.ZodNumber>;
};
export declare const typeStats: {
    type: z.ZodOptional<z.ZodString>;
};
export declare const subtypesStats: {
    subtypes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
        availableAt: z.ZodOptional<z.ZodNumber>;
        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
    }, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
    }>, "many">>;
};
export declare const typeAndSubtypesStats: {
    subtypes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
        availableAt: z.ZodOptional<z.ZodNumber>;
        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
    }, {
        value: string;
        id?: number | undefined;
        type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
        availableAt?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
    }>, "many">>;
    type: z.ZodOptional<z.ZodString>;
};
export declare const armorStats: {
    armor: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        AC: z.ZodString;
        name: z.ZodString;
        isAutomaticCalcDisabled: z.ZodOptional<z.ZodBoolean>;
        cost: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodEnum<["light", "medium", "heavy"]>>;
        maxDex: z.ZodOptional<z.ZodString>;
        minStr: z.ZodOptional<z.ZodString>;
        weight: z.ZodOptional<z.ZodString>;
        stealthDis: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        AC: string;
        isAutomaticCalcDisabled?: boolean | undefined;
        cost?: string | undefined;
        type?: "light" | "medium" | "heavy" | undefined;
        maxDex?: string | undefined;
        minStr?: string | undefined;
        weight?: string | undefined;
        stealthDis?: boolean | undefined;
    }, {
        name: string;
        AC: string;
        isAutomaticCalcDisabled?: boolean | undefined;
        cost?: string | undefined;
        type?: "light" | "medium" | "heavy" | undefined;
        maxDex?: string | undefined;
        minStr?: string | undefined;
        weight?: string | undefined;
        stealthDis?: boolean | undefined;
    }>, z.ZodObject<{
        choice: z.ZodObject<{
            type: z.ZodLiteral<"random">;
            resultType: z.ZodEnum<["object", "nameId"]>;
            source: z.ZodEnum<["objects", "languages", "skills"]>;
            number: z.ZodOptional<z.ZodNumber>;
            objectType: z.ZodOptional<z.ZodNumber>;
            filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
                keyName: z.ZodString;
                keyValues: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                keyName: string;
                keyValues: string[];
            }, {
                keyName: string;
                keyValues: string[];
            }>, "many">>;
            chosenAlready: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodNumber>;
                value: z.ZodString;
                type: z.ZodOptional<z.ZodEnum<["alignment", "armor", "background", "class", "condition", "conditionImmunity", "damageType", "immunity", "item", "language", "pronouns", "race", "resistance", "savingThrow", "sense", "size", "skill", "speed", "spell", "subtype", "template", "trait", "type", "vulnerability", "weapon"]>>;
                availableAt: z.ZodOptional<z.ZodNumber>;
                availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }, {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            type: "random";
            resultType: "object" | "nameId";
            source: "objects" | "languages" | "skills";
            number?: number | undefined;
            objectType?: number | undefined;
            filters?: {
                keyName: string;
                keyValues: string[];
            }[] | undefined;
            chosenAlready?: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | undefined;
        }, {
            type: "random";
            resultType: "object" | "nameId";
            source: "objects" | "languages" | "skills";
            number?: number | undefined;
            objectType?: number | undefined;
            filters?: {
                keyName: string;
                keyValues: string[];
            }[] | undefined;
            chosenAlready?: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        choice: {
            type: "random";
            resultType: "object" | "nameId";
            source: "objects" | "languages" | "skills";
            number?: number | undefined;
            objectType?: number | undefined;
            filters?: {
                keyName: string;
                keyValues: string[];
            }[] | undefined;
            chosenAlready?: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | undefined;
        };
    }, {
        choice: {
            type: "random";
            resultType: "object" | "nameId";
            source: "objects" | "languages" | "skills";
            number?: number | undefined;
            objectType?: number | undefined;
            filters?: {
                keyName: string;
                keyValues: string[];
            }[] | undefined;
            chosenAlready?: {
                value: string;
                id?: number | undefined;
                type?: "damageType" | "type" | "alignment" | "armor" | "background" | "class" | "condition" | "conditionImmunity" | "immunity" | "item" | "language" | "pronouns" | "race" | "resistance" | "savingThrow" | "sense" | "size" | "skill" | "speed" | "spell" | "subtype" | "template" | "trait" | "vulnerability" | "weapon" | undefined;
                availableAt?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
            }[] | undefined;
        };
    }>]>>;
};
export declare const HDStats: {
    HD: z.ZodOptional<z.ZodNumber>;
};
export declare const sizeStats: {
    size: z.ZodOptional<z.ZodNumber>;
};
export declare const pronounsStats: {
    pronouns: z.ZodOptional<z.ZodEnum<["male", "female", "neutral", "thing"]>>;
};
export declare const namingStats: {
    name: z.ZodString;
    prename: z.ZodOptional<z.ZodString>;
    surname: z.ZodOptional<z.ZodString>;
    generic: z.ZodOptional<z.ZodBoolean>;
};
export declare const generatorStats: {
    enableGenerator: z.ZodOptional<z.ZodBoolean>;
};
//# sourceMappingURL=other.d.ts.map