// game logic
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
    // select a random phrase from the phrases array
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }
    // initialize the game
    startGame() {
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        document.querySelector('#overlay').style.display = 'none';
    }
    // check win or lose
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('#phrase li.letter.hide');
        return hiddenLetters.length === 0;
    }
}