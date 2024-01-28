<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
// Define props explicitly
const props = defineProps(['data'])
</script>

<template>
  <Card class="w-full md:w-[550px]" :style="{ backgroundColor: props.data.color }">
    <CardHeader class="d-flex flex-row justify-around">
      <CardTitle class="text-5xl" style="margin-right: 7vw; margin-left: 3vw">
        {{ props.data.title }}
      </CardTitle>
      <img
        :src="props.data.cardPic"
        :alt="props.data.name"
        :class="'h-60 w-60 object-cover transition-all hover:scale-105 aspect-square'"
        style="margin-top: -50px; margin-right: -100px"
      />
    </CardHeader>
    <CardDescription
      class="text-white text-lg"
      style="margin: auto; padding-left: 3vh; padding-right: 3vh"
      >{{ props.data.description }}</CardDescription
    >
    <CardContent>
      <form>
        <div v-for="sectionHeader in props.data.sectionHeaders" :key="sectionHeader.title">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{{ sectionHeader.title }}</AccordionTrigger>
              <AccordionContent>
                <img :src="sectionHeader.img" alt="sponsori" />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <!-- <component :is="sectionHeader.childComponent"></component> -->
        </div>
      </form>
    </CardContent>
    <CardFooter class="flex justify-between px-6 pb-6">
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </CardFooter>
  </Card>
</template>
