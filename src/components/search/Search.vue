<template>
	<div>
	  <form class="center form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Enter book title, author, or ISBN" aria-label="Search" v-model="search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
	
		<app-card v-for="book in filteredBooks" :book="book"></app-card>
	</div>
</template>

<script>
	import Card from '../card/Card.vue'
	export default {
		data(){
			return{
				books:[
					{ ISBN: '0385351399', title: 'The Circle', author: 'Dave Eggers' },
					{ ISBN: '1594204233', title: 'Bleeding Edge', author: 'Thomas Pynchon' },
					{ ISBN: '0374158460', title: 'Freedom', author: 'Jonathan Franzen' },
					{ ISBN: '1594480001', title: 'The Kite Runner', author: 'Khaled Hosseini' },
					{ ISBN: '0316921173', title: 'Infinite Jest', author: 'David Foster Wallace' },
				],
				search: ''
			}
		},
		components: {
			appCard: Card
		},
		computed: {
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
	  padding: 30px !important;
	}
	.center {
		margin: 0 auto !important;
	}
	input.form-control.mr-sm-2 {
		width: 600px !important;
	}
</style>