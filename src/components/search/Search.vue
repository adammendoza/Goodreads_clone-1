<template>
	<div>
		<app-card v-for="book in books"></app-card>
	</div>
</template>

<script>
	import Card from '../card/Card.vue'
	export default {
		data(){
			return{
				books:[
					{ ISBN: '0385351399', title: 'The Circle', author: 'Dave Eggers' },
					{ ISBN: '1594204233', title: 'Bleeding Edge', author: 'Thomas Pynchon' },
					{ ISBN: '0374158460', title: 'Freedom', author: 'Jonathan Franzen' },
					{ ISBN: '1594480001', title: 'The Kite Runner', author: 'Khaled Hosseini' },
					{ ISBN: '0316921173', title: 'Infinite Jest', author: 'David Foster Wallace' },
				]
			}
		},
		components: {
			appCard: Card
		}
	}
</script>