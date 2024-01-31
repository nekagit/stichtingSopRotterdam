<script setup lang="ts">
import ParticlesBackground from '@/components/ui/background/ParticlesBackground.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <data class="grid place-content-center h-screen m-auto">
    <RouterView />
    <ParticlesBackground />
  </data>
</template>
<style scoped></style>
