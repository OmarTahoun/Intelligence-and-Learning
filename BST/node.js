function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

Node.prototype.newNode = function (node) {
  if (node.val < this.val){
    if(this.left == null){
      this.left = node;
    }else{
      this.left.newNode(node);
    }
  }
  else if (node.val > this.val){
    if(this.right == null){
      this.right = node;
    }else{
      this.right.newNode(node);
    }
  }
};

Node.prototype.visit = function () {
  if (this.left != null){
    this.left.visit()
  }
  console.log(this.val);
  if (this.right != null){
      this.right.visit()
  }
};

Node.prototype.search = function (val) {
  if (this.val == val){
    console.log("FOUND!!");
    return this;
  }
  else if (val <this.val && this.left != null){
    return (this.left.search(val))
  }
  else if (val >this.val && this.right != null){
      return (this.right.search(val))
  }
return null;
};
