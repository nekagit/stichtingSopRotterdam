<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import CustomImage from '@/components/ui/baseElements/CustomImage.vue'
import type { ICustomCard } from '@/interfaces/App'
import Sponsors from '../../../../assets/logoo.png'
const props = defineProps<ICustomCard>()
</script>

<template>
  <div class="card">
    <h1>Stichting SOP Rotterdam</h1>
    <h3>School Sports & more Activity</h3>

    <div class="cardContent">
      <div v-for="sectionHeader in props.sectionHeaders" :key="sectionHeader.title">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger class="hover:text-black no-underline">
              <h5 class="hover:text-black">
                {{ sectionHeader.title }}
              </h5>
            </AccordionTrigger>
            <AccordionContent>
              <CustomImage :src="Sponsors" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin: auto;
  min-width: 80%;
  height: auto;
  padding: 35px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
  
}

.cardContent {
  overflow: hidden;
}
</style>
