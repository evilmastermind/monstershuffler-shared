"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateLanguages = void 0;
const parsers_1 = require("@/parsers");
const functions_1 = require("@/parsers/functions");
function calculateLanguages(character) {
    const s = character.statistics;
    const v = character.variables;
    const languages = (0, functions_1.getStatArrayFromObjects)(character, 'languages');
    const limit = (0, functions_1.getCurrentStatLimit)(character);
    s.languages = [];
    for (let i = 0; i < languages.length; i++) {
        for (let j = 0; j < languages[i].length; j++) {
            if (languages[i][j].availableAt === undefined ||
                limit >= languages[i][j].availableAt) {
                s.languages.push({
                    name: languages[i][j].value,
                    number: 0,
                    string: '',
                    array: [],
                });
                const language = s.languages[s.languages.length - 1];
                const descriptionPart = {
                    string: languages[i][j].value,
                    type: 'language',
                };
                if (languages[i][j].id) {
                    descriptionPart.id = languages[i][j].id;
                }
                language.array.push(descriptionPart);
                language.string = language.array.reduce((acc, obj) => acc + obj.string, '');
            }
        }
    }
    const canSpeakQuery = (0, functions_1.getPrioritizedStatistic)(character, 'canSpeak');
    const canSpeak = canSpeakQuery !== undefined ? canSpeakQuery : true;
    const telepathy = (0, functions_1.getPrioritizedStatistic)(character, 'telepathy');
    if (!canSpeak) {
        s.canSpeak = false;
        if (s.languages.length) {
            const firstLanguage = s.languages[0];
            firstLanguage.array.unshift((0, functions_1.createPart)(' '));
            firstLanguage.array.unshift((0, functions_1.createPart)('Understands', 'translatableText'));
            firstLanguage.string = firstLanguage.array.reduce((acc, obj) => acc + obj.string, '');
            const lastLanguage = s.languages[s.languages.length - 1];
            lastLanguage.array.push((0, functions_1.createPart)(' '));
            lastLanguage.array.push((0, functions_1.createPart)('but can\'t speak', 'translatableText'));
            lastLanguage.string = lastLanguage.array.reduce((acc, obj) => acc + obj.string, '');
        }
        else {
            s.languages.push({
                name: 'Can\'t speak',
                number: 0,
                string: 'Can\'t speak',
                array: [(0, functions_1.createPart)('Can\'t speak', 'translatableText')]
            });
        }
    }
    if (telepathy) {
        s.telepathy = (0, parsers_1.parseExpressionNumeric)(telepathy, character);
        s.languages.push({
            name: 'Telepathy',
            number: s.telepathy,
            string: `Telepathy ${s.telepathy} ft`,
            array: [{
                    string: `Telepathy ${s.telepathy} ft`,
                    number: s.telepathy,
                    type: 'ft',
                }]
        });
    }
    v.TELEPATHY = s.telepathy || 0;
    if (!s.languages.length) {
        s.languages.push({
            name: '—',
            number: 0,
            string: '—',
            array: [(0, functions_1.createPart)('—')]
        });
    }
}
exports.calculateLanguages = calculateLanguages;
