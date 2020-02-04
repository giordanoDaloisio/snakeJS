import Snake from './Snake';
import Food from './Food';

const Game = function(board){

  this.start = function(){
    const food = new Food(board);
    const snake = new Snake(board);
    let foodDiv = food.init();
    let direction = "right";

    window.addEventListener("keydown",ev => {
      switch(ev.code){
        case 'ArrowUp':
          direction = "up";
          break;
        case 'ArrowDown':
          direction = "down";
          break;
        case 'ArrowLeft':
          direction = "left";
          break;
        case 'ArrowRight':
          direction = "right";
          break;
      }
    });

    snake.head.addEventListener("eat", function(){
      foodDiv.destroy();
      foodDiv = food.init();
    });

    setInterval(()=>{
      snake.move(direction);
      snake.eat(food);
    },1000/5);

  };
};

export default Game;
