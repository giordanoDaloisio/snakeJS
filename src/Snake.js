import {setStyle, createBlock} from './utils';

let Snake = function(root, direction="") {

  const blockSize = root.getBlockSize();
  let blocks = [createBlock(blockSize, blockSize, blockSize, blockSize, direction, root)];

  this.head = blocks[0];
  this.getLength = function(){
    return blocks.length
  };

  let setDirection = function(block, direction){
    switch (direction){
      case  "right":
        block.x += blockSize;
        block.direction = direction;
        break;
      case "left":
        block.x -= blockSize;
        block.direction = direction;
        break;
      case "up":
        block.y -= blockSize;
        block.direction = direction;
        break;
      case "down":
        block.y += blockSize;
        block.direction = direction;
    }
    if(block.x < 0){
      block.x = (root.getWidth()-1) * root.getBlockSize();
    }
    else if(block.x/root.getBlockSize() > root.getWidth()-1){
      block.x = 0;
    }
    else if(block.y < 0){
      block.y = (root.getHeight()-1) * root.getBlockSize();
    }
    else if(block.y/root.getBlockSize() > root.getHeight()-1){
      block.y = 0;
    }
    setStyle(block.getElement(), {
      left: block.x+'px',
      top: block.y+'px',
    });
  };

  this.move = function(direction){
    let last = blocks.pop();
    last.x = this.head.x;
    last.y = this.head.y;
    setDirection(last, direction);
    this.head = last;
    blocks.unshift(last);
  };

  this.eat = function(food){
    return food.x === this.head.x && food.y === this.head.y
  };

  this.grow = function(){
    let prevBlock = blocks[blocks.length-1];
    let x = 0;
    let y = 0;
    switch(prevBlock.direction){
      case("left"):
        x = prevBlock.x + prevBlock.width;
        y = prevBlock.y;
        break;
      case("right"):
        x = Math.abs(prevBlock.x - prevBlock.width);
        y = prevBlock.y;
        break;
      case("down"):
        x = prevBlock.x;
        y = Math.abs(prevBlock.y-prevBlock.height);
        break;
      case( "up"):
        x = prevBlock.x;
        y = prevBlock.y + prevBlock.height;
        break;
    }
    let new_block = createBlock(x, y, prevBlock.width, prevBlock.height, prevBlock.direction, root);
    blocks.push(new_block);
  };

  this.dead = function() {
    for(let i = 1; i < blocks.length; i++){
      if(this.head.x === blocks[i].x && this.head.y === blocks[i].y){
        return true;
      }
    }
    return false;
  }

};

export default Snake;
