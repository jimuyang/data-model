<template>
  <div class="container">
    <div class="title">数据维护</div>
    <div class="body">
       <DataContainer/>
    </div>
  </div>
</template>

<script>
import DataContainer from '@/components/dataContainer.vue'

export default {
  name: 'maitenData',
  components: {
    DataContainer
  }
}
</script>

<style scoped>
.body{
  margin: 20px;
}
</style>
