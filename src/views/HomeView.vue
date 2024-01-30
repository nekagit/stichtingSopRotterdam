<script setup lang="ts">
import type { IMainCard } from '@/App.vue'
import FullAnimationCard from '@/components/ui/card/internet/FullAnimationCard.vue'
import MultipleCard from '@/components/ui/card/internet/MultipleCard.vue'
import HomePic from '../assets/image1.png'
import Sponsors from '../assets/logoo.png'
import Card from '../views/AboutView.vue'
const homeCard: IMainCard = {
  title: 'Welcome to SOP Rotterdam',
  description: 'We offer information about serbian schooling and Rotterdam Sport Days',
  cardPic: HomePic,
  color: 'green',
  // color: 'rgba(58, 110, 241)',
  sectionHeaders: [
    { title: 'Sponsors', img: Sponsors, description: 'asdfasdfsadfsa', childComponent: Card }
  ]
}
const allCards: IMainCard[] = [
  {
    title: 'Welcome to SOP Rotterdam',
    description: 'We offer information about serbian schooling and Rotterdam Sport Days',
    cardPic: HomePic,
    color: 'green',
    // color: 'rgba(58, 110, 241)',
    sectionHeaders: [
      { title: 'Sponsors', img: Sponsors, description: 'asdfasdfsadfsa', childComponent: Card }
    ]
  },
  {
    title: 'Welcome to SOP Rotterdam',
    description: 'We offer information about serbian schooling and Rotterdam Sport Days',
    cardPic: HomePic,
    color: 'green',
    // color: 'rgba(58, 110, 241)',
    sectionHeaders: [
      { title: 'Sponsors', img: Sponsors, description: 'asdfasdfsadfsa', childComponent: Card }
    ]
  },
  {
    title: 'Welcome to SOP Rotterdam',
    description: 'We offer information about serbian schooling and Rotterdam Sport Days',
    cardPic: HomePic,
    color: 'green',
    // color: 'rgba(58, 110, 241)',
    sectionHeaders: [
      { title: 'Sponsors', img: Sponsors, description: 'asdfasdfsadfsa', childComponent: Card }
    ]
  },
  {
    title: 'Welcome to SOP Rotterdam',
    description: 'We offer information about serbian schooling and Rotterdam Sport Days',
    cardPic: HomePic,
    color: 'green',
    // color: 'rgba(58, 110, 241)',
    sectionHeaders: [
      { title: 'Sponsors', img: Sponsors, description: 'asdfasdfsadfsa', childComponent: Card }
    ]
  },
  {
    title: 'Welcome to SOP Rotterdam',
    description: 'We offer information about serbian schooling and Rotterdam Sport Days',
    cardPic: HomePic,
    color: 'green',
    // color: 'rgba(58, 110, 241)',
    sectionHeaders: [
      { title: 'Sponsors', img: Sponsors, description: 'asdfasdfsadfsa', childComponent: Card }
    ]
  },
  {
    title: 'Welcome to SOP Rotterdam',
    description: 'We offer information about serbian schooling and Rotterdam Sport Days',
    cardPic: HomePic,
    color: 'green',
    // color: 'rgba(58, 110, 241)',
    sectionHeaders: [
      { title: 'Sponsors', img: Sponsors, description: 'asdfasdfsadfsa', childComponent: Card }
    ]
  }
]

// const allCards = ref([
//   { title: 'Prijava Sportske Dane', path: 'signIn' },
//   { title: 'SOP Sport', path: 'sportDays' },
//   { title: 'Objave', path: 'sportPosts' },
//   { title: 'School', path: 'schoolNews' },
//   { title: 'Gallerija', path: 'schoolGallery' },
//   { title: 'SOP', path: 'sop' }
// ])
</script>

<template>
  <MultipleCard :allCards="allCards" />
  <FullAnimationCard v-bind="homeCard" />
</template>
