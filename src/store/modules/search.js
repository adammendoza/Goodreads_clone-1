import books from '../../data/books';

const state = {
	books: [],
	searchTerm: []
};

const mutations = {
	//mutations are pretty dumb things and all you should do there is change the state from one set of value(s) to another.
	'SET_BOOKS' (state, books) {
		state.books = books;
	},
	'FILTERED_BOOKS' (state, { searchTerm }) {
		state.searchTerm = searchTerm
	}
};
const actions = {
	//If you need to get something asynchronously, ie via a web request to a server, you cannot do this in a mutation, only in an action.
	//A nicety of Actions, is that they can call other actions and multiple mutations.
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