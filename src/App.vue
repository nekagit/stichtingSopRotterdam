<script setup lang="ts">
import Stars from '@/components/ui/background/Stars.vue'
import MenuBar from '@/components/ui/menubar/CustomMenubar.vue'
import { RouterView } from 'vue-router'
</script>

<template>

    <data class="grid place-content-center h-screen m-auto">
      <RouterView />
      <MenuBar />
    </data>
    <Stars />
    
</template>
<nav>
  Baklava
  Pokusaj 123     
</nav>

<div>
  Probica       
</div>
<style scoped></style>
