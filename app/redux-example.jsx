var redux = require('redux');

console.log('Starting redux tutorial example below!');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;
var oldReducer = (state = stateDefault, action) => {
  // state = state || {name: 'Anonymous'};

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
      };
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
      }
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]
      }
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.id)
      }
    default:
      return state;
  }
};

const nameReducer = (state = 'Anonymous', action) => {
	switch (action.type) {
		case 'CHANGE_NAME':
			return action.name;
		default:
			return state;
	}
};

const hobbiesReducer = (state = [], action) => {
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
		return state.filter((hobby) => hobby.id !== action.id)
	default:
		return state;
	}
};

const reducer = redux.combineReducers({
	name: nameReducer,
	hobbies: hobbiesReducer
})

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New state', store.getState());
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Josiah'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Soccer'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Camping'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Miriam'
});

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
