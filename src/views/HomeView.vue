<script setup lang="ts">
import MultipleCard from '@/components/ui/card/internet/MultipleCard.vue'
import CardData from '@/stores/cardData.json'
const allCards = CardData.allCards
const homeCard = allCards[0]
const sportCard = allCards[1]
const schoolCard = allCards[2]
</script>

<template>
  <MultipleCard />
</template>
