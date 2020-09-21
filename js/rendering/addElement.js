import {
    pictureSprites
} from "./elements.js";
import onDragStart from "../actions/onDragStart.js";
import onDragEnd from "../actions/onDragEnd.js";
import onDragMove from "../actions/onDragMove.js";
import {
    app,
    playingElementsContainer
} from "../main.js";
import * as constants from "../main.js";

export let startX = [];
export let startY = [];

export function addElement(numberInRow) {
    if (pictureSprites != 0) {
        const randomSprite = Math.floor(Math.random() * pictureSprites.length);

        const picture = pictureSprites[randomSprite];

        pictureSprites.splice(randomSprite, 1);

        picture.y =
            app.screen.height - constants.BOTTOM_HEIGHT + 20 + picture.height / 2;
        picture.x =
            (constants.SPRITE_SIZE + constants.PADDING_X) * numberInRow +
            constants.PADDING_X +
            picture.width / 2;
        startX[numberInRow] = picture.x;
        startY[numberInRow] = picture.y;

        picture.interactive = true;
        picture.buttonMode = true;
        picture.anchor.set(0.5);

        picture
            .on("pointerdown", onDragStart)
            .on("pointerup", onDragEnd)
            .on("pointerupoutside", onDragEnd)
            .on("pointermove", onDragMove);

        playingElementsContainer.addChildAt(picture, numberInRow);
    }
}