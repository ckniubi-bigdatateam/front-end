<template>
  <div>
    <el-row>
      <el-col :span="10" :offset="2" style="margin-top:40px">
        <el-table
    :data="tableData"
      border
      >
      <el-table-column
        prop="rank"
        label="排名"
        header-align="center"
        
      >
      </el-table-column>
      <el-table-column
        prop="word"
        label="单词"
        header-align="center"
        
      >
      </el-table-column>
      <el-table-column
        prop="lastupd"
        label="最后活跃"
        header-align="center"
        
      >
      </el-table-column>
      <el-table-column
        prop="num"
        label="最后五分钟词数"
        header-align="center"
        >
      </el-table-column>
      <el-table-column
        prop="chart"
        label="趋势"
        header-align="center"
        >
        <template slot-scope="scope">
          <vue-chart type="line" :data="scope.row.chart" :options="options" :width="1200" :height="50"></vue-chart>
        </template>
      </el-table-column>
    </el-table>
      </el-col>
      <el-col :span="10" :offset="1" >
        <el-table :data="content">
          <el-table-column
            prop="data">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      updateContent: function () {
        let self = this
        self.$http.get('/random')
          .then(res => {
            console.log(res)
            console.log(res.data)
            for (let i = 0; i < self.content.length; i++) {
              if (self.content[i].data === res.data) {
                self.content.splice(i, 1)
                break
              }
            }
            if (self.content.length >= 10) {
              self.content.pop()
            }
            self.content.unshift({
              data: res.data
            })
            setTimeout(function () {
              self.updateContent()
            }, 500)
          })
          .catch(err => {
            console.log(err)
          })
      },
      updateGet: function () {
        let self = this
        self.$http.get('/thelist.json')
          .then(res => {
            // console.log('in http get', this.tableData)
            // this.tableData = res.data
            // console.log(res.data)
            // console.log(res.data[0])
            // console.log(this.tableData.length)
            console.log('in update Get')
            console.log(res.data.tableData)
            // self.tableData = res.data.tableData
            while (self.tableData.length > 0) {
              self.tableData.pop()
            }
            for (let i = 0; i < res.data.tableData.length; i++) {
              self.tableData.push(res.data.tableData[i])
            }
            /* while (self.tableData.length > 0) {
              self.tableData.pop()
            }
            for (let i = 0; i < res.data.length; i++) {
              console.log('in for')
              self.tableData.push(res.data[i])
            } */
            setTimeout(function () {
              // self.updateGet()
              location.reload()
            }, 30000)
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    created: function () {
      this.updateGet()
      this.updateContent()
    },
    data: function () {
      return {
        content: [
          /* { data: 'You know nothing John Snow!' },
          { data: 'Php is the best language in the World!' },
          { data: 'Supporting both an indented syntax and regular CSS style.' },
          { data: 'Installing Stylus is very easy once you have Node.js.' },
          { data: 'Learn how to install the Stylus CSS pre-processor and compile our .styl Stylus files to CSS. ' },
          { data: 'You can install from source or you can simply use NPM: $ npm install stylus.' },
          { data: 'Prerequisites This libraries assumes you have a couple of things in place already for stylus to work' },
          { data: 'Easily install custom themes from popular online repositories, or create, edit, and manage your own personalized CSS stylesheets.' },
          { data: 'Heroes never die!' },
          { data: 'Winner Winner, chicken Dinner' } */
        ],
        tableData: [],
        chartExtend: {
          yAxis: {
            show: false
          },
          xAxis: {
            show: false
          }
        },
        markline: {
          silent: true
        },
        chartData: {
          labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5', 'Item 5'],
          datasets: [
            {
              label: 'Component 1',
              data: [1, 2, 3, 5, 7, 6, 1, 3, 4, 5],
              fill: false
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          elements: {
            point: {
              radius: 0
            }
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              ticks: {
                display: false
              },
              gridLines: {
                drawBorder: false,
                display: false
              }
            }],
            yAxes: [{
              ticks: {
                display: false
              },
              gridLines: {
                drawBorder: false,
                display: false
              }
            }]
          }
        }
      }
    }
  }
</script>

<style>

</style>
