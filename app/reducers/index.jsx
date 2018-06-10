// Name Reducer amd Action Generators:
// ----------------------------------
const nameReducer = (state = 'Anonymous', action) => {
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


// Hobbies Reducer amd Action Generators:
// -------------------------------------
let nextHobbyId = 1;

const hobbiesReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_HOBBY':
			return [
				...state,
				{
					id: nextHobbyId++,
					hobby: action.hobby
				}
			]
		case 'REMOVE_HOBBY':
			return state.filter(hobby => hobby.id !== action.id);
		default:
			return state;
	}
};


// Movies Reducer amd Action Generators:
// -------------------------------------

let  nextMovieId = 1;

const moviesReducer = (state = [], action) => {
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
			return state.filter(movie => movie.id !== action.id);
		default:
			return state;
	}
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
