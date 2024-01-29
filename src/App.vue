<script setup lang="ts">
import { type Component } from 'vue'
import { RouterView } from 'vue-router'
import CustomMenubar from '../src/components/ui/menubar/CustomMenubar.vue'
export interface ICustomCard {
  title: string
  description: string
  sectionHeaders: ISectionHeader[]
  cardPic: string
  color: string
}
export interface ISectionHeader {
  title: string
  description: string
  img?: string
  childComponent?: Component
}
</script>

<template>
  <div
    class="h-screen flex flex-col justify-between"
    style="background-color:rgba(0, 0, 0, 0.805); font-family: NM, sans-serif"
  >
    <data class="grid place-content-center h-full m-auto">
      <RouterView />
    </data>
    <!-- <CustomMenubar /> -->
  </div>
</template>
<style scoped>
</style>
