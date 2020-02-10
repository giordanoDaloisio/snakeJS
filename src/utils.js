function setStyle(element, properties){
  for(let property in properties){
    element.style[property] = properties[property];
  }
}

function createBoard(root){
  let board = document.createElement('div');
  board.getBlockSize = () => {return 20};
  board.getWidth = () => {return 30};
  board.getHeight = () => {return 15};
  setStyle(board, {
    position: 'relative',
    width: board.getBlockSize()*board.getWidth()+'px',
    height: board.getBlockSize()*board.getHeight()+'px',
    margin: '5% auto',
    borderRight: '1px solid black',
    borderBottom: '1px solid black',
    backgroundColor: '#ffffff',
    backgroundImage: 'linear-gradient(#000 1px, transparent .1em), linear-gradient(90deg, #000 1px, transparent .1em)',
    backgroundSize: board.getBlockSize()+"px "+board.getBlockSize()+"px"
  });
  root.appendChild(board);
  return board;
}

export {
  setStyle,
  createBoard,
};
