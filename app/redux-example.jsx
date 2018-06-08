const redux = require('redux');

console.log('Starting redux tutorial example below!');

const stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

const nextHobbyId = 1;
const nextMovieId = 1;

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

const moviesRedcuer = (sate = [], action) => {
	switch (action.type) {
		case 'ADD_MOVIE':
			return [
        ...state,
          {
            id: nextMovieId++,
            title: action.title,
						genre: action.genre,
					}		
			]
		case 'REMOVE_MOVIE':
			return state.filter((movie) => movie.id !== action.id)
			default:
				return state;
	}
};

const reducer = redux.combineReducers({
	name: nameReducer,
	hobbies: hobbiesReducer,
	movies: moviesRedcuer
})

const store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
const unsubscribe = store.subscribe(() => {
  const state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New state', store.getState());
});
// unsubscribe();

const currentState = store.getState();
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
