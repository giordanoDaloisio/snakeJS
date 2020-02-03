function setStyle(element, properties){
  for(let property in properties){
    element.style[property] = properties[property];
  }
}

function createBoard(root){
  let board = document.createElement('div');
  setStyle(board, {
    position: 'relative',
    width: '90%',
    height: '80vh',
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
