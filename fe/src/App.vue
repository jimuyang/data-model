<template>
  <div id="app">
    <el-container >
      <el-aside
        width="200px"
        style="background-color: rgb(238, 241, 246)"
      >
        <el-menu >
          <router-link to='/maintenModel'><el-menu-item index="1">模型维护</el-menu-item></router-link>
          <router-link to='/maintenData'><el-menu-item index="2">数据维护</el-menu-item></router-link>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i
              class="el-icon-setting"
              style="margin-right: 15px"
            ></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        <el-main>
           <router-view/>
        </el-main>
      </el-container>
    </el-container>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

  </div>
</template>
<script>
// export default {
//   created () {
//     // axios.post('http://192.168.31.136:8080/model', {
//     //   firstName: 'Fred',
//     //   lastName: 'Flintstone'
//     // })
//     //   .then(function (response) {
//     //     console.log('success', response)
//     //   })
//     //   .catch(function (error) {
//     //     console.log('err', error)
//     //   })

//     this.$http({
//       method: 'post',
//       url: 'http://192.168.31.136:8080/model',
//       data: {
//         firstName: 'Fred',
//         lastName: 'Flintstone'
//       }
//     })
//   }
// }
</script>

<style>
html,body{
  height: 100%;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-container{
  height: 100%;
}
.el-aside,.el-menu {
  background-color: #001529 !important;
}
.el-menu{
  border: none !important;
}
.el-menu-item {
    color: white !important;}

</style>
