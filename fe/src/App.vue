<template>
  <div id="app">
    <el-container >
      <el-aside
        width="200px"
      >
        <el-menu >
          <router-link to='/maintenModel'><el-menu-item index="1">模型维护</el-menu-item></router-link>
          <router-link to='/maintenData'><el-menu-item index="2">数据维护</el-menu-item></router-link>
        </el-menu>
      </el-aside>
      <el-container style="overflow: auto;">
       <el-header>
            <i class="el-icon-user"></i>
          <span>王小虎</span>
        </el-header>
        <!-- <el-main> -->
          <router-view />
        <!-- </el-main> -->
      </el-container>
    </el-container>
  </div>
</template>
<script>
// import Header from '@/components/header.vue'
export default {
  name: 'app',
  components: {
    // Header
  }
}
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

.el-container{
  height: 100%;
  background-color: #f0f2f5;
}
.el-aside,.el-menu {
  background-color: #001529 !important;
}
.el-menu{
  border: none !important;
}
.el-menu-item {
    color: white !important;
    }
.el-header {
  width: 100%;
  background-color: white;
  color: #333;
  line-height: 40px;
  height: 40px !important;
  font-size:14px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  /* z-index:2显示box-shadow */
  z-index: 2;
}
i{
  font-size: 16px;
  margin-right: 10px;
}
a{
  text-decoration: none;
}
.is-active{
    background-color: #1890ff !important;
}
</style>
