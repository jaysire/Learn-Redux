var redux = require('redux');

console.log('Starting Redux example now! Get ready to RRRUUUMMMMBBBBBLLLLLEEEE!!!!');

// Pure Functions
function add (a, b) {
  return a + b;
};

// its always going to return the same result given the same input.
// There are no side effects; i.e it doesnt rely on variables defined above it and:
// it does not change any values outside of itself. i.e it dosent update or use any varaibles.
// Pure funcs cant have any asynchronous requests: no promises or callbacks.
