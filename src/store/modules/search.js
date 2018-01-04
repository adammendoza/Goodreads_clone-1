import books from '../../data/books';

const state = {
	books: []
};

const mutations = {
	'SET_BOOKS' (state, books) {
		state.books = books;
	},
	'FILTERED_BOOKS' (state, { searchTerm }) {
		return state.books.filter((book)=>{
			return book.title.toLowerCase().match(searchTerm) || book.ISBN.toLowerCase().match(searchTerm) || book.author.toLowerCase().match(searchTerm);
		});
	}
};
const actions = {
	initBooks: ({commit}) => {
		commit('SET_BOOKS', books);
	},
	filteredBooks: ({commit}, search) => {
		commit('FILTERED_BOOKS', search);
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