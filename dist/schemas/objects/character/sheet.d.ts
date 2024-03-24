import { z } from 'zod';
export declare const tokenObject: z.ZodObject<{
    topPx: z.ZodNumber;
    leftPx: z.ZodNumber;
    widthPx: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    topPx: number;
    leftPx: number;
    widthPx: number;
}, {
    topPx: number;
    leftPx: number;
    widthPx: number;
}>;
export declare const imageObject: z.ZodObject<{
    url: z.ZodString;
    artist: z.ZodOptional<z.ZodString>;
    artistUrl: z.ZodOptional<z.ZodString>;
    elementHeightPx: z.ZodOptional<z.ZodNumber>;
    backgroundHeightPerc: z.ZodOptional<z.ZodNumber>;
    backgroundPositionTopPx: z.ZodOptional<z.ZodNumber>;
    backgroundPositionLeftPx: z.ZodOptional<z.ZodNumber>;
    mask: z.ZodOptional<z.ZodString>;
    token: z.ZodOptional<z.ZodObject<{
        topPx: z.ZodNumber;
        leftPx: z.ZodNumber;
        widthPx: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        topPx: number;
        leftPx: number;
        widthPx: number;
    }, {
        topPx: number;
        leftPx: number;
        widthPx: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    url: string;
    artist?: string | undefined;
    artistUrl?: string | undefined;
    elementHeightPx?: number | undefined;
    backgroundHeightPerc?: number | undefined;
    backgroundPositionTopPx?: number | undefined;
    backgroundPositionLeftPx?: number | undefined;
    mask?: string | undefined;
    token?: {
        topPx: number;
        leftPx: number;
        widthPx: number;
    } | undefined;
}, {
    url: string;
    artist?: string | undefined;
    artistUrl?: string | undefined;
    elementHeightPx?: number | undefined;
    backgroundHeightPerc?: number | undefined;
    backgroundPositionTopPx?: number | undefined;
    backgroundPositionLeftPx?: number | undefined;
    mask?: string | undefined;
    token?: {
        topPx: number;
        leftPx: number;
        widthPx: number;
    } | undefined;
}>;
export declare const sheet: z.ZodObject<{
    images: z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        artist: z.ZodOptional<z.ZodString>;
        artistUrl: z.ZodOptional<z.ZodString>;
        elementHeightPx: z.ZodOptional<z.ZodNumber>;
        backgroundHeightPerc: z.ZodOptional<z.ZodNumber>;
        backgroundPositionTopPx: z.ZodOptional<z.ZodNumber>;
        backgroundPositionLeftPx: z.ZodOptional<z.ZodNumber>;
        mask: z.ZodOptional<z.ZodString>;
        token: z.ZodOptional<z.ZodObject<{
            topPx: z.ZodNumber;
            leftPx: z.ZodNumber;
            widthPx: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            topPx: number;
            leftPx: number;
            widthPx: number;
        }, {
            topPx: number;
            leftPx: number;
            widthPx: number;
        }>>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        artist?: string | undefined;
        artistUrl?: string | undefined;
        elementHeightPx?: number | undefined;
        backgroundHeightPerc?: number | undefined;
        backgroundPositionTopPx?: number | undefined;
        backgroundPositionLeftPx?: number | undefined;
        mask?: string | undefined;
        token?: {
            topPx: number;
            leftPx: number;
            widthPx: number;
        } | undefined;
    }, {
        url: string;
        artist?: string | undefined;
        artistUrl?: string | undefined;
        elementHeightPx?: number | undefined;
        backgroundHeightPerc?: number | undefined;
        backgroundPositionTopPx?: number | undefined;
        backgroundPositionLeftPx?: number | undefined;
        mask?: string | undefined;
        token?: {
            topPx: number;
            leftPx: number;
            widthPx: number;
        } | undefined;
    }>, "many">;
    layout: z.ZodOptional<z.ZodString>;
    decoration: z.ZodOptional<z.ZodString>;
    statBlockOffsetPx: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    images: {
        url: string;
        artist?: string | undefined;
        artistUrl?: string | undefined;
        elementHeightPx?: number | undefined;
        backgroundHeightPerc?: number | undefined;
        backgroundPositionTopPx?: number | undefined;
        backgroundPositionLeftPx?: number | undefined;
        mask?: string | undefined;
        token?: {
            topPx: number;
            leftPx: number;
            widthPx: number;
        } | undefined;
    }[];
    layout?: string | undefined;
    decoration?: string | undefined;
    statBlockOffsetPx?: number | undefined;
}, {
    images: {
        url: string;
        artist?: string | undefined;
        artistUrl?: string | undefined;
        elementHeightPx?: number | undefined;
        backgroundHeightPerc?: number | undefined;
        backgroundPositionTopPx?: number | undefined;
        backgroundPositionLeftPx?: number | undefined;
        mask?: string | undefined;
        token?: {
            topPx: number;
            leftPx: number;
            widthPx: number;
        } | undefined;
    }[];
    layout?: string | undefined;
    decoration?: string | undefined;
    statBlockOffsetPx?: number | undefined;
}>;
//# sourceMappingURL=sheet.d.ts.map