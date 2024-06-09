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
    canvasHeightPx: z.ZodOptional<z.ZodNumber>;
    canvasWidthPx: z.ZodOptional<z.ZodNumber>;
    sheetWidthPx: z.ZodOptional<z.ZodNumber>;
    imageHeightPx: z.ZodOptional<z.ZodNumber>;
    imagePositionTopPx: z.ZodOptional<z.ZodNumber>;
    imagePositionLeftPx: z.ZodOptional<z.ZodNumber>;
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
    canvasHeightPx?: number | undefined;
    canvasWidthPx?: number | undefined;
    sheetWidthPx?: number | undefined;
    imageHeightPx?: number | undefined;
    imagePositionTopPx?: number | undefined;
    imagePositionLeftPx?: number | undefined;
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
    canvasHeightPx?: number | undefined;
    canvasWidthPx?: number | undefined;
    sheetWidthPx?: number | undefined;
    imageHeightPx?: number | undefined;
    imagePositionTopPx?: number | undefined;
    imagePositionLeftPx?: number | undefined;
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
        canvasHeightPx: z.ZodOptional<z.ZodNumber>;
        canvasWidthPx: z.ZodOptional<z.ZodNumber>;
        sheetWidthPx: z.ZodOptional<z.ZodNumber>;
        imageHeightPx: z.ZodOptional<z.ZodNumber>;
        imagePositionTopPx: z.ZodOptional<z.ZodNumber>;
        imagePositionLeftPx: z.ZodOptional<z.ZodNumber>;
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
        canvasHeightPx?: number | undefined;
        canvasWidthPx?: number | undefined;
        sheetWidthPx?: number | undefined;
        imageHeightPx?: number | undefined;
        imagePositionTopPx?: number | undefined;
        imagePositionLeftPx?: number | undefined;
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
        canvasHeightPx?: number | undefined;
        canvasWidthPx?: number | undefined;
        sheetWidthPx?: number | undefined;
        imageHeightPx?: number | undefined;
        imagePositionTopPx?: number | undefined;
        imagePositionLeftPx?: number | undefined;
        mask?: string | undefined;
        token?: {
            topPx: number;
            leftPx: number;
            widthPx: number;
        } | undefined;
    }>, "many">;
    layout: z.ZodOptional<z.ZodString>;
    showRoleplayStats: z.ZodOptional<z.ZodBoolean>;
    decoration: z.ZodOptional<z.ZodString>;
    statBlockOffsetPx: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    images: {
        url: string;
        artist?: string | undefined;
        artistUrl?: string | undefined;
        canvasHeightPx?: number | undefined;
        canvasWidthPx?: number | undefined;
        sheetWidthPx?: number | undefined;
        imageHeightPx?: number | undefined;
        imagePositionTopPx?: number | undefined;
        imagePositionLeftPx?: number | undefined;
        mask?: string | undefined;
        token?: {
            topPx: number;
            leftPx: number;
            widthPx: number;
        } | undefined;
    }[];
    layout?: string | undefined;
    showRoleplayStats?: boolean | undefined;
    decoration?: string | undefined;
    statBlockOffsetPx?: number | undefined;
}, {
    images: {
        url: string;
        artist?: string | undefined;
        artistUrl?: string | undefined;
        canvasHeightPx?: number | undefined;
        canvasWidthPx?: number | undefined;
        sheetWidthPx?: number | undefined;
        imageHeightPx?: number | undefined;
        imagePositionTopPx?: number | undefined;
        imagePositionLeftPx?: number | undefined;
        mask?: string | undefined;
        token?: {
            topPx: number;
            leftPx: number;
            widthPx: number;
        } | undefined;
    }[];
    layout?: string | undefined;
    showRoleplayStats?: boolean | undefined;
    decoration?: string | undefined;
    statBlockOffsetPx?: number | undefined;
}>;
//# sourceMappingURL=sheet.d.ts.map