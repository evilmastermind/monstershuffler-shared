"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCharacterHook = calculateCharacterHook;
const parsers_1 = require("../../parsers");
function calculateCharacterHook(character) {
    const c = character.character;
    const hooks = c?.user?.characterHooks || c?.characterHooks;
    if (!hooks?.length) {
        return;
    }
    const hook = getPrimaryCharacterHook(hooks);
    if (!hook) {
        return;
    }
    const hookSummary = (0, parsers_1.parseDescriptionChoices)(hook.summary);
    const hookParts = (0, parsers_1.replaceTags)(hookSummary, character);
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
function getPrimaryCharacterHook(hooks) {
    if (!hooks.length) {
        return;
    }
    let primaryHook = hooks.find((hook) => hook.isPrimaryCharacterHook);
    if (!primaryHook) {
        const randomIndex = Math.floor(Math.random() * hooks.length);
        hooks[randomIndex].isPrimaryCharacterHook = true;
        primaryHook = hooks[randomIndex];
    }
    return primaryHook;
}
