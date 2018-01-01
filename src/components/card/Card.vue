<template>
		<!-- Bootstrap card styling -->
		<div class="card" style="width: 22rem;">
		  <img class="card-img-top" alt="Card image cap">
		  <div class="card-body">
		    <h5 class="card-title">{{ book.title }}</h5>
		    <h6>{{ book.author }}</h6>
		    <p>ISBN: {{ book.ISBN }}</p>
		    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		    <!-- Dropdown on the right, stars on the left. -->
		    <app-pull-down :book="book"></app-pull-down>
		  </div>
		</div>
</template>

<script>
	import PullDown from './PullDown.vue'

	export default {
		props: ['book'],
		data() {
			return {

			}
		},
		components: {
			appPullDown: PullDown
		}
	}
</script>
<style>

div.card{
	display: inline-block;
	margin: 10px;
}
</style>
