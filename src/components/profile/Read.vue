<template>
	<div class="listContents">
<!--     <p>reading {{ mylist.reading }} </p>
    <p>haveRead {{ mylist.haveRead }} </p>
    <p>wantToRead {{ mylist.wantToRead }} </p> -->
    <div class="listContentBooks">
    	<app-card v-for="book in mylist.haveRead" :book="book" :data="book" :key="book.id" ></app-card>
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
		},
};

</script>

<style scoped>

div.listContents { text-align: center; }
div.listContents > div.listContentBooks { margin: 0 auto; width: 1110px; }

	form.form-inline.my-2.my-lg-0 {
	  padding-top: 30px;
	  padding-bottom: 30px;
/*	  padding-left: 30px;
*/	}
	input.form-control.mr-sm-2 {
		width: 90% !important;
	} 
</style>