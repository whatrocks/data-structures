var BinarySearchTree = function(value) {
  var BST = Object.create(BinarySearchTree.prototype);
  BST.value = value;
  BST.left = null;
  BST.right = null;
  return BST;
};

BinarySearchTree.prototype.insert = function (value) {
  var tree = BinarySearchTree(value);
  var findPosition = function (node) {
    if (tree.value < node.value) {
      if (node.left === null) {
        node.left = tree;
      } else {
        findPosition(node.left);
      }
    } else {
      if (node.right === null) {
        node.right = tree;
      } else {
        findPosition(node.right);
      }
    }
  };
  findPosition(this);
};

BinarySearchTree.prototype.contains = function (value){
  var res = false;
  var search = function (node) {
    // base case: not found
    if (node === null) {
      return;
    }
    // value found 
    if (node.value === value) {
      res = true;
      return;
    }
    // keep searching 
    else {
      if (node.value < value) {
        search(node.right);
      } else {
        search(node.left);
      }
    }
  }
  search(this);
  return res;
};

BinarySearchTree.prototype.depthFirstLog = function (cb){
  var iterate = function(node){
    if (node === null) {
      return;
    }
    cb(node.value);
    iterate(node.left);
    iterate(node.right);
  }
  iterate(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
  insert: O(log n)
  contains: O(log n)
  depthFirstLog: O(n)
 */
