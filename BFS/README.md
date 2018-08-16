# BREDTH-FIRST-SEARCH
## This is an implmentation of the bredth first search algorithm.

+ #### The Problem here is to find the connection (path) between actors in different movies and kevin bacon.
+ #### Movies and Actors are represented as nodes and are connected through edges.
+ #### Then with a sepicific start the BFS algorithm is performed.

### The algorithm:
```
  create an empty queue Q
  
  Q.enqueue(start)
  
  while Q is not empty:
    current = Q.dequeue();
    if current is end:
      return current
      exit
      
     for each node connected to current:
       if node is not searched:
          node.searche = true
          node.parent = current
          Q.enqueue(node)
```
