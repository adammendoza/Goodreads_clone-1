import myInitList from '../../data/mylist';

import axios from 'axios';

const state = {
	mylist: []
};

const mutations = {
	'SET_MYLIST' (state, mylist) {
		state.mylist = mylist;
	},
	'ADD_TO_LIST'(state, {selection, book}){

    for (var list in state.mylist) { 
    			// Use filter method to remove the book from all the lists prior to adding it.
      state.mylist[list] = state.mylist[list].filter(item => {
				// return item !== book; // Shouldn't compare 2 objects
				//At this time, it reference to the same object, when you save and load, it create new object with same props, but allocated at different memory buffer. So it understand 2 objects are different; This is why previously it wouldn't add the book 2ce to the same list, but upon loading, since it creates a new object it does. Unless you use a unique prop. 
				return item.id !== book.id;
      });
      console.log(state.mylist[list]);
    }
		
		//Add the book to selected list.
		if (selection) { // Don't forget to check when user choose the first selection, currently has no value and display text: 'Choose...'
			state.mylist[selection].push(book);
		}
    
    console.log(state.mylist[selection])
	}, 
	'REMOVE_FROM_LIST'(state, book){
    for (var list in state.mylist) { 
      state.mylist[list] = state.mylist[list].filter(item => {
				return item.id !== book.id;
      });
    }
  }
};

const actions = {
	initList: ({commit}) => {
		commit('SET_MYLIST', myInitList);
	},
	addToList: ({commit}, choice) => {
		commit('ADD_TO_LIST', choice);
	},
	removeFromList: ({commit}, book) => {
		commit('REMOVE_FROM_LIST', book);
	},
	loadData: ({commit}) => {
		axios.get('https://goodreadsclone-c0542.firebaseio.com/data.json')
			// .then(response => console.log(response.data.haveRead))
			.then(response => {
				let mylist = myInitList;

				if (response.data !== null) { // Should check null first
					// console.log(response.data.haveRead)
					// console.log(response.data.wantToRead)
					const haveRead = response.data.haveRead || []; // If we save an empty array, Firebase won't save as an empty array but nothing, so we should set an empty array if we get undefined from Firebase.
					const reading = response.data.reading || [];
					const wantToRead = response.data.wantToRead || [];

					mylist = { // If we have data, replace initial list with our data
						haveRead,
						reading,
						wantToRead
					};
				}
				commit('SET_MYLIST', mylist);
			})
			.catch(error => console.log(error))
	}
};

const getters = {
	mylist: state => {
		return state.mylist;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};



