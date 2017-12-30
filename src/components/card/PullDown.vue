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
	</div>

</template>

<script>
	export default {
		data(){
			return {
				isDropdownOpen: false,
				value: {},
				reading: [],
				haveRead: [],
				wantToRead: []
			} 
		},
		computed: {
				addToList: function(){
					console.log(this.value.option)
					// if (this.value.option) 
				}
			}
		}
</script>
<style>
	.dropdown {
		margin-bottom: 20px;
	}
</style>