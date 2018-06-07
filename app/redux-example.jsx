var redux = require('redux');

console.log('Starting Redux example now! Get ready to RRRUUUMMMMBBBBBLLLLLEEEE!!!!');

// Pure Functions
function add(a, b) {
	return a + b;
}

// its always going to return the same result given the same input.
// There are no side effects; i.e it doesnt rely on variables defined above it and:
// it does not change any values outside of itself. i.e it dosent update or use any varaibles.
// Pure funcs cant have any asynchronous requests: no promises or callbacks.
// They are NOT allowed to update the values that get passed in/ through them;
// ***N/B*** This matters only to Objects and Arrays that get passed by reference and not by value.

// Examles of Non-Pure Functions: (it relies on variables outside itself/the func and a could change thus not always get the same output);

var a = 3;
function add(b) {
	return a + b;
}

// It updates values outiside of itself/ the function. It updates the result variable defined outside the function.
var result;
function add(a, b) {
	result = a + b;
	return result;
}

// Given the same input, we're NOT always going to get the same output; since the output depends on the current seconds as par our function.
function add(a, b) {
	return a + b + new Date().getSeconds();
}

function changeProp(obj) {
	// This is the Correct way to upate a pure function/ Obj:
	// We return the obj & only change the name in the func but Not outside it.
	return {
		...obj,
		name: 'jack',
  };
  	// obj.name = 'jack',      ***WE CANNOT UPDATE THE OBJ LIKE SO***
	// return obj;
}

var startingValue = {
	name: 'Josiah',
	age: 26,
};

var res = changeProp(startingValue);

console.log(startingValue);
console.log(res);
// this proves/ show we updated the obj values inside the function but the var outside remained the same:
// this is what makes this is a pure function.

// RECAP/ SUMMARY
// 1. Same output with  same input;
// 2. NO Side-Effects: i.e. it cant take variabes in the global state and it shouldn't be updating any variables outside it-self.
// 3. Avoid Promises & asynchronous calls/callback functions. & Funcs should be synchronous:
// i.e. they dont do any IO requests like accessing a database or making a http request to a 3rd party API.