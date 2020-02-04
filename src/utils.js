function setStyle(element, properties){
  for(let property in properties){
    element.style[property] = properties[property];
  }
}

function createBoard(root){
  let board = document.createElement('div');
  board.block = 10;
  setStyle(board, {
    position: 'relative',
    width: board.block*100+'px',
    height: board.block*40+'px',
    margin: '5% auto',
    backgroundColor: '#80807a',
  });
  root.appendChild(board);
  return board;
}

export {
  setStyle,
  createBoard
};
