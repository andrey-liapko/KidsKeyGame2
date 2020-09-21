import renderingFront from "./rendering/front.js";
import renderingElements from "./rendering/elements.js";

export const app = new PIXI.Application({
    backgroundColor: 0x1099bb,
    width: 1024,
    height: 720,
});
document.body.appendChild(app.view);

app.loader
    .add("images/Acrulse.png")
    .add("images/Adate.png")
    .add("images/Arun.png")
    .add("images/Aswim.png")
    .add("images/Awalk.png")
    .add("images/Bed.png")
    .add("images/Church.png")
    .add("images/dancing.png")
    .add("images/Home.png")
    .add("images/School.png")
    .add("images/shopping.png")
    .add("images/Vacation.png")
    .load(onAssetsLoaded);

export const SPRITE_SIZE = 100;
export const TOP_WIDTH = app.screen.width / 4;
export const CENTER_WIDTH = TOP_WIDTH;
export const TOP_HEIGHT = 140;
export const BOTTOM_HEIGHT = TOP_HEIGHT;
export const BOTTOM_WIDTH = app.screen.width;
export const CENTER_HEIGHT = app.screen.height - TOP_HEIGHT - BOTTOM_HEIGHT;
export const PADDING_Y = (CENTER_HEIGHT - SPRITE_SIZE * 3) / 3;
export const PADDING_X = (app.screen.width - SPRITE_SIZE * 5) / 6;

export const center = new PIXI.Container();
export const bottomContainer = new PIXI.Container();
export const goContainer = new PIXI.Container();
export const goToContainer = new PIXI.Container();
export const goOnContainer = new PIXI.Container();
export const goForContainer = new PIXI.Container();
export const playingElementsContainer = new PIXI.Container();

app.stage.addChild(goContainer);
app.stage.addChild(goToContainer);
app.stage.addChild(goOnContainer);
app.stage.addChild(goForContainer);
app.stage.addChild(center);
app.stage.addChild(bottomContainer);
app.stage.addChild(playingElementsContainer);


export let CurrentGoAnswers = new PIXI.Container();
export let CurrentGoToAnswers = new PIXI.Container();
export let CurrentGoOnAnswers = new PIXI.Container();
export let CurrentGoForAnswers = new PIXI.Container();

app.stage.addChild(CurrentGoAnswers);
app.stage.addChild(CurrentGoToAnswers);
app.stage.addChild(CurrentGoOnAnswers);
app.stage.addChild(CurrentGoForAnswers);

function onAssetsLoaded() {
    renderingFront();

    renderingElements();
}
