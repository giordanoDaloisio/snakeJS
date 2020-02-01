import {setStyle} from './utils';

let Block = function (x, y){
  this.x= x;
  this.y= y;
  this.init = function (root) {
    let block = document.createElement('div');
    setStyle(block, {
      position: 'relative',
      top: this.x+'px',
      left: this.y+'px',
      width: '30px',
      height: '30px',
      backgroundColor: 'black'
    });
    root.appendChild(block);
  };
};

export default Block;
