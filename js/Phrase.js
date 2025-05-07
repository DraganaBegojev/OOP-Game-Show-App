/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  // display the phrase on the game board
  addPhraseToDisplay() {
    const phraseContainer = document.querySelector('#phrase ul');
    const phraseArray = this.phrase.split('');
    phraseArray.forEach((char) => {
      const li = document.createElement('li');
      li.textContent = char;
      if (char === ' ') {
        li.className = 'space';
      } else {
        li.classList.add('hide', 'letter', char);
      }
      phraseContainer.appendChild(li);
    });
  }
}