import {setStyle} from './utils';

let Food = function(board){

  this.init = function(){
    this.width = board.block * 2;
    this.height = board.block * 2;
    this.x = (Math.floor(Math.random() * (100-1)))*board.block;
    this.y = (Math.floor(Math.random() * (40-1)))*board.block;
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
