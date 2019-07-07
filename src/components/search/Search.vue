<template>
	<div>
		<form class=" form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Enter book title, author, or ISBN" aria-label="Search" @input="storeSearch">
		</form>
		<div class="searchLayout">
			<app-card v-for="book in books" :book="book" :data="book" :key="book.id" ></app-card>
		</div>
	</div>
</template>

<script>
	import Card from '../card/Card.vue'

	export default {
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
		},

		methods: {

			storeSearch (event) {
				this.$store.dispatch('filteredBooks', { searchTerm: event.target.value })
			}
	}
};

</script>

<style scoped>
	form.form-inline.my-2.my-lg-0 {
		padding: 30px;
	}
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