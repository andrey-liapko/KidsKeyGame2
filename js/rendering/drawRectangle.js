export default function drawRectangle(x, y, width, height, fillColor){
    let answerRectangle = new PIXI.Graphics();
    answerRectangle.beginFill(fillColor);
    answerRectangle.drawRect(
        x,
        y,
        width,
        height
    );
    return answerRectangle;
}