<template>
  <div id="app">
    <img @click="getMouseXY($event)" style="width: 1000px; height: 1000px;background-color: #2c3e50"
    src="https://ccdn.goodq.top/caches/7f329f8f10cb197f5898117ce0e2e793/aHR0cHM6Ly81ZTA0N2M3YjQwNTJiLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMTIvNTg1NThhZDc4OWJhYjYzNzgxYjUxNjkzYTYyMDBhMmUtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp">
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return{
      x: '',
      y: ''
    }
  },
  methods: {
    // 当鼠标点击时触发，类似onclick事件
    getMouseXY(event) {
      //获取相对于当前所指向对象的位置坐标
      console.log(event.x)
    }
  }
}
</script>

<style scoped>
#rect {
  background-color: #2D9015;
  width: 200px;
  height: 100px;
  margin: 100px 0 0 50px;
  color: white;
  text-align: center;
  line-height: 50px;
}
</style>