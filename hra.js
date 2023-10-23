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
  // Creating array from the boxes (buttons)
  const gameBoxesArray = Array.from(gameBoxes);

  // Transforming the boxes array to symbols array
  const boxSymbolsArray = gameBoxesArray.map((button) => {
    if (button.classList.contains('game__box--circle')) {
      return 'o';
    } else if (button.classList.contains('game__box--cross')) {
      return 'x';
    } else {
      return '_';
    }
  });

  // Determining the winner with a delay
  const winner = findWinner(boxSymbolsArray);

  setTimeout(() => {
    if (winner === 'o') {
      alert('Vyhrálo kolečko!');
    } else if (winner === 'x') {
      alert('Vyhrál křížek!');
    } else if (winner === 'tie') {
      alert('Remíza!');
    }
  }, 200);

  // Function for the automatic X's turn (sending the API request)
  const makeCrossMove = async (array) => {
    // Disabling all the boxes before the fetch
    gameBoxes.forEach((button) => {
      button.disabled = true;
    });

    const response = await fetch(
      'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          board: array,
          player: 'x',
        }),
      },
    );

    const data = await response.json();
    const { x, y } = data.position;
    const index = x + y * 10;
    const playedBox = gameBoxes[index];

    // Enabling back all the empty boxes after the response is received
    gameBoxes.forEach((button, index) => {
      if (boxSymbolsArray[index] === '_') {
        button.disabled = false;
      }
    });

    // Simulation of click on the chosen box
    playedBox.click();
  };

  // Calling the function for the automatic turn when there is no winner yet and it is X's turn
  if (winner === null && currentPlayer === 'cross') {
    makeCrossMove(boxSymbolsArray);
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
