function Graph(){
  this.nodes = [];
  this.graph = {};
  this.start = null;
  this.end = null;
}

Graph.prototype.reset = function () {
  for(var i = 0; i<this.nodes.length; i++){
    this.nodes[i].searched = false;
    this.nodes[i].parent = null;
  }
};

Graph.prototype.addNode = function (n) {
  this.nodes.push(n);
  var title = n.value;
  this.graph[title] = n;
};

Graph.prototype.getNode = function (actor) {
  var node = this.graph[actor];
  return node;
};

Graph.prototype.setStart = function (start) {
  this.start = this.graph[start];
  return this.start;
};

Graph.prototype.setEnd = function (end) {
  this.end = this.graph[end];
  return this.end;
};
