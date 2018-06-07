var redux = require('redux');

console.log('Starting Redux example now! Get ready to RRRUUUMMMMBBBBBLLLLLEEEE!!!!');

// *** DISPATCHING & HANDLING ACTIONS ***;

const reducer = (state = {name: 'Anonymous'}, action) => {
  console.log('This is our NEW ACTION!=>>', action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
      ...state,
      name: action.name
    };
  default:
    return state;
  }
};
const store = redux.createStore(reducer);

const currentState = store.getState();
console.log('This is our CURRENT STATE!=>>', currentState);

// we need to Dispatch Actions in-order to update the State;
// Actions are simply Objects the only requirement: they MUST have the 'type' property: which will rep the Action Name;
//***N/B*** ALL app names are ALL in UPPERCASES and use Under_Score to tie more than one name together like seen below:

const action = {
  type: 'CHANGE_NAME',
  name: 'Josiah'
};

// now we have our Action, we need to Dispatch it to our Store.
// we use the dispatch method which takes one argument: i.e your Action Object;
store.dispatch(action);














// Pure Function is called reducer in Redux
// reducer takes your Existing State and the Action to occur as arguments/ parameters, & computs the NEW State;
// reducer is called by Redux and takes two arguments and then it gets passed into our store; It requires this function/ the reducer.
// We also need to add a default as we initialize our store; in our case we'll set our default to anonymous;
// this is the syntax to creating default arguments/ parameters that get passed thru our reducer/ pure func.

// // create simple reducer;
// const reducer = (state = {name: 'Anonymous'}, action) => {
//   // state = state || {name: 'Anonymous'};

//   return state;
// };
// // create Store;
// const store = redux.createStore(reducer);

// // get/ fetch the state;
// const currentState = store.getState();
// console.log('currentState', currentState);


// reducer: takes existing state and the action as arguments and computes the New State.
// i.e. if you triger an action to change the search text, you would modify the state with the action & would return the New State.

// a basic reducer is just a function.
// the first parameter/ argument passed is the initial/existing state before the action was triggered.
// that means the state would have our searched text before we trigger a change to that text.
// The Second parameter is the Action that was triggered.
// Our job is to put these two actions together and return soemthing new.
// We also want to have a default State incase there is nothing passed.

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
