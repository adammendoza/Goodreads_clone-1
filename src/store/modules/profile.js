import mylist from '../../data/mylist';

const state = {
	mylist: []
};

const mutations = {
	'SET_MYLIST' (state, mylist) {
		state.mylist = mylist;
	},
	'ADD_TO_LIST'(state, {selection}){
  	// console.log(this.$store.getters.mylist);

    for (var list in state.mylist) { 
    			// Use filter method to remove the book from all the lists prior to adding it.
      state.mylist[list] = state.mylist[list].filter(item => {
        return item !== state.book;
      });
      console.log(state.mylist[list]);
    }
    			//Add the book to selected list.
    state.mylist[selection].push(state.book);
    console.log(state.mylist[selection])
	}
};

const actions = {
	initList: ({commit}) => {
		commit('SET_MYLIST', mylist);
	},
	addToList: ({commit}, choice) => {
		commit('ADD_TO_LIST', choice);
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

//addToList instead of buystock in search.js
//keep watching videos for how to finish up connecting this file to the rest 
//or rewatch the first one

