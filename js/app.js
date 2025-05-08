let game;
const startButton = document.getElementById('btn__reset');
const qwerty = document.getElementById('qwerty');

// initialize the game when the start button is clicked
startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

// handle the letter button clicks
qwerty.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'BUTTON') {
        game.handleInteraction(target);
    }
});