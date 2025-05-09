# OOP Game Show App
 Project 4

# Visual Press Effect for Keyboard Buttons

To enhance the user experience, a visual press effect has been added to the onscreen keyboard buttons. This effect gives immediate feedback to the player when a key is clicked (either via mouse click or physical keyboard press), making the interaction feel more interactive and responsive.

How It Works:
    - Onscreen Keyboard Button Clicks: When a user clicks a letter on the onscreen keyboard, a CSS class .pressed is added to the clicked button.
    This class applies a visual effect. After 100ms, the class is removed, returning the button to its original state, simulating the release of the key.
    - Physical Keyboard Presses: The same effect is triggered when a physical keyboard key is pressed. If the key is a letter (a-z), the corresponding button on the onscreen keyboard will receive the .pressed class for the same 100ms duration.


# Overlay Delay for Game Start and Game Over

A fade-out effect has been added to the overlay when starting a new game, as well as a fade-in effect when the game ends, creating a smoother transition between game states.

- Starting a New Game:
    When a new game starts, the overlay is hidden with a brief fade-out effect.
    This ensures the transition from the game-over screen to the new game state is smooth.
    The startGame() method has been updated to include a transition for the overlay’s opacity, creating a fade-out effect before hiding the overlay.

- Game Over Screen:
    When the game ends (either through winning or losing), the overlay fades in with a smooth transition, displaying the final message.
    The gameOver() method has been updated to include a fade-in effect when the overlay becomes visible.


# Start a New Game with Enter Key

To start a new game, you can now press the Enter key, but only if the game is currently inactive (i.e., the start screen is visible). This ensures that a new game can only be started after the previous game has ended.

    How It Works:
    Condition: The game will only start when the overlay (start screen) is visible.

    When Pressing Enter:
    If the overlay is visible (indicating the game is inactive), pressing Enter will create a new game instance and start the game.
    If the game is active, pressing Enter will have no effect.

#  Letter Reveal Animation

To enhance the visual feedback when a letter is revealed, a subtle fade and scale-in animation was added.
    A new CSS class called .revealed was created.
    And the showMatchedLetter(letter) method was updated.