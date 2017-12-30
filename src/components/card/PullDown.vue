<template>
	<div class="float-right">
		<div class="input-group  dropdown">
		  <select class="custom-select" id="inputGroupSelect04">
		    <option selected>Choose...</option>
		    <option value="1">Reading</option>
		    <option value="2">Have read</option>
		    <option value="3">Want to Read</option>
		  </select>
		</div>
	</div>

</template>

<script>
	export default {
		data(){
			return {
				isDropdownOpen: false
			}
		}
	}
</script>
<style>
	.dropdown {
		margin-bottom: 20px;
	}
</style>