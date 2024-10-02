"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportRoleplayStats = void 0;
function exportRoleplayStats(character) {
    if (!character.statistics || !character.tags) {
        return '';
    }
    const s = character.statistics;
    const t = character.tags;
    let output = '';
    output += s.fullName;
    output += `, ${['male', 'female'].includes(s.pronouns) ? `${s.pronouns}` : ''} ${t.race}`;
    output += `${s.characterHook?.length ? `\n ${s.characterHook?.join('')}` : ''}`;
    output += '\n';
    output += `${s.age ? `\nAge: ${s.age}` : ''}`;
    output += `${s.alignment?.string ? `\nAlignment: ${s.alignment.string}` : ''}`;
    output += `${s.personality?.name ? `\nPersonality: ${s.personality.name}` : ''}`;
    output += `${s.height ? `\nHeight: ${s.height}` : ''}`;
    output += `${s.bodyType ? `\nBody Type: ${s.bodyType}` : ''}`;
    output += `${s.voice?.length ? `\nVoice: ${s.voice}` : ''}`;
    output += '\n';
    output += `${s.physicalAppearance ? `\n${s.physicalAppearance}` : ''}`;
    return output;
}
exports.exportRoleplayStats = exportRoleplayStats;
