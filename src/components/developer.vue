<template>
  <div>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-form ref="form" :model="form" label-width="80px" :inline="true">
          <el-form-item label="search">
            <el-input v-model="form.word"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">搜索</el-button>
            <el-button @click="onClear">清空</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18" :offset="3">
        <data-grid :data="dataset"></data-grid>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
import dataGrid from '@/components/datagrid'
export default {
  data: function () {
    return {
      form: {
        word: ''
      },
      dataset: []
    }
  },
  components: {
    dataGrid
  },
  methods: {
    onClear: function () {
      this.dataset = []
    },
    onSubmit: function () {
      console.log('in OnSubmit', this.form.word)
      if (this.form.word === '') {
        return
      }
      // let key = this.form.word
      console.log(this.$http)
      console.log('/query?name=' + this.form.word)
      let dataset = this.dataset
      this.$http.get('/query?name=' + this.form.word)
        .then(res => {
          console.log(res)
          dataset.unshift(res.data)
        }).catch(err => {
          console.log(err)
        })
      /* let o = {
        key: key,
        po: 0.0,
        lastupd: 0.0,
        pj: 0.0,
        n: 0.0,
        pg: 0.0,
        pb: 0.0
      }
      this.dataset.push(o) */
    }
  }
}
</script>

<style>

</style>

