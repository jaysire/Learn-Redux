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


// Examles of Non-Pure Functions: (it relies on variables outside itself/the func and a could change thus not always get the same output);

var a = 3;
function add (b) {
  return a + b;
};

// It updates values outiside of itself/ the function. It updates the result variable defined outside the function.
var result;
function add (a, b) {
  result = a + b;
  return result;
};

// Given the same input, we're NOT always going to get the same output; since the output depends on the current seconds as par our function.
function add (a, b) {
  return a + b + new Date().getSeconds()
};
