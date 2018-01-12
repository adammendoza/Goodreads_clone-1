<template>
		<!-- Bootstrap card styling -->
		<div class="card">
		  <img class="card-img-top" alt="Card image cap" :src="book.volumeInfo.imageLinks.thumbnail">
		  <div class="card-body">
		    <h5 class="card-title">{{ book.volumeInfo.title }}</h5>
		    <h6>{{ book.volumeInfo.authors[0] }}</h6>
		    <p>Average Rating: {{ book.volumeInfo.averageRating }}</p>
		    <p>Description: {{ book.volumeInfo.description }}</p>
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

div.card {
  width: 24%;
	margin: 5px;
	display: flex;
  align-items: center;
  justify-content: center;
}
img.card-img-top {
	width: 180px;
	margin: 20px;
}
</style>
