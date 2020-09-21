
import Collision from "./collision.js";
import * as constants from "../main.js";
import colorAnimation from '../animation/colorAnimation.js';
import vibration from '../animation/vibration.js';
import {addElement} from "../rendering/addElement.js";
import onPlaceAnimation from "../animation/onPlaceAnimation.js";
import {
    center,
    playingElementsContainer,
    CurrentGoAnswers,
    CurrentGoToAnswers,
    CurrentGoOnAnswers,
    CurrentGoForAnswers,
    goContainer,
    goToContainer,
    goOnContainer,
    goForContainer,
} from "../main.js";
import {
    correctGoAnswers,
    correctGoToAnswers,
    correctGoOnAnswers,
    correctGoForAnswers,
} from "../rendering/elements.js";


createjs.Ticker.setFPS(60);

export default function onDragEnd() {
    const thisId = playingElementsContainer.getChildIndex(this);
    let currentX;
    let currentY;
    
    this.interactive = false;

    if ( Collision(this, center.children[0]) && correctGoAnswers.includes(this)) {
        currentX = constants.CENTER_WIDTH / 2;
        currentY = constants.TOP_HEIGHT + this.width + (this.width + constants.PADDING_Y / 2) * CurrentGoAnswers.children.length;

        colorAnimation(goContainer.children[2]);
        colorAnimation(constants.bottomContainer.children[1]);
        onPlaceAnimation(this, currentX, currentY);

        CurrentGoAnswers.addChild(this);
        playingElementsContainer.removeChild(this);
        addElement(thisId);
    } 
    
    else if ( Collision(this, center.children[1]) && correctGoToAnswers.includes(this) ) {
        currentX = (3 * constants.CENTER_WIDTH ) / 2;
        currentY = constants.TOP_HEIGHT + this.width + (this.width + constants.PADDING_Y / 2) * CurrentGoToAnswers.children.length;

        colorAnimation(goToContainer.children[2]);
        colorAnimation(constants.bottomContainer.children[1]);
        onPlaceAnimation(this, currentX, currentY);

        CurrentGoToAnswers.addChild(this);
        playingElementsContainer.removeChild(this);
        addElement(thisId);
    } 
    
    else if ( Collision(this, center.children[2]) && correctGoOnAnswers.includes(this) ) {
        currentX = (5 * constants.CENTER_WIDTH) / 2;
        currentY = constants.TOP_HEIGHT + this.width + (this.width + constants.PADDING_Y / 2) * CurrentGoOnAnswers.children.length;

        colorAnimation(goOnContainer.children[2]);
        colorAnimation(constants.bottomContainer.children[1]);
        onPlaceAnimation(this, currentX, currentY);

        CurrentGoOnAnswers.addChild(this);
        playingElementsContainer.removeChild(this);
        addElement(thisId);
    } 
    
    else if ( Collision(this, center.children[3]) && correctGoForAnswers.includes(this) ) {
        currentX = (7 * constants.CENTER_WIDTH) / 2;
        currentY = constants.TOP_HEIGHT + this.width + (this.width + constants.PADDING_Y / 2) * CurrentGoForAnswers.children.length;

        colorAnimation(goForContainer.children[2]);
        colorAnimation(constants.bottomContainer.children[1]);
        onPlaceAnimation(this, currentX, currentY);

        CurrentGoForAnswers.addChild(this);
        playingElementsContainer.removeChild(this);
        addElement(thisId);
    } 
    
    else {
        if(Collision(this, center.children[0])){
            colorAnimation(goContainer.children[3]);
        } 

        else if (Collision(this, center.children[1])){
            colorAnimation(goToContainer.children[3]);
        } 

        else if (Collision(this, center.children[2])){
            colorAnimation(goOnContainer.children[3]);
        }

        else if(Collision(this, center.children[3])){
            colorAnimation(goForContainer.children[3]);
        }

        colorAnimation(constants.bottomContainer.children[2]);

        vibration(this, thisId);

        this.interactive = true;
    }

    this.alpha = 1;
    this.dragging = false;
    this.data = null;
}