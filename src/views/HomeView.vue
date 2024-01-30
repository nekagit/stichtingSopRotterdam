<script setup lang="ts">
import FullAnimationCard from '@/components/ui/card/internet/FullAnimationCard.vue'
import MultipleCard from '@/components/ui/card/internet/MultipleCard.vue'
import type { IMainCard } from '@/interfaces/App'
import CardData from '@/stores/cardData.json'
const allCards = CardData.allCards
const homeCard: IMainCard = allCards[0]
</script>

<template>
  <MultipleCard :allCards="allCards" />
  <FullAnimationCard v-bind="homeCard" />
</template>
