import { z } from 'zod';
export declare const postWeapon: z.ZodObject<{
    game: z.ZodNumber;
    object: z.ZodObject<{
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
        properties: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        properties: string[];
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
    }, {
        properties: string[];
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
    }>;
}, "strip", z.ZodTypeAny, {
    object: {
        properties: string[];
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
    };
    game: number;
}, {
    object: {
        properties: string[];
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
    };
    game: number;
}>;
export declare const putWeapon: z.ZodObject<{
    object: z.ZodObject<{
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
        properties: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        properties: string[];
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
    }, {
        properties: string[];
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
    }>;
}, "strip", z.ZodTypeAny, {
    object: {
        properties: string[];
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
    };
}, {
    object: {
        properties: string[];
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
    };
}>;
export declare const getWeaponParams: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
export declare const getWeaponResponse: z.ZodObject<{
    object: z.ZodObject<{
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
        properties: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        properties: string[];
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
    }, {
        properties: string[];
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
    }>;
}, "strip", z.ZodTypeAny, {
    object: {
        properties: string[];
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
    };
}, {
    object: {
        properties: string[];
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
    };
}>;
export declare const getWeaponListResponse: z.ZodObject<{
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
//# sourceMappingURL=weapon.d.ts.map