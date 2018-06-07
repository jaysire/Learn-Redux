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

const currentState = store.getState();
console.log('CurrentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Ras Joh'
});
console.log('Name should be ras joh', store.getState());

