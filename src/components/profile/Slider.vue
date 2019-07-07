<template>
	<div class="wrapper ">
	  <div class="toggle_radio">
	    <input type="radio" class="toggle_option" id="first_toggle" value="first_toggle" name="toggle_option" v-model="currentView">
	    <input type="radio" checked class="toggle_option" id="second_toggle" value="second_toggle" name="toggle_option" v-model="currentView">
	    <input type="radio" class="toggle_option" id="third_toggle" value="third_toggle" name="toggle_option" v-model="currentView">
	    <label for="first_toggle"><h3>Read</h3></label>
	    <label for="second_toggle"><h3>Reading</h3></label>
	    <label for="third_toggle"><h3>Want to Read</h3></label>
	    <div class="toggle_option_slider">
	    </div>
	  </div>

  	<div>
  		<component :is="currentView"></component>
  	</div>

	</div>
</template>

<script>
	import Read from './Read.vue'
	import Reading from './Reading.vue'
	import WantToRead from './Want_To_Read.vue'

	export default {
		data(){
			return {
				currentView: 'first_toggle'
			};
		},
		components: {
			first_toggle: Read,
			second_toggle: Reading,
			third_toggle: WantToRead
		}
	}
</script>

<style scoped>

@import url(http://fonts.googleapis.com/css?family=Source+Sans+Pro);

div.row { text-align: center; }
div.row > div.wrapper { margin: 0 auto; width: 1110px; }

*{
  margin:0px;
  padding:0px;
}

div.wrapper {
  margin: 50px 0;
}

.toggle_radio{
  position: relative;
  background: #497dd0;   
  margin: 4px auto;
  margin-top: 20px;
  margin-bottom: 40px;
  overflow: hidden;
  padding: 0 !important;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  position: relative;
  height: 36px;
  width: 488px;
}
.toggle_radio > * {
  float: left;
}
.toggle_radio input[type=radio]{
  display: none;
}
.toggle_radio label{
  font: 90%/1.618 "Source Sans Pro";
  color: rgba(255,255,255,.9);
  z-index: 0;
  display: block;
  width: 150px;
  height: 20px;
  margin: 3px 3px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  cursor: pointer;
  z-index: 1;
  text-align: center;
}
.toggle_option_slider{
  width: 150px;
  height: 30px;
  position: absolute;
  top: 3px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  -webkit-transition: all .4s ease;
  -moz-transition: all .4s ease;
  -o-transition: all .4s ease;
  -ms-transition: all .4s ease;
  transition: all .4s ease;
}

#first_toggle:checked ~ .toggle_option_slider{
  background: rgba(255,255,255,.3);
  left: 3px;
}
#second_toggle:checked ~ .toggle_option_slider{
  background: rgba(255,255,255,.3);
  left: 154px;
}
#third_toggle:checked ~ .toggle_option_slider{
  background: rgba(255,255,255,.3);
  left: 315px;
}
</style>
