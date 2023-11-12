import { z } from 'zod';
export declare const alignmentModifiersSingle: z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber], null>;
export declare const alignmentModifiers: z.ZodTuple<[z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber], null>, z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber], null>], null>;
export declare const alignmentEthical: z.ZodEnum<["Lawful", "Neutral", "Chaotic", "Any", "Unaligned"]>;
export declare const alignmentMoral: z.ZodEnum<["Good", "Neutral", "Evil", "Any"]>;
export declare const alignmentStats: {
    alignmentEthical: z.ZodOptional<z.ZodEnum<["Lawful", "Neutral", "Chaotic", "Any", "Unaligned"]>>;
    alignmentMoral: z.ZodOptional<z.ZodEnum<["Good", "Neutral", "Evil", "Any"]>>;
};
//# sourceMappingURL=alignment.d.ts.map