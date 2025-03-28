"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTags = createTags;
const functions_1 = require("../functions");
const functions_2 = require("../../functions");
const parsers_1 = require("../../parsers");
function createTags(character) {
    const c = character.character;
    const t = character.tags;
    const s = character.statistics;
    if (!t || !s) {
        return;
    }
    // TODO: translate the article. It's possible that some languages will have different ways to handle this.
    t.name = c?.generic
        ? `the ${c.name.toLowerCase() || 'the name'}`
        : c?.name || 'Name';
    t.Name = (0, functions_2.capitalizeFirst)(t.name);
    t.fullname = c?.generic ? `the ${s.fullName.toLowerCase()}` : s.fullName;
    t.Fullname = (0, functions_2.capitalizeFirst)(t.fullname);
    const pronouns = character.statistics?.pronouns || 'thing';
    switch (pronouns) {
        case 'male':
            t.he = 'he';
            t.she = 'he';
            t.his = 'his';
            t.her = 'his';
            t.him = 'him';
            t.hers = 'his';
            t.himself = 'himself';
            t.herself = 'himself';
            t.He = 'He';
            t.His = 'His';
            t.Him = 'Him';
            t.Hers = 'His';
            t.Himself = 'Himself';
            t.Herself = 'Himself';
            t.they = 'he';
            t.their = 'his';
            t.them = 'him';
            t.theirs = 'his';
            t.themself = 'himself';
            t.themselves = 'himself';
            t.They = 'He';
            t.Their = 'His';
            t.Them = 'Him';
            t.Theirs = 'His';
            t.Themself = 'Himself';
            t.Themselves = 'Himself';
            t.it = 'he';
            t.its = 'his';
            t.itself = 'himself';
            t.It = 'He';
            t.Its = 'His';
            t.Itself = 'Himself';
            break;
        case 'female':
            t.he = 'she';
            t.she = 'she';
            t.his = 'her';
            t.her = 'her';
            t.him = 'her';
            t.hers = 'hers';
            t.himself = 'herself';
            t.herself = 'herself';
            t.He = 'She';
            t.His = 'Her';
            t.Him = 'Her';
            t.Hers = 'Hers';
            t.Himself = 'Herself';
            t.Herself = 'Herself';
            t.they = 'she';
            t.their = 'her';
            t.them = 'her';
            t.theirs = 'hers';
            t.themself = 'herself';
            t.themselves = 'herself';
            t.They = 'She';
            t.Their = 'Her';
            t.Them = 'Her';
            t.Theirs = 'Hers';
            t.Themself = 'Herself';
            t.Themselves = 'Herself';
            t.it = 'she';
            t.its = 'her';
            t.itself = 'herself';
            t.It = 'She';
            t.Its = 'Her';
            t.Itself = 'Herself';
            break;
        case 'neutral':
            t.he = 'they';
            t.she = 'they';
            t.his = 'their';
            t.her = 'their';
            t.him = 'them';
            t.hers = 'theirs';
            t.himself = 'themself';
            t.herself = 'themself';
            t.He = 'They';
            t.His = 'Their';
            t.Him = 'Them';
            t.Hers = 'Theirs';
            t.Himself = 'Themself';
            t.Herself = 'Themself';
            t.they = 'they';
            t.their = 'their';
            t.them = 'them';
            t.theirs = 'theirs';
            t.themself = 'themself';
            t.themselves = 'themself';
            t.They = 'They';
            t.Their = 'Their';
            t.Them = 'Them';
            t.Theirs = 'Theirs';
            t.Themself = 'Themself';
            t.Themselves = 'Themself';
            t.it = 'they';
            t.its = 'their';
            t.itself = 'themself';
            t.It = 'They';
            t.Its = 'Their';
            t.Itself = 'Themself';
            break;
        default:
            t.he = 'it';
            t.she = 'it';
            t.his = 'its';
            t.her = 'its';
            t.him = 'it';
            t.hers = 'theirs';
            t.himself = 'itself';
            t.herself = 'itself';
            t.He = 'It';
            t.His = 'Its';
            t.Him = 'It';
            t.Hers = 'Theirs';
            t.Himself = 'Itself';
            t.Herself = 'Itself';
            t.they = 'it';
            t.their = 'its';
            t.them = 'it';
            t.theirs = 'theirs';
            t.themself = 'itself';
            t.themselves = 'itself';
            t.They = 'It';
            t.Their = 'Its';
            t.Them = 'It';
            t.Theirs = 'Theirs';
            t.Themself = 'Itself';
            t.Themselves = 'Itself';
            t.it = 'it';
            t.its = 'its';
            t.itself = 'itself';
            t.It = 'It';
            t.Its = 'Its';
            t.Itself = 'Itself';
            break;
    }
    // race
    t.race = c?.racevariant?.name || c?.race?.name || 'Race';
    t.profession = c?.class?.name || c?.background?.name || 'unemployed';
    // action t
    const actions = (0, functions_1.getStatArrayFromObjects)(character, 'actions').flat();
    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const limit = (0, functions_1.getCurrentStatLimit)(character);
        if (!action?.variants?.length ||
            (action?.availableUntil && limit > action?.availableUntil)) {
            continue;
        }
        let variant = action.variants[0];
        let variantName = (variant.name = (0, parsers_1.calculateRandomName)(variant.name));
        // resolving random names for actions
        for (const v of action.variants) {
            v.name = (0, parsers_1.calculateRandomName)(v.name);
            const availableAt = v.availableAt ?? -3;
            const currentAvailableAt = variant ? variant.availableAt ?? -3 : -3;
            if (availableAt <= limit && availableAt >= currentAvailableAt) {
                variant = v;
                variantName = v.name;
            }
        }
        // actions that use the name of the attack (weapon)
        if ('attacks' in action) {
            action?.attacks?.forEach((attack) => {
                if (attack.replaceName &&
                    attack.attributes &&
                    'name' in attack.attributes &&
                    attack.attributes.name) {
                    variantName = attack.attributes.name;
                }
            });
        }
        t[action.tag] = variantName;
    }
}
