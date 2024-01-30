<script setup lang="ts">
import FullAnimationCard from '@/components/ui/card/internet/FullAnimationCard.vue'
import MultipleCard from '@/components/ui/card/internet/MultipleCard.vue'
import type { IMainCard } from '@/interfaces/App'
import CardData from '@/stores/cardData.json'
const allCards = CardData.allCards
const homeCard: IMainCard = allCards[0]
</script>

<template>
  <div class="d-flex flex-row">
    <MultipleCard :allCards="allCards.slice(0, allCards.length / 2)" />
    <FullAnimationCard v-bind="homeCard" />
    <MultipleCard :allCards="allCards.slice(allCards.length / 2, allCards.length)" />
  </div>
</template>
