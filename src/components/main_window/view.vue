<template>
  <div id="right_video">
    <img id="img" src="http://127.0.0.1:8000/video">
  </div>
</template>

<script>

export default {
  name: "admin_view_page",
  data() {
    return {
      src:""
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
}
</script>

<style scoped>

#img{
  width: 800px;
  height: 600px;
}


#right_video {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  top: 120px;
}
</style>