<script setup lang="ts">
import type { ICustomCard } from '@/App.vue';
import CustomCard from "../components/ui/card/CustomCard.vue";
const aboutCard: ICustomCard = {
    title: "AboutCard",
    description: "This is description.",
    cardPic: "../assets/logo.svg",
    color: "red",
    sectionHeaders: [{title: "Header1", description: "asdfasdfsadfsa"}]
}
</script>

<template>
<CustomCard :data="aboutCard" />
</template>

