var Queue = function() {
  //FIFO
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    length++;
    storage[length] = value;
  };

  someInstance.dequeue = function() {
    var result;
    if ( length > 0 ) {

      // first item goes into result
      result = storage[1];
      // delete the first item
      delete storage[1];

      // Move everything down an index
      for (var i = 1; i < length; i++ ) {
        storage[i] = storage[i + 1];
      }
      
      // reduce the total length
      length--;
    }
    return result;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
