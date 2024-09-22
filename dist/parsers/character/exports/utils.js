"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMarkdown = void 0;
function addMarkdown(descriptionObjects) {
    let output = '';
    for (const description of descriptionObjects) {
        let descriptionWithMarkdown = description.string;
        if (description.format?.includes('font-bold')) {
            descriptionWithMarkdown = `**${descriptionWithMarkdown}**`;
        }
        if (description.format?.includes('italic')) {
            descriptionWithMarkdown = `*${descriptionWithMarkdown}*`;
        }
        if (description.format?.includes('underline')) {
            descriptionWithMarkdown = `__${descriptionWithMarkdown}__`;
        }
        if (description.format?.includes('line-through')) {
            descriptionWithMarkdown = `~~${descriptionWithMarkdown}~~`;
        }
        output += descriptionWithMarkdown;
    }
    return output;
}
exports.addMarkdown = addMarkdown;
