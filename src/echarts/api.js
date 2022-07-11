import * as echarts from 'echarts'

export default {
  echartsPaint: (dom, graph) => {
    echarts.dispose(dom)
    var myChart = echarts.init(dom)
    myChart.setOption(
      {
        tooltip: {},
        legend: [
          {
            data: graph.categories.map(function (a) {
              return a.name;
            })
          }
        ],
        series: [
          {
            name: 'Les Miserables',
            type: 'graph',
            // 图的布局 'none' 不采用任何布局，使用节点中提供的 x， y 作为节点的位置，'circular' 采用环形布局;'force' 采用力引导布局.
            layout: 'none',
            // 节点数据
            data: graph.nodes,
            // 节点关系
            links: graph.links,
            // 节点组
            categories: graph.categories,
            roam: true,
            // 箭头属性 ‘circle’(圆形), ‘rect’（矩形）, ‘roundRect’（圆角矩形）, ‘triangle’（三角形）, ‘diamond’（菱形）, ‘pin’（大头针）, ‘arrow’（箭头）‘none’ （无）
            edgeSymbol: ['none', 'arrow'],
            edgeSymbolSize: [10, 10],
            // 节点焦点显示
            label: {
              show: true,
              position: 'right',
              formatter: '{b}'
            },
            labelLayout: {
              hideOverlap: true
            },
            scaleLimit: {
              min: 0.4,
              max: 2
            },
            lineStyle: {
              color: 'source',
              curveness: 0.3
            }
          }
        ]
      })
    // echarts图位置大小适应全局
    window.addEventListener('resize', function () {
      myChart.resize()
    })

    // 节点点击事件
    mychart.on('click',function(params) {
      let self = this;
      self.nodeIdx = params.dataIndex;
      if(params.dataType === 'node') {  // 点击节点
        // 点击节点，改变节点名称，节点名称不能相同
        series[0].data[self.nodeIdx].name = parseInt(Math.random()*200);
      }else if (params.dataType === 'edge') {   // 点击连接线
        if (series[0].links[self.nodeIdx].lineStyle.opacity === 0.3)
          series[0].links[self.nodeIdx].lineStyle.opacity = 1;
        else {
          series[0].links[self.nodeIdx].lineStyle.opacity = 0.3;
        }
      }
      self.chart.option = {
        series: series
      };
      self.chart.target.setOption(self.chart.option);
    })
}
}
