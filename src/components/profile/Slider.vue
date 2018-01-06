<template>
<!-- <div class="btn-group" data-toggle="buttons">
    <label class="btn btn-primary">
        <input type="radio" name="options" id="On" />ON</label>
    <label class="btn btn-primary">
        <input type="radio" name="options" id="NA" />N/A</label>
    <label class="btn btn-primary">
        <input type="radio" name="options" id="Off" />OFF</label>
</div> -->

	<div class="wrapper ">
	  <div class="toggle_radio">
	    <input type="radio" class="toggle_option" id="first_toggle" value="first_toggle" name="toggle_option" v-model="currentView">
	    <input type="radio" checked class="toggle_option" id="second_toggle" value="second_toggle" name="toggle_option" v-model="currentView">
	    <input type="radio" class="toggle_option" id="third_toggle" value="third_toggle" name="toggle_option" v-model="currentView">
	    <label for="first_toggle"><p>Read</p></label>
	    <label for="second_toggle"><p>Reading</p></label>
	    <label for="third_toggle"><p>Want to Read</p></label>
	    <div class="toggle_option_slider">
<!-- 	    <span>Picked: {{ picked }} </span>
 -->	    </div>
	  </div>

  	
  	<div>
  		<component :is="currentView"></component>
  	</div>
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
				// picked: [],
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

/*html{
  background-color: #497dd0;
}*/

div.wrapper {
  margin: 100px 0;
/*  background-color: #497dd0;*/
}

.toggle_radio{
  position: relative;
  background: #497dd0;   /*rgba(255,255,255,.1)*/
  margin: 4px auto;
  margin-top: 20px;
  margin-bottom: 40px;
  overflow: hidden;
  padding: 0 !important;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  position: relative;
  height: 26px;
  width: 318px;
}
.toggle_radio > * {
  float: left;
}
.toggle_radio input[type=radio]{
  display: none;
  /*position: fixed;*/
}
.toggle_radio label{
  font: 90%/1.618 "Source Sans Pro";
  color: rgba(255,255,255,.9);
  z-index: 0;
  display: block;
  width: 100px;
  height: 20px;
  margin: 3px 3px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  cursor: pointer;
  z-index: 1;
  /*background: rgba(0,0,0,.1);*/
  text-align: center;
  /*margin: 0 2px;*/
  /*background: blue;*/ /*make it blue*/
}
.toggle_option_slider{
  /*display: none;*/
  /*background: red;*/
  width: 100px;
  height: 20px;
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
  left: 109px;
}
#third_toggle:checked ~ .toggle_option_slider{
  background: rgba(255,255,255,.3);
  left: 215px;
}
</style>
