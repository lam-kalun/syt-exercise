<script setup lang="ts">
import HospitalTitle from '@/components/HospitalTitle.vue'
import HospitalFooter from '@/components/HospitalFooter.vue'

</script>

<template>
  <div class="container">
    <HospitalTitle /> 
    <router-view />
    <HospitalFooter />
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
}
</style>
