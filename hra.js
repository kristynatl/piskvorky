let currentPlayer = 'circle';

const resolvePlayerTurn = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('game__box--circle');
    currentPlayer = 'cross';
  } else {
    event.target.classList.add('game__box--cross');
    currentPlayer = 'circle';
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
