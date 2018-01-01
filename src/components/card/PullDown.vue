<template>
	<div class="float-right">
		<div class="input-group  dropdown">
		  <select v-model="value" class="custom-select" id="inputGroupSelect04" @change="addToList">
		    <option selected>Choose...</option>
		    <option :value="{ 'option': 'reading' }">Reading</option>
		    <option :value="{ 'option': 'haveRead' }">Have Read</option>
		    <option :value="{ 'option': 'wantToRead' }">Want to Read</option>
		  </select>
		</div>
		<p>value: {{ value.option }} </p>
		<p>book title: {{ book.title}} </p>
		<p>reading: {{ reading }} </p>
		<p>read: {{ haveRead }} </p>
		<p>want to read: {{ wantToRead }} </p>
	</div>

</template>

<script>

	import mylist from "../../list"; 
	// mylist is a global array , can be accessed from its parent vue 
	//so if you update this from here, it will update everywhere

	export default {
		props: ['book'],
		data(){
			return {
				isDropdownOpen: false,
				value: {}

        // we dont need this list here, lets have gloabl list, src/list.js
        // having it here means the array is recreated for each books component
				// reading: [],
				// haveRead: [],
				// wantToRead: []
			};
		},
		methods: {

	    addToList() {
	      for (var list in mylist) { 
	      			// Use filter method to remove the book from all the lists prior to adding it.
	        mylist[list] = mylist[list].filter(item => {
	          return item !== this.book;
	        });
	      }
	      			//Add the book to selected list.
	      mylist[this.value.option].push(this.book);
	            console.log(mylist);
	            // see Search.vue for updated data
	    }

				// addToList: function(book){ 
				// 	console.log(this.value.option)

				// 	function remove(bookshelves, book){
			 //    	for(var i = 0; i < bookshelves.length; i++) {
				// 	    if(bookshelves[i].ISBN == book.ISBN) {
				// 	        bookshelves.splice(i, 1);
				// 	        break;
				// 	    }
				// 		}
				// 	}

				// 	// condition checks for a string because dropdown value is a string
			 //    if (this.value.option == 'reading'){
			 //    	this.reading.push(this.book);
			 //    	console.log(this.reading);

			 //    	remove(this.haveRead, this.book);
			 //    	remove(this.wantToRead, this.book);
			    	
			 //    } else if (this.value.option == 'haveRead'){
			 //    	this.haveRead.push(this.book);

			 //    	remove(this.reading, this.book);
			 //    	remove(this.wantToRead, this.book);

			 //    } else {
			 //    	this.wantToRead.push(this.book);

			 //    	remove(this.haveRead, this.book);
			 //    	remove(this.reading, this.book);

			 //    } 
			 //    	console.log('end')    
				// }
			}
		};
</script>
<style>
	.dropdown {
		margin-bottom: 20px;
	}
</style>