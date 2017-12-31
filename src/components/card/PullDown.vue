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
			    	console.log('this.value.option')
			    	this.reading.push(this.book);
			    	console.log(this.rreading);
			    } else if (this.value.option == 'haveRead'){
			    	this.haveRead.push(this.book);
			    } else {
			    	this.wantToRead.push(this.book);
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