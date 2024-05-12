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
    canvasHeightPx: z.ZodNumber;
    imageHeightPx: z.ZodNumber;
    imagePositionTopPx: z.ZodNumber;
    imagePositionLeftPx: z.ZodNumber;
    mask: z.ZodOptional<z.ZodString>;
    token: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    url: string;
    canvasHeightPx: number;
    imageHeightPx: number;
    imagePositionTopPx: number;
    imagePositionLeftPx: number;
    token: {
        topPx: number;
        leftPx: number;
        widthPx: number;
    };
    artist?: string | undefined;
    artistUrl?: string | undefined;
    mask?: string | undefined;
}, {
    url: string;
    canvasHeightPx: number;
    imageHeightPx: number;
    imagePositionTopPx: number;
    imagePositionLeftPx: number;
    token: {
        topPx: number;
        leftPx: number;
        widthPx: number;
    };
    artist?: string | undefined;
    artistUrl?: string | undefined;
    mask?: string | undefined;
}>;
export declare const sheet: z.ZodObject<{
    images: z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        artist: z.ZodOptional<z.ZodString>;
        artistUrl: z.ZodOptional<z.ZodString>;
        canvasHeightPx: z.ZodNumber;
        imageHeightPx: z.ZodNumber;
        imagePositionTopPx: z.ZodNumber;
        imagePositionLeftPx: z.ZodNumber;
        mask: z.ZodOptional<z.ZodString>;
        token: z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        url: string;
        canvasHeightPx: number;
        imageHeightPx: number;
        imagePositionTopPx: number;
        imagePositionLeftPx: number;
        token: {
            topPx: number;
            leftPx: number;
            widthPx: number;
        };
        artist?: string | undefined;
        artistUrl?: string | undefined;
        mask?: string | undefined;
    }, {
        url: string;
        canvasHeightPx: number;
        imageHeightPx: number;
        imagePositionTopPx: number;
        imagePositionLeftPx: number;
        token: {
            topPx: number;
            leftPx: number;
            widthPx: number;
        };
        artist?: string | undefined;
        artistUrl?: string | undefined;
        mask?: string | undefined;
    }>, "many">;
    layout: z.ZodOptional<z.ZodString>;
    showRoleplayStats: z.ZodOptional<z.ZodBoolean>;
    decoration: z.ZodOptional<z.ZodString>;
    statBlockOffsetPx: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    images: {
        url: string;
        canvasHeightPx: number;
        imageHeightPx: number;
        imagePositionTopPx: number;
        imagePositionLeftPx: number;
        token: {
            topPx: number;
            leftPx: number;
            widthPx: number;
        };
        artist?: string | undefined;
        artistUrl?: string | undefined;
        mask?: string | undefined;
    }[];
    layout?: string | undefined;
    showRoleplayStats?: boolean | undefined;
    decoration?: string | undefined;
    statBlockOffsetPx?: number | undefined;
}, {
    images: {
        url: string;
        canvasHeightPx: number;
        imageHeightPx: number;
        imagePositionTopPx: number;
        imagePositionLeftPx: number;
        token: {
            topPx: number;
            leftPx: number;
            widthPx: number;
        };
        artist?: string | undefined;
        artistUrl?: string | undefined;
        mask?: string | undefined;
    }[];
    layout?: string | undefined;
    showRoleplayStats?: boolean | undefined;
    decoration?: string | undefined;
    statBlockOffsetPx?: number | undefined;
}>;
//# sourceMappingURL=sheet.d.ts.map