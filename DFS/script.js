function Cell(row,col) {
  this.row = row;
  this.col = col;

  this.top = true;
  this.right = true;
  this.bottom = true;
  this.left = true;
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
