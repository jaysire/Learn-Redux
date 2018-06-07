const redux = require('redux');

console.log('Here we go again!! Redux-todo-example! baby!!');

// since we need to pass more than one argument, we can start by saving it to a variable and passing the variable instead thru our reducer func
const stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

const reducer = (state = stateDefault, action) => {
  return state;
};

const store = redux.createStore(reducer);

console.log('currentState', store.getState());
