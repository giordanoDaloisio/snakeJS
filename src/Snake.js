import {setStyle} from './utils';
import Block from './Block';

let Snake = function(root, direction="") {
  const blockSize = root.getBlockSize();
  let blocks = [];

  let createBlock = (x, y, width, height, direction) => {
    const block = new Block(x, y, width, height, direction);
    blocks.push(block);
    root.appendChild(block.getElement());
    return block;
  };

  this.head = createBlock(blockSize, blockSize, blockSize*2, blockSize*2, direction);

  let setDirection = function(block, direction){
    block.direction = direction;
    switch(direction){
      case 'right':
        block.x += blockSize;
        break;
      case 'left':
        block.x -= blockSize;
        break;
      case 'up':
        block.y -= blockSize;
        break;
      case 'down':
        block.y += blockSize;
        break;
    }
  };

  this.move = function(){
    const board_width = root.offsetWidth;
    const board_height = root.offsetHeight;
    const head = this.head;
    setDirection(this.head, this.head.direction);

    if(head.x < 0){
      head.x = board_width - head.width;
    }
    else if(head.x + head.width > board_width){
      head.x = 0;
    }
    else if(head.y < 0){
      head.y = board_height - head.height;
    }
    else if(head.y + head.height > board_height){
      head.y = 0;
    }

    setStyle(this.head.getElement(), {
      left: this.head.x+'px',
      top: this.head.y+'px',
    });

    // for(let i=0; i<blocks.length; i++){
    //   setDirection(blocks[i], direction);
    //   setStyle(blocks[i], {
    //     left: (this.x-blockSize*i)+'px',
    //     top: (this.y)+'px'
    //   });
    // }
  };

  this.eat = function(food){
    if(food.x <= this.head.x && this.head.x <= food.x+food.width &&
        food.y <= this.head.y && this.head.y <= food.y+food.height){
      let e = new Event('eat');
      this.head.getElement().dispatchEvent(e);
    }
  };

  this.grow = function(){
    let prevBlock = blocks[0];
    console.log(blocks.length);
    console.log(prevBlock);
    if(prevBlock.direction === "left"){
      let x = prevBlock.x + prevBlock.width;
      let y = prevBlock.y;
      createBlock(x, y, prevBlock.width, prevBlock.height, prevBlock.direction);
    } else if (prevBlock.direction === "right"){
      let x = Math.abs(prevBlock.x - prevBlock.width);
      let y = prevBlock.y;
      createBlock(x, y, prevBlock.width, prevBlock.height, prevBlock.direction);
    } else if(prevBlock.direction === "down"){
      let x = prevBlock.x;
      let y = Math.abs(prevBlock.y-prevBlock.height);
      createBlock(x, y, prevBlock.width, prevBlock.height, prevBlock.direction);
    } else if (prevBlock.direction === "up"){
      let x = prevBlock.x;
      let y = prevBlock.y + prevBlock.height;
      createBlock(x, y, prevBlock.width, prevBlock.height, prevBlock.direction);
    }
  };
};

export default Snake;
