"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateLanguages = void 0;
const parsers_1 = require("@/parsers");
const functions_1 = require("@/parsers/functions");
function calculateLanguages(character) {
    const s = character.statistics;
    const v = character.variables;
    const languages = (0, functions_1.getStatArrayFromObjects)(character, "languages");
    const limit = (0, functions_1.getCurrentStatLimit)(character);
    s.languages = {
        string: "",
        array: [],
    };
    for (let i = 0; i < languages.length; i++) {
        for (let j = 0; j < languages[i].length; j++) {
            if (languages[i][j].availableAt === undefined ||
                limit >= languages[i][j].availableAt) {
                if (s.languages.array.length) {
                    s.languages.array.push((0, functions_1.createPart)(", "));
                }
                const descriptionPart = {
                    string: languages[i][j].value,
                    type: "language",
                };
                if (languages[i][j].id) {
                    descriptionPart.id = languages[i][j].id;
                }
                s.languages.array.push(descriptionPart);
            }
        }
    }
    const canSpeakQuery = (0, functions_1.getPrioritizedStatistic)(character, "canSpeak");
    const canSpeak = canSpeakQuery !== undefined ? canSpeakQuery : true;
    const telepathy = (0, functions_1.getPrioritizedStatistic)(character, "telepathy");
    if (!canSpeak) {
        s.canSpeak = false;
        if (s.languages.array.length) {
            s.languages.array.push((0, functions_1.createPart)(" "));
            s.languages.array.push((0, functions_1.createPart)("but can't speak", "translatableText"));
            s.languages.array.unshift((0, functions_1.createPart)(" "));
            s.languages.array.unshift((0, functions_1.createPart)("Understands", "translatableText"));
        }
        else {
            s.languages.array.unshift((0, functions_1.createPart)("Can't speak", "translatableText"));
        }
    }
    if (telepathy) {
        s.telepathy = (0, parsers_1.parseExpressionNumeric)(telepathy, character);
        if (s.languages.array.length) {
            s.languages.array.push((0, functions_1.createPart)(", "));
        }
        s.languages.array.push((0, functions_1.createPart)("telepathy", "translatableText"));
        s.languages.array.push((0, functions_1.createPart)(" "));
        s.languages.array.push({
            string: `${s.telepathy} ft`,
            number: s.telepathy,
            type: "ft",
        });
    }
    v.TELEPATHY = s.telepathy || 0;
    if (!s.languages.array.length) {
        s.languages.array.push((0, functions_1.createPart)("—"));
    }
    s.languages.string = s.languages.array.reduce((acc, obj) => acc + obj.string, "");
}
exports.calculateLanguages = calculateLanguages;
