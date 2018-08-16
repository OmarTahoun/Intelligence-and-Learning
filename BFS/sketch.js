var data;
var graph;
var movies;
var actors;
var dropdown;

function preload() {
  data = loadJSON('data.json')
}
function setup(){
  graph = new Graph();
  dropdown = createSelect();
  dropdown.changed(bfs);
  noCanvas();
  movies = data.movies;

  for(var i = 0; i<movies.length; i++){
    var movie = movies[i].title;
    var cast = movies[i].cast;

    var movieNode =  new Node(movie);
    graph.addNode(movieNode);

    for (var j = 0; j < cast.length; j++) {
      var actor = cast[j];
      var actorNode = graph.getNode(actor);
      if (actorNode == undefined){
        actorNode = new Node(actor);
        dropdown.option(actor);
      }
      graph.addNode(actorNode);
      movieNode.edges.push(actorNode);
      actorNode.edges.push(movieNode);
    }
  }
}






function bfs() {
  graph.reset();
  var start = graph.setStart(dropdown.value());
  var end = graph.setEnd('Kevin Bacon');
  var queue = [];
  start.searched = true;
  queue.push(start)
  var current;
  while (queue.length > 0) {
    current = queue.shift();
    if(current == end){
      break;
    }
    var edges = current.edges;
    for(var i = 0; i<edges.length; i++){
      var neighbor = edges[i];
      if(!neighbor.searched){
        neighbor.searched = true;
        neighbor.parent = current;
        queue.push(neighbor);
      }
    }
  }

  var path  = [];

  path.push(end);
  var next  = end.parent;
  while(next != null){
    path.push(next);
    next = next.parent
  }

  var txt = '';
  for(var i = path.length-1; i>=0; i--){
    var node = path[i];
    txt += node.value;
    if (i!=0){
      txt += ' -----> ';
    }
  }
  createP(txt);
};
