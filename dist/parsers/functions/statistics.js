"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.objects = void 0;
exports.createPart = createPart;
exports.addPlusSign = addPlusSign;
exports.sortObject = sortObject;
exports.isNumber = isNumber;
exports.getCurrentStatLimit = getCurrentStatLimit;
exports.getStatArrayFromObjects = getStatArrayFromObjects;
exports.getBonusesForOneStatistic = getBonusesForOneStatistic;
exports.getBonus = getBonus;
exports.getBonusAndInfo = getBonusAndInfo;
exports.getPrioritizedStatistic = getPrioritizedStatistic;
exports.getPrioritizedStatisticFromPath = getPrioritizedStatisticFromPath;
exports.calibrateStatistic = calibrateStatistic;
exports.addCommaIfNotEmpty = addCommaIfNotEmpty;
exports.pushWithComma = pushWithComma;
exports.numberToSignedString = numberToSignedString;
exports.unshiftWithComma = unshiftWithComma;
exports.feetToOtherUnit = feetToOtherUnit;
exports.feetDecimalToFeetInches = feetDecimalToFeetInches;
exports.feetDecimalToUnit = feetDecimalToUnit;
exports.feetDecimalToMeters = feetDecimalToMeters;
exports.getUnitSymbol = getUnitSymbol;
exports.parseNameChoices = parseNameChoices;
exports.parseDescriptionChoices = parseDescriptionChoices;
exports.createUserObjectIfNotExists = createUserObjectIfNotExists;
const jspath_1 = __importDefault(require("jspath"));
const expressions_1 = require("./expressions");
const functions_1 = require("../../functions");
const stats_1 = require("../../parsers/stats");
exports.objects = [
    'user',
    'template',
    'classvariant',
    'class',
    'racevariant',
    'race',
    'background',
];
function createPart(string, type = undefined, format = [], id = undefined) {
    const part = {
        string,
    };
    if (type) {
        part.type = type;
    }
    if (format.length) {
        part.format = format;
    }
    if (id) {
        part.id = id;
    }
    return part;
}
function addPlusSign(number) {
    if (number > 0) {
        return `+${number}`;
    }
    return number.toString();
}
const characterObjects = (character) => {
    const c = character.character;
    let objectsFound = [];
    exports.objects.forEach((raceOrClassEtc) => {
        if (Object.hasOwn(c, raceOrClassEtc)) {
            objectsFound.push(c[raceOrClassEtc]);
        }
    });
    if (Object.hasOwn(c, 'conditions')) {
        objectsFound = [...objectsFound, ...c.conditions];
    }
    return objectsFound;
};
function sortObject(obj) {
    return Object.keys(obj)
        .sort()
        .reduce((sortedObj, key) => {
        sortedObj[key] = obj[key];
        return sortedObj;
    }, {});
}
function isNumber(stat) {
    return !isNaN(parseFloat(stat)) && isFinite(Number(stat));
}
function getCurrentStatLimit(character) {
    if (character?.character?.CRCalculation?.name === 'automatic') {
        return character?.statistics?.CR.number || -3;
    }
    else {
        return character?.statistics?.level || 0;
    }
}
function getStatArrayFromObjects(character, stat) {
    const c = character.character;
    const array = [];
    // checking if the stat exists in the main character object
    if (Object.hasOwn(c, stat)) {
        // @ts-ignore
        array.push(c[stat]);
    }
    // checking if the stat exists in any of the other secondary objects,
    // like races, classes, etc.
    const objectsFound = characterObjects(character);
    objectsFound.forEach((raceOrClassEtc) => {
        if (Object.hasOwn(raceOrClassEtc, stat)) {
            array.push(raceOrClassEtc[stat]);
        }
    });
    return array;
}
function getBonusesForOneStatistic(character, stat) {
    const bonuses = [];
    const objectsFound = characterObjects(character);
    objectsFound.forEach((raceOrClassEtc) => {
        if (Object.hasOwn(raceOrClassEtc, 'bonuses')) {
            if (Object.hasOwn(raceOrClassEtc.bonuses, `${stat}Bonus`)) {
                bonuses.push(raceOrClassEtc.bonuses[`${stat}Bonus`]);
            }
        }
    });
    return bonuses;
}
function getBonus(character, stat) {
    const bonuses = getBonusesForOneStatistic(character, stat);
    let bonus = 0;
    bonuses.forEach((b) => {
        bonus += (0, expressions_1.parseExpressionNumeric)(b.value, character);
    });
    return bonus;
}
function getBonusAndInfo(character, stat) {
    const bonuses = getBonusesForOneStatistic(character, stat);
    const bonus = {
        value: 0,
        hadExpressions: false,
    };
    bonuses.forEach((b) => {
        if (!isNumber(b.value)) {
            bonus.hadExpressions = true;
        }
        bonus.value += (0, expressions_1.parseExpressionNumeric)(b.value, character);
    });
    return bonus;
}
function getPrioritizedStatistic(character, key) {
    const objectsFound = characterObjects(character);
    for (let i = 0; i < objectsFound.length; i++) {
        if (Object.hasOwn(objectsFound[i], key)) {
            return objectsFound[i][key];
        }
    }
    const c = character.character;
    if (Object.hasOwn(c, key)) {
        return c[key];
    }
}
function getPrioritizedStatisticFromPath(character, key) {
    const objectsFound = characterObjects(character);
    for (let i = 0; i < objectsFound.length; i++) {
        const result = jspath_1.default.apply(`${key}`, objectsFound[i]);
        if (result.length > 0) {
            return result[0];
        }
    }
}
/**
 *  C A L I B R A T E   S T A T I S T I C
 * ---------------------------------------
 * This function recalculates a statistic when the CR changes.
 *
 * Stat Value [New CR] = ( Stat Value Chosen [Original CR] / Stat Value Average [Original CR]) * Stat Value Average [New CR]
 *
 * Example:
 * Zombie: CR 1/4, AC 8
 * Average AC for a CR 1/4 creature is 13
 * Average AC for a CR 10 creature is 16
 * The AC for a Zombie at CR 10 would be: (8/13)*16 = 9.846 => 10
 *
 *
 * I call ( Stat Value Chosen [Original CR] / Stat Value Average [Original CR]) the calibration factor.
 * It is the factor by which the original statistic value is multiplied to get the new statistic value.
 * If the difference between the original CR and the new CR is too big, the calibration factor is reduced (see below).
 *
 * Stat value averages were calculated by Surfarcher
 * https://surfarcher.blogspot.com/2015/07/d-5e-monsters-part-11-construction.html
 *
 */
function calibrateStatistic(character, statValue, statName) {
    // @ts-expect-error There can be multiple types of Challenge Calculations
    const originalCR = character.character?.CRCalculation?.CR;
    const newCR = character?.variables?.CR;
    if (originalCR === undefined || newCR === undefined || originalCR === newCR) {
        return statValue;
    }
    const calibrationFactor = calculateCalibrationFactor(originalCR, newCR, statName, statValue);
    const statValueAvgAtNewCR = newCR > 30
        ? getAvgStatisticHigherThan30(newCR, statName)
        : stats_1.challengeTable[newCR.toString()][statName];
    const result = Math.round(calibrationFactor * statValueAvgAtNewCR);
    return result;
}
function calculateCalibrationFactor(originalCR, newCR, statName, statValue) {
    let statValueAvg;
    if (originalCR > 30) {
        statValueAvg = getAvgStatisticHigherThan30(originalCR, statName);
    }
    else {
        statValueAvg = stats_1.challengeTable[originalCR.toString()][statName];
    }
    const calibrationFactor = Math.abs(statValue / statValueAvg);
    if (originalCR >= newCR || statName !== 'HP') {
        return calibrationFactor;
    }
    else {
        // At higher CRs, statistics tend to lean towards the average
        // so I'm reducing the calibration factor by 50% for every 12 CRs of difference
        // between the original CR and the new CR
        const newCalibrationFactor = calibrateTheCalibrationFactor(originalCR, newCR, calibrationFactor);
        return newCalibrationFactor;
    }
}
function getAvgStatisticHigherThan30(originalCR, statName) {
    const increaseFactor = stats_1.challengeTable['30'][statName] / stats_1.challengeTable['29'][statName];
    const CRDifference = originalCR - 30;
    return stats_1.challengeTable['30'][statName] * increaseFactor ** CRDifference;
}
function calibrateTheCalibrationFactor(originalCR, newCr, calibrationFactor) {
    const CRDifference = Math.abs(originalCR - newCr);
    if (CRDifference === 0) {
        return calibrationFactor;
    }
    let newCalibrationFactor;
    const reductionFactor = 1 + CRDifference / 30;
    if (calibrationFactor > 1) {
        newCalibrationFactor = (calibrationFactor - 1) / reductionFactor + 1;
    }
    else {
        newCalibrationFactor = 1 - (1 - calibrationFactor) / reductionFactor;
    }
    return newCalibrationFactor;
}
function addCommaIfNotEmpty(array) {
    if (array.length) {
        array.push(createPart(', '));
    }
}
function pushWithComma(originalString, string2) {
    if (originalString) {
        originalString += ', ';
    }
    originalString += string2;
    return originalString;
}
function numberToSignedString(number) {
    if (number >= 0) {
        return `+${number}`;
    }
    return number.toString();
}
function unshiftWithComma(originalString, string2) {
    if (originalString) {
        originalString = ', ' + originalString;
    }
    originalString = string2 + originalString;
    return originalString;
}
function feetToOtherUnit(feet, unit = 'feet') {
    let meters = 0;
    switch (unit) {
        case 'meters':
            meters = feet * 0.3048;
            return parseFloat((meters - (meters % 1.5)).toFixed(1));
        case 'squares':
            return feet / 5;
        default:
            return feet;
    }
}
function feetDecimalToFeetInches(decimalFeet) {
    const feet = Math.floor(decimalFeet);
    const inches = Math.round((decimalFeet - feet) * 12);
    return `${feet}'${inches}"`;
}
function feetDecimalToUnit(height, unit = 'feet') {
    if (unit === 'meters') {
        return feetDecimalToMeters(height);
    }
    return feetDecimalToFeetInches(height);
}
function feetDecimalToMeters(decimalFeet) {
    const meters = decimalFeet * 0.3048;
    return `${meters.toFixed(2)} m`;
}
function getUnitSymbol(unit = 'feet') {
    switch (unit) {
        case 'feet':
            return 'ft';
        case 'meters':
            return 'm';
        case 'squares':
            return 'sq';
    }
}
function parseNameChoices(name = '') {
    if (!name) {
        return 'Name';
    }
    const possibleNames = name.split('|') || null;
    if (possibleNames?.length <= 1) {
        return name;
    }
    const randomName = (0, functions_1.random)(0, possibleNames.length - 1);
    return possibleNames[randomName];
}
function parseDescriptionChoices(input) {
    return input.replace(/\(([^)]+)\)/g, (_, group) => {
        const options = group.split('|').map(option => option.trim());
        return options[Math.floor(Math.random() * options.length)];
    });
}
function createUserObjectIfNotExists(character) {
    if (!character.character.user) {
        character.character.user = {};
    }
}
