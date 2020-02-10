import Game from './Game';
import {createBoard} from './utils';

window.addEventListener('load', function(){
  const root = document.querySelector('#root');
  let game = new Game(root);
  game.start();
});
