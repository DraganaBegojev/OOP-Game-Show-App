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
        // Reset everything
        const phraseUL = document.querySelector('#phrase ul');
        phraseUL.innerHTML = '';

        const keys = document.querySelectorAll('#qwerty button');
        keys.forEach(button => {
            button.disabled = false;
            button.className = 'key';
        });

        const hearts = document.querySelectorAll('.tries img');
        hearts.forEach(img => {
            img.src = 'images/liveHeart.png';
        });

        this.missed = 0;
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        document.querySelector('#overlay').style.display = 'none';
    }
    // check win or lose
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('#phrase li.letter.hide');
        return hiddenLetters.length === 0;
    }
    // life lost
    removeLife() {
        this.missed++;
        const hearts = document.querySelectorAll('.tries img');
        hearts[this.missed - 1].src = 'images/lostHeart.png';
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }
    // game over logic
    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay'); 
        const message = document.querySelector('#overlay h1');
        overlay.style.display = 'flex';

        // Remove previous game state classes
        overlay.classList.remove('start', 'win', 'lose');

        if (gameWon) {
            message.textContent = 'Congratulations! You won!';
            overlay.classList.add('win');
        } else {
            message.textContent = 'Sorry, you lost. Try again!';
            overlay.classList.add('lose');
        }
    }
    // handle the letter button click
    handleInteraction(button) {
        const letter = button.textContent;
        button.disabled = true;

        if (this.activePhrase.checkLetter(letter)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }
}