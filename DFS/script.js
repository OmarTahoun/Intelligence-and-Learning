function Cell(row,col) {
  this.row = row;
  this.col = col;

  this.top = false;
  this.right = false;
  this.bottom = false;
  this.left = false;
}
Cell.prototype.show = function () {
  var x = this.row*s;
  var y = this.col*s;

  stroke(140,80,0);
  if(this.top){
    line(x,y, x+s,y);
  }
  if(this.right){
    line(x+s,y, x+s,y+s);
  }
  if(this.bottom){
    line(x+s,y+s, x, y+s);
  }
  if(this.left){
    line(x,y+s, x,y);
  }
};
