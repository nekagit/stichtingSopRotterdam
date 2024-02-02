<script setup lang="ts">
import { ref } from 'vue';
import {
Menubar,
MenubarContent,
MenubarItem,
MenubarMenu,
MenubarSeparator,
MenubarShortcut,
MenubarTrigger
} from '@/components/ui/menubar';

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
</template>

<style scoped>
.menubar {
  position: absolute;
  margin: 0 auto;
  color:white;
  border: 1px solid white;
}
</style>
