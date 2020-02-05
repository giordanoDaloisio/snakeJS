import Snake from './Snake';
import Food from './Food';

const Game = function(board){

  this.start = function(){
    const food = new Food(board);
    let foodDiv = food.init();
    const snake = new Snake(board);

    window.addEventListener("keydown",ev => {
      switch(ev.code){
        case 'ArrowUp':
          snake.head.direction = "up";
          break;
        case 'ArrowDown':
          snake.head.direction = "down";
          break;
        case 'ArrowLeft':
          snake.head.direction = "left";
          break;
        case 'ArrowRight':
          snake.head.direction = "right";
          break;
      }
    });

    snake.head.getElement().addEventListener("eat", function(){
      foodDiv.destroy();
      foodDiv = food.init();
      snake.grow();
    });

    setInterval(()=>{
      snake.move();
      snake.eat(food);
    },1000/5);

  };
};

export default Game;
