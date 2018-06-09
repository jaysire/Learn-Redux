var redux = require('redux');

console.log('Starting redux example');


// Name Reducer amd Action Generators:
// ----------------------------------
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  };
};

// simple functions that take all the parameters you need to generate your Action & they return an Object with the 'TYPE' set on it.
// i.e. when returning the obj, start by setting the obj type first and parameters passed follow below it.
// Our func doesnt need the TYPE to be passed as an argument (we set the type when returning the new obj) so in our case it we only pass the NAME parameter since its all we need in this case.
const changeName = (name) => {
	return {
		type: 'CHANGE_NAME',
		name
	}

}

// Hobbies Reducer amd Action Generators:
// -------------------------------------
var nextHobbyId = 1;

var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id);
    default:
      return state;
  }
};


// Movies Reducer amd Action Generators:
// -------------------------------------

var nextMovieId = 1;

var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ]
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id)
    default:
      return state;
  }
};


// Reducer function:
// ----------------
var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});


// Create Store:
// ------------
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


// Subscribe to changes:
// --------------------
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New state', store.getState());
});

// unsubscribe();


// Get/ Fetch inital/current state:
// -------------------------------
var currentState = store.getState();
console.log('currentState', currentState);

// Initialize/ Dispatch Actions:
// ----------------------------
store.dispatch(changeName('Josiah'));

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Camping'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Soccer'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch(changeName('Miriam'));

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Rose Red',
  genre: 'Horror'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Wedding Crashers',
  genre: 'Comedy'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});
