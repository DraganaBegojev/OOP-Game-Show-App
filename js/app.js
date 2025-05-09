let game;
const startButton = document.getElementById('btn__reset');
const qwerty = document.getElementById('qwerty');

// initialize the game when the start button is clicked
startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

// Initialize the game when the Enter key is pressed
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && overlay.style.display !== 'none') {  // Check if the start button is visible
        game = new Game();  // Create a new game instance
        game.startGame();   // Start the game
    }
});
// handle the letter button clicks
qwerty.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'BUTTON') {
        // Add visual press effect
        target.classList.add('pressed');
        setTimeout(() => {
        target.classList.remove('pressed');
         }, 100);
        
         game.handleInteraction(target);
    }
});

// handle physical keyboard presses
document.addEventListener('keydown', (e) => {
    if (overlay.style.display !== 'none') return;

    const letter = e.key.toLowerCase();
    if (!/^[a-z]$/.test(letter)) return; // skip non-letters

    const button = Array.from(document.querySelectorAll('#qwerty button'))
        .find(btn => btn.textContent === letter);

    if (button && !button.disabled) {
        // Add visual press effect
        button.classList.add('pressed');
        setTimeout(() => {
            button.classList.remove('pressed');
        }, 100);

        game.handleInteraction(button);
    }
});