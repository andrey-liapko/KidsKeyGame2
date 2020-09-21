export default function onPlaceAnimation(element , x, y){
    createjs.Tween.get(element)
        .to({ x: x, y: y }, 300, createjs.Ease.getPowInOut(4));
}