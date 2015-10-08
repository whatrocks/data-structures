var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!(item in this._storage)) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  return this._storage[item] === item ? true : false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
  setPrototype.add: O(1)
  setPrototype.contains: O(1)
  setPrototype.remove: O(1)
 */
