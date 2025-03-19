"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRoleplayStats = calculateRoleplayStats;
const functions_1 = require("../../functions");
const functions_2 = require("../functions");
function calculateRoleplayStats(character) {
    if (!character.statistics) {
        return;
    }
    const s = character.statistics;
    const c = character.character;
    s.race =
        c?.racevariant?.name ||
            c?.race?.name ||
            s.type.string;
    if ('class' in c && c.class) {
        s.class = c?.class?.name || '';
    }
    if ('age' in c && c.age) {
        s.age = {
            name: c.age.string,
            number: c.age.number,
            string: `${(0, functions_1.capitalizeFirst)(c.age.string)} (${c.age.number} years old)`,
        };
    }
    if (c.trait) {
        s.personality = c.trait;
    }
    if (c.weight) {
        s.bodyType = (0, functions_1.capitalizeFirst)(c.weight);
    }
    if (c.height !== undefined) {
        s.height = (0, functions_2.feetDecimalToFeetInches)(c.height);
    }
    if (c.voice) {
        s.voice = c.voice?.character ? `${c.voice.character} (${c.voice.person})` : c.voice.person;
        s.voice = c.voice?.production ? `${s.voice} in ${c.voice.production}` : s.voice;
    }
    if (c.physicalAppearance) {
        s.physicalAppearance = c.physicalAppearance;
    }
    // backstory from character hooks (for generated NPCs)
    if (c.characterHooks?.length && c?.user?.backstory?.string === undefined) {
        if (!c.user) {
            c.user = {};
        }
        c.user.backstory = {
            string: '',
        };
        for (const hook of c.characterHooks) {
            const sentence = (0, functions_2.replaceTags)(hook.sentence, character);
            if (c.user.backstory.string) {
                c.user.backstory.string += '\n\n';
            }
            c.user.backstory.string += `### ${hook.type} \n\n ${sentence.map((s) => s.string).join('')}`;
        }
        ;
    }
}
