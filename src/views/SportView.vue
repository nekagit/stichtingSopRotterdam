<script setup lang="ts">
import type { ICustomCard } from '@/App.vue';
import CustomCard from "../components/ui/card/CustomCard.vue";
const sportCard: ICustomCard = {
    title: "sportCard",
    description: "This is description.",
    cardPic: "../assets/logo.svg",
    color: "red",
    sectionHeaders: [{title: "Header1", description: "asdfasdfsadfsa"}]
}
</script>

<template>
<CustomCard :data="sportCard" />
</template>

