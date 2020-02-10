import Block from './Block';

let FoodManager = function(board){
  const blockSize = board.getBlockSize();

  this.init = function(snake){
    const color = "red";
    let x = (Math.floor(Math.random() * (board.getWidth()-1)))*blockSize;
    let y = (Math.floor(Math.random() * (board.getHeight()-1)))*blockSize;
    for(let block of snake.getBlocks()){
      while(x === block.x && y === block.y){
        x = (Math.floor(Math.random() * (board.getWidth()-1)))*blockSize;
        y = (Math.floor(Math.random() * (board.getHeight()-1)))*blockSize;
      }
    }
    const food = new Block(x, y, board);
    food.draw(color);
    return food;
  };
};

export default FoodManager;
