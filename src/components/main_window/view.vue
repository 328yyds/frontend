<template>
  <div id="right_video">
  </div>
</template>

<script>
export default {
  name: "admin_view_page",
  data() {
    return {}
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

#right_video {

}
</style>