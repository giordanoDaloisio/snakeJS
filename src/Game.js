import Snake from './Snake';
import Food from './Food';

const Game = function(board){
  this.start = function(){

    const food = new Food(board);
    let snake, foodDiv, direction;

    function init() {
      snake = new Snake(board);
      foodDiv = food.init();
      direction = "";
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
        foodDiv.destroy();
        foodDiv = food.init();
        snake.grow();
      }
      if(snake.dead()){
        alert("Hai perso");
        snake.reset();
        foodDiv.destroy();
        init();
      }
    }

    init();
    window.addEventListener("keydown", changeDirection);
    setInterval(play,1000/10);
  };
};

export default Game;
