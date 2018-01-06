<template>
<!-- <div class="btn-group" data-toggle="buttons">
    <label class="btn btn-primary">
        <input type="radio" name="options" id="On" />ON</label>
    <label class="btn btn-primary">
        <input type="radio" name="options" id="NA" />N/A</label>
    <label class="btn btn-primary">
        <input type="radio" name="options" id="Off" />OFF</label>
</div> -->

	<div class="wrapper">
	  <div class="toggle_radio">
	    <input type="radio" class="toggle_option" id="first_toggle" value="first_toggle" name="toggle_option" v-model="picked">
	    <input type="radio" checked class="toggle_option" id="second_toggle" value="second_toggle" name="toggle_option" v-model="picked">
	    <input type="radio" class="toggle_option" id="third_toggle" value="third_toggle" name="toggle_option" v-model="picked">
	    <label for="first_toggle"><p>First Button</p></label>
	    <label for="second_toggle"><p>Second Button</p></label>
	    <label for="third_toggle"><p>Third Button</p></label>
	    <div class="toggle_option_slider">
	    <span>Picked: {{ picked }} </span>
	    </div>
	  </div>

  	<component :is="currentView"></component>

<!-- 	  <app-read v-show="picked.first_toggle"></app-read>
		<app-reading v-show="picked.second_toggle"></app-reading>
		<app-want-to-read v-show="picked.third_toggle"></app-want-to-read> -->

	</div>
</template>

<script>
	import Read from './Read.vue'
	import Reading from './Reading.vue'
	import WantToRead from './Want_To_Read.vue'

	export default {
		data(){
			return {
				picked: [],
				currentView: ''
			};
		},
		components: {
			first_toggle: Read,
			second_toggle: Reading,
			third_toggle: WantToRead
		}
	}
</script>


