function Node(val, x, y) {
  this.val = val;
  this.left = null;
  this.right = null;
  this.level = 2;
  this.x  = x;
  this.y = y;
  this.size = 20;
}

Node.prototype.newNode = function (node) {
  if (node.val < this.val){
    if(this.left == null){
      this.left = node;
      this.left.x = this.x - (width/pow(node.level,2))+5;
      this.left.y = this.y + (height/(10+node.level));
      this.left.size = this.size - log(node.level);
    }else{
      node.level++;
      this.left.newNode(node);
    }
  }
  else if (node.val > this.val){
    if(this.right == null){
      this.right = node;
      this.right.x = this.x + (width/pow(node.level,2));
      this.right.y = this.y + (height/(10+node.level));
      this.right.size = this.size - log(node.level);
    }else{
      node.level++;
      this.right.newNode(node);
    }
  }
}

Node.prototype.visit = function (parent) {
  if (this.left != null){
    this.left.visit(this)
  }
  console.log(this.val);
  stroke(200);
  line(parent.x, parent.y,this.x, this.y);
  stroke(255);
  ellipse(this.x,this.y,this.size,this.size);
  noStroke();
  // fill(255);
  textAlign(CENTER);
  textSize(this.size-2);
  text(this.val, this.x, this.y+4);
  if (this.right != null){
      this.right.visit(this)
  }
}

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
}
