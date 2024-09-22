"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateMeta = void 0;
const functions_1 = require("../functions");
const functions_2 = require("@/functions");
function calculateMeta(character) {
    character.statistics.meta = {
        string: "",
        array: [],
    };
    const meta = character.statistics.meta;
    // Size Type
    const size = (0, functions_2.capitalizeFirst)(character.statistics?.size?.string || "Medium");
    let type = (0, functions_2.capitalizeFirst)(character.statistics?.type?.string || "Humanoid");
    if (character.statistics?.isSwarm) {
        if (type === "Monstrosity") {
            type = "Monstrosities";
        }
        else if (type !== "Fey") {
            type += "s";
        }
        meta.array.push((0, functions_1.createPart)(size, "size"));
        meta.array.push((0, functions_1.createPart)(" "));
        meta.array.push((0, functions_1.createPart)("swarm of", "translatableText"));
        meta.array.push((0, functions_1.createPart)(" "));
        meta.array.push((0, functions_1.createPart)(character.statistics.sizeSingleEntityOfSwarm.string, "size"));
        meta.array.push((0, functions_1.createPart)(" "));
        meta.array.push((0, functions_1.createPart)(type, "type"));
    }
    else {
        meta.array.push((0, functions_1.createPart)(size, "size"));
        meta.array.push((0, functions_1.createPart)(" "));
        meta.array.push((0, functions_1.createPart)(type, "type"));
    }
    const pronouns = ["male", "female"].includes(character.statistics?.pronouns || "")
        ? character.statistics?.pronouns
        : null;
    const subtypes = character.statistics?.subtypes || [];
    if (pronouns || subtypes.length) {
        meta.array.push((0, functions_1.createPart)(" ("));
        if (pronouns && ["male", "female"].includes(pronouns)) {
            meta.array.push((0, functions_1.createPart)(pronouns, "pronouns"));
            if (subtypes?.length) {
                meta.array.push((0, functions_1.createPart)(" "));
            }
        }
        for (let i = 0; i < subtypes.length; i++) {
            if (i > 0) {
                meta.array.push((0, functions_1.createPart)(", "));
            }
            meta.array.push((0, functions_1.createPart)(subtypes[i].string, "subtype"));
        }
        meta.array.push((0, functions_1.createPart)(")"));
    }
    meta.array.push((0, functions_1.createPart)(", "));
    meta.array = meta.array.concat(character.statistics?.alignment?.array || []);
    meta.string = meta.array.reduce((acc, obj) => acc + obj.string, "");
    character.statistics.meta = meta;
}
exports.calculateMeta = calculateMeta;
