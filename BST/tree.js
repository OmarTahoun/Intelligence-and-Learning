function Tree(n) {
    this.root = null;
}

Tree.prototype.addVal = function (val) {
  var node = new Node(val)
  if (this.root==null){
    this.root = node;
  }
  else{
    this.root.newNode(node);
  }
};

Tree.prototype.traverse = function () {
this.root.visit()
};

Tree.prototype.search = function (val) {
  result = this.root.search(val)
  console.log(result);
};



var tree = new Tree();
for(var i=0; i<10; i++){
  tree.addVal(Math.floor(Math.random()*101));
}
console.log(tree);
