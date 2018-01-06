<template>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<!-- Remove anchor tag and manage through vue. -->
		<router-link to="/" class="navbar-brand">Goodreads</router-link>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav mr-auto">
	    	<router-link to="/search" activeClass="active" tag="li" class="nav-link"><a>Search</a></router-link>
	    	<router-link to="/profile" activeClass="active" tag="li" class="nav-link"><a>Profile</a></router-link>
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
	  			aria-expanded="false">Save & Load <span class="caret"></span></a>
	  		<ul class="dropdown-menu">
	  			<li><a href="#">Save Data</a></li>
	  			<li><a href="#">Load Data</a></li>
	  		</ul>
	  	</li>
	  </ul>
	</nav>
	<!-- You need to handle dropdowns with javascript, and you could use Bootstrap js for that, but you want to handle all with vue. -->
</template>

<style>
	nav.navbar.navbar-expand-lg.navbar-light.bg-light{
		margin-bottom: 20px;
	}
</style>