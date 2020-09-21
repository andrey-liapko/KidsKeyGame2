import {addElement} from "./addElement.js";

export let correctGoAnswers = [];
export let correctGoToAnswers = [];
export let correctGoOnAnswers = [];
export let correctGoForAnswers = [];
export let pictureSprites = [];

export default function renderingElements() {
    let pictureTextures = [
        PIXI.Texture.from("images/Acrulse.png"),
        PIXI.Texture.from("images/Adate.png"),
        PIXI.Texture.from("images/Arun.png"),
        PIXI.Texture.from("images/Aswim.png"),
        PIXI.Texture.from("images/Awalk.png"),
        PIXI.Texture.from("images/Bed.png"),
        PIXI.Texture.from("images/Church.png"),
        PIXI.Texture.from("images/dancing.png"),
        PIXI.Texture.from("images/Home.png"),
        PIXI.Texture.from("images/School.png"),
        PIXI.Texture.from("images/shopping.png"),
        PIXI.Texture.from("images/Vacation.png"),
    ];

    pictureSprites = [];
    for (let i = 0; i < 12; i++) {
        const picture = new PIXI.Sprite(pictureTextures[i]);

        pictureSprites.push(picture);
    }

    correctGoAnswers = [
        pictureSprites[8],
        pictureSprites[10],
        pictureSprites[7],
    ];
    correctGoToAnswers = [
        pictureSprites[6],
        pictureSprites[5],
        pictureSprites[9],
    ];
    correctGoOnAnswers = [
        pictureSprites[1],
        pictureSprites[0],
        pictureSprites[11],
    ];
    correctGoForAnswers = [
        pictureSprites[2],
        pictureSprites[4],
        pictureSprites[3],
    ];

    for (let i = 0; i < 5; i++) {
        addElement(i);
    }
}
