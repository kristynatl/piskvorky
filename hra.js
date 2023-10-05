let currentPlayer = 'circle';
let currentPlayerIcon = document.querySelector('.game__playerIcon');

const resolvePlayerTurn = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('game__box--circle');
    currentPlayer = 'cross';
    currentPlayerIcon.src = 'ikonky/cross.svg';
    event.target.disabled = true;
  } else {
    event.target.classList.add('game__box--cross');
    currentPlayer = 'circle';
    currentPlayerIcon.src = 'ikonky/circle.svg';
    event.target.disabled = true;
  }
};

document
  .querySelector('.game__deck button:nth-child(1)')
  .addEventListener('click', resolvePlayerTurn);
document
  .querySelector('.game__deck button:nth-child(2)')
  .addEventListener('click', resolvePlayerTurn);
document
  .querySelector('.game__deck button:nth-child(3)')
  .addEventListener('click', resolvePlayerTurn);
document
  .querySelector('.game__deck button:nth-child(4)')
  .addEventListener('click', resolvePlayerTurn);
document
  .querySelector('.game__deck button:nth-child(5)')
  .addEventListener('click', resolvePlayerTurn);
document
  .querySelector('.game__deck button:nth-child(6)')
  .addEventListener('click', resolvePlayerTurn);
document
  .querySelector('.game__deck button:nth-child(7)')
  .addEventListener('click', resolvePlayerTurn);
document
  .querySelector('.game__deck button:nth-child(8)')
  .addEventListener('click', resolvePlayerTurn);
document
  .querySelector('.game__deck button:nth-child(9)')
  .addEventListener('click', resolvePlayerTurn);
document
  .querySelector('.game__deck button:nth-child(10)')
  .addEventListener('click', resolvePlayerTurn);

const restartButton = document.querySelector('.game__button--restart');

restartButton.addEventListener('click', (event) => {
  let confirmation = confirm('Opravdu chceš začít znovu?');
  if (!confirmation) {
    event.preventDefault();
  }
});
