<template>
	<div>
		<form class=" form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Enter book title, author, or ISBN" aria-label="Search" @input="storeSearch">
<!--       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
 -->    </form>
<!--     <p>reading {{ mylist.reading }} </p>
    <p>haveRead {{ mylist.haveRead }} </p>
    <p>wantToRead {{ mylist.wantToRead }} </p> -->
<!-- 
	commenting filtered books out, since now search works with API query parameter and not filtering the books data object, and changing "book in filteredBooks" to "book in books" -->
		<div class="searchLayout">
			<app-card v-for="book in books" :book="book" :data="book" :key="book.id" ></app-card>
		</div>
	</div>
</template>

<script>
	import Card from '../card/Card.vue'

	export default {
		// data(){
		// 	return{
		// 		//to use in template above - if you want a javascript variable to be used in template, u must add that in. Same with methods, if you want to call a function from the template, add that in. 
		// 		// search: ''
		// 	}
		// },
		components: {
			appCard: Card
		},
		computed: {
			books() {
				return this.$store.getters.books;
			},
			mylist() {
				return this.$store.getters.mylist;
			}, 

			filteredBooks() {
				return this.$store.getters.filteredBooks
			}
			//before Vuex application
			// filteredBooks: function(){
			// 	return this.books.filter((book)=>{
			// 		return book.title.toLowerCase().match(this.search) || book.ISBN.toLowerCase().match(this.search) || book.author.toLowerCase().match(this.search);
			// 	});
			// }
		},

		methods: {

			storeSearch (event) {
				this.$store.dispatch('filteredBooks', { searchTerm: event.target.value })
			}
			//incorrect vuex application
	 //    filteredBooks() {
	 //     	const search = {
		// 			searchTerm: this.search
		// 		}
		// 		console.log(search.searchTerm);
	 //     	this.$store.dispatch('filteredBooks', search);
		// }
	}
};

</script>

<style scoped>
	form.form-inline.my-2.my-lg-0 {
	  padding-top: 30px;
	  padding-bottom: 30px;
/*	  padding-left: 30px;
*/	}
	input.form-control.mr-sm-2 {
		width: 100%;
	} 
	div.searchLayout {
  width: 100%;
  height: 100%;
  display:flex;
  flex-wrap: wrap;
  overflow:none;
	}
</style>