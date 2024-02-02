<script setup lang="ts">
import CardPost from '@/components/ui/card/internet/CardPost.vue'
import CardData from '@/stores/cardData.json'
const allCards = CardData.allCards
const homeCard = allCards[0]
</script>

<template>
  <CardPost v-bind="homeCard" />
</template>
