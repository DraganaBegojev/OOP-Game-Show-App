/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.getElementById('btn__reset');

// initialize the game when the start button is clicked
startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});
