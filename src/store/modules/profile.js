import mylist from '../../data/mylist';

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

//addToList instead of buystock in search.js
//keep watching videos for how to finish up connecting this file to the rest 
//or rewatch the first one

