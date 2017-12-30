<template>
	<div class="float-right">
		<div class="input-group  dropdown">
		  <select v-model="selected" class="custom-select" id="inputGroupSelect04">
		    <option selected>Choose...</option>
		    <option v-bind:value="{ option: Reading }">Reading</option>
		    <option v-bind:value="{ option: HaveRead }">Have Read</option>
		    <option v-bind:value="{ option: WantToRead }">Want to Read</option>
		  </select>
		</div>
	</div>

</template>

<script>
	export default {
		data(){
			return {
				isDropdownOpen: false,
				// select: [
				// 	'Reading',
				// 	'Have Read',
				// 	'Want to Read'
				// ]
			} 
		}
	}
</script>
<style>
	.dropdown {
		margin-bottom: 20px;
	}
</style>