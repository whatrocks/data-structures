var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = {};  // fix me
  newTree.numberOfChildren = 0;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  var child = Tree(value);
  this.children[this.numberOfChildren] = child;
  this.numberOfChildren += 1;
};

treeMethods.contains = function(target) {
  var found = false;

  var find = function(currentNode, t){
    if (currentNode.value === target) {
      found = true;
      return;
    }
    _.each(currentNode.children, function(child){
      find(child, t);
    });
  }

  find(this, target);

  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
  addChild: O(1)
  contains: O(n)
 */
