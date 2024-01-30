<script setup lang="ts">
import { type Component } from 'vue'
import { RouterView } from 'vue-router'
export interface ICustomCard {
  title: string
  description: string
  sectionHeaders: ISectionHeader[]
  cardPic: string
  color: string
}
export interface IMainCard {
  title: string
  description?: string
  sectionHeaders?: ISectionHeader[]
  cardPic?: string
  color?: string
  path?: string
}

export interface ISectionHeader {
  title: string
  description: string
  img?: string
  childComponent?: Component
}
</script>

<template>
  <RouterView />
</template>
<style scoped>
body {
  overflow: hidden;
  margin: 0;
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
}
</style>
