<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<router-link to="/">PRIMEREADS</router-link>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav">
	    	<router-link to="/search" activeClass="active" tag="li" class="nav-link"><a>SEARCH</a></router-link>
	    	<router-link to="/profile" activeClass="active" tag="li" class="nav-link"><a>PROFILE</a></router-link>
	    </ul>
	  </div>
	  <ul class="nav navbar-nav-navbar-right">
	  	<li class="dropdown">
	  		<a
	  			href='#'
	  			class="dropdown-toggle"
	  			data-toggle="dropdown"
	  			role="button"
	  			aria-haspopup="true"
	  			aria-expanded="false">SAVE & LOAD<span class="caret"></span></a>
	  		<ul class="dropdown-menu">
	  			<li><a href="#" @click="saveData">SAVE DATA</a></li>
	  			<li><a href="#" @click="loadData">LOAD DATA</a></li>
	  		</ul>
	  	</li>
	  </ul>
	</nav>
</template>

<script>
	import axios from 'axios';

	export default {

		methods: {
		
				fetchData(){
					this.$store.dispatch('loadData')
				},

				saveData(){
					const data = {
						haveRead: this.$store.getters.mylist.haveRead,
						reading: this.$store.getters.mylist.reading,
						wantToRead: this.$store.getters.mylist.wantToRead
					}
					console.log(data.haveRead, data.reading, data.wantToRead)
					axios.put('https://goodreadsclone-c0542.firebaseio.com/data.json', data)
						.then(res => console.log(res))
						.catch(error => console.log(error))
				}, 
				loadData(){
					this.fetchData();
				}
		}
	}
</script>

<style>
	nav {
		display: flex;
		justify-content: center;
	}
	a {
		font-family: 'Stylish', sans-serif;
		color: black;
		font-size: 1.5rem;
	}
</style>