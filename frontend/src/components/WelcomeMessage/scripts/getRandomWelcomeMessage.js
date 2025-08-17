import {messageEnum} from '../../../enums/welcomeMessage/welcomeMessageEnum.js';

export function getRandomWelcomeMessage() {
    const greetings = Object.values(messageEnum);
    const index = Math.floor(Math.random() * greetings.length);
    return greetings[index];
}
