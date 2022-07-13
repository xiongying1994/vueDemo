<template>
  <div style="width: 100%;height: 100%">
    <div> 测试</div>
    <div ref="echarts" id="echarts" class="echarts"></div>
  </div>
</template>

<script>
  import api from './api.js'
  export default {
        name: "lesMiserables",
      data () {
        return {
          echartsData: []
        }
      },
      mounted () {
          this.getEchartsData()
      },
      methods: {
        getEchartsData () {
          this.echartsData = api.getData(3)
          this.$nextTick(() => {
            // api.echartsPaint(document.getElementById('echarts'), this.echartsData)
            api.echartsPaint(this.$refs.echarts, this.echartsData)
          })
        }
      }
    }
</script>

<style scoped>

  #echarts {
    /*padding: 5px;*/
    margin: auto;
    border: 2px solid rebeccapurple;
    width: 1500px;
    height: 1500px;
  }

</style>
