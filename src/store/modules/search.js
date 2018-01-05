import books from '../../data/books';

const state = {
	books: [],
	searchTerm: []
};

const mutations = {
	'SET_BOOKS' (state, books) {
		state.books = books;
	},
	// 'FILTERED_BOOKS' (state, { searchTerm }) {
	// 	return state.books.filter((book)=>{
	// 		return book.title.toLowerCase().match(searchTerm) || book.ISBN.toLowerCase().match(searchTerm) || book.author.toLowerCase().match(searchTerm);
	// 	});
	// }
	'FILTERED_BOOKS' (state, { searchTerm }) {
		state.searchTerm = searchTerm
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
	},
	filteredBooks: state => {
		return state.books.filter((book)=>{
			return book.title.toLowerCase().match(state.searchTerm) || book.ISBN.toLowerCase().match(state.searchTerm) || book.author.toLowerCase().match(state.searchTerm);
		});
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};