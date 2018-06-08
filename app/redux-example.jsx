const redux = require('redux');

console.log('Starting redux example tutorials below!!');

// when initializing our default we leave the hobbies array empty. No need initializing it with values since we will update them later in our code;
const stateDefault = {
  name: 'Anonymous',
  hobbies: [],
};

var nextHobbyId = 1;
const reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
      ...state,
      name: action.name
    };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      }
    default:
      return state;
  }
};

const store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to Changes:
// The Subscribe method returns a unsubscribe function that we can initlize and save the value to it and call/ invoke it when we need to unsubscribe to actions.
const unsubscribe = store.subscribe(() => {
  const state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();

const currentState = store.getState();
console.log('CurrentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Ras Joh'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Camping'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Mildred'
});
