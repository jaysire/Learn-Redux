// Name Action Generators:
// ----------------------

const changeName = name => {
	return {
		type: 'CHANGE_NAME',
		name,
	};
};

// Hobbies Action Generators:
// -------------------------

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

// Movies Action Generators:
// ------------------------

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

// Map function Action Generators:
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
};