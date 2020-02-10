import {setStyle} from './utils';

let Block = function(x, y, board, direction="") {
    let div = document.createElement('div');
    this.width = board.getBlockSize();
    this.height = board.getBlockSize();
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.destroy = function() {
      board.removeChild(div)
    };
    this.draw = function(color){
      setStyle(div, {
          position: "absolute",
          left: this.x + 'px',
          top: this.y + 'px',
          width: this.width + 'px',
          height: this.height + 'px',
          backgroundColor: color
        });
    };
    board.appendChild(div);
};

export default Block;
