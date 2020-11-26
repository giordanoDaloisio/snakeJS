import {
  BLOCK_SIZE,
  BOARD_WIDTH,
  BOARD_HEIGHT,
  EASY,
  MEDIUM,
  HARD,
} from './constants';

function setStyle(element, properties) {
  for (let property in properties) {
    element.style[property] = properties[property];
  }
}

function createBoard(root) {
  const board = document.createElement('div');
  board.getBlockSize = () => {
    return BLOCK_SIZE;
  };
  board.getWidth = () => {
    return BOARD_WIDTH;
  };
  board.getHeight = () => {
    return BOARD_HEIGHT;
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
    top: '0',
    margin: '5% auto',
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: 'large',
  });
  root.appendChild(div);
  return span;
}

function createMessage(board, textMessage, eventName = 'start') {
  const message = document.createElement('div');
  message.innerHTML = '<p>' + textMessage + '</p>';
  const button = document.createElement('button');
  button.textContent = 'Vai';
  message.appendChild(button);
  board.appendChild(message);

  setStyle(message, {
    textAlign: 'center',
    position: 'absolute',
    left: board.getWidth() / 4 * board.getBlockSize() + 'px',
    top: board.getHeight() / 4 * board.getBlockSize() + 'px',
    right: board.getWidth() / 4 * board.getBlockSize() + 'px',
    bottom: board.getHeight() / 4 * board.getBlockSize() + 'px',
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'monospace',
    fontSize: '16px',
    padding: '15px',
  });

  setStyle(button, {
    fontFamily: 'monospace',
    marginTop: '15px',
  });

  button.addEventListener('click', function() {
    board.removeChild(message);
    const e = new Event(eventName);
    board.dispatchEvent(e);
  });
}

function createDifficultyManager(root, game) {
  const container = document.createElement('div');
  container.innerHTML = '<b style="margin: 10px">Seleziona la difficolt&agrave;:</b>';
  const easy = createRadioButton(container, 'Facile', 'difficulty', EASY.toString());
  const medium = createRadioButton(container, 'Medio', 'difficulty', MEDIUM.toString(), true);
  const hard = createRadioButton(container, 'Difficile', 'difficulty', HARD.toString());
  setStyle(container, {
    position: 'absolute',
    left: '30%',
    height: '150px',
    margin: '30px auto',
    width: '600px',
    textAlign: 'center',
    fontFamily: 'monospace',
  });
  root.appendChild(container);
  container.addEventListener('click', (e) => {
    for (let radio of [easy, medium, hard]) {
      if (e.target === radio && radio.checked) {
        game.setDifficulty(parseInt(radio.getAttribute('value')));
        radio.blur();
      }
    }
  });
}

function createRadioButton(container, labelText, name, value, selected = false) {
  const group = document.createElement('span');
  const label = document.createElement('label');
  label.setAttribute('for', value);
  label.textContent = labelText;
  const radio = document.createElement('input');
  radio.setAttribute('type', 'radio');
  radio.setAttribute('name', name);
  radio.setAttribute('id', value);
  radio.setAttribute('value', value);
  if (selected) {
    radio.setAttribute('checked', 'checked');
  }
  setStyle(group, {
    margin: '0 5px',
  });
  group.appendChild(label);
  group.appendChild(radio);
  container.appendChild(group);
  return radio;
}

export {
  setStyle,
  createBoard,
  createScore,
  createMessage,
  createDifficultyManager,
};
