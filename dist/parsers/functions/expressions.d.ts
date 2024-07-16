import type { Character } from "@/types";
type Result<T, E = Error> = {
    ok: true;
    value: T;
} | {
    ok: false;
    error: E;
};
export declare function parseExpression(expression: string | undefined, character: Character, source?: string): Result<number>;
export declare function parseExpressionNumeric(expression: string | undefined, character: Character, source?: string): number;
export {};
//# sourceMappingURL=expressions.d.ts.map