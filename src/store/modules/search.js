// import books from '../../data/books';
import axios from 'axios';


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

		//Unfortunately GoodReads does not include the CORS header in ANY of their api calls. So I will be using google API instead. 

		// Axios will help us get the xml content, so we must parse the content by ourself with xml parser
		// axios.get("https://www.goodreads.com/search/index.xml?key=yqCuegotHH26DtulmE47Ig&q=Ender%27s+Game")
  //   	.then(response => {xml = response.data.results
  //   	//parse xml into json with x2js library
  //   	var x2js = new X2JS();
		// 	var document = x2js.xml2js(xml);
 
		// 	console.log(document.MyRootElement.ElementX[1].toString());
		// 	//create a json object with props and set book to it
		// 	//use mutation to set the state.books to the books from API
  //   })
  	console.log(state.searchTerm)

// 1. state.searchTerm doesn't save

		let books = [];

  	if(state.searchTerm !== null){
		axios.get("https://www.googleapis.com/books/v1/volumes?q=" + "random")
    	.then(response => {
    		console.log(response)

    		for(var i=0; i<response.data.items.length; i++){
    			books.push(response.data.items[i]);
    			console.log(books);
    		}
			commit('SET_BOOKS', books);
			console.log("BOOKS VARIABLE " + state.books[0].id);
    	})
    }
	},
	filteredBooks: ({commit}, search) => {
		commit('FILTERED_BOOKS', search);
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