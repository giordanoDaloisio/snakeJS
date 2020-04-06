import Block from './Block';

let Snake = function(root) {
  const blockSize = root.getBlockSize();
  const color = "black";
  let blocks = [new Block(blockSize, blockSize, root)];
  let head = blocks[0];
  head.draw(color);
  
  const handleDirection = function(block, direction){
    switch (direction){
      case  "right":
        block.moveRight();
        block.direction = direction;
        break;
      case "left":
        block.moveLeft();
        block.direction = direction;
        break;
      case "up":
        block.moveUp();
        block.direction = direction;
        break;
      case "down":
        block.moveDown();
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
    block.draw(color);
  };

  this.getDirection = function(){
    return head.direction;
  };
  this.getLength = function(){
    return blocks.length
  };
  this.getBlocks = function(){
    return blocks;
  };

  this.move = function(direction){
    let last = blocks.pop();
    last.x = head.x;
    last.y = head.y;
    handleDirection(last, direction);
    head = last;
    blocks.unshift(last);
  };

  this.eat = function(food){
    return food.x === head.x && food.y === head.y
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
    let new_block = new Block(x, y, root, prevBlock.direction);
    blocks.push(new_block);
  };

  this.isDead = function() {
    for(let i = 1; i < blocks.length; i++){
      if(head.x === blocks[i].x && head.y === blocks[i].y){
        return true;
      }
    }
    return false;
  };

  this.reset = function() {
    blocks.forEach((block)=>{
      block.destroy();
    })
  }
};

export default Snake;
