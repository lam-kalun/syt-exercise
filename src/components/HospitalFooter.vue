<template>
  <div class="hospital-footer">
    <section></section>
    <section></section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
defineOptions({
  name: 'HospitalFooter'
})
</script>

<style lang="scss" scoped>
.hospital-footer {
  padding: 0 59px;
  background-color: #f0f2f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>