var cols, rows;
var s = 25;
var grid = [];
var stack = [];
var current;


// SETTING UP THE CANVAS TO DRAW ON
function setup() {
  createCanvas(450,450);
  cols = floor(width/s);
  rows = floor(height/s);
  frameRate(60);

// CREATING THE CELLS AND SPECIFYING THEIR LOCATION
  for( var j=0; j<rows; j++){
    for (var i=0; i<cols; i++){
      // CREATING A CELL WITH THE ROW j AND THE COL i
      var cell = new Cell(i,j);
      grid.push(cell)
    }
  }
  current = grid[0];
}


function draw() {
  background(53);
  // DRAWING EACH CELL.
  for (var i=0; i<grid.length; i++){
    grid[i].show();
  }

  // STEP 1
  // PICKING A RANDOM CELL AND MARKING IT AS VISITED
  current.visited = true;
  current.highlight();

  // CHECKING THE CELL'S NEIGHBOURS AND PICKING ONE IF THERE IS
  var next = current.checkNeighbors();
  if(next){
    next.visited = true;

    // STEP 2
    // ADDING THE CURRENT CELL TO THE STACK AFTER IT'S BEEN VISITED
    stack.push(current);


    // STEP 3
    // REMOVING THE WALLS BETWEEN THE CURRENT CELL AND THE CHOSEN NEIGHBOUR
    removeWalls(current, next);

    // STEP 4
    // UPDATING THE CURRENT CELL
    current = next;
  }
  // IF THERE IS NO NEIGHBOURS THEN WE POP THE LATEST CELL IN FROM THE STACK AND USE IT AS THE CURRENT CELL
  else if (stack.length >0){
    current = stack.pop();
  }
}
