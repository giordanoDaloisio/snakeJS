import Snake from './Snake';
import FoodManager from './FoodManager';
import {createBoard} from './utils';

const Game = function(root){
  const board = createBoard(root);
  root.appendChild(board);

  this.start = function(){
    const foodManager = new FoodManager(board);
    let snake, food, direction, score;

    function init() {
      snake = new Snake(board);
      food = foodManager.init(snake);
      direction = "";
      score = 0;
    }

    function changeDirection(event){
      const prev_dir = snake.getDirection();
      direction = prev_dir;
      if(event.code === 'ArrowUp' && (prev_dir!=='down' || snake.getLength() < 2)){
        direction = 'up';
      }else if(event.code === 'ArrowDown' && (prev_dir!=='up' || snake.getLength() < 2)){
        direction = 'down';
      }else if(event.code === 'ArrowLeft' && (prev_dir!=='right' || snake.getLength() < 2)){
        direction = 'left';
      }else if(event.code === 'ArrowRight' && (prev_dir!=='left' || snake.getLength() < 2)){
        direction = 'right';
      }
    }

    function play(){
      snake.move(direction);
      if(snake.eat(food)){
        score++;
        food.destroy();
        food = foodManager.init(snake);
        snake.grow();
      }
      if(snake.dead()){
        alert("Hai perso");
        snake.reset();
        food.destroy();
        init();
      }
    }

    init();
    window.addEventListener("keydown", changeDirection);
    setInterval(play,1000/10);
  };
};

export default Game;
