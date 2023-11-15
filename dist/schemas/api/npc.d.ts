import { z } from 'zod';
export declare const postRandomNpcInput: z.ZodObject<{
    levelType: z.ZodOptional<z.ZodEnum<["random", "randomPeasantsMostly"]>>;
    classType: z.ZodOptional<z.ZodEnum<["none", "randomSometimes", "randomAlways", "specific"]>>;
    backgroundType: z.ZodOptional<z.ZodEnum<["none", "random", "specific"]>>;
    classId: z.ZodOptional<z.ZodNumber>;
    classvariantId: z.ZodOptional<z.ZodNumber>;
    backgroundId: z.ZodOptional<z.ZodNumber>;
    primaryRaceId: z.ZodOptional<z.ZodNumber>;
    secondaryRaceId: z.ZodOptional<z.ZodNumber>;
    primaryRacevariantId: z.ZodOptional<z.ZodNumber>;
    secondaryRacevariantId: z.ZodOptional<z.ZodNumber>;
    primaryRacePercentage: z.ZodOptional<z.ZodNumber>;
    secondaryRacePercentage: z.ZodOptional<z.ZodNumber>;
    addVoice: z.ZodOptional<z.ZodBoolean>;
    includeChildren: z.ZodOptional<z.ZodBoolean>;
    pronounsChosen: z.ZodOptional<z.ZodEnum<["male", "female", "neutral", "thing"]>>;
}, "strip", z.ZodTypeAny, {
    levelType?: "random" | "randomPeasantsMostly" | undefined;
    classType?: "none" | "randomSometimes" | "randomAlways" | "specific" | undefined;
    backgroundType?: "random" | "none" | "specific" | undefined;
    classId?: number | undefined;
    classvariantId?: number | undefined;
    backgroundId?: number | undefined;
    primaryRaceId?: number | undefined;
    secondaryRaceId?: number | undefined;
    primaryRacevariantId?: number | undefined;
    secondaryRacevariantId?: number | undefined;
    primaryRacePercentage?: number | undefined;
    secondaryRacePercentage?: number | undefined;
    addVoice?: boolean | undefined;
    includeChildren?: boolean | undefined;
    pronounsChosen?: "male" | "female" | "neutral" | "thing" | undefined;
}, {
    levelType?: "random" | "randomPeasantsMostly" | undefined;
    classType?: "none" | "randomSometimes" | "randomAlways" | "specific" | undefined;
    backgroundType?: "random" | "none" | "specific" | undefined;
    classId?: number | undefined;
    classvariantId?: number | undefined;
    backgroundId?: number | undefined;
    primaryRaceId?: number | undefined;
    secondaryRaceId?: number | undefined;
    primaryRacevariantId?: number | undefined;
    secondaryRacevariantId?: number | undefined;
    primaryRacePercentage?: number | undefined;
    secondaryRacePercentage?: number | undefined;
    addVoice?: boolean | undefined;
    includeChildren?: boolean | undefined;
    pronounsChosen?: "male" | "female" | "neutral" | "thing" | undefined;
}>;
export declare const postRandomNpcResponse: z.ZodObject<{
    npc: import("../../schemas").CharacterObject;
}, "strip", z.ZodTypeAny, {
    npc: {
        character: {
            name: string;
            prename?: string | undefined;
            surname?: string | undefined;
            generic?: boolean | undefined;
            pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
            race?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                abilityScoresLimit?: number | undefined;
                HD?: number | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
                isSwarm?: boolean | undefined;
                swarmSize?: string | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                type?: string | undefined;
                size?: number | undefined;
                pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
                ageAdult?: number | undefined;
                ageMax?: number | undefined;
                heightMin?: number | undefined;
                heightMax?: number | undefined;
                nameType?: string[] | undefined;
                addSurname?: number | undefined;
                enableGenerator?: boolean | undefined;
                id?: number | undefined;
            } | undefined;
            racevariant?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                enableGenerator?: boolean | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                abilityScoresLimit?: number | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
                pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
                id?: number | undefined;
            } | undefined;
            class?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                enableGenerator?: boolean | undefined;
                id?: number | undefined;
            } | undefined;
            classvariant?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                enableGenerator?: boolean | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                id?: number | undefined;
            } | undefined;
            background?: {
                name: string;
                femaleName: string;
                workplace: string;
                compatibleAges: ("child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable")[];
                enableGenerator?: boolean | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                abilityScoresLimit?: number | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                id?: number | undefined;
            } | undefined;
            template?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                abilityScoresLimit?: number | undefined;
                abilityScores?: {
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
                } | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                HD?: number | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
                isSwarm?: boolean | undefined;
                swarmSize?: string | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                type?: string | undefined;
                size?: number | undefined;
                pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
                id?: number | undefined;
            } | undefined;
            user?: {
                characterHook?: string | undefined;
                trait?: string | undefined;
                feeling?: string | undefined;
                age?: {
                    string: "child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable";
                    number: number;
                } | undefined;
                height?: number | undefined;
                weight?: "skinny" | "average" | "chubby" | "obese" | undefined;
                voice?: {
                    person: string;
                    filename: string;
                    character?: string | undefined;
                    production?: string | undefined;
                } | undefined;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                abilityScoresLimit?: number | undefined;
                abilityScores?: {
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
                } | undefined;
                HD?: number | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                type?: string | undefined;
                isSwarm?: boolean | undefined;
                swarmSize?: string | undefined;
                size?: number | undefined;
                pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
                name?: string | undefined;
            } | undefined;
            abilityScores?: {
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
            } | undefined;
            alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
            alignmentEthical?: "Lawful" | "Neutral" | "Chaotic" | "Any" | "Unaligned" | undefined;
            alignmentMoral?: "Neutral" | "Any" | "Good" | "Evil" | undefined;
            skills?: {
                value: string;
                id?: number | undefined;
                availableAt?: number | undefined;
            }[] | {
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
                        keyName: string;
                        keyValues: string[];
                    }[] | undefined;
                    chosenAlready?: {
                        value: string;
                        id?: number | undefined;
                        availableAt?: number | undefined;
                    }[] | undefined;
                };
            } | {
                choice: {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        availableAt?: number | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                };
            } | undefined;
            characterHook?: string | undefined;
            trait?: string | undefined;
            feeling?: string | undefined;
            age?: {
                string: "child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable";
                number: number;
            } | undefined;
            height?: number | undefined;
            weight?: "skinny" | "average" | "chubby" | "obese" | undefined;
            voice?: {
                person: string;
                filename: string;
                character?: string | undefined;
                production?: string | undefined;
            } | undefined;
            CRCalculation?: {
                name: "twopoints";
                x1: string;
                x2: string;
                y1: string;
                y2: string;
            } | {
                name: "npcstandard";
            } | {
                name: "automatic";
                CR: number;
            } | undefined;
            proficiencyCalculation?: "level" | "CR" | undefined;
        };
        id?: number | undefined;
        statistics?: {
            type: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            name: string;
            level: number;
            size: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            prename: string;
            surname: string;
            pronouns: "male" | "female" | "neutral" | "thing";
            abilityScores: {
                STR: number;
                DEX: number;
                CON: number;
                INT: number;
                WIS: number;
                CHA: number;
            };
            CR: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            alignment: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            fullName: string;
            XP: string;
            proficiency: number;
            abilityModifiers: {
                STR: number;
                DEX: number;
                CON: number;
                INT: number;
                WIS: number;
                CHA: number;
            };
            HP: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            meta: string;
            characterHook?: {
                string: string;
                type?: "type" | "subtype" | "trait" | "race" | "class" | "background" | "template" | "spell" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                id?: number | undefined;
            }[] | undefined;
            sizeSingleEntityOfSwarm?: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            } | undefined;
            subtypes?: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            }[] | undefined;
        } | undefined;
        variables?: {
            STR: number;
            DEX: number;
            CON: number;
            INT: number;
            WIS: number;
            CHA: number;
            HD: number;
            CR: number;
            HP: number;
            LVL: number;
            PROF: number;
            SIZE: number;
            STRVALUE: number;
            DEXVALUE: number;
            CONVALUE: number;
            INTVALUE: number;
            WISVALUE: number;
            CHAVALUE: number;
        } | undefined;
        tags?: z.objectOutputType<{
            name: z.ZodString;
            Name: z.ZodString;
            he: z.ZodString;
            she: z.ZodString;
            his: z.ZodString;
            her: z.ZodString;
            him: z.ZodString;
            hers: z.ZodString;
            He: z.ZodString;
            His: z.ZodString;
            Him: z.ZodString;
            Hers: z.ZodString;
            they: z.ZodString;
            their: z.ZodString;
            them: z.ZodString;
            theirs: z.ZodString;
            They: z.ZodString;
            Their: z.ZodString;
            Them: z.ZodString;
            Theirs: z.ZodString;
            it: z.ZodString;
            its: z.ZodString;
            It: z.ZodString;
            Its: z.ZodString;
            size: z.ZodString;
            sizegreater: z.ZodString;
            sizesmaller: z.ZodString;
            sizetwogreater: z.ZodString;
            sizetwosmaller: z.ZodString;
            type: z.ZodString;
        }, z.ZodString, "strip"> | undefined;
        variations?: {
            currentCR?: number | undefined;
            currentHD?: number | undefined;
        } | undefined;
    };
}, {
    npc: {
        character: {
            name: string;
            prename?: string | undefined;
            surname?: string | undefined;
            generic?: boolean | undefined;
            pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
            race?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                abilityScoresLimit?: number | undefined;
                HD?: number | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
                isSwarm?: boolean | undefined;
                swarmSize?: string | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                type?: string | undefined;
                size?: number | undefined;
                pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
                ageAdult?: number | undefined;
                ageMax?: number | undefined;
                heightMin?: number | undefined;
                heightMax?: number | undefined;
                nameType?: string[] | undefined;
                addSurname?: number | undefined;
                enableGenerator?: boolean | undefined;
                id?: number | undefined;
            } | undefined;
            racevariant?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                enableGenerator?: boolean | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                abilityScoresLimit?: number | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
                pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
                id?: number | undefined;
            } | undefined;
            class?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                enableGenerator?: boolean | undefined;
                id?: number | undefined;
            } | undefined;
            classvariant?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                enableGenerator?: boolean | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                id?: number | undefined;
            } | undefined;
            background?: {
                name: string;
                femaleName: string;
                workplace: string;
                compatibleAges: ("child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable")[];
                enableGenerator?: boolean | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                abilityScoresLimit?: number | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                id?: number | undefined;
            } | undefined;
            template?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                abilityScoresLimit?: number | undefined;
                abilityScores?: {
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
                } | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                HD?: number | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
                isSwarm?: boolean | undefined;
                swarmSize?: string | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                type?: string | undefined;
                size?: number | undefined;
                pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
                id?: number | undefined;
            } | undefined;
            user?: {
                characterHook?: string | undefined;
                trait?: string | undefined;
                feeling?: string | undefined;
                age?: {
                    string: "child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable";
                    number: number;
                } | undefined;
                height?: number | undefined;
                weight?: "skinny" | "average" | "chubby" | "obese" | undefined;
                voice?: {
                    person: string;
                    filename: string;
                    character?: string | undefined;
                    production?: string | undefined;
                } | undefined;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                abilityScoresLimit?: number | undefined;
                abilityScores?: {
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
                } | undefined;
                HD?: number | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                type?: string | undefined;
                isSwarm?: boolean | undefined;
                swarmSize?: string | undefined;
                size?: number | undefined;
                pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
                name?: string | undefined;
            } | undefined;
            abilityScores?: {
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
            } | undefined;
            alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
            alignmentEthical?: "Lawful" | "Neutral" | "Chaotic" | "Any" | "Unaligned" | undefined;
            alignmentMoral?: "Neutral" | "Any" | "Good" | "Evil" | undefined;
            skills?: {
                value: string;
                id?: number | undefined;
                availableAt?: number | undefined;
            }[] | {
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
                        keyName: string;
                        keyValues: string[];
                    }[] | undefined;
                    chosenAlready?: {
                        value: string;
                        id?: number | undefined;
                        availableAt?: number | undefined;
                    }[] | undefined;
                };
            } | {
                choice: {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        availableAt?: number | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                };
            } | undefined;
            characterHook?: string | undefined;
            trait?: string | undefined;
            feeling?: string | undefined;
            age?: {
                string: "child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable";
                number: number;
            } | undefined;
            height?: number | undefined;
            weight?: "skinny" | "average" | "chubby" | "obese" | undefined;
            voice?: {
                person: string;
                filename: string;
                character?: string | undefined;
                production?: string | undefined;
            } | undefined;
            CRCalculation?: {
                name: "twopoints";
                x1: string;
                x2: string;
                y1: string;
                y2: string;
            } | {
                name: "npcstandard";
            } | {
                name: "automatic";
                CR: number;
            } | undefined;
            proficiencyCalculation?: "level" | "CR" | undefined;
        };
        id?: number | undefined;
        statistics?: {
            type: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            name: string;
            level: number;
            size: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            prename: string;
            surname: string;
            pronouns: "male" | "female" | "neutral" | "thing";
            abilityScores: {
                STR: number;
                DEX: number;
                CON: number;
                INT: number;
                WIS: number;
                CHA: number;
            };
            CR: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            alignment: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            fullName: string;
            XP: string;
            proficiency: number;
            abilityModifiers: {
                STR: number;
                DEX: number;
                CON: number;
                INT: number;
                WIS: number;
                CHA: number;
            };
            HP: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            meta: string;
            characterHook?: {
                string: string;
                type?: "type" | "subtype" | "trait" | "race" | "class" | "background" | "template" | "spell" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                id?: number | undefined;
            }[] | undefined;
            sizeSingleEntityOfSwarm?: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            } | undefined;
            subtypes?: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            }[] | undefined;
        } | undefined;
        variables?: {
            STR: number;
            DEX: number;
            CON: number;
            INT: number;
            WIS: number;
            CHA: number;
            HD: number;
            CR: number;
            HP: number;
            LVL: number;
            PROF: number;
            SIZE: number;
            STRVALUE: number;
            DEXVALUE: number;
            CONVALUE: number;
            INTVALUE: number;
            WISVALUE: number;
            CHAVALUE: number;
        } | undefined;
        tags?: z.objectInputType<{
            name: z.ZodString;
            Name: z.ZodString;
            he: z.ZodString;
            she: z.ZodString;
            his: z.ZodString;
            her: z.ZodString;
            him: z.ZodString;
            hers: z.ZodString;
            He: z.ZodString;
            His: z.ZodString;
            Him: z.ZodString;
            Hers: z.ZodString;
            they: z.ZodString;
            their: z.ZodString;
            them: z.ZodString;
            theirs: z.ZodString;
            They: z.ZodString;
            Their: z.ZodString;
            Them: z.ZodString;
            Theirs: z.ZodString;
            it: z.ZodString;
            its: z.ZodString;
            It: z.ZodString;
            Its: z.ZodString;
            size: z.ZodString;
            sizegreater: z.ZodString;
            sizesmaller: z.ZodString;
            sizetwogreater: z.ZodString;
            sizetwosmaller: z.ZodString;
            type: z.ZodString;
        }, z.ZodString, "strip"> | undefined;
        variations?: {
            currentCR?: number | undefined;
            currentHD?: number | undefined;
        } | undefined;
    };
}>;
export declare const postFourRandomNpcsResponse: z.ZodObject<{
    npcs: z.ZodArray<import("../../schemas").CharacterObject, "many">;
}, "strip", z.ZodTypeAny, {
    npcs: {
        character: {
            name: string;
            prename?: string | undefined;
            surname?: string | undefined;
            generic?: boolean | undefined;
            pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
            race?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                abilityScoresLimit?: number | undefined;
                HD?: number | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
                isSwarm?: boolean | undefined;
                swarmSize?: string | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                type?: string | undefined;
                size?: number | undefined;
                pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
                ageAdult?: number | undefined;
                ageMax?: number | undefined;
                heightMin?: number | undefined;
                heightMax?: number | undefined;
                nameType?: string[] | undefined;
                addSurname?: number | undefined;
                enableGenerator?: boolean | undefined;
                id?: number | undefined;
            } | undefined;
            racevariant?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                enableGenerator?: boolean | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                abilityScoresLimit?: number | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
                pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
                id?: number | undefined;
            } | undefined;
            class?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                enableGenerator?: boolean | undefined;
                id?: number | undefined;
            } | undefined;
            classvariant?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                enableGenerator?: boolean | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                id?: number | undefined;
            } | undefined;
            background?: {
                name: string;
                femaleName: string;
                workplace: string;
                compatibleAges: ("child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable")[];
                enableGenerator?: boolean | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                abilityScoresLimit?: number | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                id?: number | undefined;
            } | undefined;
            template?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                abilityScoresLimit?: number | undefined;
                abilityScores?: {
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
                } | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                HD?: number | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
                isSwarm?: boolean | undefined;
                swarmSize?: string | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                type?: string | undefined;
                size?: number | undefined;
                pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
                id?: number | undefined;
            } | undefined;
            user?: {
                characterHook?: string | undefined;
                trait?: string | undefined;
                feeling?: string | undefined;
                age?: {
                    string: "child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable";
                    number: number;
                } | undefined;
                height?: number | undefined;
                weight?: "skinny" | "average" | "chubby" | "obese" | undefined;
                voice?: {
                    person: string;
                    filename: string;
                    character?: string | undefined;
                    production?: string | undefined;
                } | undefined;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                abilityScoresLimit?: number | undefined;
                abilityScores?: {
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
                } | undefined;
                HD?: number | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                type?: string | undefined;
                isSwarm?: boolean | undefined;
                swarmSize?: string | undefined;
                size?: number | undefined;
                pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
                name?: string | undefined;
            } | undefined;
            abilityScores?: {
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
            } | undefined;
            alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
            alignmentEthical?: "Lawful" | "Neutral" | "Chaotic" | "Any" | "Unaligned" | undefined;
            alignmentMoral?: "Neutral" | "Any" | "Good" | "Evil" | undefined;
            skills?: {
                value: string;
                id?: number | undefined;
                availableAt?: number | undefined;
            }[] | {
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
                        keyName: string;
                        keyValues: string[];
                    }[] | undefined;
                    chosenAlready?: {
                        value: string;
                        id?: number | undefined;
                        availableAt?: number | undefined;
                    }[] | undefined;
                };
            } | {
                choice: {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        availableAt?: number | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                };
            } | undefined;
            characterHook?: string | undefined;
            trait?: string | undefined;
            feeling?: string | undefined;
            age?: {
                string: "child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable";
                number: number;
            } | undefined;
            height?: number | undefined;
            weight?: "skinny" | "average" | "chubby" | "obese" | undefined;
            voice?: {
                person: string;
                filename: string;
                character?: string | undefined;
                production?: string | undefined;
            } | undefined;
            CRCalculation?: {
                name: "twopoints";
                x1: string;
                x2: string;
                y1: string;
                y2: string;
            } | {
                name: "npcstandard";
            } | {
                name: "automatic";
                CR: number;
            } | undefined;
            proficiencyCalculation?: "level" | "CR" | undefined;
        };
        id?: number | undefined;
        statistics?: {
            type: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            name: string;
            level: number;
            size: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            prename: string;
            surname: string;
            pronouns: "male" | "female" | "neutral" | "thing";
            abilityScores: {
                STR: number;
                DEX: number;
                CON: number;
                INT: number;
                WIS: number;
                CHA: number;
            };
            CR: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            alignment: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            fullName: string;
            XP: string;
            proficiency: number;
            abilityModifiers: {
                STR: number;
                DEX: number;
                CON: number;
                INT: number;
                WIS: number;
                CHA: number;
            };
            HP: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            meta: string;
            characterHook?: {
                string: string;
                type?: "type" | "subtype" | "trait" | "race" | "class" | "background" | "template" | "spell" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                id?: number | undefined;
            }[] | undefined;
            sizeSingleEntityOfSwarm?: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            } | undefined;
            subtypes?: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            }[] | undefined;
        } | undefined;
        variables?: {
            STR: number;
            DEX: number;
            CON: number;
            INT: number;
            WIS: number;
            CHA: number;
            HD: number;
            CR: number;
            HP: number;
            LVL: number;
            PROF: number;
            SIZE: number;
            STRVALUE: number;
            DEXVALUE: number;
            CONVALUE: number;
            INTVALUE: number;
            WISVALUE: number;
            CHAVALUE: number;
        } | undefined;
        tags?: z.objectOutputType<{
            name: z.ZodString;
            Name: z.ZodString;
            he: z.ZodString;
            she: z.ZodString;
            his: z.ZodString;
            her: z.ZodString;
            him: z.ZodString;
            hers: z.ZodString;
            He: z.ZodString;
            His: z.ZodString;
            Him: z.ZodString;
            Hers: z.ZodString;
            they: z.ZodString;
            their: z.ZodString;
            them: z.ZodString;
            theirs: z.ZodString;
            They: z.ZodString;
            Their: z.ZodString;
            Them: z.ZodString;
            Theirs: z.ZodString;
            it: z.ZodString;
            its: z.ZodString;
            It: z.ZodString;
            Its: z.ZodString;
            size: z.ZodString;
            sizegreater: z.ZodString;
            sizesmaller: z.ZodString;
            sizetwogreater: z.ZodString;
            sizetwosmaller: z.ZodString;
            type: z.ZodString;
        }, z.ZodString, "strip"> | undefined;
        variations?: {
            currentCR?: number | undefined;
            currentHD?: number | undefined;
        } | undefined;
    }[];
}, {
    npcs: {
        character: {
            name: string;
            prename?: string | undefined;
            surname?: string | undefined;
            generic?: boolean | undefined;
            pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
            race?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                abilityScoresLimit?: number | undefined;
                HD?: number | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
                isSwarm?: boolean | undefined;
                swarmSize?: string | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                type?: string | undefined;
                size?: number | undefined;
                pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
                ageAdult?: number | undefined;
                ageMax?: number | undefined;
                heightMin?: number | undefined;
                heightMax?: number | undefined;
                nameType?: string[] | undefined;
                addSurname?: number | undefined;
                enableGenerator?: boolean | undefined;
                id?: number | undefined;
            } | undefined;
            racevariant?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                enableGenerator?: boolean | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                abilityScoresLimit?: number | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
                pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
                id?: number | undefined;
            } | undefined;
            class?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                enableGenerator?: boolean | undefined;
                id?: number | undefined;
            } | undefined;
            classvariant?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                enableGenerator?: boolean | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                id?: number | undefined;
            } | undefined;
            background?: {
                name: string;
                femaleName: string;
                workplace: string;
                compatibleAges: ("child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable")[];
                enableGenerator?: boolean | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                abilityScoresLimit?: number | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                id?: number | undefined;
            } | undefined;
            template?: {
                name: string;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                savingThrows?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                abilityScoresLimit?: number | undefined;
                abilityScores?: {
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
                } | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                HD?: number | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
                isSwarm?: boolean | undefined;
                swarmSize?: string | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                type?: string | undefined;
                size?: number | undefined;
                pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
                id?: number | undefined;
            } | undefined;
            user?: {
                characterHook?: string | undefined;
                trait?: string | undefined;
                feeling?: string | undefined;
                age?: {
                    string: "child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable";
                    number: number;
                } | undefined;
                height?: number | undefined;
                weight?: "skinny" | "average" | "chubby" | "obese" | undefined;
                voice?: {
                    person: string;
                    filename: string;
                    character?: string | undefined;
                    production?: string | undefined;
                } | undefined;
                image?: {
                    imgdir: string;
                    lastedited: number;
                } | undefined;
                imageBackground?: string | undefined;
                searchTags?: string[] | undefined;
                environments?: string[] | undefined;
                backstory?: z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
                spells?: {
                    hasSlots?: boolean | undefined;
                    ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    groups?: {
                        tag: string;
                        spells: ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        }) & ({
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | {
                            choice: {
                                type: "random";
                                source: "objects" | "languages" | "skills";
                                resultType: "object" | "nameId";
                                number?: number | undefined;
                                objectType?: number | undefined;
                                filters?: {
                                    keyName: string;
                                    keyValues: string[];
                                }[] | undefined;
                                chosenAlready?: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[] | undefined;
                            };
                        } | {
                            choice: {
                                number: number;
                                type: "list";
                                list: {
                                    value: string;
                                    id?: number | undefined;
                                    availableAt?: number | undefined;
                                }[];
                                isRepeatable?: boolean | undefined;
                            };
                        } | undefined);
                        availableAt?: string | undefined;
                        timesDay?: string | undefined;
                        timesDayMax?: string | undefined;
                    }[] | undefined;
                } | undefined;
                bonuses?: {
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
                    speedBaseBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedBurrowBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedClimbBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedFlyBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedHoverBonus?: {
                        value: string;
                        name?: string | undefined;
                    } | undefined;
                    speedSwimBonus?: {
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
                } | undefined;
                actions?: ({
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    tag: string;
                    variants: {
                        name: string;
                        description: string;
                        type?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                        availableAt?: number | undefined;
                        ability?: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | undefined;
                        charges?: string | undefined;
                        recharge?: string | undefined;
                        cost?: string | undefined;
                        values?: any[] | undefined;
                        attacks?: {
                            name: string;
                            attributes: ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            }) & ({
                                properties: string[];
                                reach?: string | undefined;
                                targets?: string | undefined;
                                name?: string | undefined;
                                cost?: string | undefined;
                                weight?: string | undefined;
                                damageType?: string | undefined;
                                special?: string | undefined;
                                die?: string | undefined;
                                diceNumber?: string | undefined;
                                dieV?: string | undefined;
                                diceNumberV?: string | undefined;
                                range?: string | undefined;
                                rangeMax?: string | undefined;
                            } | {
                                choice: {
                                    type: "random";
                                    source: "objects" | "languages" | "skills";
                                    resultType: "object" | "nameId";
                                    number?: number | undefined;
                                    objectType?: number | undefined;
                                    filters?: {
                                        keyName: string;
                                        keyValues: string[];
                                    }[] | undefined;
                                    chosenAlready?: {
                                        value: string;
                                        id?: number | undefined;
                                        availableAt?: number | undefined;
                                    }[] | undefined;
                                };
                            } | undefined);
                            replaceName?: boolean | undefined;
                            enchantment?: {
                                type: string;
                                dice?: {
                                    die: number;
                                    diceNumber: number;
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
                    actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
                    priority?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    availableUntil?: number | undefined;
                    subType?: string | undefined;
                    source?: string | undefined;
                    tags?: string[] | undefined;
                })[] | undefined;
                canSpeak?: boolean | undefined;
                telepathy?: string | undefined;
                languages?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                senses?: {
                    blindsight?: string | undefined;
                    darkvision?: string | undefined;
                    tremorsense?: string | undefined;
                    truesight?: string | undefined;
                } | undefined;
                isBlind?: boolean | undefined;
                resistances?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                immunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                vulnerabilities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                conditionImmunities?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                skills?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    choice: {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                } | undefined;
                speeds?: {
                    base?: string | undefined;
                    burrow?: string | undefined;
                    climb?: string | undefined;
                    fly?: string | undefined;
                    hover?: string | undefined;
                    swim?: string | undefined;
                } | undefined;
                abilityScoresLimit?: number | undefined;
                abilityScores?: {
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
                } | undefined;
                HD?: number | undefined;
                armor?: {
                    choice: {
                        type: "random";
                        source: "objects" | "languages" | "skills";
                        resultType: "object" | "nameId";
                        number?: number | undefined;
                        objectType?: number | undefined;
                        filters?: {
                            keyName: string;
                            keyValues: string[];
                        }[] | undefined;
                        chosenAlready?: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[] | undefined;
                    };
                } | {
                    name: string;
                    AC: string;
                    isAutomaticCalcDisabled?: boolean | undefined;
                    cost?: string | undefined;
                    type?: "light" | "medium" | "heavy" | undefined;
                    maxDex?: string | undefined;
                    minStr?: string | undefined;
                    weight?: string | undefined;
                    stealthDis?: boolean | undefined;
                } | undefined;
                subtypes?: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[] | undefined;
                type?: string | undefined;
                isSwarm?: boolean | undefined;
                swarmSize?: string | undefined;
                size?: number | undefined;
                pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
                name?: string | undefined;
            } | undefined;
            abilityScores?: {
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
            } | undefined;
            alignmentModifiers?: [[number, number, number], [number, number, number]] | undefined;
            alignmentEthical?: "Lawful" | "Neutral" | "Chaotic" | "Any" | "Unaligned" | undefined;
            alignmentMoral?: "Neutral" | "Any" | "Good" | "Evil" | undefined;
            skills?: {
                value: string;
                id?: number | undefined;
                availableAt?: number | undefined;
            }[] | {
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
                        keyName: string;
                        keyValues: string[];
                    }[] | undefined;
                    chosenAlready?: {
                        value: string;
                        id?: number | undefined;
                        availableAt?: number | undefined;
                    }[] | undefined;
                };
            } | {
                choice: {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        availableAt?: number | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                };
            } | undefined;
            characterHook?: string | undefined;
            trait?: string | undefined;
            feeling?: string | undefined;
            age?: {
                string: "child" | "adolescent" | "young adult" | "adult" | "middle-aged" | "elderly" | "venerable";
                number: number;
            } | undefined;
            height?: number | undefined;
            weight?: "skinny" | "average" | "chubby" | "obese" | undefined;
            voice?: {
                person: string;
                filename: string;
                character?: string | undefined;
                production?: string | undefined;
            } | undefined;
            CRCalculation?: {
                name: "twopoints";
                x1: string;
                x2: string;
                y1: string;
                y2: string;
            } | {
                name: "npcstandard";
            } | {
                name: "automatic";
                CR: number;
            } | undefined;
            proficiencyCalculation?: "level" | "CR" | undefined;
        };
        id?: number | undefined;
        statistics?: {
            type: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            name: string;
            level: number;
            size: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            prename: string;
            surname: string;
            pronouns: "male" | "female" | "neutral" | "thing";
            abilityScores: {
                STR: number;
                DEX: number;
                CON: number;
                INT: number;
                WIS: number;
                CHA: number;
            };
            CR: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            alignment: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            fullName: string;
            XP: string;
            proficiency: number;
            abilityModifiers: {
                STR: number;
                DEX: number;
                CON: number;
                INT: number;
                WIS: number;
                CHA: number;
            };
            HP: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            meta: string;
            characterHook?: {
                string: string;
                type?: "type" | "subtype" | "trait" | "race" | "class" | "background" | "template" | "spell" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                id?: number | undefined;
            }[] | undefined;
            sizeSingleEntityOfSwarm?: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            } | undefined;
            subtypes?: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            }[] | undefined;
        } | undefined;
        variables?: {
            STR: number;
            DEX: number;
            CON: number;
            INT: number;
            WIS: number;
            CHA: number;
            HD: number;
            CR: number;
            HP: number;
            LVL: number;
            PROF: number;
            SIZE: number;
            STRVALUE: number;
            DEXVALUE: number;
            CONVALUE: number;
            INTVALUE: number;
            WISVALUE: number;
            CHAVALUE: number;
        } | undefined;
        tags?: z.objectInputType<{
            name: z.ZodString;
            Name: z.ZodString;
            he: z.ZodString;
            she: z.ZodString;
            his: z.ZodString;
            her: z.ZodString;
            him: z.ZodString;
            hers: z.ZodString;
            He: z.ZodString;
            His: z.ZodString;
            Him: z.ZodString;
            Hers: z.ZodString;
            they: z.ZodString;
            their: z.ZodString;
            them: z.ZodString;
            theirs: z.ZodString;
            They: z.ZodString;
            Their: z.ZodString;
            Them: z.ZodString;
            Theirs: z.ZodString;
            it: z.ZodString;
            its: z.ZodString;
            It: z.ZodString;
            Its: z.ZodString;
            size: z.ZodString;
            sizegreater: z.ZodString;
            sizesmaller: z.ZodString;
            sizetwogreater: z.ZodString;
            sizetwosmaller: z.ZodString;
            type: z.ZodString;
        }, z.ZodString, "strip"> | undefined;
        variations?: {
            currentCR?: number | undefined;
            currentHD?: number | undefined;
        } | undefined;
    }[];
}>;
export declare const getGeneratorDataResponse: z.ZodObject<{
    races: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        userid: z.ZodNumber;
        name: z.ZodString;
        other_objects: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
            userid: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id: number;
            userid: number;
            name: string;
        }, {
            id: number;
            userid: number;
            name: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: number;
        userid: number;
        name: string;
        other_objects: {
            id: number;
            userid: number;
            name: string;
        }[];
    }, {
        id: number;
        userid: number;
        name: string;
        other_objects: {
            id: number;
            userid: number;
            name: string;
        }[];
    }>, "many">;
    classes: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        userid: z.ZodNumber;
        name: z.ZodString;
        other_objects: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
            userid: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id: number;
            userid: number;
            name: string;
        }, {
            id: number;
            userid: number;
            name: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: number;
        userid: number;
        name: string;
        other_objects: {
            id: number;
            userid: number;
            name: string;
        }[];
    }, {
        id: number;
        userid: number;
        name: string;
        other_objects: {
            id: number;
            userid: number;
            name: string;
        }[];
    }>, "many">;
    backgrounds: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        userid: z.ZodNumber;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        userid: number;
        name: string;
    }, {
        id: number;
        userid: number;
        name: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    races: {
        id: number;
        userid: number;
        name: string;
        other_objects: {
            id: number;
            userid: number;
            name: string;
        }[];
    }[];
    classes: {
        id: number;
        userid: number;
        name: string;
        other_objects: {
            id: number;
            userid: number;
            name: string;
        }[];
    }[];
    backgrounds: {
        id: number;
        userid: number;
        name: string;
    }[];
}, {
    races: {
        id: number;
        userid: number;
        name: string;
        other_objects: {
            id: number;
            userid: number;
            name: string;
        }[];
    }[];
    classes: {
        id: number;
        userid: number;
        name: string;
        other_objects: {
            id: number;
            userid: number;
            name: string;
        }[];
    }[];
    backgrounds: {
        id: number;
        userid: number;
        name: string;
    }[];
}>;
//# sourceMappingURL=npc.d.ts.map