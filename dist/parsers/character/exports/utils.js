"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMarkdown = void 0;
function addMarkdown(descriptionObjects) {
    let output = '';
    for (const description of descriptionObjects) {
        const descriptionWithMarkdown = description.string;
        if (description.format?.includes('font-bold')) {
            output += `**${descriptionWithMarkdown}**`;
        }
        if (description.format?.includes('italic')) {
            output += `*${descriptionWithMarkdown}*`;
        }
        if (description.format?.includes('underline')) {
            output += `__${descriptionWithMarkdown}__`;
        }
        if (description.format?.includes('line-through')) {
            output += `~~${descriptionWithMarkdown}~~`;
        }
    }
    return output;
}
exports.addMarkdown = addMarkdown;
