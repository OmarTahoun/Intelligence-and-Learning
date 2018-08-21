// GETTING THE INDEX OF THE NEIGHBOR
var getIndex = function (col,row) {
  if(row<0 || col<0 || row>rows-1 || col>cols-1){
    return -1;
  }
  return col + row * cols;
};

// CHECKS IF THE NEIGHBOR IS AVAILABLE AND NOT VISITED
var getNeighbors = function (cells) {
  var available = [];
  for (var i = 0; i < cells.length; i++) {
    if(cells[i] && !cells[i].visited){
      available.push(cells[i]);
    }
  }
  return available;
};

// REMOVES THE WALLS BETWEEN THE CURRENT AND THE NEXT CELL
removeWalls = function (current, neighbor) { 
  var x = current.row-neighbor.row;
  var y = current.col - neighbor.col;

  if(x === 1){
    current.left = false;
    neighbor.right = false;
  }else if(x === -1){
    current.right = false;
    neighbor.left = false;
  }
  if(y === 1){
    current.top = false;
    neighbor.bottom = false;
  }else if(y === -1){
    current.bottom = false;
    neighbor.top = false;
  }

};
