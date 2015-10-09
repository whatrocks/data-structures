var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if ( list.tail ) {
      list.tail.next = newNode;    
      newNode.previous = list.tail;
    }
    list.tail = newNode;
    if (list.head === null) {
      list.head = newNode;
    }

  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    if (list.head) {
      list.head.previous = newNode;
      newNode.next = list.head;
    }
    list.head = newNode;
    if(list.tail === null){
      list.tail = newNode;
    }
  };

  list.removeHead = function() {

    if ( list.head ) {
      var formerHead = list.head.value;
      if ( list.head.next) {
        list.head = list.head.next;
        list.head.previous = null;
      } else {
        list.head = null;
      }
      return formerHead;
    }
  };

  list.removeTail = function(){
    if(list.tail) {
      var formerTail = list.tail.value;
      if (list.tail.previous) {
        list.tail = list.tail.previous;
        list.tail.next = null;
      } else {
        list.tail = null;
      }
    }
    return formerTail;
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
  node.previous = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 
 addToTail: O(1)
 addToHead: O(1)
 removeTail: O(1)
 removeHead: O(1)
 
 contains: O(n)

 */
