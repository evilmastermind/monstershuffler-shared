"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCharacterHook = void 0;
const parsers_1 = require("../../parsers");
function calculateCharacterHook(character) {
    const c = character.character;
    const hook = c?.user?.characterHook || c?.characterHook;
    if (!hook) {
        return;
    }
    const hookParts = (0, parsers_1.replaceTags)(hook, character);
    const characterHook = [{ string: 'The' }];
    if (c?.class?.name) {
        characterHook.push((0, parsers_1.createPart)(' '));
        characterHook.push((0, parsers_1.createPart)(c.class.name, 'class', [], c?.class?.id));
    }
    if (c?.background?.name) {
        const pronouns = character.statistics.pronouns;
        const backgroundName = pronouns === 'female' ? c.background.femaleName : c.background.name;
        characterHook.push((0, parsers_1.createPart)(' '));
        characterHook.push((0, parsers_1.createPart)(backgroundName, 'background', [], c.background?.id));
    }
    if (characterHook.length === 1) {
        characterHook.push((0, parsers_1.createPart)(' '));
        characterHook.push((0, parsers_1.createPart)(c?.racevariant?.name || c?.race?.name || 'person', 'race', [], c?.racevariant?.id || c?.race?.id));
    }
    characterHook.push((0, parsers_1.createPart)(' '));
    if (hook) {
        characterHook.push(...hookParts);
    }
    character.statistics.characterHook = characterHook;
}
exports.calculateCharacterHook = calculateCharacterHook;
