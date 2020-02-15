import Game from './Game';

window.addEventListener('load', function(){
  const root = document.querySelector('#root');
  const game = new Game(root);
  game.start();
});
