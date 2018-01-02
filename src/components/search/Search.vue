<template>
	<div>
		<form class=" form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Enter book title, author, or ISBN" aria-label="Search" v-model="search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <p>reading {{ mylist.reading }} </p>
    <p>haveRead {{ mylist.haveRead }} </p>
    <p>wantToRead {{ mylist.wantToRead }} </p>
		<app-card v-for="book in filteredBooks" :book="book" :data="book" :key="book.id" ></app-card>
	</div>
</template>

<script>
	import Card from '../card/Card.vue'
	import mylist from '../../list' // same list used in pulldown.vue

	export default {
		data(){
			return{
				mylist: mylist, //to use in template above - if you want a javascript variable to be used in template, u must add that in. Same with methods, if you want to call a function from the template, add that in. 
				search: ''
			}
		},
		components: {
			appCard: Card
		},
		computed: {
			books() {
				return this.$store.getters.books;
			},
			filteredBooks: function(){
				return this.books.filter((book)=>{
					return book.title.toLowerCase().match(this.search) || book.ISBN.toLowerCase().match(this.search) || book.author.toLowerCase().match(this.search);
				});
			}
		}
	}
</script>

<style>
	form.form-inline.my-2.my-lg-0 {
	  padding-top: 30px;
	  padding-bottom: 30px;
/*	  padding-left: 30px;
*/	}
	input.form-control.mr-sm-2 {
		width: 90% !important;
	} 
</style>