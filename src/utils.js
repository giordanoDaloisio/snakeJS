function setStyle(element, properties){
  for(let property in properties){
    element.style[property] = properties[property];
  }
}

function createBoard(root){
  let board = document.createElement('div');
  board.getBlockSize = () => {return 10};
  setStyle(board, {
    position: 'relative',
    width: board.getBlockSize()*100+'px',
    height: board.getBlockSize()*40+'px',
    margin: '5% auto',
    backgroundColor: '#80807a',
    backgroundImage: 'linear-gradient(rgba(0, 255, 0, .7) 1px, transparent .1em), linear-gradient(90deg, rgba(0, 255, 0, .7) 1px, transparent .1em)',
    backgroundSize: '10px 10px'
  });
  root.appendChild(board);
  return board;
}

export {
  setStyle,
  createBoard
};
