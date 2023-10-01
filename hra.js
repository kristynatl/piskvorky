let currentPlayer = 'circle';
let currentPlayerIcon = document.querySelector('.game__playerIcon');

const resolvePlayerTurn = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('game__box--circle');
    currentPlayer = 'cross';
    currentPlayerIcon.src = 'ikonky/cross.svg';
  } else {
    event.target.classList.add('game__box--cross');
    currentPlayer = 'circle';
    currentPlayerIcon.src = 'ikonky/circle.svg';
  }
};

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', resolvePlayerTurn);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', resolvePlayerTurn);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', resolvePlayerTurn);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', resolvePlayerTurn);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', resolvePlayerTurn);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', resolvePlayerTurn);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', resolvePlayerTurn);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', resolvePlayerTurn);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', resolvePlayerTurn);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', resolvePlayerTurn);
