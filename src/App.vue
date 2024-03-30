<script setup lang="ts">
import HospitalTitle from '@/components/HospitalTitle.vue'
import HospitalFooter from '@/components/HospitalFooter.vue'

</script>

<template>
    <section class="main-title">
      <HospitalTitle />
    </section>
    <section class="main-container">
      <router-view />
    </section>
    <section class="main-footer">
      <HospitalFooter />
    </section>
</template>

<style scoped lang="scss">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  .main-title {
    height: 70px;
  }

  .main-container {
    min-height: calc(100% - 120px);
  }
  
  .main-footer {
    height: 50px;
  }
}
</style>
