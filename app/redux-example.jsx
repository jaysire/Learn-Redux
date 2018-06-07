var redux = require('redux');

console.log('Starting Redux example now! Get ready to RRRUUUMMMMBBBBBLLLLLEEEE!!!!');

// reducer: takes existing state and the action as arguments and computes the New State.
// i.e. if you triger an action to change the search text, you would modify the state with the action & would return the New State.

// a basic reducer is just a function.
// the first parameter/ argument passed is the initial/existing state before the action was triggered.
// that means the state would have our searched text before we trigger a change to that text.
// The Second parameter is the Action that was triggered.
// Our job is to put these two actions together and return soemthing new.
// We also want to have a defaul State incase there is nothing passed.

// THIS IS THE ES5 SYNTAX

const reducer = (state) => {
  // below is the syntax used to create a default for an argument tht gets passed into a function.
  // this way we either use the State Value that gets passed in or the obj that gets set to the State.
  state = state || {name: 'Anonymous'}
};

const store = redux.createStore(reducer);