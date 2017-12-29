<template>
	<div class="card-columns">
		<!-- Bootstrap card styling -->
		<div class="card" style="width: 18rem;">
		  <img class="card-img-top" alt="Card image cap">
		  <div class="card-body">
		    <h5 class="card-title">{{ book.title }}</h5>
		    <h6>{{ book.author }}</h6>
		    <p>ISBN: {{ book.ISBN }}</p>
		    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		    <!-- Dropdown on the right, stars on the left. -->
		    <div class="dropdown pull-right">
				  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				    Dropdown button
				  </button>
				  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
				    <a class="dropdown-item" href="#">Action</a>
				    <a class="dropdown-item" href="#">Another action</a>
				    <a class="dropdown-item" href="#">Something else here</a>
				  </div>
				</div>
		  </div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['book'],
		data() {
			return {

			}
		}
	}
</script>
<style>
	.card-columns {
		display: inline-block;
	}
</style>