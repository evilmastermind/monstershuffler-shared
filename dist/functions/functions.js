"use strict";
///////////////////////////////////////////////////
// DEBOUNCE AND THROTTLE FUNCTIONS
///////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = debounce;
exports.throttle = throttle;
exports.random = random;
exports.randomDecimal = randomDecimal;
exports.round2Decimals = round2Decimals;
exports.roundNDecimals = roundNDecimals;
exports.capitalizeFirst = capitalizeFirst;
exports.toggle = toggle;
exports.removeItem = removeItem;
exports.addUniqueItem = addUniqueItem;
exports.hasDefined = hasDefined;
exports.createKeyIfUndefined = createKeyIfUndefined;
exports.deleteKeyIfEmpty = deleteKeyIfEmpty;
/** Handles multiple calls to the same function: only one is called after X seconds */
function debounce(cb, delay = 1000) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            // @ts-expect-error - this is a function
            cb(...args);
        }, delay);
    };
}
/** Handles multiple calls to the same function: one is called immmediately and others are called after X seconds */
function throttle(cb, delay = 1000) {
    let shouldWait = false;
    let waitingArgs;
    const timeoutFunc = () => {
        if (waitingArgs == null) {
            shouldWait = false;
        }
        else {
            cb(...waitingArgs);
            waitingArgs = null;
            setTimeout(timeoutFunc, delay);
        }
    };
    return (...args) => {
        if (shouldWait) {
            waitingArgs = args;
            return;
        }
        cb(...args);
        shouldWait = true;
        setTimeout(timeoutFunc, delay);
    };
}
///////////////////////////////////////////////////
// RANDOM FUNCTIONS
///////////////////////////////////////////////////
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomDecimal(min, max, distribution) {
    let randomValue = Math.random();
    switch (distribution) {
        case 'beginning':
            randomValue = Math.sqrt(randomValue);
            break;
        case 'middle':
            randomValue = Math.random() * Math.random();
            break;
        case 'end':
            randomValue = 1 - Math.sqrt(1 - randomValue);
            break;
        default: // This covers the undefined case where we just want a uniform distribution
            break;
    }
    return randomValue * (max - min) + min;
}
///////////////////////////////////////////////////
// ROUNDING FUNCTIONS
///////////////////////////////////////////////////
/**
 * Rounds a number to 2 decimal places.
 */
function round2Decimals(value) {
    return Math.round(value * 100) / 100;
}
/**
 * Rounds a number to n decimal places.
 */
function roundNDecimals(value, n) {
    return Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
}
///////////////////////////////////////////////////
// STRING FUNCTIONS
///////////////////////////////////////////////////
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
///////////////////////////////////////////////////
// ARRAY FUNCTIONS
///////////////////////////////////////////////////
/**
 * Toggles an item in an array. If the item is not present, it will be added. If it is present, it will be removed.
 */
function toggle(array, item) {
    const index = array.indexOf(item);
    if (index === -1) {
        array.push(item); // Add the item if it's not present
    }
    else {
        array.splice(index, 1); // Remove the item if it's already in the array
    }
}
/**
 * Removes an item from an array.
 */
function removeItem(anArray, anItem) {
    const index = anArray.indexOf(anItem);
    if (index > -1) {
        anArray.splice(index, 1);
    }
    return anArray;
}
/**
 * Adds an item to an array if it is not already present.
 */
function addUniqueItem(anArray, anItem) {
    const index = anArray.indexOf(anItem);
    if (index === -1) {
        anArray.push(anItem);
    }
    return anArray;
}
///////////////////////////////////////////////////
// OBJECT FUNCTIONS
///////////////////////////////////////////////////
function hasDefined(object, key) {
    return (Object.hasOwn(object, key) &&
        object[key] !== undefined &&
        object[key] !== null &&
        object[key] !== '');
}
function createKeyIfUndefined(object, key) {
    if (!Object.hasOwn(object, key)) {
        object[key] = {};
    }
}
function deleteKeyIfEmpty(object, key) {
    if (Object.hasOwn(object, key) &&
        (object[key] === undefined || object[key] === null)) {
        delete object[key];
    }
}
