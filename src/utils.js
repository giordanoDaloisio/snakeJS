function setStyle(element, properties){
  for(let property in properties){
    element.style[property] = properties[property];
  }
}

function createBoard(root){
  let board = document.createElement('div');
  board.getBlockSize = () => {return 20};
  board.getWidth = () => {return 50};
  board.getHeight = () => {return 20};
  setStyle(board, {
    position: 'relative',
    width: board.getBlockSize()*board.getWidth()+'px',
    height: board.getBlockSize()*board.getHeight()+'px',
    margin: '5% auto',
    border: '1px solid black',
    backgroundColor: '#ffffff',
    backgroundImage: 'linear-gradient(#000 1px, transparent .1em), linear-gradient(90deg, #000 1px, transparent .1em)',
    backgroundSize: board.getBlockSize()+"px "+board.getBlockSize()+"px"
  });
  root.appendChild(board);
  return board;
}

function createBlock(x, y, width, height, direction, root){
  let div = document.createElement('div');
  setStyle(div,{
    position: 'absolute',
    left: x+'px',
    top: y+'px',
    width: width+'px',
    height: height+'px',
    backgroundColor: 'black'
  });
  root.appendChild(div);
  return {
    x,
    y,
    width,
    height,
    direction,
    getElement: function() {
      return div
    }
  };
}

export {
  setStyle,
  createBoard,
  createBlock
};
