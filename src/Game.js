import Snake from './Snake';
import Food from './Food';

const Game = function(board){
  this.start = function(){

    const food = new Food(board);
    let foodDiv = food.init();
    const snake = new Snake(board);
    let direction = "";

    function changeDirection(event){
      const prev_dir = snake.head.direction;
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

    window.addEventListener("keydown", changeDirection);

    // snake.head.getElement().addEventListener("eat", function(){
    //   console.log("event");
    //   foodDiv.destroy();
    //   foodDiv = food.init();
    //   snake.grow();
    // });

    setInterval(()=>{
      snake.move(direction);
      console.log(snake.eat(food));
      if(snake.eat(food)){
        foodDiv.destroy();
        foodDiv = food.init();
        snake.grow();
      }
    },1000/10);
  };
};

export default Game;
