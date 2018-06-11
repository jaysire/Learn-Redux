var axios = require('axios');

// Name Action Generators:
export const changeName = name => {
	return {
		type: 'CHANGE_NAME',
		name,
	};
};

// Hobbies Action Generators:
// -------------------------

export const addHobby = hobby => {
	return {
		type: 'ADD_HOBBY',
		hobby,
	};
};

export const removeHobby = id => {
	return {
		type: 'REMOVE_HOBBY',
		id,
	};
};

// Movies Action Generators:
// ------------------------

export const addMovie = (title, genre) => {
	return {
		type: 'ADD_MOVIE',
		title,
		genre,
	};
};

export const removeMovie = id => {
	return {
		type: 'REMOVE_MOVIE',
		id,
	};
};

// Map function Action Generators:
// ----------------------------------------


export const startLocationFetch = () => {
	return {
		type: 'START_LOCATION_FETCH',
  }
}

export const completeLocationFetch = url => {
	return {
		type: 'COMPLETE_LOCATION_FETCH',
		url,
	};
};

// this is how we tell the app things are kicking - off. This is the ON - Switch:
// turn on our complete location fetch action/ function.

export const fetchLocation = () => {
	return (dispatch, getState) => {
		dispatch(startLocationFetch());

		axios.get('http://ipinfo.io').then(function(res) {
		const loc = res.data.loc;
		const baseUrl = 'http://maps.google.come?q=';

		store.dispatch(completeLocationFetch(baseUrl) + loc);
	});
	}
};




// axios.get('http://ipinfo.io').then(function(res) {
// 		const loc = res.data.loc;
// 		const baseUrl = 'http://maps.google.come?q=';

// 		store.dispatch(completeLocationFetch(baseUrl) + loc);
// 	});