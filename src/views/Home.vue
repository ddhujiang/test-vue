<template>
  <div class="home">
    首页
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
        <template slot-scope="scope">
          <div>{{ scope.row.date.slice(0, 4) }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      tableData: []
    }
  },
  created() {
    // this.init()
    var reg=new RegExp("[^0-9]")
    var reg=/(h|H)ool/
    console.log(reg.test('hool'))


  },
  mounted() {},
  methods: {
    init() {
      // 接口请求
      let list = [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          age: '22'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          age: 23
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          age: 45
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          age: 23
        }
      ]

      this.tableData = list;
    }
  }
}
</script>
<style lang="less" scoped></style>
