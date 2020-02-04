import {setStyle} from './utils';

let Snake = function(root) {
  this.x= root.block*1;
  this.y= root.block*1;
  this.width=root.block*2;
  this.height=root.block*2;

  let display = () => {
    const block = document.createElement('div');
    setStyle(block, {
      position: 'absolute',
      left: this.x+'px',
      top: this.y+'px',
      width: this.width+'px',
      height: this.height+'px',
      backgroundColor: 'black'
    });
    root.appendChild(block);

    block.destroy = function() {
      root.removeChild(this);
    };
    return block;
  };
  this.head = display();

  this.move = function(direction){
    const board_width = root.offsetWidth;
    const board_height = root.offsetHeight;

    switch(direction){
      case 'right':
        this.x += root.block;
        break;
      case 'left':
        this.x -= root.block;
        break;
      case 'up':
        this.y -= root.block;
        break;
      case 'down':
        this.y += root.block;
        break;
    }
    if(this.x < 0){
      this.x = board_width - this.width;
    }
    else if(this.x + this.width > board_width){
      this.x = 0;
    }
    else if(this.y < 0){
      this.y = board_height - this.height;
    }
    else if(this.y + this.height > board_height){
      this.y = 0;
    }
    setStyle(this.head, {
      left: this.x+'px',
      top: this.y+'px',
    });
  };

  this.eat = function(food){
    if(food.x <= this.x && this.x <= food.x+food.width && food.y <= this.y && this.y <= food.y+food.height){
      let e = new Event('eat');
      this.head.dispatchEvent(e);
    }
  }
};

export default Snake;
