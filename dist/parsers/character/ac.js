"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateArmorClass = calculateArmorClass;
const parsers_1 = require("../../parsers");
const createClankingArmorCondition = (armorName) => {
    return {
        name: '_clankingarmor',
        actions: [
            {
                tag: 'clankingarmordefault',
                variants: [
                    {
                        name: 'Stealth Disadvantage',
                        type: 'trait',
                        description: `[Name] has disadvantage on Dexterity (Stealth) checks while wearing [his] ${armorName} armor`,
                    },
                ],
            },
        ],
        bonuses: {
            walkBonus: {
                value: '-10',
            },
        },
    };
};
function calculateArmorClass(character) {
    const s = character.statistics;
    const v = character.variables;
    let totalAC = 0;
    let dexMod = v.DEX;
    let armor = { name: '', AC: '0' };
    let armorAC = 0;
    s.AC = {
        name: '',
        number: 0,
        string: '',
        array: [],
    };
    // checking if the user has "disabled" the armor from other sources
    // (there should be an armor inside the 'user' object with an empty name "")
    const userArmor = character?.character?.user?.armor;
    if (userArmor && Object.hasOwn(userArmor, 'name')) {
        armor = userArmor;
        armorAC = (0, parsers_1.parseExpressionNumeric)(armor.AC, character);
    }
    else {
        const armorArray = (0, parsers_1.getStatArrayFromObjects)(character, 'armor');
        armorArray?.forEach((a) => {
            const AC = (0, parsers_1.parseExpressionNumeric)(a.AC, character);
            if (AC > armorAC) {
                armor = a;
                armorAC = AC;
            }
        });
    }
    const armorBonuses = (0, parsers_1.getBonusesForOneStatistic)(character, 'AC');
    let armorBonus = 0;
    let armorBonusString = '';
    let hasExpression = false;
    armorBonuses.forEach((bonus) => {
        if (!(0, parsers_1.isNumber)(bonus.value)) {
            hasExpression = true;
        }
        armorBonus += (0, parsers_1.parseExpressionNumeric)(bonus.value, character);
        if (bonus?.name) {
            if (armorBonusString)
                armorBonusString += ', ';
            armorBonusString += bonus.name;
        }
    });
    if (!armorAC) {
        // no armor
        totalAC = 10 + dexMod + armorBonus;
    }
    else {
        // stealth disadvantage trait & speed reduction
        if (armor.stealthDis === true &&
            (0, parsers_1.parseExpressionNumeric)(armor?.minStr, character) > v?.STR) {
            if (!character.character.conditions) {
                character.character.conditions = [];
            }
            if (character.character.conditions?.findIndex((c) => c.name === '_clankingarmor') === -1) {
                character.character.conditions?.push(createClankingArmorCondition(armor.name));
            }
        }
        else if (character.character.conditions &&
            character.character.conditions?.findIndex((c) => c.name === '_clankingarmor') !== -1) {
            character.character.conditions = character.character.conditions?.filter((c) => c.name !== '_clankingarmor');
        }
        // max dex bonus
        if (armor?.maxDex !== undefined) {
            const maxDexBonus = (0, parsers_1.parseExpressionNumeric)(armor?.maxDex, character);
            if (dexMod > maxDexBonus || (dexMod < 0 && maxDexBonus === 0)) {
                dexMod = maxDexBonus;
            }
        }
        totalAC = armorAC + dexMod + armorBonus;
    }
    if (armor.name) {
        s.AC.array?.push((0, parsers_1.createPart)(armor.name.toLowerCase(), 'armor'));
        s.AC.name = armor.name;
    }
    if (armorBonusString) {
        if (s.AC.array?.length) {
            s.AC.array?.push((0, parsers_1.createPart)(', '));
        }
        s.AC.array?.push((0, parsers_1.createPart)(armorBonusString.toLowerCase(), 'armor'));
    }
    // ------- automatic calculation (CR) -------
    if (
    // character.character?.CRCalculation?.name === "automatic" &&
    armor.isAutomaticCalcDisabled !== true &&
        (0, parsers_1.isNumber)(armor.AC) &&
        !hasExpression) {
        totalAC = (0, parsers_1.calibrateStatistic)(character, totalAC, 'AC');
    }
    s.AC.number = totalAC;
    if (s.AC.array.length) {
        s.AC.array.push((0, parsers_1.createPart)(')'));
        s.AC.array.unshift((0, parsers_1.createPart)(' ('));
    }
    s.AC.array.unshift((0, parsers_1.createPart)(totalAC.toString(), 'text'));
    s.AC.string = s.AC.array.reduce((acc, obj) => acc + obj.string, '');
    character.variables.AC = totalAC;
}
