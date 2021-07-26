<template>
  <div id="app">
    <router-view name="login"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },

  data(){
    return{
      page_username:''
    }
  },

  mounted() {

  }
}
</script>

<style>
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

</style>
