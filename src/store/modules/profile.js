import mylist from '../../data/list';

const state = {
	mylist: []
};

const mutations = {
	'SET_MYLIST' (state, mylist) {
		state.mylist = mylist;
	}
};

const actions = {
	initList: ({commit}) => {
		commit('SET_MYLIST', mylist);
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
//change the location of list.js - go back and fix everywhere
//state of the 3 lists
//import the list as in search.js
//no need to initialize the 3 lists
//addToList instead of buystock in search.js
//keep watching videos for how to finish up connecting this file to the rest 
//or rewatch the first one
//getters
//export
