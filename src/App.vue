<script setup lang="ts">
import Stars from '@/components/ui/background/Stars.vue'
import MenuBar from '@/components/ui/menubar/CustomMenubar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="grid h-screen m-auto main">
    <RouterView />
    <MenuBar />
    <JumboTron />
  </main>
  <Stars />
</template>
<style scoped>
.main {
  /* background-image: url('../src/assets/as.png'); */
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: top left;
  /* background-image: url('../src/assets/logoo.png'); */
}
</style>
