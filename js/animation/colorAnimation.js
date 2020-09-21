export default function colorAnimation(element){
        createjs.Tween.get(element)
        .to({ alpha: 1 }, 150)
        .wait(250)
        .to({ alpha: 0 }, 150);
}