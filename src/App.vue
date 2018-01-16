<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
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
  padding-top: 30px;
}
p {
  font-size: .8em;
}
</style>
