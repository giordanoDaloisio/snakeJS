 import Snake from './Snake';
 import {setStyle, createBoard} from './utils';

window.addEventListener('load', function(){

  let body = document.querySelector('body');
  setStyle(body, {
    backgroundColor: 'red'
  });

  const root = document.querySelector('#root');
  const board = createBoard(root);
  root.appendChild(board);
  let snake = new Snake();
  snake.init(board);
});
