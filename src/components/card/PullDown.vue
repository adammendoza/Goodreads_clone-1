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
	</div>

</template>

<script>

	// import mylist from "../../list"; 

	export default {
		props: ['book'],
		data(){
			return {
				isDropdownOpen: false,
				value: {}
			};
		},
		computed: {
			mylist() {
				return this.$store.getters.mylist;
				}
			},
		methods: {

	    addToList() {
	      for (var list in mylist) { 
	      			// Use filter method to remove the book from all the lists prior to adding it.
	        mylist[list] = mylist[list].filter(item => {
	          return item !== this.book;
	        });
	        console.log(mylist[list]);
	      }
	      			//Add the book to selected list.
	      mylist[this.value.option].push(this.book);
	            // see Search.vue for updated data
	    	}
			}
		};
</script>
<style>
	.dropdown {
		margin-bottom: 20px;
	}
</style>