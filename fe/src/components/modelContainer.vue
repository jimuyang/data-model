<template>
  <div class="modelContainer">
    <el-form
      :model="modelForm"
      ref="modelForm"
      label-width="100px"
      class="modelForm"
    >
      <el-form-item
        prop="name"
        label="模型名称"
      >
        <el-input v-model="modelForm.name"></el-input>
      </el-form-item>
      <el-form-item
        prop="id"
        label="模型ID"
      >
        <el-input v-model="modelForm.id"></el-input>
      </el-form-item>
      <h3>字段列表</h3>
      <el-form-item
        v-for="(item, index) in modelForm.datas"
        :key="item.key"
        :prop="'datas.' + index + '.name'"
      >
        <el-input v-model="item.name"><template slot="prepend">名称</template></el-input>
        <el-select
          v-model="item.type"
          placeholder="请选择"
        >

        <template slot="prefix">类型</template>
          <el-option
            v-for="option in options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          >
          </el-option>

        </el-select>
        <el-input v-model="item.desc"><template slot="prepend">说明</template></el-input>
        <!-- <el-button @click.prevent="removeField(domain)">删除</el-button> -->
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('modelForm')"
        >提交</el-button>
        <el-button @click="addField">新增field</el-button>
        <el-button @click="resetForm('modelForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modelForm: {
        name: '',
        id: '',
        datas: [{
          name: '',
          type: '',
          key: 1,
          desc: ''
        }]
      },
      typeValue: '',
      options: [{
        value: 'string',
        label: 'string'
      }, {
        value: 'number',
        label: 'number'
      }]
    }
  },
  methods: {
    submitForm (formName) {
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      // alert('submit!')
      // const data = {
      //   name: this.modelForm.name,
      //   id: this.modelForm.id,
      //   datas: this.modelForm.datas
      // }
      const data = this.modelForm
      console.log('submit', data)
      this.$http({
        method: 'post',
        url: 'http://192.168.31.136:8080/model',
        data
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-input {
  width: 200px;
}
</style>
