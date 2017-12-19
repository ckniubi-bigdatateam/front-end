<template>
  <el-table
    :data="data"
      border
      >
      <el-table-column
        prop="key"
        label="key"
        header-align="center"
      >
      </el-table-column>
      <el-table-column
        prop="po"
        label="po"
        header-align="center"
      >
      </el-table-column>
      <el-table-column
        prop="lastupd"
        label="lastupd"
        header-align="center"
      >
      </el-table-column>
      <el-table-column
        prop="pj"
        label="pj"
        header-align="center">
      </el-table-column>
      <el-table-column
        prop="n"
        label="n"
        header-align="center">
      </el-table-column>
      <el-table-column
        prop="pg"
        label="pg"
        header-align="center">
      </el-table-column>
      <el-table-column
        prop="pb"
        label="pb"
        header-align="center">
      </el-table-column>
    </el-table>
</template>

<script>
  export default {
    props: {
      data: Array
    },
    created () {
      this.$options.tableData = this.$options.data
    },
    data: function () {
      return {
        tableData: []
      }
    }
  }
</script>

<style>

</style>
