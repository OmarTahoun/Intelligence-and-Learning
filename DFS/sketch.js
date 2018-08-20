var cols, rows;
var s = 40;
var grid = [];

function setup() {
  createCanvas(400,400);
  cols = floor(width/s);
  rows = floor(height/s);


  for( var i=0; i<rows; i++){
    for (var j=0; j<cols; j++){
      var cell = new Cell(i,j);
      grid.push(cell)
    }
  }
}

function draw() {
  background(53);
  for (var i=0; i<grid.length; i++){
    grid[i].show();
  }
}
