const redux = require('redux');
const axios = require('axios');

console.log('Starting redux example');

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
