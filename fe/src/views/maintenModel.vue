<template>
  <div class="container">
    <div class="title">模型维护</div>
    <div class="body">
       <ModelContainer/>
    </div>
  </div>
</template>

<script>
import ModelContainer from '@/components/modelContainer.vue'

export default {
  name: 'maitenModel',
  components: {
    ModelContainer
  }
}
</script>

<style scoped>
.title {
  font-size:20px;
  height:80px;
  line-height: 80px;
  background-color: white;
  padding:0 20px;
  font-weight:600
}
.body{
  margin: 20px;
}
</style>
