var tree;


function setup() {
  createCanvas(1700, 800);

  tree = new Tree();

  for (var i = 0; i < 20; i++) {
    tree.addVal(floor(random(0, 100)));
  }
  background(52);

  tree.traverse();
}
