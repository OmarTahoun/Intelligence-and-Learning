// CONSTRUCTOR FOR THE CELL OBJECT

function Cell(col,row) {
  this.col = col;
  this.row = row;
  this.visited = false;

// THE WALLS OF THE CELL
  this.top = true;
  this.right = true;
  this.bottom = true;
  this.left = true;

}

// DISPLAYING THE WALLS OF THE CELLS
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

  // CHANGING THE COLOR OF THE VISITED CELL
  if(this.visited){
    noStroke();
    fill(40,140,0, 100);
    rect(x, y, s, s);
  }
};

// CHECHING THE TOP, RIGHT, BOTTOM, LEFT NEIGHBOURS FOR THE CURRENT CELL
Cell.prototype.checkNeighbors = function () {
  var toCheck = [grid[getIndex(this.col, this.row-1)], grid[getIndex(this.col+1,this.row)], grid[getIndex(this.col,this.row+1)], grid[getIndex(this.col-1,this.row)]]

  // GETTING THE UNVISITED NEIGHBORS
  var neighbors = [] = getNeighbors(toCheck);
  if (neighbors.length > 0){
    var r = floor(random(0, neighbors.length));
    // PICKING A RANDOM NEIGHBOR TO BE USED AS THE CURRENT CELL
    return neighbors[r];
  }else{
    return undefined;
  }
};


// HIGHLIGHTS THE CURRENT CELL
Cell.prototype.highlight = function () {
  var y = this.col*s;
  var x = this.row*s;

  noStroke();
  fill(230,50,0,100);
  rect(x, y, s, s);
};
