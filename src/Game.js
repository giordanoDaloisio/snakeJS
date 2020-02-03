import Snake from './Snake';

let Game = function(board){
  this.start = function(){
    let snake = new Snake(board);
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

    setInterval(()=>{
      snake.move(direction);
    },1000/5);

  };
};

export default Game;
