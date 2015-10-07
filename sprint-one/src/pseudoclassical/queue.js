var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
  this.track = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.track] = value;
  this.length++;
  this.track++;
};

Queue.prototype.dequeue = function(){
  if (this.length > 0) {
    var result = this.storage[this.track - this.length];
    delete this.storage[this.track - this.length];
    this.length--;
  }
  return result;
};

Queue.prototype.size = function(){
  return this.length;
};

