<template>
  <div class="data-container">
    <Search style="margin-bottom:20px" @searchModel="searchModel"/>
      <el-card v-if="!haveDatas">暂时查询不到该模型</el-card>
      <!-- <div v-if="haveDatas"> -->
        <el-form :model="dataForm"
        v-if="haveDatas"
          ref="dataForm"
          label-width="100px"
          class="dataForm">
          <el-card>
            <el-form-item
              label="模型名称 :"
            >{{dataForm.name}}
            </el-form-item>
            <el-form-item
              label="模型ID :"
            >{{dataForm.id}}
            </el-form-item>
            <el-form-item
              label="创建者 :"
            >{{dataForm.creator}}
            </el-form-item>
            </el-card>
            <el-card class="fileds">
            <div slot="header" class="clearfix">
              <span>字段列表</span>
          </div>
          <!-- <el-form-item> -->
            <el-table
          :data="dataForm.datas"
          style="width: 100%">
          <el-table-column
            label="名称"
            width="180">
            <template slot-scope="scope">
              {{scope.row.name}}
            </template>
          </el-table-column>
          <el-table-column
            label="类型"
            width="180">
            <template slot-scope="scope">
                {{scope.row.type}}
            </template>
          </el-table-column>
          <el-table-column
            label="描述"
            width="300">
            <template slot-scope="scope">
              {{scope.row.desc}}
            </template>
          </el-table-column>
          <el-table-column
          label="填写数据">
            <template slot-scope="scope">
              <el-input v-model="scope.row.data " style="width:100%" placeholder="数据" />
            </template>
          </el-table-column>
        </el-table>
         <div style="margin-top:20px;margin-left:10px"><el-button @click="addField"  style="width:100%;box-sizing:border-box;">+新增字段</el-button></div>
        <!-- </el-form-item> -->
      </el-card>
      <el-card style="display:flex;justify-content:flex-end">
        <el-button
          type="primary"
          @click="submitForm('modelForm')"
        >提交</el-button>
      </el-card>
        </el-form>
      </div>
  <!-- </div> -->
</template>

<script>
import Search from '@/components/search.vue'
export default {
  data () {
    return {
      dataForm: {}
    }
  },
  components: {
    Search
  },
  computed: {
    haveDatas () {
      return Object.keys(this.dataForm).length > 0
    }
  },
  methods: {
    searchModel (val) {
      console.log('查询', val)
      this.dataForm = {
        name: 'POI',
        id: '1234567',
        creator: 'Jimu',
        datas: [{
          name: '城市',
          type: 'string',
          desc: '请具体到省市区',
          data: ''
        },
        {
          name: '时间',
          type: 'number',
          desc: '请按照20200920类型',
          data: ''
        },
        {
          name: '服务',
          type: 'list',
          desc: '该城市有哪些服务',
          data: ''
        },
        {
          name: '服务',
          type: 'list',
          desc: '该城市有哪些服务',
          data: ''
        }]
      }
    },
    addField () {
      this.modelForm.datas.push({
        name: '',
        type: '',
        key: Math.random()
      })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const data = {
            name: this.modelForm.name,
            id: this.modelForm.id,
            datas: this.modelForm.datas
          }
          // const data = this.modelForm
          console.log('submit', data)
          // this.$http({
          //   method: 'post',
          //   url: 'http://192.168.31.136:8080/model',
          //   data
        }
      })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    }
  }
}
</script>

<style scoped>
.el-card{
  box-shadow: none !important;
  border:none !important
}
.el-form-item {
    margin-bottom: 0 !important;
}
</style>
