"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSpeed = calculateSpeed;
const functions_1 = require("../functions");
const stats_1 = require("../stats");
function calculateSpeed(character) {
    const s = character.statistics;
    const v = character.variables;
    s.speeds = [];
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
        s.speeds.push({
            name: type,
            number: speedNumber,
            string: '',
            array: [],
        });
        const speed = s.speeds[s.speeds.length - 1];
        switch (type) {
            case 'walk':
                speed.array.push({
                    string: `${speedNumber} ft`,
                    number: speedNumber,
                    type: 'ft',
                });
                break;
            case 'hover':
                speed.array.push((0, functions_1.createPart)('fly', 'speed'));
                speed.array.push((0, functions_1.createPart)(' '));
                speed.array.push({
                    string: `${speedNumber} ft`,
                    number: speedNumber,
                    type: 'ft',
                });
                speed.array.push((0, functions_1.createPart)(' ('));
                speed.array.push((0, functions_1.createPart)('hover', 'speed'));
                speed.array.push((0, functions_1.createPart)(')'));
                break;
            default:
                speed.array.push((0, functions_1.createPart)(type, 'speed'));
                speed.array.push((0, functions_1.createPart)(' '));
                speed.array.push({
                    string: `${speedNumber} ft`,
                    number: speedNumber,
                    type: 'ft',
                });
                break;
        }
        speeds[type] = speedNumber;
        speed.string = speed.array.reduce((acc, obj) => acc + obj.string, '');
    }
    for (const speed in speeds) {
        // 2024-07-17: variables object expects all speeds defined
        // if (
        //   !Object.hasOwn(speeds, speed) ||
        //   speeds[speed as Speeds] === undefined
        // ) {
        //   continue;
        // }
        if (speed === 'walk') {
            v.SPEED = speeds[speed];
        }
        else {
            v[speed.toUpperCase()] = speeds[speed];
        }
    }
    if (!s.speeds.length) {
        delete s.speeds;
    }
}
