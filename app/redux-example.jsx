const redux = require('redux');

console.log('Starting redux examples!');

const reducer = (state = {name: 'Anonymous'}, action) => {
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

// Subscribing to Changes
store.subscribe(() => {
  const state = store.getState();

  console.log('Name is', state.name);
});

const currentState = store.getState();
console.log('CurrentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Ras Joh'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Mildred'
});