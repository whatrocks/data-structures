var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.storage = {};
  someInstance.length = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;

};

var stackMethods = {

  push: function(value) {
    this.storage[this.length] = value; 
    this.length++;
    return value;
  },

  pop: function() {

    if ( this.length > 0 ) {
      var result = this.storage[this.length - 1];
      delete this.storage[this.length - 1];
      this.length--;
      return result;
    }
  },

  size: function() {
    return this.length;
  }

};


