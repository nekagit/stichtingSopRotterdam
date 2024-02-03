<script setup lang="ts">
import FullAnimationCard from '@/components/ui/card/internet/FullAnimationCard.vue'
import MultipleCard from '@/components/ui/card/internet/MultipleCard.vue'
import { appView } from '@/interfaces/App'
import { useAppStateStore } from '@/stores/appState'
import { useCardStore } from '@/stores/card'
import { storeToRefs } from 'pinia'
const { activeCard } = useCardStore()
const { currentMode } = storeToRefs(useAppStateStore())
</script>
<template>
  <div v-if="currentMode == appView.List">
    <MultipleCard />
  </div>
  <div v-else>
    <FullAnimationCard v-bind="activeCard" />
  </div>
</template>
