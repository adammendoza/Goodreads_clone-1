<template>
	<div class="listContents">
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
	div.listContentBooks {
  width: 100%;
  height: 100%;
  display:flex;
  flex-wrap: wrap;
  overflow:none;
	}
	form.form-inline.my-2.my-lg-0 {
	  padding-top: 30px;
	  padding-bottom: 30px;
	}
	input.form-control.mr-sm-2 {
		width: 90% !important;
	} 
</style>