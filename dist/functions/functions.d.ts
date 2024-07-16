/** Handles multiple calls to the same function: only one is called after X seconds */
export declare function debounce(cb: unknown, delay?: number): unknown;
/** Handles multiple calls to the same function: one is called immmediately and others are called after X seconds */
export declare function throttle<T extends unknown[]>(cb: (...args: T) => void, delay?: number): (...args: T) => void;
export declare function random(min: number, max: number): number;
export declare function randomDecimal(min: number, max: number, distribution?: 'beginning' | 'middle' | 'end'): number;
/**
 * Rounds a number to 2 decimal places.
 */
export declare function round2Decimals(value: number): number;
/**
 * Rounds a number to n decimal places.
 */
export declare function roundNDecimals(value: number, n: number): number;
export declare function capitalizeFirst(str: string): string;
/**
 * Toggles an item in an array. If the item is not present, it will be added. If it is present, it will be removed.
 */
export declare function toggle<T>(array: T[], item: T): void;
/**
 * Removes an item from an array.
 */
export declare function removeItem<T>(anArray: Array<T>, anItem: T): T[];
/**
 * Adds an item to an array if it is not already present.
 */
export declare function addUniqueItem<T>(anArray: Array<T>, anItem: T): T[];
export declare function hasDefined(object: any, key: string): boolean;
export declare function createKeyIfUndefined(object: any, key: string): void;
export declare function deleteKeyIfEmpty(object: any, key: string): void;
//# sourceMappingURL=functions.d.ts.map