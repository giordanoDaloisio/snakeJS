import {setStyle} from './utils';

let Food = function(board){
  const blockSize = board.getBlockSize();
  this.init = function(){
    this.width = blockSize * 2;
    this.height = blockSize * 2;
    this.x = (Math.floor(Math.random() * (100-1)))*blockSize;
    this.y = (Math.floor(Math.random() * (40-1)))*blockSize;
    const food = document.createElement("div");

    setStyle(food, {
      position: "absolute",
      left: this.x+'px',
      top: this.y +'px',
      width: this.width+'px',
      height: this.height+'px',
      backgroundColor: "red"
    });

    board.appendChild(food);

    food.destroy = () => {
      board.removeChild(food);
    };
    return food;
  };
};

export default Food;
