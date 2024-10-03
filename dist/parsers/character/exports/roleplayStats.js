"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportRoleplayStats = void 0;
const functions_1 = require("../../../parsers/functions");
function exportRoleplayStats(character, heightUnit = 'feet') {
    if (!character.statistics || !character.tags) {
        return '';
    }
    const c = character.character;
    const s = character.statistics;
    const t = character.tags;
    let output = '';
    output += s.fullName;
    output += `, ${['male', 'female'].includes(s.pronouns) ? `${s.pronouns}` : ''} ${t.race}`;
    output += `${s.characterHook?.length ? `\n${s.characterHook?.map((chunk) => chunk.string).join('')}` : ''}`;
    output += '\n';
    output += `${s.age ? `\nAge: ${s.age.string}` : ''}`;
    output += `${s.alignment?.string ? `\nAlignment: ${s.alignment.string}` : ''}`;
    output += `${s.personality?.name ? `\nPersonality: ${s.personality.name}` : ''}`;
    output += `${c.height ? `\nHeight: ${(0, functions_1.feetDecimalToUnit)(c.height, heightUnit)}` : ''}`;
    output += `${s.bodyType ? `\nBody Type: ${s.bodyType}` : ''}`;
    output += `${s.voice?.length ? `\nVoice: ${s.voice}` : ''}`;
    output += '\n';
    output += `${c.physicalAppearance ? `\n${c.physicalAppearance}` : ''}`;
    return output;
}
exports.exportRoleplayStats = exportRoleplayStats;
