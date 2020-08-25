<template>
  <div class="model-container">
    <!-- <Search style="margin-bottom:20px"/> -->
    <el-form
      :model="modelForm"
      :rules="rules"
      ref="modelForm"
      label-width="100px"
      class="modelForm"
    >
      <el-card>
        <div
          slot="header"
          class="clearfix"
        >
          <span>基本信息</span>
        </div>
        <el-form-item
          prop="name"
          label="模型名称"
          required
        >
          <el-input
            v-model="modelForm.name"
            style="width:160px"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="id"
          label="模型ID"
          required
        >
          <el-input
            v-model="modelForm.id"
            style="width:160px"
          ></el-input>
        </el-form-item>
      </el-card>
      <el-card class="fileds">
        <div
          slot="header"
          class="clearfix"
        >
          <span>字段列表</span>
        </div>
        <!-- <el-form-item> -->
        <el-table
          :data="modelForm.datas"
          style="width: 100%"
        >
          <el-table-column
            label="名称"
            width="180"
          >
            <template slot="header">
              <span
                class="table-header-star"
                style="color: #F56C6C;margin-right: 4px;"
              >*</span>
              <span class="table-header-content">名称</span>
            </template>
            <template slot-scope="scope">
              <el-form-item
                :prop="'datas.' + scope.$index + '.name'"
                :rules="rules.name"
                label-width="0"
              >
                <el-input
                  v-model="scope.row.name "
                  style="width:100%"
                  placeholder="名称"
                />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            label="类型"
            width="180"
          >
            <template slot-scope="scope">
              <el-select
                v-model="scope.row.type"
                placeholder="类型"
              >
                <el-option
                  v-for="option in options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                >
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            label="描述"
            width="300"
          >
            <template slot-scope="scope">
              <el-input
                v-model="scope.row.desc "
                style="width:100%"
                placeholder="描述"
              />
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <div style="display:flex">
                <el-button
                  size="mini"
                  type="text"
                  @click="removeField(scope.row)"
                >删除</el-button>
                <el-button
                  size="mini"
                  type="text"
                  v-if="scope.row.type==='list'"
                  style="padding-left:5px;"
                  @click="maintenList(scope.row)"
                >List配置</el-button>
              </div>

            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top:20px;margin-left:10px">
          <el-button
            @click="addField"
            style="width:100%;box-sizing:border-box;"
          >+新增字段</el-button>
        </div>
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
</template>

<script>
// import Search from './search'
export default {
  data () {
    return {
      modelForm: {
        name: '',
        id: '',
        datas: [{
          name: '',
          type: '',
          key: '1',
          desc: '',
          extra: ''// 类型为list时添加信息
        }]
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        id: [
          { required: true, message: '请输入id' },
          { min: 3, max: 5, message: '长度在 2 到 3 个字符', trigger: 'blur' }
        ]
      },
      typeValue: '',
      options: [{
        value: 'string',
        label: 'string'
      }, {
        value: 'number',
        label: 'number'
      },
      {
        value: 'list',
        label: 'list'
      }]
    }
  },
  components: {
    // Search
  },
  methods: {
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
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    removeField (item) {
      var index = this.modelForm.datas.indexOf(item)
      if (index !== -1) {
        this.modelForm.datas.splice(index, 1)
      }
    },
    addField () {
      this.modelForm.datas.push({
        name: '',
        type: '',
        key: Math.random()
      })
    },
    maintenList () {
      console.log('配置list')
    }
  }
}
</script>

<style scoped>
.el-input {
  width: 200px;
}
.prefix {
  color: #606266;
  padding: 0 10px;
}
.el-card {
  box-shadow: none !important;
  border: none !important;
}
.el-card .clearfix {
  font-weight: 500;
}
/* .el-form-item__content{
  line-height: 0px !important;
}
.fields .el-card__body{
  padding-top:0px !important;
} */
.cell .el-form-item {
  margin: 20px 0;
}
td {
  padding: 4px 0 !important;
}
</style>
