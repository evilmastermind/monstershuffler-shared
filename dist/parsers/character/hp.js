"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateHitPoints = void 0;
const parsers_1 = require("../../parsers");
function calculateHitPoints(character, addBonus = true, calibrate = true) {
    const s = character.statistics;
    const v = character.variables;
    const size = s.size.number;
    const HitDice = s.level;
    const die = parsers_1.sizeStats[size.toString()].hitDice;
    const HPFromHitDice = Math.floor(HitDice * ((die + 1) / 2));
    const HPFromConstitution = HitDice * v.CON;
    const HPBonus = addBonus ? (0, parsers_1.getBonus)(character, "HP") : 0;
    let HPTotal = HPFromHitDice + HPFromConstitution + HPBonus;
    if (HPTotal < 1) {
        HPTotal = 1;
    }
    // ------- automatic calculation (CR) -------
    if (character.character?.CRCalculation?.name === "automatic" && calibrate) {
        HPTotal = (0, parsers_1.calibrateStatistic)(character, HPTotal, "HP");
    }
    // HP text
    let HPText = "";
    if (HPFromConstitution > 0) {
        HPText = ` + ${HPFromConstitution}`;
    }
    else if (HPFromConstitution < 0) {
        HPText = ` - ${Math.abs(HPFromConstitution)}`;
    }
    if (HPBonus > 0) {
        HPText = ` + ${HPBonus}`;
    }
    else if (HPBonus < 0) {
        HPText = ` - ${Math.abs(HPBonus)}`;
    }
    // statistics
    s.HP = {
        string: `${HPTotal} (${HitDice}d${die}${HPText})`,
        number: HPTotal,
    };
    // variables
    v.HP = HPTotal;
}
exports.calculateHitPoints = calculateHitPoints;
