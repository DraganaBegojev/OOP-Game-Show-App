/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('hello world'),
            new Phrase('i love coding'),
            new Phrase('object oriented programming'),
            new Phrase('full stack development'),
            new Phrase('software engineering')
        ];
        this.activePhrase = null;
    }
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }
}