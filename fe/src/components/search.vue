<template>
   <el-card >
     <el-form :inline="true" label-width="100px">
      <el-form-item label="模型ID">
        <el-input v-model="searchVal" placeholder="模型ID"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchModel">查询</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      searchVal: ''
    }
  },

  methods: {
    searchModel () {
      this.$emit('searchModel', this.searchVal)
    }
  }
}
</script>

<style scoped>
  .el-input{
    width:160px;
    padding-left:10px;
    padding-right: 60px;
  }
  .el-form-item{
    margin-bottom: 0px !important;
  }
  .el-card{
    box-shadow: none !important;
  }

</style>
