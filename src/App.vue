<template>
  <div class="container">
    <div class="logo">PRIMEREADS</div>
    <app-header></app-header>
    <div>
      <!-- <div class="col-xs-12"> -->
        <router-view></router-view>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  export default {
    components: {
      appHeader: Header
    },
    created() {

      //comment initBooks in store and comment dispatch action in App.vue. I don't have a boooks array to initate when I implement search API.

      // this.$store.dispatch('initBooks');
      this.$store.dispatch('initList');
    }
  }
</script>

<style>

body {
  background-image: url("assets/bookshelves.jpg");
  height: 2000px;
}
p {
  font-size: .8em;
}
.container {
  background-image: url("assets/dark-red-background.jpg");
  padding: 0px;
  height: 2000px;
}
.logo {
  font-family: 'Vast Shadow', cursive;
  font-size: 7vw;
  color: white;
  text-align: center;
}
</style>
