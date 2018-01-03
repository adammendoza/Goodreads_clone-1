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
	     	const choice = {
					selection: this.value.option,
					book: this.book
				}
				console.log(choice.selection);
	     	this.$store.dispatch('addToList', choice);
	    	}
			}
		};
</script>
<style>
	.dropdown {
		margin-bottom: 20px;
	}
</style>