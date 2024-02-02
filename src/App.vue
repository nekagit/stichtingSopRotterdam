<script setup lang="ts">
import Stars from '@/components/ui/background/Stars.vue'
import { RouterView } from 'vue-router'

</script>

<template>
  <data class="grid place-content-center h-screen m-auto">
    <RouterView />
  </data>
  <Stars />
</template>
<style scoped></style>
