var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.length = 0;
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    this.length++;
  },
  dequeue: function(){
    if (this.length > 0){
      this.length--;
    }
  },
  size: function() {
    return this.length;    
  }
};


