"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAlignment = calculateAlignment;
const functions_1 = require("../../parsers/functions");
function calculateAlignment(character) {
    const c = character.character;
    const generic = c?.generic || null;
    const typically = generic === true ? 'Typically' : '';
    const alignment = {
        name: 'Alignment',
        number: 0,
        string: '',
        array: [],
    };
    // calculate alignment from modifiers if it hasn't been defined yet
    (0, functions_1.calculateAlignmentFromModifiers)(character);
    if (c.alignmentEthical === 'Unaligned') {
        // unaligned
        alignment.array.push((0, functions_1.createPart)('Unaligned', 'alignment'));
    }
    else if (
    // any
    c.alignmentEthical === c.alignmentMoral &&
        c.alignmentMoral === 'Any') {
        alignment.array.push((0, functions_1.createPart)('Any Alignment', 'alignment'));
    }
    else if (['Any'].includes(c.alignmentEthical || '') &&
        c.alignmentMoral) {
        // any (lawful, neutral, chaotic)
        alignment.array.push((0, functions_1.createPart)('Any', 'alignment'));
        alignment.array.push((0, functions_1.createPart)(' '));
    }
    else if (['Any'].includes(c.alignmentMoral || '') &&
        c.alignmentEthical) {
        // any (good, neutral, evil)
        alignment.array.push((0, functions_1.createPart)('Any', 'alignment'));
        alignment.array.push((0, functions_1.createPart)(' '));
    }
    else if (c.alignmentEthical && c.alignmentMoral) {
        // neutral
        if (c.alignmentEthical === c.alignmentMoral) {
            alignment.array.push((0, functions_1.createPart)(c.alignmentEthical, 'alignment'));
        }
        else {
            // any other defined alignment
            alignment.array.push((0, functions_1.createPart)(c.alignmentEthical, 'alignment'));
            alignment.array.push((0, functions_1.createPart)(' '));
            alignment.array.push((0, functions_1.createPart)(c.alignmentMoral, 'alignment'));
        }
        if (typically) {
            alignment.array.unshift((0, functions_1.createPart)(' ', 'text'));
            alignment.array.unshift((0, functions_1.createPart)(typically, 'alignment'));
        }
    }
    alignment.number = (0, functions_1.calculateAlignmentNumber)(c.alignmentEthical || '', c.alignmentMoral || '');
    character.statistics.alignment = alignment;
    character.statistics.alignment.string = alignment.array.reduce((acc, obj) => acc + obj.string, '');
}
