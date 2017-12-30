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
					if (this.value.option == this.reading){
						this.reading.push({
							title: book.title,
							ISBN: book.ISBN,
							author: book.author
						});
						console.log(this);
					// } else if (this.value.option == haveRead){
					// 	this.haveRead.push(this.book);
					// } else {
					// 	this.wantToRead.push(this.book);
					} 
				}
			}
		}
</script>
<style>
	.dropdown {
		margin-bottom: 20px;
	}
</style>