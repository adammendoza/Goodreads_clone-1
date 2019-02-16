import axios from 'axios';


const state = {
	books: [],
	searchTerm: []
};

const mutations = {
	'SET_BOOKS' (state, books) {
		state.books = books;
	},

	'FILTERED_BOOKS' (state, { searchTerm }) {
		state.searchTerm = searchTerm
	}
};
const actions = {
	filteredBooks: ({commit}, search) => {

		console.log(search)

		let books = [];

  	if(search !== null){
		axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search.searchTerm)
    	.then(response => {
    		console.log(response)

    		for(var i=0; i<response.data.items.length; i++){
    			books.push(response.data.items[i]);
    			console.log(books);
    		}
			commit('SET_BOOKS', books);
			commit('FILTERED_BOOKS', search);

			console.log("BOOKS VARIABLE " + state.books[0].id);
    	})
    }
	}
};

const getters = {
	books: state => {
		return state.books;
	},
	//commenting filtered books out, since now search works with API query parameter and not filtering the books data object, and changing "book in filteredBooks" to "book in books"

	// filteredBooks: state => {
	// 	return state.books.filter((book)=>{
	// 		return book.title.toLowerCase().match(state.searchTerm) || book.ISBN.toLowerCase().match(state.searchTerm) || book.author.toLowerCase().match(state.searchTerm);
	// 	});
	// }
};

export default {
	state,
	mutations,
	actions,
	getters
};