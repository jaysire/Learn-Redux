var redux = require('redux');

console.log('Starting Redux example now! Get ready to RRRUUUMMMMBBBBBLLLLLEEEE!!!!');

// Pure Function is called reducer in Redux
// reducer takes your Existing State and the Action to occur as arguments/ parameters, & computs the NEW State;
// reducer is called by Redux and takes two arguments and then it gets passed into our store; It requires this function/ the reducer.
// We also need to add a default as we initialize our store; in our case we'll set our default to anonymous;
// this is the syntax to creating default arguments/ parameters that get passed thru our reducer/ pure func.
const reducer = (state, action) => {
  state = state || {name: 'Anonymous'};
};
const store = redux.createStore(reducer);









// reducer: takes existing state and the action as arguments and computes the New State.
// i.e. if you triger an action to change the search text, you would modify the state with the action & would return the New State.

// a basic reducer is just a function.
// the first parameter/ argument passed is the initial/existing state before the action was triggered.
// that means the state would have our searched text before we trigger a change to that text.
// The Second parameter is the Action that was triggered.
// Our job is to put these two actions together and return soemthing new.
// We also want to have a defaul State incase there is nothing passed.

// THIS IS THE ES5 SYNTAX:

// const reducer = (state, action) => {
//   // below is the syntax used to create a default for an argument tht gets passed into a function.
//   // this way we either use the State Value that gets passed in or the obj that gets set to the State.
//   state = state || {name: 'Anonymous'}
// };
// const store = redux.createStore(reducer);

// THIS IS THE ES6 SYNTAX:

// const reducer = (state = {name: 'Anonymous'}, action) => {
//   // state = state || {name: 'Anonymous'} - ES5 Syntax.
//   return state;
// };
// const store = redux.createStore(reducer);

// // Our reducer satisfies TWO conditions:
// // 1. It has a defaul State for when the app is just starting/ initializing and in our case we have an Obj
// // 2. It returns a state even if there is no action or if its  an action it doesn't recognize.

// // fetch our sate;
// const currentState = store.getState();
// console.log('currentState', currentState);
