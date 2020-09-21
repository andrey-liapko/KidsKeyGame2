import {
    app,
    center,
    bottomContainer,
    goContainer,
    goToContainer,
    goOnContainer,
    goForContainer,
} from "../main.js";
import * as constants from "../main.js";
import drawRectangle from "./drawRectangle.js";

export default function renderingFront() {
    const go = drawRectangle(
        0, 
        0, 
        constants.TOP_WIDTH, 
        constants.TOP_HEIGHT, 
        0xa8edeb);

    const goTo = drawRectangle(
        constants.TOP_WIDTH, 
        0, 
        constants.TOP_WIDTH, 
        constants.TOP_HEIGHT, 
        0x8dc7c5);

    const goOn = drawRectangle(
        constants.TOP_WIDTH * 2, 
        0, 
        constants.TOP_WIDTH, 
        constants.TOP_HEIGHT, 
        0xa8edeb);

    const goFor = drawRectangle(
        constants.TOP_WIDTH * 3,
        0, 
        constants.TOP_WIDTH, 
        constants.TOP_HEIGHT, 
        0x8dc7c5);

      
    
    goContainer.addChild(go);
    goToContainer.addChild(goTo);
    goOnContainer.addChild(goOn);
    goForContainer.addChild(goFor);



    const style = new PIXI.TextStyle({
        fontFamily: "Arial",
        fontSize: 36,
        fontStyle: "italic",
        fontWeight: "bold",
        fill: ["#ffffff", "#00ff99"], // gradient
        stroke: "#4a1850",
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: "#000000",
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 440,
    });

    const goText = new PIXI.Text("Go", style);
    goText.x = Math.round((constants.TOP_WIDTH - goText.width) / 2);
    goText.y = Math.round((constants.TOP_HEIGHT - goText.height) / 2);

    const goToText = new PIXI.Text("Go to", style);
    goToText.x = Math.round((constants.TOP_WIDTH * 3 - goToText.width) / 2);
    goToText.y = Math.round((constants.TOP_HEIGHT - goToText.height) / 2);

    const goOnText = new PIXI.Text("Go on", style);
    goOnText.x = Math.round((constants.TOP_WIDTH * 5 - goOnText.width) / 2);
    goOnText.y = Math.round((constants.TOP_HEIGHT - goOnText.height) / 2);

    const goForText = new PIXI.Text("Go for", style);
    goForText.x = Math.round((constants.TOP_WIDTH * 7 - goForText.width) / 2);
    goForText.y = Math.round((constants.TOP_HEIGHT - goForText.height) / 2);



    goContainer.addChild(goText);
    goToContainer.addChild(goToText);
    goOnContainer.addChild(goOnText);
    goForContainer.addChild(goForText);



    const rightGoAnswerRectangle = drawRectangle(
        0, 
        0, 
        constants.TOP_WIDTH, 
        constants.TOP_HEIGHT, 
        0x17E362);
    rightGoAnswerRectangle.alpha = 0;

    const rightGoToAnswerRectangle = drawRectangle(
        constants.TOP_WIDTH, 
        0, 
        constants.TOP_WIDTH, 
        constants.TOP_HEIGHT, 
        0x17E362);
    rightGoToAnswerRectangle.alpha = 0;

    const rightGoOnAnswerRectangle = drawRectangle(
        constants.TOP_WIDTH * 2, 
        0, 
        constants.TOP_WIDTH, 
        constants.TOP_HEIGHT, 
        0x17E362);
    rightGoOnAnswerRectangle.alpha = 0;

    const rightGoForAnswerRectangle = drawRectangle(
        constants.TOP_WIDTH * 3, 
        0, 
        constants.TOP_WIDTH, 
        constants.TOP_HEIGHT, 
        0x17E362);
    rightGoForAnswerRectangle.alpha = 0;



    goContainer.addChild(rightGoAnswerRectangle);
    goToContainer.addChild(rightGoToAnswerRectangle);
    goOnContainer.addChild(rightGoOnAnswerRectangle);
    goForContainer.addChild(rightGoForAnswerRectangle);



    const wrongGoAnswerRectangle = drawRectangle(
        0, 
        0, 
        constants.TOP_WIDTH, 
        constants.TOP_HEIGHT, 
        0xFA1200);
    wrongGoAnswerRectangle.alpha = 0;

    const wrongGoToAnswerRectangle = drawRectangle(
        constants.TOP_WIDTH, 
        0, 
        constants.TOP_WIDTH, 
        constants.TOP_HEIGHT, 
        0xFA1200);
    wrongGoToAnswerRectangle.alpha = 0;

    const wrongGoOnAnswerRectangle = drawRectangle(
        constants.TOP_WIDTH * 2, 
        0, 
        constants.TOP_WIDTH, 
        constants.TOP_HEIGHT, 
        0xFA1200);
    wrongGoOnAnswerRectangle.alpha = 0;

    const wrongGoForAnswerRectangle = drawRectangle(
        constants.TOP_WIDTH * 3, 
        0, 
        constants.TOP_WIDTH, 
        constants.TOP_HEIGHT, 
        0xFA1200);
    wrongGoForAnswerRectangle.alpha = 0;



    goContainer.addChild(wrongGoAnswerRectangle);
    goToContainer.addChild(wrongGoToAnswerRectangle);
    goOnContainer.addChild(wrongGoOnAnswerRectangle);
    goForContainer.addChild(wrongGoForAnswerRectangle);

    const firstColumn = drawRectangle(
        0,
        constants.TOP_HEIGHT,
        constants.TOP_WIDTH,
        constants.SPRITE_SIZE * 3 + 3 * constants.PADDING_Y,
        0xe6e6e6,
    );

    const secondColumn = drawRectangle(
        constants.TOP_WIDTH,
        constants.TOP_HEIGHT,
        constants.TOP_WIDTH,
        constants.SPRITE_SIZE * 3 + 3 * constants.PADDING_Y,
        0xc9c9c9,
    );

    const thirdColumn = drawRectangle(
        constants.TOP_WIDTH * 2,
        constants.TOP_HEIGHT,
        constants.TOP_WIDTH,
        constants.SPRITE_SIZE * 3 + 3 * constants.PADDING_Y,
        0xe6e6e6,
    );

    const fourthColumn = drawRectangle(
        constants.TOP_WIDTH * 3,
        constants.TOP_HEIGHT,
        constants.TOP_WIDTH,
        constants.SPRITE_SIZE * 3 + 3 * constants.PADDING_Y,
        0xc9c9c9,
    );



    center.addChild(firstColumn);
    center.addChild(secondColumn);
    center.addChild(thirdColumn);
    center.addChild(fourthColumn);



    const bottom = drawRectangle(
        0,
        app.screen.height - constants.BOTTOM_HEIGHT,
        constants.BOTTOM_WIDTH,
        constants.BOTTOM_HEIGHT,
        0xa8edeb,
    );

    const rightBottomAnswerRectangle = drawRectangle(
        0,
        app.screen.height - constants.BOTTOM_HEIGHT,
        constants.BOTTOM_WIDTH,
        constants.BOTTOM_HEIGHT,
        0x17E362,
    )
    rightBottomAnswerRectangle.alpha = 0;

    const wrongBottomAnswerContainer = drawRectangle(
        0,
        app.screen.height - constants.BOTTOM_HEIGHT,
        constants.BOTTOM_WIDTH,
        constants.BOTTOM_HEIGHT,
        0xFA1200,
    );
    wrongBottomAnswerContainer.alpha = 0;


    bottomContainer.addChild(bottom);
    bottomContainer.addChild(rightBottomAnswerRectangle);
    bottomContainer.addChild(wrongBottomAnswerContainer);
}
