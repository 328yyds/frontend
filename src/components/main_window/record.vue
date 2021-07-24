<template>
  <div id="background_div">
      <div id="right_record_show">

      </div>
  </div>
</template>

<script>
export default {
  name: "admin_record",
  data() {
    return{

    }
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
#background_div {
  padding: 0;
  margin: 0;
}


</style>