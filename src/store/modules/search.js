import books from '../../data/books';

const state = {
	books: []
};

const mutations = {
	'SET_BOOKS' (state, books) {
		state.books = books;
	}
};

const actions = {
	initBooks: ({commit}) => {
		commit('SET_BOOKS', books);
	}
};

const getters = {
	books: state => {
		return state.books;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};