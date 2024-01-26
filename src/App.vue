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
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="h-screen flex flex-col justify-between" style="font-family: NM, sans-serif">
    <RouterView />
    <div class="logo text-sky-400 animate-pulse">SOP<span style="font-size: 33pt;color: cadetblue;">Rotterdam</span></div>
    <div class="logo2 text-red-200 animate-pulse">Sport, School & much more!</div>
    <Menubar class="menubar">
      <MenubarMenu>
        <MenubarTrigger>Sport</MenubarTrigger>
        <MenubarContent>
          <MenubarItem> Prijava Deca <MenubarShortcut>⌘Sport</MenubarShortcut> </MenubarItem>
          <MenubarItem>Prijavljeno</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Sportske Dane</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Gallery</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>School</MenubarTrigger>
        <MenubarContent>
          <MenubarItem> Nastava <MenubarShortcut>⌘School</MenubarShortcut> </MenubarItem>
          <MenubarItem>Vesti</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Kontakt</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Gallery</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>SOP</MenubarTrigger>
        <MenubarContent>
          <MenubarItem> Facebook <MenubarShortcut>⌘SOP</MenubarShortcut> </MenubarItem>
          <MenubarItem>Instagram</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Kontakt</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Ostalo</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
</template>

<style scoped>
.menubar {
  margin: 0 auto;
}
.logo {
  font-size: 88pt;
  font-family: 'NM', sans-serif;
  position: absolute;
  top: 33%;
  left: 33%;
}
.logo2 {
  font-size: 33pt;
  font-family: 'NM', sans-serif;
  position: absolute;
  top: 50%;
  left: 33%;
}
</style>
