<template>
  <div id="right_page">
    <div id="lineReport"></div>
    <div id="pieReport"></div>
    <div id="text_line">入侵数据——折线图</div>
    <div id="text_pie">入侵数据——饼状图</div>
  </div>
</template>

<script>
// 引入基本模板

import axios from 'axios'

let axios_instance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  timeout: 5000
})

let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: "",
  data() {
    return {
      charts: "",
      opinion: ["陌生人入侵", "非陌生人入侵"],
      opinionData_line_all: [],
      opinionData_line_stranger: [],
      opinionData_line_not_stranger: [],
      opinionData: [
        { value: 12, name: "陌生人入侵", itemStyle: "#ea6f6a" },
        { value: 18, name: "非陌生人入侵", itemStyle: "#dc3c37" }
      ],

      date: []  // 日期
    };
  },
  mounted () {
    axios_instance.post('/invade_info').then((response)=>{
      let strange = 0, normal = 0;
      for(let i = 0; i < 7; i++){
        this.date.push(response.data[i][0])
        this.opinionData_line_all.push(response.data[i][1])
        this.opinionData_line_stranger.push(response.data[i][2])
        this.opinionData_line_not_stranger.push(response.data[i][3])
        strange += response.data[i][2]
        normal += response.data[i][3]
      }
      this.opinionData[0].value = strange
      this.opinionData[1].value = normal
      this.$nextTick(function() {
        this.drawLine('lineReport')
        this.drawPie("pieReport");
      });// 延迟调用
    })
  },
  methods: {
    //折线图
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['近七日入侵数量','陌生人入侵数量','非陌生人入侵数量']
        },
        grid: {
          left: '5%',
          right: '8%',
          bottom: '8%',
          containLabel: true
        },

        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ["7.21","7.22","7.23","7.24","7.25","7.26","7.27"]

        },
        yAxis: {
          type: 'value'
        },

        series: [
          {
            name: '近七日入侵数量',
            type: 'line',
            stack: '总量',
            data: this.opinionData_line_all},
          {
            name: '陌生人入侵数量',
            type: 'line',
            stack: '陌生人',
            data: this.opinionData_line_stranger},
          {
            name: '非陌生人入侵数量',
            type: 'line',
            stack: '非陌生人',
            data: this.opinionData_line_not_stranger}]
      })
    },
    // 绘制饼图
    drawPie(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/>{b}:{c} ({d}%)"
        },
        legend: {
          bottom: 35,
          left: "center",
          data: this.opinion,
        },
        series: [
          {
            name: "入侵类别",
            type: "pie",
            radius: "60%",
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
              color: function(params) {
                //自定义颜色
                var colorList = ["#ea6f6a", "#dc3c37"];
                return colorList[params.dataIndex];
              }
            },
            data: this.opinionData
          }
        ]
      });
    },
  }
}
</script>

<style scoped>
#right_page {
  position: absolute;
  left: 12%;
  top: 100px;
  width: 100%;
  height: 664px;
}

#pieReport{
  position: absolute;
  top: 0;
  left: 50%;
  width: 500px;
  height: 500px;
}

#lineReport{
  position: absolute;
  top:0;
  left: 8%;
  width: 600px;
  height: 500px;
}

#text_line{
  position: absolute;
  left: 20%;
  top: 500px;
  font-size: 18px;
}

#text_pie{
  position: absolute;
  left: 60%;
  top: 500px;
  font-size: 18px;
}

</style>