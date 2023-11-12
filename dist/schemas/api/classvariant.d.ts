import { z } from 'zod';
export declare const getClassvariantListResponse: z.ZodObject<{
    list: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        userid: z.ZodNumber;
        name: z.ZodString;
        objects: z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        userid: number;
        name: string;
        objects: {
            id: number;
            name: string;
        };
    }, {
        id: number;
        userid: number;
        name: string;
        objects: {
            id: number;
            name: string;
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    list: {
        id: number;
        userid: number;
        name: string;
        objects: {
            id: number;
            name: string;
        };
    }[];
}, {
    list: {
        id: number;
        userid: number;
        name: string;
        objects: {
            id: number;
            name: string;
        };
    }[];
}>;
export declare const getClassvariantClassListResponse: z.ZodObject<{
    list: z.ZodArray<z.ZodObject<{
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
    list: {
        id: number;
        userid: number;
        name: string;
    }[];
}, {
    list: {
        id: number;
        userid: number;
        name: string;
    }[];
}>;
export declare const getClassvariantResponse: z.ZodObject<{
    object: z.ZodObject<{
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
        enableGenerator: z.ZodOptional<z.ZodBoolean>;
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
                    availableAt: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }>, "many">, z.ZodObject<{
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
                }>, z.ZodObject<{
                    choice: z.ZodObject<{
                        type: z.ZodLiteral<"list">;
                        number: z.ZodNumber;
                        list: z.ZodArray<z.ZodObject<{
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
                        }>, "many">;
                        isRepeatable: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    }, {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
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
                            availableAt?: number | undefined;
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
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                }>]>;
            }, "strict", z.ZodTypeAny, {
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
            }, {
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
        }, {
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
        }>>;
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
            speedBaseBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            speedBurrowBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            speedClimbBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            speedFlyBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            speedHoverBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            speedSwimBonus: z.ZodOptional<z.ZodObject<{
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
        }>>;
        actions: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            tag: z.ZodString;
            actionType: z.ZodOptional<z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>>;
            priority: z.ZodOptional<z.ZodNumber>;
            availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
            availableUntil: z.ZodOptional<z.ZodNumber>;
            subType: z.ZodOptional<z.ZodString>;
            source: z.ZodOptional<z.ZodString>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            variants: z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodObject<{
                choice: z.ZodObject<{
                    type: z.ZodLiteral<"list">;
                    number: z.ZodNumber;
                    list: z.ZodArray<z.ZodObject<{
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
                    }>, "many">;
                    isRepeatable: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        availableAt?: number | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                }, {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        availableAt?: number | undefined;
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
                        availableAt?: number | undefined;
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
                        availableAt?: number | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                };
            }>]>, "many">;
        }, "strip", z.ZodTypeAny, {
            tag: string;
            variants: ({
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
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
            })[];
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            priority?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            availableUntil?: number | undefined;
            subType?: string | undefined;
            source?: string | undefined;
            tags?: string[] | undefined;
        }, {
            tag: string;
            variants: ({
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
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
            })[];
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
        }>]>, "many">>;
        canSpeak: z.ZodOptional<z.ZodBoolean>;
        telepathy: z.ZodOptional<z.ZodString>;
        languages: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{
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
        }>, "many">, z.ZodObject<{
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
        }>, z.ZodObject<{
            choice: z.ZodObject<{
                type: z.ZodLiteral<"list">;
                number: z.ZodNumber;
                list: z.ZodArray<z.ZodObject<{
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
                }>, "many">;
                isRepeatable: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            }, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
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
                    availableAt?: number | undefined;
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
                    availableAt?: number | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        }>]>>;
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
        resistances: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        immunities: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        vulnerabilities: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        conditionImmunities: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        skills: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{
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
        }>, "many">, z.ZodObject<{
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
        }>, z.ZodObject<{
            choice: z.ZodObject<{
                type: z.ZodLiteral<"list">;
                number: z.ZodNumber;
                list: z.ZodArray<z.ZodObject<{
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
                }>, "many">;
                isRepeatable: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            }, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
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
                    availableAt?: number | undefined;
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
                    availableAt?: number | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        }>]>>;
        savingThrows: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        speeds: z.ZodOptional<z.ZodObject<{
            base: z.ZodOptional<z.ZodString>;
            burrow: z.ZodOptional<z.ZodString>;
            climb: z.ZodOptional<z.ZodString>;
            fly: z.ZodOptional<z.ZodString>;
            hover: z.ZodOptional<z.ZodString>;
            swim: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            base?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        }, {
            base?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        }>>;
        subtypes: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        }>]>>;
        id: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
    }, "strict", z.ZodTypeAny, {
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
            variants: ({
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
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
            })[];
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
    }, {
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
            variants: ({
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
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
            })[];
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
    }>;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    object: {
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
            variants: ({
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
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
            })[];
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
    };
    id: number;
}, {
    object: {
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
            variants: ({
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
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
            })[];
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
    };
    id: number;
}>;
export declare const postClassvariant: z.ZodObject<{
    game: z.ZodNumber;
    classId: z.ZodNumber;
    object: z.ZodObject<{
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
        enableGenerator: z.ZodOptional<z.ZodBoolean>;
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
                    availableAt: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }>, "many">, z.ZodObject<{
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
                }>, z.ZodObject<{
                    choice: z.ZodObject<{
                        type: z.ZodLiteral<"list">;
                        number: z.ZodNumber;
                        list: z.ZodArray<z.ZodObject<{
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
                        }>, "many">;
                        isRepeatable: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    }, {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
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
                            availableAt?: number | undefined;
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
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                }>]>;
            }, "strict", z.ZodTypeAny, {
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
            }, {
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
        }, {
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
        }>>;
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
            speedBaseBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            speedBurrowBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            speedClimbBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            speedFlyBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            speedHoverBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            speedSwimBonus: z.ZodOptional<z.ZodObject<{
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
        }>>;
        actions: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            tag: z.ZodString;
            actionType: z.ZodOptional<z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>>;
            priority: z.ZodOptional<z.ZodNumber>;
            availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
            availableUntil: z.ZodOptional<z.ZodNumber>;
            subType: z.ZodOptional<z.ZodString>;
            source: z.ZodOptional<z.ZodString>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            variants: z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodObject<{
                choice: z.ZodObject<{
                    type: z.ZodLiteral<"list">;
                    number: z.ZodNumber;
                    list: z.ZodArray<z.ZodObject<{
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
                    }>, "many">;
                    isRepeatable: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        availableAt?: number | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                }, {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        availableAt?: number | undefined;
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
                        availableAt?: number | undefined;
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
                        availableAt?: number | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                };
            }>]>, "many">;
        }, "strip", z.ZodTypeAny, {
            tag: string;
            variants: ({
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
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
            })[];
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            priority?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            availableUntil?: number | undefined;
            subType?: string | undefined;
            source?: string | undefined;
            tags?: string[] | undefined;
        }, {
            tag: string;
            variants: ({
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
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
            })[];
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
        }>]>, "many">>;
        canSpeak: z.ZodOptional<z.ZodBoolean>;
        telepathy: z.ZodOptional<z.ZodString>;
        languages: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{
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
        }>, "many">, z.ZodObject<{
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
        }>, z.ZodObject<{
            choice: z.ZodObject<{
                type: z.ZodLiteral<"list">;
                number: z.ZodNumber;
                list: z.ZodArray<z.ZodObject<{
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
                }>, "many">;
                isRepeatable: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            }, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
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
                    availableAt?: number | undefined;
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
                    availableAt?: number | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        }>]>>;
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
        resistances: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        immunities: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        vulnerabilities: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        conditionImmunities: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        skills: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{
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
        }>, "many">, z.ZodObject<{
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
        }>, z.ZodObject<{
            choice: z.ZodObject<{
                type: z.ZodLiteral<"list">;
                number: z.ZodNumber;
                list: z.ZodArray<z.ZodObject<{
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
                }>, "many">;
                isRepeatable: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            }, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
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
                    availableAt?: number | undefined;
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
                    availableAt?: number | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        }>]>>;
        savingThrows: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        speeds: z.ZodOptional<z.ZodObject<{
            base: z.ZodOptional<z.ZodString>;
            burrow: z.ZodOptional<z.ZodString>;
            climb: z.ZodOptional<z.ZodString>;
            fly: z.ZodOptional<z.ZodString>;
            hover: z.ZodOptional<z.ZodString>;
            swim: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            base?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        }, {
            base?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        }>>;
        subtypes: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        }>]>>;
        id: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
    }, "strict", z.ZodTypeAny, {
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
            variants: ({
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
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
            })[];
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
    }, {
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
            variants: ({
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
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
            })[];
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
    }>;
}, "strip", z.ZodTypeAny, {
    object: {
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
            variants: ({
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
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
            })[];
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
    };
    game: number;
    classId: number;
}, {
    object: {
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
            variants: ({
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
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
            })[];
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
    };
    game: number;
    classId: number;
}>;
export declare const putClassvariant: z.ZodObject<{
    object: z.ZodObject<{
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
        enableGenerator: z.ZodOptional<z.ZodBoolean>;
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
                    availableAt: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }, {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }>, "many">, z.ZodObject<{
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
                }>, z.ZodObject<{
                    choice: z.ZodObject<{
                        type: z.ZodLiteral<"list">;
                        number: z.ZodNumber;
                        list: z.ZodArray<z.ZodObject<{
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
                        }>, "many">;
                        isRepeatable: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    }, {
                        number: number;
                        type: "list";
                        list: {
                            value: string;
                            id?: number | undefined;
                            availableAt?: number | undefined;
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
                            availableAt?: number | undefined;
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
                            availableAt?: number | undefined;
                        }[];
                        isRepeatable?: boolean | undefined;
                    };
                }>]>;
            }, "strict", z.ZodTypeAny, {
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
            }, {
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
        }, {
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
        }>>;
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
            speedBaseBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            speedBurrowBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            speedClimbBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            speedFlyBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            speedHoverBonus: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name?: string | undefined;
            }, {
                value: string;
                name?: string | undefined;
            }>>;
            speedSwimBonus: z.ZodOptional<z.ZodObject<{
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
        }>>;
        actions: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            tag: z.ZodString;
            actionType: z.ZodOptional<z.ZodEnum<["trait", "legendary", "action", "reaction", "bonus", "attack", "multiattack", "mythic", "lair"]>>;
            priority: z.ZodOptional<z.ZodNumber>;
            availableUnit: z.ZodOptional<z.ZodEnum<["level", "cr"]>>;
            availableUntil: z.ZodOptional<z.ZodNumber>;
            subType: z.ZodOptional<z.ZodString>;
            source: z.ZodOptional<z.ZodString>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            variants: z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
            }>, z.ZodObject<{
                choice: z.ZodObject<{
                    type: z.ZodLiteral<"list">;
                    number: z.ZodNumber;
                    list: z.ZodArray<z.ZodObject<{
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
                    }>, "many">;
                    isRepeatable: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        availableAt?: number | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                }, {
                    number: number;
                    type: "list";
                    list: {
                        value: string;
                        id?: number | undefined;
                        availableAt?: number | undefined;
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
                        availableAt?: number | undefined;
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
                        availableAt?: number | undefined;
                    }[];
                    isRepeatable?: boolean | undefined;
                };
            }>]>, "many">;
        }, "strip", z.ZodTypeAny, {
            tag: string;
            variants: ({
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
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
            })[];
            actionType?: "trait" | "legendary" | "action" | "reaction" | "bonus" | "attack" | "multiattack" | "mythic" | "lair" | undefined;
            priority?: number | undefined;
            availableUnit?: "level" | "cr" | undefined;
            availableUntil?: number | undefined;
            subType?: string | undefined;
            source?: string | undefined;
            tags?: string[] | undefined;
        }, {
            tag: string;
            variants: ({
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
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
            })[];
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
        }>]>, "many">>;
        canSpeak: z.ZodOptional<z.ZodBoolean>;
        telepathy: z.ZodOptional<z.ZodString>;
        languages: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{
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
        }>, "many">, z.ZodObject<{
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
        }>, z.ZodObject<{
            choice: z.ZodObject<{
                type: z.ZodLiteral<"list">;
                number: z.ZodNumber;
                list: z.ZodArray<z.ZodObject<{
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
                }>, "many">;
                isRepeatable: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            }, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
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
                    availableAt?: number | undefined;
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
                    availableAt?: number | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        }>]>>;
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
        resistances: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        immunities: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        vulnerabilities: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        conditionImmunities: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        skills: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{
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
        }>, "many">, z.ZodObject<{
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
        }>, z.ZodObject<{
            choice: z.ZodObject<{
                type: z.ZodLiteral<"list">;
                number: z.ZodNumber;
                list: z.ZodArray<z.ZodObject<{
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
                }>, "many">;
                isRepeatable: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            }, {
                number: number;
                type: "list";
                list: {
                    value: string;
                    id?: number | undefined;
                    availableAt?: number | undefined;
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
                    availableAt?: number | undefined;
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
                    availableAt?: number | undefined;
                }[];
                isRepeatable?: boolean | undefined;
            };
        }>]>>;
        savingThrows: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        speeds: z.ZodOptional<z.ZodObject<{
            base: z.ZodOptional<z.ZodString>;
            burrow: z.ZodOptional<z.ZodString>;
            climb: z.ZodOptional<z.ZodString>;
            fly: z.ZodOptional<z.ZodString>;
            hover: z.ZodOptional<z.ZodString>;
            swim: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            base?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        }, {
            base?: string | undefined;
            burrow?: string | undefined;
            climb?: string | undefined;
            fly?: string | undefined;
            hover?: string | undefined;
            swim?: string | undefined;
        }>>;
        subtypes: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        }>]>>;
        id: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
    }, "strict", z.ZodTypeAny, {
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
            variants: ({
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
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
            })[];
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
    }, {
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
            variants: ({
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
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
            })[];
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
    }>;
}, "strip", z.ZodTypeAny, {
    object: {
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
            variants: ({
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
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
            })[];
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
    };
}, {
    object: {
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
            variants: ({
                choice: {
                    type: "random";
                    source: "objects" | "languages" | "skills";
                    resultType: "object" | "nameId";
                    number?: number | undefined;
                    objectType?: number | undefined;
                    filters?: {
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
            })[];
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
    };
}>;
//# sourceMappingURL=classvariant.d.ts.map