import { z } from 'zod';
export declare const actionTypesEnum: z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>;
export declare const diceObject: z.ZodObject<{
    die: z.ZodNumber;
    diceNumber: z.ZodNumber;
    diceIncrement: z.ZodOptional<z.ZodNumber>;
    availableAt: z.ZodOptional<z.ZodNumber>;
    availableUntil: z.ZodOptional<z.ZodNumber>;
    availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
    unitInterval: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    die: number;
    diceNumber: number;
    diceIncrement?: number | undefined;
    availableAt?: number | undefined;
    availableUntil?: number | undefined;
    availableUnit?: "level" | "cr" | undefined;
    unitInterval?: number | undefined;
}, {
    die: number;
    diceNumber: number;
    diceIncrement?: number | undefined;
    availableAt?: number | undefined;
    availableUntil?: number | undefined;
    availableUnit?: "level" | "cr" | undefined;
    unitInterval?: number | undefined;
}>;
export declare const enchantmentObject: z.ZodObject<{
    type: z.ZodString;
    dice: z.ZodOptional<z.ZodObject<{
        die: z.ZodNumber;
        diceNumber: z.ZodNumber;
        diceIncrement: z.ZodOptional<z.ZodNumber>;
        availableAt: z.ZodOptional<z.ZodNumber>;
        availableUntil: z.ZodOptional<z.ZodNumber>;
        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
        unitInterval: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        die: number;
        diceNumber: number;
        diceIncrement?: number | undefined;
        availableAt?: number | undefined;
        availableUntil?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
        unitInterval?: number | undefined;
    }, {
        die: number;
        diceNumber: number;
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
        die: number;
        diceNumber: number;
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
        die: number;
        diceNumber: number;
        diceIncrement?: number | undefined;
        availableAt?: number | undefined;
        availableUntil?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
        unitInterval?: number | undefined;
    } | undefined;
    expression?: string | undefined;
}>;
export declare const attackAttributesObject: z.ZodObject<{
    reach: z.ZodOptional<z.ZodString>;
    targets: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    reach?: string | undefined;
    targets?: string | undefined;
}, {
    reach?: string | undefined;
    targets?: string | undefined;
}>;
export declare const attackObject: z.ZodObject<{
    name: z.ZodString;
    replaceName: z.ZodOptional<z.ZodBoolean>;
    attributes: z.ZodUnion<[z.ZodObject<{
        reach: z.ZodOptional<z.ZodString>;
        targets: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        cost: z.ZodOptional<z.ZodString>;
        weight: z.ZodOptional<z.ZodString>;
        damageType: z.ZodOptional<z.ZodString>;
        special: z.ZodOptional<z.ZodString>;
        die: z.ZodOptional<z.ZodString>;
        diceNumber: z.ZodOptional<z.ZodString>;
        dieV: z.ZodOptional<z.ZodString>;
        diceNumberV: z.ZodOptional<z.ZodString>;
        range: z.ZodOptional<z.ZodString>;
        rangeMax: z.ZodOptional<z.ZodString>;
        properties: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, z.ZodObject<{
        choice: z.ZodObject<{
            type: z.ZodLiteral<"random">;
            number: z.ZodOptional<z.ZodNumber>;
            resultType: z.ZodEnum<["object", "nameId"]>;
            source: z.ZodEnum<["objects", "languages", "skills"]>;
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
                availableAt: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                id?: number | undefined;
                availableAt?: number | undefined;
            }, {
                value: string;
                id?: number | undefined;
                availableAt?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>]>;
    enchantment: z.ZodOptional<z.ZodObject<{
        type: z.ZodString;
        dice: z.ZodOptional<z.ZodObject<{
            die: z.ZodNumber;
            diceNumber: z.ZodNumber;
            diceIncrement: z.ZodOptional<z.ZodNumber>;
            availableAt: z.ZodOptional<z.ZodNumber>;
            availableUntil: z.ZodOptional<z.ZodNumber>;
            availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
            unitInterval: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            die: number;
            diceNumber: number;
            diceIncrement?: number | undefined;
            availableAt?: number | undefined;
            availableUntil?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            unitInterval?: number | undefined;
        }, {
            die: number;
            diceNumber: number;
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
            die: number;
            diceNumber: number;
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
            die: number;
            diceNumber: number;
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
}, {
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
}>;
export declare const valueExpressionObject: z.ZodObject<{
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
}>;
export declare const valueDiceObject: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodOptional<z.ZodString>;
    expression: z.ZodOptional<z.ZodString>;
    dice: z.ZodObject<{
        die: z.ZodNumber;
        diceNumber: z.ZodNumber;
        diceIncrement: z.ZodOptional<z.ZodNumber>;
        availableAt: z.ZodOptional<z.ZodNumber>;
        availableUntil: z.ZodOptional<z.ZodNumber>;
        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
        unitInterval: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        die: number;
        diceNumber: number;
        diceIncrement?: number | undefined;
        availableAt?: number | undefined;
        availableUntil?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
        unitInterval?: number | undefined;
    }, {
        die: number;
        diceNumber: number;
        diceIncrement?: number | undefined;
        availableAt?: number | undefined;
        availableUntil?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
        unitInterval?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    name: string;
    dice: {
        die: number;
        diceNumber: number;
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
        die: number;
        diceNumber: number;
        diceIncrement?: number | undefined;
        availableAt?: number | undefined;
        availableUntil?: number | undefined;
        availableUnit?: "level" | "cr" | undefined;
        unitInterval?: number | undefined;
    };
    type?: string | undefined;
    expression?: string | undefined;
}>;
export declare const valueIncrProgressionObject: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodOptional<z.ZodString>;
    incrProgression: z.ZodObject<{
        unitInterval: z.ZodString;
        unitIncrement: z.ZodString;
        availableAt: z.ZodString;
        availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
        valueBase: z.ZodString;
        valueIncrement: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        availableAt: string;
        unitInterval: string;
        unitIncrement: string;
        valueBase: string;
        valueIncrement: string;
        availableUnit?: "level" | "cr" | undefined;
    }, {
        availableAt: string;
        unitInterval: string;
        unitIncrement: string;
        valueBase: string;
        valueIncrement: string;
        availableUnit?: "level" | "cr" | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    name: string;
    incrProgression: {
        availableAt: string;
        unitInterval: string;
        unitIncrement: string;
        valueBase: string;
        valueIncrement: string;
        availableUnit?: "level" | "cr" | undefined;
    };
    type?: string | undefined;
}, {
    name: string;
    incrProgression: {
        availableAt: string;
        unitInterval: string;
        unitIncrement: string;
        valueBase: string;
        valueIncrement: string;
        availableUnit?: "level" | "cr" | undefined;
    };
    type?: string | undefined;
}>;
export declare const actionVariantObject: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    type: z.ZodOptional<z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>>;
    availableAt: z.ZodOptional<z.ZodNumber>;
    ability: z.ZodOptional<z.ZodEnum<["STR", "DEX", "CON", "INT", "WIS", "CHA"]>>;
    charges: z.ZodOptional<z.ZodString>;
    recharge: z.ZodOptional<z.ZodString>;
    cost: z.ZodOptional<z.ZodString>;
    values: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodAny, z.ZodAny, z.ZodObject<{
        name: z.ZodString;
        type: z.ZodOptional<z.ZodString>;
        incrProgression: z.ZodObject<{
            unitInterval: z.ZodString;
            unitIncrement: z.ZodString;
            availableAt: z.ZodString;
            availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
            valueBase: z.ZodString;
            valueIncrement: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            availableAt: string;
            unitInterval: string;
            unitIncrement: string;
            valueBase: string;
            valueIncrement: string;
            availableUnit?: "level" | "cr" | undefined;
        }, {
            availableAt: string;
            unitInterval: string;
            unitIncrement: string;
            valueBase: string;
            valueIncrement: string;
            availableUnit?: "level" | "cr" | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        incrProgression: {
            availableAt: string;
            unitInterval: string;
            unitIncrement: string;
            valueBase: string;
            valueIncrement: string;
            availableUnit?: "level" | "cr" | undefined;
        };
        type?: string | undefined;
    }, {
        name: string;
        incrProgression: {
            availableAt: string;
            unitInterval: string;
            unitIncrement: string;
            valueBase: string;
            valueIncrement: string;
            availableUnit?: "level" | "cr" | undefined;
        };
        type?: string | undefined;
    }>]>, "many">>;
    attacks: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        replaceName: z.ZodOptional<z.ZodBoolean>;
        attributes: z.ZodUnion<[z.ZodObject<{
            reach: z.ZodOptional<z.ZodString>;
            targets: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            cost: z.ZodOptional<z.ZodString>;
            weight: z.ZodOptional<z.ZodString>;
            damageType: z.ZodOptional<z.ZodString>;
            special: z.ZodOptional<z.ZodString>;
            die: z.ZodOptional<z.ZodString>;
            diceNumber: z.ZodOptional<z.ZodString>;
            dieV: z.ZodOptional<z.ZodString>;
            diceNumberV: z.ZodOptional<z.ZodString>;
            range: z.ZodOptional<z.ZodString>;
            rangeMax: z.ZodOptional<z.ZodString>;
            properties: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, z.ZodObject<{
            choice: z.ZodObject<{
                type: z.ZodLiteral<"random">;
                number: z.ZodOptional<z.ZodNumber>;
                resultType: z.ZodEnum<["object", "nameId"]>;
                source: z.ZodEnum<["objects", "languages", "skills"]>;
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
                    availableAt: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
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
            }, {
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
            }>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>]>;
        enchantment: z.ZodOptional<z.ZodObject<{
            type: z.ZodString;
            dice: z.ZodOptional<z.ZodObject<{
                die: z.ZodNumber;
                diceNumber: z.ZodNumber;
                diceIncrement: z.ZodOptional<z.ZodNumber>;
                availableAt: z.ZodOptional<z.ZodNumber>;
                availableUntil: z.ZodOptional<z.ZodNumber>;
                availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                unitInterval: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                die: number;
                diceNumber: number;
                diceIncrement?: number | undefined;
                availableAt?: number | undefined;
                availableUntil?: number | undefined;
                availableUnit?: "level" | "cr" | undefined;
                unitInterval?: number | undefined;
            }, {
                die: number;
                diceNumber: number;
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
                die: number;
                diceNumber: number;
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
                die: number;
                diceNumber: number;
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
    }, {
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
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export declare const chosenActionObject: z.ZodObject<{
    tag: z.ZodString;
    actionType: z.ZodOptional<z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>>;
    priority: z.ZodOptional<z.ZodNumber>;
    availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
    availableUntil: z.ZodOptional<z.ZodNumber>;
    subType: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    variants: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>>;
        availableAt: z.ZodOptional<z.ZodNumber>;
        ability: z.ZodOptional<z.ZodEnum<["STR", "DEX", "CON", "INT", "WIS", "CHA"]>>;
        charges: z.ZodOptional<z.ZodString>;
        recharge: z.ZodOptional<z.ZodString>;
        cost: z.ZodOptional<z.ZodString>;
        values: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodAny, z.ZodAny, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodOptional<z.ZodString>;
            incrProgression: z.ZodObject<{
                unitInterval: z.ZodString;
                unitIncrement: z.ZodString;
                availableAt: z.ZodString;
                availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                valueBase: z.ZodString;
                valueIncrement: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                availableAt: string;
                unitInterval: string;
                unitIncrement: string;
                valueBase: string;
                valueIncrement: string;
                availableUnit?: "level" | "cr" | undefined;
            }, {
                availableAt: string;
                unitInterval: string;
                unitIncrement: string;
                valueBase: string;
                valueIncrement: string;
                availableUnit?: "level" | "cr" | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            incrProgression: {
                availableAt: string;
                unitInterval: string;
                unitIncrement: string;
                valueBase: string;
                valueIncrement: string;
                availableUnit?: "level" | "cr" | undefined;
            };
            type?: string | undefined;
        }, {
            name: string;
            incrProgression: {
                availableAt: string;
                unitInterval: string;
                unitIncrement: string;
                valueBase: string;
                valueIncrement: string;
                availableUnit?: "level" | "cr" | undefined;
            };
            type?: string | undefined;
        }>]>, "many">>;
        attacks: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            replaceName: z.ZodOptional<z.ZodBoolean>;
            attributes: z.ZodUnion<[z.ZodObject<{
                reach: z.ZodOptional<z.ZodString>;
                targets: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
                cost: z.ZodOptional<z.ZodString>;
                weight: z.ZodOptional<z.ZodString>;
                damageType: z.ZodOptional<z.ZodString>;
                special: z.ZodOptional<z.ZodString>;
                die: z.ZodOptional<z.ZodString>;
                diceNumber: z.ZodOptional<z.ZodString>;
                dieV: z.ZodOptional<z.ZodString>;
                diceNumberV: z.ZodOptional<z.ZodString>;
                range: z.ZodOptional<z.ZodString>;
                rangeMax: z.ZodOptional<z.ZodString>;
                properties: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
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
            }, {
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
            }>, z.ZodObject<{
                choice: z.ZodObject<{
                    type: z.ZodLiteral<"random">;
                    number: z.ZodOptional<z.ZodNumber>;
                    resultType: z.ZodEnum<["object", "nameId"]>;
                    source: z.ZodEnum<["objects", "languages", "skills"]>;
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
                        availableAt: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        id?: number | undefined;
                        availableAt?: number | undefined;
                    }, {
                        value: string;
                        id?: number | undefined;
                        availableAt?: number | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
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
                }, {
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
                }>;
            }, "strip", z.ZodTypeAny, {
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
            }, {
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
            }>]>;
            enchantment: z.ZodOptional<z.ZodObject<{
                type: z.ZodString;
                dice: z.ZodOptional<z.ZodObject<{
                    die: z.ZodNumber;
                    diceNumber: z.ZodNumber;
                    diceIncrement: z.ZodOptional<z.ZodNumber>;
                    availableAt: z.ZodOptional<z.ZodNumber>;
                    availableUntil: z.ZodOptional<z.ZodNumber>;
                    availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                    unitInterval: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    die: number;
                    diceNumber: number;
                    diceIncrement?: number | undefined;
                    availableAt?: number | undefined;
                    availableUntil?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    unitInterval?: number | undefined;
                }, {
                    die: number;
                    diceNumber: number;
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
                    die: number;
                    diceNumber: number;
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
                    die: number;
                    diceNumber: number;
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
        }, {
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
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export declare const actionObject: z.ZodUnion<[z.ZodObject<{
    tag: z.ZodString;
    actionType: z.ZodOptional<z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>>;
    priority: z.ZodOptional<z.ZodNumber>;
    availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
    availableUntil: z.ZodOptional<z.ZodNumber>;
    subType: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    variants: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>>;
        availableAt: z.ZodOptional<z.ZodNumber>;
        ability: z.ZodOptional<z.ZodEnum<["STR", "DEX", "CON", "INT", "WIS", "CHA"]>>;
        charges: z.ZodOptional<z.ZodString>;
        recharge: z.ZodOptional<z.ZodString>;
        cost: z.ZodOptional<z.ZodString>;
        values: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodAny, z.ZodAny, z.ZodObject<{
            name: z.ZodString;
            type: z.ZodOptional<z.ZodString>;
            incrProgression: z.ZodObject<{
                unitInterval: z.ZodString;
                unitIncrement: z.ZodString;
                availableAt: z.ZodString;
                availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                valueBase: z.ZodString;
                valueIncrement: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                availableAt: string;
                unitInterval: string;
                unitIncrement: string;
                valueBase: string;
                valueIncrement: string;
                availableUnit?: "level" | "cr" | undefined;
            }, {
                availableAt: string;
                unitInterval: string;
                unitIncrement: string;
                valueBase: string;
                valueIncrement: string;
                availableUnit?: "level" | "cr" | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            incrProgression: {
                availableAt: string;
                unitInterval: string;
                unitIncrement: string;
                valueBase: string;
                valueIncrement: string;
                availableUnit?: "level" | "cr" | undefined;
            };
            type?: string | undefined;
        }, {
            name: string;
            incrProgression: {
                availableAt: string;
                unitInterval: string;
                unitIncrement: string;
                valueBase: string;
                valueIncrement: string;
                availableUnit?: "level" | "cr" | undefined;
            };
            type?: string | undefined;
        }>]>, "many">>;
        attacks: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            replaceName: z.ZodOptional<z.ZodBoolean>;
            attributes: z.ZodUnion<[z.ZodObject<{
                reach: z.ZodOptional<z.ZodString>;
                targets: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
                cost: z.ZodOptional<z.ZodString>;
                weight: z.ZodOptional<z.ZodString>;
                damageType: z.ZodOptional<z.ZodString>;
                special: z.ZodOptional<z.ZodString>;
                die: z.ZodOptional<z.ZodString>;
                diceNumber: z.ZodOptional<z.ZodString>;
                dieV: z.ZodOptional<z.ZodString>;
                diceNumberV: z.ZodOptional<z.ZodString>;
                range: z.ZodOptional<z.ZodString>;
                rangeMax: z.ZodOptional<z.ZodString>;
                properties: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
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
            }, {
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
            }>, z.ZodObject<{
                choice: z.ZodObject<{
                    type: z.ZodLiteral<"random">;
                    number: z.ZodOptional<z.ZodNumber>;
                    resultType: z.ZodEnum<["object", "nameId"]>;
                    source: z.ZodEnum<["objects", "languages", "skills"]>;
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
                        availableAt: z.ZodOptional<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        id?: number | undefined;
                        availableAt?: number | undefined;
                    }, {
                        value: string;
                        id?: number | undefined;
                        availableAt?: number | undefined;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
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
                }, {
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
                }>;
            }, "strip", z.ZodTypeAny, {
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
            }, {
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
            }>]>;
            enchantment: z.ZodOptional<z.ZodObject<{
                type: z.ZodString;
                dice: z.ZodOptional<z.ZodObject<{
                    die: z.ZodNumber;
                    diceNumber: z.ZodNumber;
                    diceIncrement: z.ZodOptional<z.ZodNumber>;
                    availableAt: z.ZodOptional<z.ZodNumber>;
                    availableUntil: z.ZodOptional<z.ZodNumber>;
                    availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
                    unitInterval: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    die: number;
                    diceNumber: number;
                    diceIncrement?: number | undefined;
                    availableAt?: number | undefined;
                    availableUntil?: number | undefined;
                    availableUnit?: "level" | "cr" | undefined;
                    unitInterval?: number | undefined;
                }, {
                    die: number;
                    diceNumber: number;
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
                    die: number;
                    diceNumber: number;
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
                    die: number;
                    diceNumber: number;
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
        }, {
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
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>, z.ZodObject<{
    choice: z.ZodObject<{
        type: z.ZodLiteral<"random">;
        number: z.ZodOptional<z.ZodNumber>;
        resultType: z.ZodEnum<["object", "nameId"]>;
        source: z.ZodEnum<["objects", "languages", "skills"]>;
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
            availableAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            id?: number | undefined;
            availableAt?: number | undefined;
        }, {
            value: string;
            id?: number | undefined;
            availableAt?: number | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>]>;
//# sourceMappingURL=actions.d.ts.map