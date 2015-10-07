var Queue = function() {
  //FIFO
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    length++;
  };

  someInstance.dequeue = function() {
    if ( length > 0 ) {
      length--;
    }
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
