<template>
  <div id="right_video">
    <img id="image" src="http://127.0.0.1:8000/video"/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "user_view_page",
  data() {
    return {}
  },
  methods: {

  },

  mounted() {
    console.log("1111")
    axios.get('http://127.0.0.1:8000/video').then();
  }
}
</script>

<style scoped>

#right_video {
  position: absolute;
  left: 150px;
  top: 180px;
  width: 200px;
  height: 764px;
}
</style>