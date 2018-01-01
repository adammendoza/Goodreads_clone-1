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
	export default {
		props: ['book'],
		data(){
			return {
				isDropdownOpen: false,
				value: {},
				reading: [],
				haveRead: [],
				wantToRead: []
			} 
		},
		methods: {
				addToList: function(book){ 
					console.log(this.value.option)
					// condition checks for a string because dropdown value is a string
			    if (this.value.option == 'reading'){
			    	this.reading.push(this.book);
			    	console.log(this.reading);

			    	for(var i = 0; i < this.haveRead.length; i++) {
					    if(this.haveRead[i].ISBN == this.book.ISBN) {
					        this.haveRead.splice(i, 1);
					        break;
					    }
						}
						for(var i = 0; i < this.wantToRead.length; i++) {
					    if(this.wantToRead[i].ISBN == this.book.ISBN) {
					        this.wantToRead.splice(i, 1);
					        break;
					    }
						}
			    	
			    } else if (this.value.option == 'haveRead'){
			    	this.haveRead.push(this.book);

			    	for(var i = 0; i < this.reading.length; i++) {
					    if(this.reading[i].ISBN == this.book.ISBN) {
					        this.reading.splice(i, 1);
					        break;
					    }
						}
						for(var i = 0; i < this.wantToRead.length; i++) {
					    if(this.wantToRead[i].ISBN == this.book.ISBN) {
					        this.wantToRead.splice(i, 1);
					        break;
					    }
						}
			    } else {
			    	this.wantToRead.push(this.book);

			    	for(var i = 0; i < this.haveRead.length; i++) {
					    if(this.haveRead[i].ISBN == this.book.ISBN) {
					        this.haveRead.splice(i, 1);
					        break;
					    }
						}
						for(var i = 0; i < this.reading.length; i++) {
					    if(this.reading[i].ISBN == this.book.ISBN) {
					        this.reading.splice(i, 1);
					        break;
					    }
						}
			    } 
			    	console.log('end')    
				}
			}
		}
</script>
<style>
	.dropdown {
		margin-bottom: 20px;
	}
</style>