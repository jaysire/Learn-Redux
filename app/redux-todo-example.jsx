const redux = require('redux');

console.log('Here we go again!! Redux-todo-example!!');

// since we need to pass more than one argument, we can start by saving it to a variable and passing the variable instead thru our reducer func
const stateDefault = {
	searchText: '',
	showCompleted: false,
	todos: [],
};

const reducer = (state = stateDefault, action) => {
	switch (action.type) {
		case 'CHANGE_SEARCH_TEXT':
			return {
				...state,
				searchText: action.searchText,
			};
		case 'CHANGE_SEARCH_TEXT':
			return {
				...state,
				searchText: action.searchText,
			};
		case 'CHANGE_SEARCH_TEXT':
			return {
				...state,
				searchText: action.searchText,
			};
		default:
      return state;
	}
};

// initialize the Redux Dev-Tools;
const store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f));

// subscribe to changes:
var unsubscribe = store.subscribe(() => {
  const state = store.getState();
  
	console.log('Search Text is =>>', state.searchText);
	document.getElementById('app').innerHTML = state.searchText;
});

console.log('currentState', store.getState());

// dispatch our action by passing in the action obj.
// Every Actions MUST have 'type' property.
store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'Work',
});
// console.log('searchText should print "work"=>>', store.getState());

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'Salt Lake City',
});

// unsubscribe();

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'Makaveli',
});
