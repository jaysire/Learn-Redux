const redux = require('redux');
const axios = require('axios');

console.log('Starting redux example');

var actions = require('./actions/index');

var store = require('./store/configureStore').configure();

// Subscribe to changes:
// --------------------

const unsubscribe = store.subscribe(() => {
	const state = store.getState();

	console.log('New state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>';
  }
});

// unsubscribe();

// Get/ Fetch inital/current state:
// -------------------------------

const currentState = store.getState();
console.log('currentState', currentState);

// Initialize/ Dispatch Actions:
// ----------------------------

actions.fetchLocation();

store.dispatch(actions.changeName('Ras Joh'));

store.dispatch(actions.addHobby('Camping'));

store.dispatch(actions.addHobby('Soccer'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Miriam'));

store.dispatch(actions.addMovie('Rose Red', 'Horror'));

store.dispatch(actions.addMovie('Wedding Crashers', 'Comedy'));

store.dispatch(actions.removeMovie(1));
