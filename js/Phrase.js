// pharse display logic
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
  // check if the letter is in the phrase
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }
  // show the letter on the game board
  showMatchedLetter(letter) {
    const letters = document.querySelectorAll(`#phrase li.${letter}`);
    letters.forEach((li) => {
      li.classList.remove('hide');
      li.classList.add('show', 'revealed');
    });
  }
}