"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSubtype = calculateSubtype;
const functions_1 = require("../functions");
function calculateSubtype(character) {
    const subtypesArrays = (0, functions_1.getStatArrayFromObjects)(character, 'subtypes');
    const subtypes = [];
    if (!subtypesArrays) {
        return;
    }
    const limit = (0, functions_1.getCurrentStatLimit)(character);
    for (let i = 0; i < subtypesArrays.length; i++) {
        for (let j = 0; j < subtypesArrays[i].length; j++) {
            if (subtypesArrays[i][j].availableAt === undefined ||
                limit >= subtypesArrays[i][j].availableAt) {
                const subtype = {
                    string: subtypesArrays[i][j].value,
                    type: 'subtype',
                };
                if (subtypesArrays[i][j].id) {
                    subtype.id = subtypesArrays[i][j].id;
                }
                if (subtypesArrays[i][j].type) {
                    subtype.type = subtypesArrays[i][j].type;
                }
                subtypes.push(subtype);
            }
        }
        if (!subtypes.length) {
            return;
        }
        character.statistics.subtypes = subtypes;
    }
}
