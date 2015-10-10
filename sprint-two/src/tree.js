var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.parent = null;
  newTree.children = {};
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
  child.parent = this;
};

treeMethods.contains = function(target) {
  var found = false;

  var find = function(currentNode, t){
    if (currentNode.value === target) {
      found = true;
    }
    _.each(currentNode.children, function(child){
      find(child, t);
    });
  }

  find(this, target);

  return found;
};

treeMethods.removeFromParent = function() {
  _.each(this.parent.children, function(child, key) {
    if ( child.value === this.value ) {
      delete key;
    }
  });
  this.parent.numberOfChildren -= 1;
  this.parent = null;
};


treeMethods.traverse = function(cb){
  _.each(this.children, function(child){
    cb(child.value);
    if (child.children) {
      child.traverse(cb);
    }
  });
}

/*
 * Complexity: What is the time complexity of the above functions?
  addChild: O(1)
  contains: O(n)
 */
