var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.length = 0;
  someInstance.track = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.track] = value;
    this.length++;
    this.track++;
  },
  dequeue: function() {
    if ( this.length > 0 ){
      var result = this.storage[this.track - this.length];
      delete this.storage[this.track - this.length];
      this.length--;
    }
    return result;
  },
  size: function() {
    return this.length;
  }
};


