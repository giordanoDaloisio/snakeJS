import Game from './Game';
import {createBoard} from './utils';

window.addEventListener('load', function(){

  // let body = document.querySelector('body');
  // setStyle(body, {
  //   backgroundColor: 'red'
  // });

  const root = document.querySelector('#root');
  const board = createBoard(root);
  root.appendChild(board);
  let game = new Game(board);
  game.start();

});
