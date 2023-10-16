// Importing the findWinner function
import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

// Determining the default player and selecting current player's icon

let currentPlayer = 'circle';
let currentPlayerIcon = document.querySelector('.game__playerIcon');

// Function for alternating the player after each turn

const resolvePlayerTurn = (event) => {
  if (currentPlayer === 'circle') {
    // When it is O's turn
    event.target.classList.add('game__box--circle'); // the box is filled with O icon
    currentPlayer = 'cross'; // Now it is X's turn
    currentPlayerIcon.src = 'ikonky/cross.svg'; // and X icon is displayed above the deck
    event.target.disabled = true;
  } else {
    // Vice versa
    event.target.classList.add('game__box--cross');
    currentPlayer = 'circle';
    currentPlayerIcon.src = 'ikonky/circle.svg';
    event.target.disabled = true;
  }
};

// Calling the function on the boxes (buttons)

const gameBoxes = document.querySelectorAll('.game__deck button');
gameBoxes.forEach((button) => {
  button.addEventListener('click', resolvePlayerTurn);
});

// Selecting the restart button

const restartButton = document.querySelector('.game__button--restart');

// Function for initiating confirmation when the button is clicked

restartButton.addEventListener('click', (event) => {
  let confirmation = confirm('Opravdu chceš začít znovu?');
  if (!confirmation) {
    event.preventDefault();
  }
});
