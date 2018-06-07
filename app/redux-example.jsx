const redux = require('redux');

console.log('Starting redux examples below!!');

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

// UnSubscribe to Changes
const unsubscribe = store.subscribe(() => {
  const state = store.getState();

  console.log('Name is', state.name);
});

const currentState = store.getState();
console.log('CurrentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Ras Joh'
});

unsubscribe();

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Mildred'
});