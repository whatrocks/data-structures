

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._numberOfTuples = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if ( this._storage.get(index) === undefined ){
    this._storage.set(index, []);
  }

  var found = false;

  for ( var i = 0; i < this._storage.get(index).length; i++ ){

    if ( this._storage.get(index)[i][0] === k ) {
      found = true;
      this._storage.get(index)[i][1] = v;
    }
  }

  if ( !found ) {

    this._numberOfTuples += 1;
    if ( this._numberOfTuples > (0.75 * this._limit) ) {
      this.doubleSize(k, v);
    } else {
      var tuple = [k, v];
      this._storage.get(index).push(tuple);    
    }
  }

};

HashTable.prototype.doubleSize = function(k,v) {
  var oldLength = this._limit;
  this._limit *= 2;
  this._numberOfTuples = 0;
  var oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  for ( var i = 0; i < oldLength; i++ ) {
    for ( var j = 0; j < oldStorage.get(i).length; j++ ){
      this.insert(oldStorage.get(i)[j][0], oldStorage.get(i)[j][1]);
    }
  }
  this.insert(k, v);
};


HashTable.prototype.halveSize = function() {
  // divide space slots by two
  this._limit = this._limit / 2;
  // store oldstorage
  var oldStorage = this._storage;
  // create a new storage array
  this._storage = LimitedArray(this._limit);
  // loop thru oldstorage
  for ( var i = 0; i < oldStorage.length; i++ ){
    // loop through arrays at each index
    for ( var j = 0; j < oldStorage[i].length; j++ ){
      // insert into new guy
      this.insert(oldStorage[i][j][0], oldStorage[i][j][1]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for ( var i = 0; i < bucket.length; i++ ){
    if ( bucket[i][0] === k ) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var currentsize = this._limit;
  var currentStorage = this._storage;
 // debugger;
  for ( var i = 0; i < bucket.length; i++ ) {
    if ( bucket[i][0] === k ){
      this._numberOfTuples--;
      bucket[i][1] = null;
      if ( this._numberOfTuples < (0.25 * this._limit) && (this._limit > 8) ) {
        this.halveSize();
      } 



      // // reduce numberOfTuples by 1
      // this._numberOfTuples--;
      // // check to see if numberOfTuples is less than 25% of available size
      // if ( this._numberOfTuples < ( 0.25 * this._limit )) {
      //   // run halveSize function
      //   this.halveSize();
      //}
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 Insert: Average O(1), Worst O(n)
 Retrieve: Average O(1), Worse O(n)
 Remove: Average O(1), Worse O(n)

 */


