"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateActions = void 0;
const jspath_1 = __importDefault(require("jspath"));
const functions_1 = require("../functions");
const functions_2 = require("../../functions");
const parsers_1 = require("../../parsers");
function calculateActions(character) {
    const tempMultiAttack = [];
    const tempMeleeAttacks = [];
    const tempRangedAttacks = [];
    const tempProfessionAttack = [];
    character.statistics.actions = [];
    character.statistics.traits = [];
    character.statistics.bonusActions = [];
    character.statistics.reactions = [];
    character.statistics.legendaryActions = [];
    const s = character.statistics;
    const v = character.variables;
    const t = character.tags;
    const tagsArray = [];
    let tagsNumber = 0;
    const actions = (0, functions_1.getStatArrayFromObjects)(character, "actions").flat();
    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const limit = (0, functions_1.getCurrentStatLimit)(character);
        if (!action?.variants?.length ||
            (action?.availableUntil && limit > action?.availableUntil)) {
            continue;
        }
        // giving a unique tag to each action
        while (!Object.hasOwn(action, "tag") || tagsArray.includes(action?.tag)) {
            const type = action?.tag || action?.variants[0]?.type || "action";
            if (isNaN(parseInt(type.charAt(type.length - 1)))) {
                action.tag = `${type}${tagsNumber}`;
            }
            else {
                action.tag =
                    type.slice(0, type.length - 1) +
                        (parseInt(type.charAt(type.length - 1)) + 1);
            }
            tagsNumber++;
        }
        tagsArray.push(action.tag);
        let variant = null;
        // finding the right variant for the current CR, if any
        for (const v of action.variants) {
            const availableAt = v.availableAt ?? -3;
            const currentAvailableAt = variant ? variant.availableAt ?? -3 : -3;
            if (availableAt <= limit && availableAt >= currentAvailableAt) {
                variant = v;
            }
        }
        if (variant === null) {
            continue;
        }
        // fixing the name of the action
        let actionName = (0, functions_1.parseNameChoices)(variant.name); // ex: "Fire | Cold | Lightning"
        actionName = (0, functions_1.replaceTags)(actionName, character, action, variant).reduce((acc, obj) => acc + obj.string, ""); // ex: "Cone of [damageType]"
        if (actionName !== variant.name) {
            character.tags[action.tag] = (0, functions_2.capitalizeFirst)(actionName);
        }
        if (variant.type === "attack") {
            action?.attacks?.forEach((attack) => {
                if (attack.replaceName &&
                    attack?.attributes &&
                    "name" in attack?.attributes &&
                    attack?.attributes?.name) {
                    variant.name = attack.attributes.name;
                    actionName = attack.attributes.name;
                }
            });
        }
        const parsedActionArray = (0, functions_1.replaceTags)(variant.description.trim(), character, action, variant);
        actionName = (0, functions_2.capitalizeFirst)(actionName);
        const format = ["font-bold"];
        if (variant.type !== "legendary") {
            format.push("italic");
        }
        const parsedAction = {
            name: actionName,
            nameArray: [{ string: actionName, format }],
            tag: action.tag,
            priority: action.priority || 100,
            string: parsedActionArray.reduce((acc, obj) => acc + obj.string, ""),
            array: parsedActionArray,
        };
        // recharge
        if (variant.recharge) {
            parsedAction.nameArray.push((0, functions_1.createPart)(" (", "text", format));
            parsedAction.recharge = variant.recharge;
            const charges = (0, parsers_1.parseExpressionNumeric)(variant.charges, character) || 1;
            const descriptionPart = {
                string: "",
                type: "resource",
                format,
            };
            if (charges) {
                parsedAction.charges = charges;
            }
            switch (variant.recharge) {
                case "turn":
                    descriptionPart.string = `${charges}/Turn`;
                    break;
                case "short":
                    if (charges === 1) {
                        descriptionPart.string = "Recharges after a Short or Long Rest";
                    }
                    else {
                        descriptionPart.string = `${charges}/Short or Long Rest`;
                    }
                    break;
                case "day":
                    descriptionPart.string = `${charges}/Day`;
                    break;
                case "week":
                    descriptionPart.string = `${charges}/Week`;
                    break;
                case "month":
                    descriptionPart.string = `${charges}/Month`;
                    break;
                case "3-6":
                    descriptionPart.string = "Recharge 3–6";
                    break;
                case "4-6":
                    descriptionPart.string = "Recharge 4–6";
                    break;
                case "5-6":
                    descriptionPart.string = "Recharge 5–6";
                    break;
                case "6-6":
                    descriptionPart.string = "Recharge 6–6";
                    break;
            }
            parsedAction.nameArray.push(descriptionPart);
            parsedAction.nameArray.push((0, functions_1.createPart)(")", "text", format));
        }
        // cost (legendary actions)
        if (variant.cost && variant.type === "legendary") {
            const cost = (0, parsers_1.parseExpressionNumeric)(variant.cost, character) || 1;
            parsedAction.cost = cost;
            if (cost > 1) {
                parsedAction.nameArray.push((0, functions_1.createPart)(" (", "text", format));
                parsedAction.nameArray.push({
                    string: `Costs ${cost} Actions`,
                    type: "resource",
                    format,
                });
                parsedAction.nameArray.push((0, functions_1.createPart)(")"));
            }
        }
        parsedAction.name = parsedAction.nameArray.reduce((acc, obj) => acc + obj.string, "");
        // assigning the action to the correct array
        switch (variant.type) {
            case "attack":
                if (action.tag === "profession") {
                    tempProfessionAttack.push(parsedAction);
                }
                else {
                    const properties = jspath_1.default.apply("..properties", action.attacks);
                    if (properties.includes("ranged")) {
                        tempRangedAttacks.push(parsedAction);
                    }
                    else {
                        tempMeleeAttacks.push(parsedAction);
                    }
                }
                break;
            case "multiattack":
                tempMultiAttack.push(parsedAction);
                break;
            case "trait":
                character.statistics.traits.push(parsedAction);
                break;
            case "action":
                character.statistics.actions.push(parsedAction);
                break;
            case "bonus":
                character.statistics.bonusActions.push(parsedAction);
                break;
            case "reaction":
                character.statistics.reactions.push(parsedAction);
                break;
            case "legendary":
                character.statistics.legendaryActions.push(parsedAction);
                break;
        }
    }
    // sorting the arrays
    const sortFunction = (a, b) => a.priority - b.priority;
    tempMultiAttack.sort(sortFunction);
    tempMeleeAttacks.sort(sortFunction);
    tempRangedAttacks.sort(sortFunction);
    character.statistics.traits.sort(sortFunction);
    character.statistics.actions.sort(sortFunction);
    character.statistics.bonusActions.sort(sortFunction);
    character.statistics.reactions.sort(sortFunction);
    character.statistics.legendaryActions.sort(sortFunction);
    // merging the actions
    let mergedActions = tempMultiAttack.concat(tempMeleeAttacks, tempRangedAttacks);
    if (mergedActions.length === 0) {
        mergedActions = mergedActions.concat(tempProfessionAttack);
    }
    character.statistics.actions = mergedActions.concat(character.statistics.actions);
    const legendaryActionsMax = (0, functions_1.getPrioritizedStatistic)(character, "legendaryActionsMax") || "3";
    if (legendaryActionsMax) {
        s.legendaryActionsMax = (0, parsers_1.parseExpressionNumeric)(legendaryActionsMax, character);
        s.legendaryActionsIntro = {
            string: "",
            array: [],
        };
        const legArray = s.legendaryActionsIntro.array;
        legArray.push({
            string: `${t.Name} can take ${s.legendaryActionsMax} legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. ${t.Name} regains spent legendary actions at the start of ${t.his} turn.`,
            type: "translatableText",
            translationKey: "legendaryActionsIntro",
            translationVariables: {
                name: t.Name,
                his: t.his,
                number: s.legendaryActionsMax.toString(),
            },
        });
    }
}
exports.calculateActions = calculateActions;
