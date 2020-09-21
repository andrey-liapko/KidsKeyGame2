import {
    startX,
    startY,
} from "../rendering/addElement.js";

export default function vibration(element, elementId){
    createjs.Tween.get(element)
        .to({ x: element.x + 7, y: element.y + 7 }, 50, createjs.Ease.getPowInOut(4))
        .to({ x: element.x - 7, y: element.y - 7 }, 50, createjs.Ease.getPowInOut(4))
        .to({ x: element.x + 7, y: element.y - 7 }, 50, createjs.Ease.getPowInOut(4))
        .to({ x: element.x - 7, y: element.y + 7 }, 50, createjs.Ease.getPowInOut(4))
        .to({ x: startX[elementId], y: startY[elementId] }, 300, createjs.Ease.getPowInOut(4));
}