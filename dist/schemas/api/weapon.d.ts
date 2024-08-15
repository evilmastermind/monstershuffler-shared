import { z } from 'zod';
export declare const sPostWeaponBody: z.ZodObject<{
    game: z.ZodNumber;
    object: z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
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
        reach: z.ZodOptional<z.ZodString>;
        targets: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        id?: number | undefined;
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
        reach?: string | undefined;
        targets?: string | undefined;
        properties?: string[] | undefined;
    }, {
        id?: number | undefined;
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
        reach?: string | undefined;
        targets?: string | undefined;
        properties?: string[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    object: {
        id?: number | undefined;
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
        reach?: string | undefined;
        targets?: string | undefined;
        properties?: string[] | undefined;
    };
    game: number;
}, {
    object: {
        id?: number | undefined;
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
        reach?: string | undefined;
        targets?: string | undefined;
        properties?: string[] | undefined;
    };
    game: number;
}>;
export declare const sPutWeapon: z.ZodObject<{
    object: z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
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
        reach: z.ZodOptional<z.ZodString>;
        targets: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        id?: number | undefined;
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
        reach?: string | undefined;
        targets?: string | undefined;
        properties?: string[] | undefined;
    }, {
        id?: number | undefined;
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
        reach?: string | undefined;
        targets?: string | undefined;
        properties?: string[] | undefined;
    }>;
    game: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    object: {
        id?: number | undefined;
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
        reach?: string | undefined;
        targets?: string | undefined;
        properties?: string[] | undefined;
    };
    game?: number | undefined;
}, {
    object: {
        id?: number | undefined;
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
        reach?: string | undefined;
        targets?: string | undefined;
        properties?: string[] | undefined;
    };
    game?: number | undefined;
}>;
export declare const sGetWeaponParams: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
export declare const sGetWeaponResponse: z.ZodObject<{
    object: z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
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
        reach: z.ZodOptional<z.ZodString>;
        targets: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        id?: number | undefined;
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
        reach?: string | undefined;
        targets?: string | undefined;
        properties?: string[] | undefined;
    }, {
        id?: number | undefined;
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
        reach?: string | undefined;
        targets?: string | undefined;
        properties?: string[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    object: {
        id?: number | undefined;
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
        reach?: string | undefined;
        targets?: string | undefined;
        properties?: string[] | undefined;
    };
}, {
    object: {
        id?: number | undefined;
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
        reach?: string | undefined;
        targets?: string | undefined;
        properties?: string[] | undefined;
    };
}>;
export declare const sGetWeaponListResponse: z.ZodObject<{
    list: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        userid: z.ZodNumber;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        userid: number;
    }, {
        id: number;
        name: string;
        userid: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    list: {
        id: number;
        name: string;
        userid: number;
    }[];
}, {
    list: {
        id: number;
        name: string;
        userid: number;
    }[];
}>;
//# sourceMappingURL=weapon.d.ts.map