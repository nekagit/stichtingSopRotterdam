<script setup lang="ts">
import CardPost from '@/components/ui/card/internet/CardPost.vue';
import type { IMainCard } from '@/interfaces/App'
import CardData from '@/stores/cardData.json'
const allCards = CardData.allCards
const homeCard: IMainCard = allCards[0]
</script>

<template>
  <CardPost />
</template>
