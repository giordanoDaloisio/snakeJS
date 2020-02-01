import Block from './Block';

let Snake = function(root, length=1) {
  let blocks = [];
  this.length = length;

  for (let i = 0; i < this.length; i++) {
    let block = new Block(10+10*i, 10+10*i);
    blocks.push(block);
  }

  this.init = function(root){
    for (let block of blocks){
      block.init(root);
    }
  }
};

export default Snake;
