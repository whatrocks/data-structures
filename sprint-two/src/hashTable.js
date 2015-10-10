

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  var found = false;

  for ( var i = 0; i < bucket.length; i++ ){
    if ( bucket[i][0] === k ) {
      found = true;
      bucket[i][1] = v;
    }
  }

  if ( !found ) {
      var tuple = [k, v];
      bucket.push(tuple);
      this._size += 1;
  }

  this._storage.set(index, bucket);
  
  if ( this._size > (0.75 * this._limit) ) {
    this.doubleSize(k, v);
  }

};

HashTable.prototype.doubleSize = function(k,v) {
  this._limit *= 2;
  this._size = 0;
  var oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  
  oldStorage.each(function(bucket){
    bucket = bucket || [];
    for ( var i = 0; i < bucket.length; i++){
      this.insert(bucket[i][0], bucket[i][1]);
    }
  }.bind(this));
  this.insert(k, v);
};


HashTable.prototype.halveSize = function() {
  this._limit = this._limit / 2;
  this._size = 0;
  var oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  
  oldStorage.each(function(bucket){
    bucket = bucket || [];
    for ( var i = 0; i < bucket.length; i++){
      this.insert(bucket[i][0], bucket[i][1]);
    }
  }.bind(this));

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  for ( var i = 0; i < bucket.length; i++ ){
    if ( bucket[i][0] === k ) {
      return bucket[i][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for ( var i = 0; i < bucket.length; i++ ) {
    if ( bucket[i][0] === k ){
      bucket.splice(i,1);
      this._size--;
      }
    }
  
  if ( this._size < (0.25 * this._limit)) {
    this.halveSize();
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 Insert: Average O(1), Worst O(n)
 Retrieve: Average O(1), Worse O(n)
 Remove: Average O(1), Worse O(n)
 DoubleSize: O(n)
 HalveSize: O(n)

 */


