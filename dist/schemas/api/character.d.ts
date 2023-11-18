import { z } from 'zod';
export declare const getCharacterListResponse: z.ZodObject<{
    list: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        userid: z.ZodNumber;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: number;
        userid: number;
    }, {
        name: string;
        id: number;
        userid: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    list: {
        name: string;
        id: number;
        userid: number;
    }[];
}, {
    list: {
        name: string;
        id: number;
        userid: number;
    }[];
}>;
export declare const getCharacterResponse: z.ZodObject<{
    id: z.ZodNumber;
    object: import("@/schemas/objects/character/objects").CharacterObject;
}, "strip", z.ZodTypeAny, {
    object: {
        character: {
            name: string;
            prename?: string | undefined;
            surname?: string | undefined;
            generic?: boolean | undefined;
            pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
            race?: {
                [x: string]: any;
            } | undefined;
            racevariant?: {
                [x: string]: any;
            } | undefined;
            class?: {
                [x: string]: any;
            } | undefined;
            classvariant?: {
                [x: string]: any;
            } | undefined;
            background?: {
                [x: string]: any;
            } | undefined;
            template?: {
                [x: string]: any;
            } | undefined;
            user?: {
                [x: string]: any;
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
                type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                availableAt?: number | undefined;
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
                        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
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
                        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
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
            name: string;
            type: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            level: number;
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
            pronouns: "male" | "female" | "neutral" | "thing";
            prename: string;
            surname: string;
            fullName: string;
            XP: string;
            proficiency: number;
            size: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            abilityScores: {
                STR: number;
                DEX: number;
                CON: number;
                INT: number;
                WIS: number;
                CHA: number;
            };
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
                type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                id?: number | undefined;
            }[] | undefined;
            isSwarm?: boolean | undefined;
            sizeSingleEntityOfSwarm?: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            } | undefined;
            subtypes?: {
                string: string;
                type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                id?: number | undefined;
            }[] | undefined;
            speed?: {
                walk?: number | undefined;
                burrow?: number | undefined;
                climb?: number | undefined;
                fly?: number | undefined;
                hover?: number | undefined;
                swim?: number | undefined;
            } | undefined;
        } | undefined;
        variables?: {
            STR: number;
            DEX: number;
            CON: number;
            INT: number;
            WIS: number;
            CHA: number;
            CR: number;
            HP: number;
            LVL: number;
            PROF: number;
            SIZE: number;
            HD: number;
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
    id: number;
}, {
    object: {
        character: {
            name: string;
            prename?: string | undefined;
            surname?: string | undefined;
            generic?: boolean | undefined;
            pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
            race?: {
                [x: string]: any;
            } | undefined;
            racevariant?: {
                [x: string]: any;
            } | undefined;
            class?: {
                [x: string]: any;
            } | undefined;
            classvariant?: {
                [x: string]: any;
            } | undefined;
            background?: {
                [x: string]: any;
            } | undefined;
            template?: {
                [x: string]: any;
            } | undefined;
            user?: {
                [x: string]: any;
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
                type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                availableAt?: number | undefined;
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
                        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
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
                        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
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
            name: string;
            type: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            level: number;
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
            pronouns: "male" | "female" | "neutral" | "thing";
            prename: string;
            surname: string;
            fullName: string;
            XP: string;
            proficiency: number;
            size: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            abilityScores: {
                STR: number;
                DEX: number;
                CON: number;
                INT: number;
                WIS: number;
                CHA: number;
            };
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
                type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                id?: number | undefined;
            }[] | undefined;
            isSwarm?: boolean | undefined;
            sizeSingleEntityOfSwarm?: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            } | undefined;
            subtypes?: {
                string: string;
                type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                id?: number | undefined;
            }[] | undefined;
            speed?: {
                walk?: number | undefined;
                burrow?: number | undefined;
                climb?: number | undefined;
                fly?: number | undefined;
                hover?: number | undefined;
                swim?: number | undefined;
            } | undefined;
        } | undefined;
        variables?: {
            STR: number;
            DEX: number;
            CON: number;
            INT: number;
            WIS: number;
            CHA: number;
            CR: number;
            HP: number;
            LVL: number;
            PROF: number;
            SIZE: number;
            HD: number;
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
    id: number;
}>;
export declare const postCharacter: z.ZodObject<{
    game: z.ZodNumber;
    name: z.ZodString;
    object: import("@/schemas/objects/character/objects").CharacterObject;
}, "strip", z.ZodTypeAny, {
    object: {
        character: {
            name: string;
            prename?: string | undefined;
            surname?: string | undefined;
            generic?: boolean | undefined;
            pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
            race?: {
                [x: string]: any;
            } | undefined;
            racevariant?: {
                [x: string]: any;
            } | undefined;
            class?: {
                [x: string]: any;
            } | undefined;
            classvariant?: {
                [x: string]: any;
            } | undefined;
            background?: {
                [x: string]: any;
            } | undefined;
            template?: {
                [x: string]: any;
            } | undefined;
            user?: {
                [x: string]: any;
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
                type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                availableAt?: number | undefined;
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
                        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
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
                        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
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
            name: string;
            type: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            level: number;
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
            pronouns: "male" | "female" | "neutral" | "thing";
            prename: string;
            surname: string;
            fullName: string;
            XP: string;
            proficiency: number;
            size: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            abilityScores: {
                STR: number;
                DEX: number;
                CON: number;
                INT: number;
                WIS: number;
                CHA: number;
            };
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
                type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                id?: number | undefined;
            }[] | undefined;
            isSwarm?: boolean | undefined;
            sizeSingleEntityOfSwarm?: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            } | undefined;
            subtypes?: {
                string: string;
                type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                id?: number | undefined;
            }[] | undefined;
            speed?: {
                walk?: number | undefined;
                burrow?: number | undefined;
                climb?: number | undefined;
                fly?: number | undefined;
                hover?: number | undefined;
                swim?: number | undefined;
            } | undefined;
        } | undefined;
        variables?: {
            STR: number;
            DEX: number;
            CON: number;
            INT: number;
            WIS: number;
            CHA: number;
            CR: number;
            HP: number;
            LVL: number;
            PROF: number;
            SIZE: number;
            HD: number;
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
    name: string;
    game: number;
}, {
    object: {
        character: {
            name: string;
            prename?: string | undefined;
            surname?: string | undefined;
            generic?: boolean | undefined;
            pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
            race?: {
                [x: string]: any;
            } | undefined;
            racevariant?: {
                [x: string]: any;
            } | undefined;
            class?: {
                [x: string]: any;
            } | undefined;
            classvariant?: {
                [x: string]: any;
            } | undefined;
            background?: {
                [x: string]: any;
            } | undefined;
            template?: {
                [x: string]: any;
            } | undefined;
            user?: {
                [x: string]: any;
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
                type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                availableAt?: number | undefined;
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
                        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
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
                        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
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
            name: string;
            type: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            level: number;
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
            pronouns: "male" | "female" | "neutral" | "thing";
            prename: string;
            surname: string;
            fullName: string;
            XP: string;
            proficiency: number;
            size: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            abilityScores: {
                STR: number;
                DEX: number;
                CON: number;
                INT: number;
                WIS: number;
                CHA: number;
            };
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
                type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                id?: number | undefined;
            }[] | undefined;
            isSwarm?: boolean | undefined;
            sizeSingleEntityOfSwarm?: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            } | undefined;
            subtypes?: {
                string: string;
                type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                id?: number | undefined;
            }[] | undefined;
            speed?: {
                walk?: number | undefined;
                burrow?: number | undefined;
                climb?: number | undefined;
                fly?: number | undefined;
                hover?: number | undefined;
                swim?: number | undefined;
            } | undefined;
        } | undefined;
        variables?: {
            STR: number;
            DEX: number;
            CON: number;
            INT: number;
            WIS: number;
            CHA: number;
            CR: number;
            HP: number;
            LVL: number;
            PROF: number;
            SIZE: number;
            HD: number;
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
    name: string;
    game: number;
}>;
export declare const putCharacter: z.ZodObject<{
    name: z.ZodString;
    game: z.ZodNumber;
    object: import("@/schemas/objects/character/objects").CharacterObject;
}, "strip", z.ZodTypeAny, {
    object: {
        character: {
            name: string;
            prename?: string | undefined;
            surname?: string | undefined;
            generic?: boolean | undefined;
            pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
            race?: {
                [x: string]: any;
            } | undefined;
            racevariant?: {
                [x: string]: any;
            } | undefined;
            class?: {
                [x: string]: any;
            } | undefined;
            classvariant?: {
                [x: string]: any;
            } | undefined;
            background?: {
                [x: string]: any;
            } | undefined;
            template?: {
                [x: string]: any;
            } | undefined;
            user?: {
                [x: string]: any;
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
                type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                availableAt?: number | undefined;
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
                        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
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
                        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
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
            name: string;
            type: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            level: number;
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
            pronouns: "male" | "female" | "neutral" | "thing";
            prename: string;
            surname: string;
            fullName: string;
            XP: string;
            proficiency: number;
            size: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            abilityScores: {
                STR: number;
                DEX: number;
                CON: number;
                INT: number;
                WIS: number;
                CHA: number;
            };
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
                type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                id?: number | undefined;
            }[] | undefined;
            isSwarm?: boolean | undefined;
            sizeSingleEntityOfSwarm?: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            } | undefined;
            subtypes?: {
                string: string;
                type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                id?: number | undefined;
            }[] | undefined;
            speed?: {
                walk?: number | undefined;
                burrow?: number | undefined;
                climb?: number | undefined;
                fly?: number | undefined;
                hover?: number | undefined;
                swim?: number | undefined;
            } | undefined;
        } | undefined;
        variables?: {
            STR: number;
            DEX: number;
            CON: number;
            INT: number;
            WIS: number;
            CHA: number;
            CR: number;
            HP: number;
            LVL: number;
            PROF: number;
            SIZE: number;
            HD: number;
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
    name: string;
    game: number;
}, {
    object: {
        character: {
            name: string;
            prename?: string | undefined;
            surname?: string | undefined;
            generic?: boolean | undefined;
            pronouns?: "male" | "female" | "neutral" | "thing" | undefined;
            race?: {
                [x: string]: any;
            } | undefined;
            racevariant?: {
                [x: string]: any;
            } | undefined;
            class?: {
                [x: string]: any;
            } | undefined;
            classvariant?: {
                [x: string]: any;
            } | undefined;
            background?: {
                [x: string]: any;
            } | undefined;
            template?: {
                [x: string]: any;
            } | undefined;
            user?: {
                [x: string]: any;
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
                type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                availableAt?: number | undefined;
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
                        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
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
                        type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
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
            name: string;
            type: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            level: number;
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
            pronouns: "male" | "female" | "neutral" | "thing";
            prename: string;
            surname: string;
            fullName: string;
            XP: string;
            proficiency: number;
            size: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            };
            abilityScores: {
                STR: number;
                DEX: number;
                CON: number;
                INT: number;
                WIS: number;
                CHA: number;
            };
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
                type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                id?: number | undefined;
            }[] | undefined;
            isSwarm?: boolean | undefined;
            sizeSingleEntityOfSwarm?: {
                string: string;
                number: number;
                array?: string[] | undefined;
                id?: number | undefined;
            } | undefined;
            subtypes?: {
                string: string;
                type?: "type" | "background" | "spell" | "trait" | "race" | "class" | "template" | "subtype" | "language" | "skill" | "savingThrow" | "condition" | "resistance" | "immunity" | "vulnerability" | "conditionImmunity" | undefined;
                id?: number | undefined;
            }[] | undefined;
            speed?: {
                walk?: number | undefined;
                burrow?: number | undefined;
                climb?: number | undefined;
                fly?: number | undefined;
                hover?: number | undefined;
                swim?: number | undefined;
            } | undefined;
        } | undefined;
        variables?: {
            STR: number;
            DEX: number;
            CON: number;
            INT: number;
            WIS: number;
            CHA: number;
            CR: number;
            HP: number;
            LVL: number;
            PROF: number;
            SIZE: number;
            HD: number;
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
    name: string;
    game: number;
}>;
//# sourceMappingURL=character.d.ts.map