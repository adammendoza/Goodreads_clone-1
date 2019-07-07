<template>
  <div class="container">
    <div class="logo">PRIMEREADS</div>
    <app-header></app-header>
    <div>
      <router-view></router-view>
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
