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
.body{
  margin: 20px;
}
</style>
