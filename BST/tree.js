function Tree(n) {
    this.root = null;
}

Tree.prototype.addVal = function (val) {
  var node = new Node(val)
  if (this.root==null){
    this.root = node;
    this.root.x = width/2;
    this.root.y = 20;
  }
  else{
    this.root.newNode(node);
  }
};

Tree.prototype.traverse = function () {
this.root.visit(this.root)
};

Tree.prototype.search = function (val) {
  result = this.root.search(val)
  console.log(result);
};
