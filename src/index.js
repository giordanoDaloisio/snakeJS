import Game from './Game';

window.addEventListener('load', function(){
  const root = document.querySelector('#root');
  let game = new Game(root);
  game.start();
});
