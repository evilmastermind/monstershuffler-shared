"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSpeed = void 0;
const functions_1 = require("../functions");
const stats_1 = require("../stats");
function calculateSpeed(character) {
    const s = character.statistics;
    const v = character.variables;
    s.speeds = {
        string: "",
        array: [],
    };
    const speeds = {
        walk: 0,
        fly: 0,
        climb: 0,
        swim: 0,
        burrow: 0,
        hover: 0,
    };
    for (const type of stats_1.speedTypes) {
        const speedExpression = (0, functions_1.getPrioritizedStatisticFromPath)(character, `.speeds.${type}`);
        if (!speedExpression) {
            continue;
        }
        const speedBonus = (0, functions_1.getBonus)(character, type);
        const speedNumber = (0, functions_1.parseExpressionNumeric)(speedExpression, character) + speedBonus;
        if (speedNumber <= 0) {
            continue;
        }
        (0, functions_1.addCommaIfNotEmpty)(s.speeds.array);
        switch (type) {
            case "walk":
                s.speeds.array.push({
                    string: `${speedNumber} ft`,
                    number: speedNumber,
                    type: "ft",
                });
                break;
            case "hover":
                s.speeds.array.push((0, functions_1.createPart)("fly", "speed"));
                s.speeds.array.push((0, functions_1.createPart)(" "));
                s.speeds.array.push({
                    string: `${speedNumber} ft`,
                    number: speedNumber,
                    type: "ft",
                });
                s.speeds.array.push((0, functions_1.createPart)(" ("));
                s.speeds.array.push((0, functions_1.createPart)("hover", "speed"));
                s.speeds.array.push((0, functions_1.createPart)(")"));
                break;
            default:
                s.speeds.array.push((0, functions_1.createPart)(type, "speed"));
                s.speeds.array.push((0, functions_1.createPart)(" "));
                s.speeds.array.push({
                    string: `${speedNumber} ft`,
                    number: speedNumber,
                    type: "ft",
                });
                break;
        }
        speeds[type] = speedNumber;
    }
    for (const speed in speeds) {
        if (!Object.hasOwn(speeds, speed) ||
            speeds[speed] === undefined) {
            continue;
        }
        v[speed.toUpperCase()] = speeds[speed];
    }
    s.speeds.string = s.speeds.array.reduce((acc, obj) => acc + obj.string, "");
    if (!s.speeds.string) {
        delete s.speeds;
    }
}
exports.calculateSpeed = calculateSpeed;
