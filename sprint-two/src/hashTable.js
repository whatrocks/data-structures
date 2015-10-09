

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if ( this._storage[index] === undefined ){
    this._storage[index] = [];
  }

  var found = false;

  for ( var i = 0; i < this._storage[index].length; i++ ){

    if ( this._storage[index][i][0] === k ) {
      found = true;
      this._storage[index][i][1] = v;
    }
  }

  if ( !found ) {
    var tuple = [k, v];
    this._storage[index].push(tuple);    
  }

};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for ( var i = 0; i < bucket.length; i++ ){
    if ( bucket[i][0] === k ) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];

  for ( var i = 0; i < bucket.length; i++ ) {
    if ( bucket[i][0] === k ){
      bucket[i][1] = null;
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 Insert: Average O(1), Worst O(n)
 Retrieve: Average O(1), Worse O(n)
 Remove: Average O(1), Worse O(n)

 */


