export type Ability = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
export declare const abilities: Ability[];
export declare const abilityNames: {
    [key in Ability]: string;
};
export declare const speedTypes: string[];
type SkillsList = Record<string, Ability>;
export declare const skillTypes: SkillsList;
export declare const sensesList: string[];
export declare const challengeStats: {
    '0': {
        xp: number;
        proficiency: number;
    };
    '1/8': {
        xp: number;
        proficiency: number;
    };
    '1/4': {
        xp: number;
        proficiency: number;
    };
    '1/2': {
        xp: number;
        proficiency: number;
    };
    '1': {
        xp: number;
        proficiency: number;
    };
    '2': {
        xp: number;
        proficiency: number;
    };
    '3': {
        xp: number;
        proficiency: number;
    };
    '4': {
        xp: number;
        proficiency: number;
    };
    '5': {
        xp: number;
        proficiency: number;
    };
    '6': {
        xp: number;
        proficiency: number;
    };
    '7': {
        xp: number;
        proficiency: number;
    };
    '8': {
        xp: number;
        proficiency: number;
    };
    '9': {
        xp: number;
        proficiency: number;
    };
    '10': {
        xp: number;
        proficiency: number;
    };
    '11': {
        xp: number;
        proficiency: number;
    };
    '12': {
        xp: number;
        proficiency: number;
    };
    '13': {
        xp: number;
        proficiency: number;
    };
    '14': {
        xp: number;
        proficiency: number;
    };
    '15': {
        xp: number;
        proficiency: number;
    };
    '16': {
        xp: number;
        proficiency: number;
    };
    '17': {
        xp: number;
        proficiency: number;
    };
    '18': {
        xp: number;
        proficiency: number;
    };
    '19': {
        xp: number;
        proficiency: number;
    };
    '20': {
        xp: number;
        proficiency: number;
    };
    '21': {
        xp: number;
        proficiency: number;
    };
    '22': {
        xp: number;
        proficiency: number;
    };
    '23': {
        xp: number;
        proficiency: number;
    };
    '24': {
        xp: number;
        proficiency: number;
    };
    '25': {
        xp: number;
        proficiency: number;
    };
    '26': {
        xp: number;
        proficiency: number;
    };
    '27': {
        xp: number;
        proficiency: number;
    };
    '28': {
        xp: number;
        proficiency: number;
    };
    '29': {
        xp: number;
        proficiency: number;
    };
    '30': {
        xp: number;
        proficiency: number;
    };
};
export declare function getChallengeString(CR: number): string;
export declare function getChallengeNumber(CR: string): number;
export type Size = '1' | '2' | '3' | '4' | '5' | '6';
export type SizeStats = {
    [key in Size]: {
        name: string;
        space: number;
        squares: number;
        hitDice: number;
    };
};
export declare const sizeStats: SizeStats;
export declare function typeToNumber(type?: string | null | undefined): 1 | 2 | 0 | 8 | 10 | 3 | 4 | 5 | 6 | 7 | 9 | 12 | 11 | 13 | 14;
export declare function numberToType(number?: number): "humanoid" | "aberration" | "beast" | "celestial" | "construct" | "dragon" | "elemental" | "fey" | "fiend" | "giant" | "monstrosity" | "ooze" | "plant" | "undead" | "unknown";
export type Challenge = {
    CR: number;
    CI: number;
    abilityScoresAvg: number;
    abilityScoresMax: number;
    AC: number;
    HP: number;
    attack: number;
    damage: number;
    traits: number;
    actions: number;
    miscStats: number;
};
export type ChallengeTable = {
    [key: string]: Challenge;
};
export declare const challengeTable: ChallengeTable;
export {};
//# sourceMappingURL=index.d.ts.map