import {setStyle} from './utils';

let Snake = function(root) {

  this.board = root;
  this.x= 10;
  this.y= 10;
  this.width=30;
  this.height=30;

  let display = () => {
    let block = document.createElement('div');
    setStyle(block, {
      position: 'absolute',
      left: this.x+'px',
      top: this.y+'px',
      width: this.width+'px',
      height: this.height+'px',
      backgroundColor: 'black'
    });
    this.board.appendChild(block);

    block.destroy = function() {
      root.removeChild(this);
    };
    return block;
  };

  this.head = display();

  this.move = function(direction){
    const board_width = this.board.offsetWidth;
    const board_height = this.board.offsetHeight;

    switch(direction){
      case 'right':
        this.x += 10;
        break;
      case 'left':
        this.x -= 10;
        break;
      case 'up':
        this.y -= 10;
        break;
      case 'down':
        this.y += 10;
        break;
    }

    if(this.x <= 0){
      this.x = board_width - this.width;
    }
    else if(this.x + this.width >= board_width){
      this.x = 0;
    }
    else if(this.y <=0){
      this.y = board_height - this.height;
    }
    else if(this.y + this.height >= board_height){
      this.y = 0;
    }

    setStyle(this.head, {
      left: this.x+'px',
      top: this.y+'px',
    });
  };

};

export default Snake;
