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
	}
};

// simple functions that take all the parameters you need to generate your Action & they return an Object with the 'TYPE' set on it.
// i.e. when returning the obj, start by setting the obj type first and parameters passed follow below it.
// Our func doesnt need the TYPE to be passed as an argument (we set the type when returning the new obj) so in our case it we only pass the NAME parameter since its all we need in this case.
const changeName = name => {
	return {
		type: 'CHANGE_NAME',
		name,
	};
};

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
					hobby: action.hobby,
				},
			];
		case 'REMOVE_HOBBY':
			return state.filter(hobby => hobby.id !== action.id);
		default:
			return state;
	}
};

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

var nextMovieId = 1;

var moviesReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_MOVIE':
			return [
				...state,
				{
					id: nextMovieId++,
					title: action.title,
					genre: action.genre,
				},
			];
		case 'REMOVE_MOVIE':
			return state.filter(movie => movie.id !== action.id);
		default:
			return state;
	}
};

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
	switch ((action, type)) {
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
var reducer = redux.combineReducers({
	name: nameReducer,
	hobbies: hobbiesReducer,
	movies: moviesReducer,
	map: mapReducer,
});

// Create Store:
// ------------
var store = redux.createStore(reducer, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

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
store.dispatch(changeName('Ras Joh'));

store.dispatch(addHobby('Camping'));

store.dispatch(addHobby('Soccer'));

store.dispatch(removeHobby(2));

store.dispatch(changeName('Miriam'));

store.dispatch(addMovie('Rose Red', 'Horror'));

store.dispatch(addMovie('Wedding Crashers', 'Comedy'));

store.dispatch(removeMovie(1));
