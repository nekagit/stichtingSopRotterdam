<script setup lang="ts">
import {
Menubar,
MenubarContent,
MenubarItem,
MenubarMenu,
MenubarSeparator,
MenubarShortcut,
MenubarTrigger
} from '@/components/ui/menubar'
import { ref, type Component } from 'vue'
import { RouterView } from 'vue-router'
export interface ICustomCard {
  title: string
  description: string
  sectionHeaders: ISectionHeader[]
  cardPic: string
  color: string
}
export interface ISectionHeader {
  title: string
  description: string
  img?: string;
  childComponent?: Component
}

const sport = ref([
  { title: 'Prijava Dece', path: 'signIn' },
  { title: 'Sportske Dane', path: 'sportDays' },
  { title: 'Objave', path: 'sportPosts' }
])

const school = ref([
  { title: 'Nastava', path: 'school' },
  { title: 'Vesti', path: 'schoolNews' },
  { title: 'Kontakt', path: 'schoolContact' },
  { title: 'Gallerija', path: 'schoolGallery' }
])

const sop = ref([
  { title: 'SOP', path: 'sop' },
  { title: 'Instagram', path: 'socialMedia' },
  { title: 'Facebook', path: 'socialMedia' },
  { title: 'Kontakt', path: 'sopContact' }
])
</script>

<template>
  <div class="h-screen flex flex-col justify-between" style="background-color:rgb(20, 47, 117);font-family: NM, sans-serif">
    <data class="grid place-content-center h-full m-auto">
      <RouterView />
    </data>
    <Menubar class="menubar">
      <MenubarMenu>
        <MenubarTrigger>Sport</MenubarTrigger>
        <MenubarContent>
          <div v-for="item in sport" :key="item.path">
            <MenubarItem @click="$router.push(item.path)">
              {{ item.title }}<MenubarShortcut>⌘Sport</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
          </div>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>School</MenubarTrigger>
        <MenubarContent>
          <div v-for="item in school" :key="item.path">
            <MenubarItem @click="$router.push(item.path)">
              {{ item.title }}<MenubarShortcut>⌘Sport</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
          </div>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>SOP</MenubarTrigger>
        <MenubarContent>
          <div v-for="item in sop" :key="item.path">
            <MenubarItem @click="$router.push(item.path)">
              {{ item.title }}<MenubarShortcut>⌘Sport</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
          </div>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
</template>

<style scoped>
.menubar {
  margin: 0 auto;
  border: 1px solid black;
}
</style>
