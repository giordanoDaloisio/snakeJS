import {setStyle} from './utils';

let Block = function(x, y, width, height, direction=""){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.direction = direction;
  let div = document.createElement('div');
  this.getElement = function(){
    return div;
  };
  setStyle(div,{
      position: 'absolute',
      left: this.x+'px',
      top: this.y+'px',
      width: this.width+'px',
      height: this.height+'px',
      backgroundColor: 'black'
  })

};

export default Block;
