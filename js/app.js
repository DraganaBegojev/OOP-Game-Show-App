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

// handle physical keyboard presses
document.addEventListener('keydown', (e) => {
    const letter = e.key.toLowerCase();
    if (!/^[a-z]$/.test(letter)) return; // only allow a-z letters

    const button = Array.from(document.querySelectorAll('#qwerty button'))
        .find(btn => btn.textContent === letter);

    if (button && !button.disabled) {
        game.handleInteraction(button);
    }
});