<template>
	<div>
		<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../assets/got.gif" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/maniac.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/russian-doll.jpg" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="quote">
	    <div class="blockquote-wrapper">
			  <div class="blockquote">
			    <h1>
			     My weekend <span style="color:#ffffff">is </span> all <span style="color:#ffffff">booked.</span>
			     </h1>
			    <h4><em>&mdash;Not sure who said it,</em><br><em>But I'm doing it.</em></h4>
			  </div>
			</div>
		</div>
		<div class="intro">
			<br>
			<h1>Deciding what to read next?</h1>
			<br>
			<h3>Search our catalogue and plan your reading experience. <br> Add books to your bookshelf as have read, reading, or want to read.</h3>
			</div>
	</div>
</template>

<style>
	h1 {
		font-size: 2.5em;
		font-family: 'Stylish', sans-serif;
	}
	h3 {
		font-size: 1.8em;
		font-family: 'Stylish', sans-serif;
	}
	.intro {
		padding: 30px;
		color: white;
	}
	/*quote*/
	.quote {
		background-color: #292a2b;
	}
	/* center the blockquote in the page */
	.blockquote-wrapper {
	   display: flex;
	   padding: 0 20px;
	}

	/* Blockquote main style */
	.blockquote {
	    position: relative;
	    font-family: 'Barlow Condensed', sans-serif;
	    max-width: 620px;
	    margin: 80px auto;
	    align-self: center;
	}

	/* Blockquote header */
	.blockquote h1 {
	    font-family: 'Abril Fatface', cursive;
	    position: relative; /* for pseudos */
	    color: #e74848;
	    font-size: 2.8rem;
	    font-weight: normal;
	    line-height: 1;
	    margin: 0;
	    border: 2px solid #fff;
	    border: solid 2px;
	    border-radius:20px;
	    padding: 25px;
	}

	/* Blockquote right double quotes */
	.blockquote h1:after {
	    content:"";
	    position: absolute;
	    border: 2px solid #e74848;
	    border-radius: 0 50px 0 0;
	    width: 60px;
	    height: 60px;
	    bottom: -62px;
	    left: 50px;
	    border-bottom: none;
	    border-left: none;
	    z-index: 3; 
	}

	.blockquote h1:before {
	    content:"";
	    position: absolute;
	    width: 80px;
	    border: 6px solid #292a2b;
	    bottom: -3px;
	    left: 50px;
	    z-index: 2;
	}

	/* increase header size after 600px */
	@media all and (min-width: 600px) {
	    .blockquote h1 {
	        font-size: 3rem;
	        line-height: 1.2;
	   }

	}

	/* Blockquote subheader */
	.blockquote h4 {
	    position: relative;
	    color: #ffffff;
	    font-size: 1.3rem;
	    font-weight: 400;
	    line-height: 1.2;
	    margin: 0;
	    padding-top: 15px;
	    z-index: 1;
	    margin-left:150px;
	    padding-left:12px;
	}

	 
	.blockquote h4:first-letter {
	  margin-left:-12px;
	}
</style>