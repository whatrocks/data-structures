var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    // change list.tail to the value of the new node
    var newNode = Node(value);
    if ( list.tail ) {
      list.tail.next = newNode;    
    }
    list.tail = newNode;
    
    if (list.head === null) {
      list.head = newNode;
    }

  };

  list.removeHead = function() {

    if ( list.head ) {
      var formerHead = list.head.value;
      if ( list.head.next) {
        list.head = list.head.next;
      } else {
        list.head = null;
      }
      return formerHead;
    }
  };

  list.contains = function(target) {

    var currentNode = list.head;

    while ( currentNode.next !== null ) {

      if ( currentNode.value === target ) {
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode.value === target;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
