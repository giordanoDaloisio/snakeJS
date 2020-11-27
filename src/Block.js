import {setStyle} from './utils';

const Block = function(x, y, board, direction="") {
    const div = document.createElement('div');
    this.width = board.getBlockSize();
    this.height = board.getBlockSize();
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.destroy = function() {
      board.removeChild(div)
    };
    this.moveRight = function(){
        this.x += board.getBlockSize();
    };
    this.moveLeft = function(){
        this.x -= board.getBlockSize();
    };
    this.moveDown = function(){
        this.y += board.getBlockSize();
    };
    this.moveUp = function(){
        this.y -= board.getBlockSize();
    };
    this.draw = function(color){
      setStyle(div, {
          position: "absolute",
          left: this.x + 'px',
          top: this.y + 'px',
          width: this.width + 'px',
          height: this.height + 'px',
          border: "1px solid",
          backgroundColor: color
        });
    };
    board.appendChild(div);
};

export default Block;
