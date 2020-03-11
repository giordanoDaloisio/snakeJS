function setStyle(element, properties) {
  for (let property in properties) {
    element.style[property] = properties[property];
  }
}

function createBoard(root) {

  const board = document.createElement('div');
  board.getBlockSize = () => {
    return 20;
  };
  board.getWidth = () => {
    return 30;
  };
  board.getHeight = () => {
    return 15;
  };
  setStyle(board, {
    position: 'absolute',
    left: '30%',
    width: board.getBlockSize() * board.getWidth() + 'px',
    height: board.getBlockSize() * board.getHeight() + 'px',
    margin: '5% auto',
    borderRight: '1px solid black',
    borderBottom: '1px solid black',
    backgroundColor: '#ffffff',
    backgroundImage: 'linear-gradient(#000 1px, transparent .1em), linear-gradient(90deg, #000 1px, transparent .1em)',
    backgroundSize: board.getBlockSize() + 'px ' + board.getBlockSize() + 'px',
  });
  root.appendChild(board);
  return board;
}

function createScore(root) {
  const div = document.createElement('div');
  const span = document.createElement('span');
  div.innerHTML = '<h1>Snake Game</h1><h2>Punteggio: </h2>';
  div.appendChild(span);
  setStyle(div, {
    position: 'absolute',
    left: '10%',
    right: '70%',
    bottom: '0',
    top:'0',
    margin: '5% auto',
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: 'large'
  });
  root.appendChild(div);
  return span;
}

function createMessage(board, textMessage, eventName="start"){
  const message = document.createElement("div");
  message.innerHTML = "<p>"+textMessage+"</p>";
  const button = document.createElement("button");
  button.textContent = "Vai";
  message.appendChild(button);
  board.appendChild(message);

  setStyle(message, {
    textAlign: 'center',
    position: 'absolute',
    left: board.getWidth()/4 * board.getBlockSize() + 'px',
    top: board.getHeight()/4 * board.getBlockSize() + 'px',
    right: board.getWidth()/4 * board.getBlockSize() + 'px',
    bottom: board.getHeight()/4 * board.getBlockSize() + 'px',
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'monospace',
    fontSize: '16px',
    padding: '15px'
  });

  setStyle(button, {
    fontFamily: 'monospace',
    marginTop: '15px'
  });

  button.addEventListener('click', function() {
    board.removeChild(message);
    const e = new Event(eventName);
    board.dispatchEvent(e);
  });
}

export {
  setStyle,
  createBoard,
  createScore,
  createMessage
};
