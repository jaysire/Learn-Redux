const redux = require('redux');
const axios = require('axios');

console.log('Starting redux example');

// Name Reducer amd Action Generators:
// ----------------------------------

const changeName = name => {
	return {
		type: 'CHANGE_NAME',
		name,
	};
};

// Hobbies Reducer amd Action Generators:
// -------------------------------------

const addHobby = hobby => {
	return {
		type: 'ADD_HOBBY',
		hobby,
	};
};

const removeHobby = id => {
	return {
		type: 'REMOVE_HOBBY',
		id,
	};
};

// Movies Reducer amd Action Generators:
// -------------------------------------

const addMovie = (title, genre) => {
	return {
		type: 'ADD_MOVIE',
		title,
		genre,
	};
};

const removeMovie = id => {
	return {
		type: 'REMOVE_MOVIE',
		id,
	};
};

// Map Reducer function & Action Generators:
// ----------------------------------------

const mapReducer = (state = { isFetching: false, url: undefined }, action) => {
	switch ((action.type)) {
		case 'START_LOCATION_FETCH':
			return {
				isFetching: true,
				url: undefined,
			};
		case 'COMPLETE_LOCATION_FETCH':
			return {
				isFetching: false,
				url: action.url,
			};
		default:
			return state;
	}
};

const startLocationFetch = () => {
	return {
		type: 'START_LOCATION_FETCH',
	};
};

const completeLocationFetch = url => {
	return {
		type: 'COMPLETE_LOCATION_FETCH',
		url,
	};
};

// this is how we tell the app things are kicking - off. This is the ON - Switch:
// turn on our complete location fetch action/ function.

const fetchLocation = () => {
	store.dispatch(startLocationFetch());

	axios.get('http://ipinfo.io').then(function(res) {
		const loc = res.data.loc;
		const baseUrl = 'http://maps.google.come?q=';

		store.dispatch(completeLocationFetch(baseUrl) + loc);
	});
};

// Combined - Reducer function:
// ----------------

const reducer = redux.combineReducers({
	name: nameReducer,
	hobbies: hobbiesReducer,
	movies: moviesReducer,
	map: mapReducer,
});

// Create Store:
// ------------

const store = redux.createStore(reducer, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

// Subscribe to changes:
// --------------------

const unsubscribe = store.subscribe(() => {
	const state = store.getState();

	console.log('Name is', state.name);
	document.getElementById('app').innerHTML = state.name;

	console.log('New state', store.getState());
});

// unsubscribe();

// Get/ Fetch inital/current state:
// -------------------------------

const currentState = store.getState();
console.log('currentState', currentState);

// Initialize/ Dispatch Actions:
// ----------------------------

store.dispatch(changeName('Ras Joh'));

store.dispatch(addHobby('Camping'));

store.dispatch(addHobby('Soccer'));

store.dispatch(removeHobby(2));

store.dispatch(changeName('Miriam'));

store.dispatch(addMovie('Rose Red', 'Horror'));

store.dispatch(addMovie('Wedding Crashers', 'Comedy'));

store.dispatch(removeMovie(1));
