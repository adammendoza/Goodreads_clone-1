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
      this.$store.dispatch('initBooks');
      this.$store.dispatch('initList');
    }
  }
</script>

<style>

body {
  padding-top: 30px;
}

</style>
