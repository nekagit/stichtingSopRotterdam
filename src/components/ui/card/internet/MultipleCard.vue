<script setup lang="ts">
import Stars from '@/components/ui/background/Stars.vue'
import CardPost from '@/components/ui/card/internet/CardPost.vue'
import { useCardStore } from '@/stores/card'
const { setActive, setInactive } = useCardStore()
const allCards = useCardStore().cards
</script>


<template>
  <div class="trick">
  <div class="grid h-screen w-fit mx-auto p-20">
    <div class="ag-courses_item" v-for="(item, index) in allCards" :key="index">
      <div v-if="item.active == true">
        <a href="#" class="ag-courses-item_link_main">
          <div class="ag-courses-item_title" @click="setInactive(item.title)">
              {{ item.title }}
          </div>
          <CardPost v-bind="item" />
          <Stars />
          <div class="ag-courses-item_bg" >
          </div>
        </a>
      </div>
      <div v-else>
        <a href="#" class="ag-courses-item_link">
          <Stars />
          <div class="ag-courses-item_bg" >
            <div class="ag-courses-item-bg-text"></div>
          </div>

          <div class="ag-courses-item_title" @click="setActive(item.title)">
            {{ item.title }}
          </div>

          <div class="ag-courses-item_date-box">
            <span class="ag-courses-item_date"> {{ item.description }}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.trick {
  /* position: absolute;
  left: -540px; */
}
.ag-courses-item_link_main::-webkit-scrollbar {
  display: none;
}
.ag-courses-item_link_main {
  display: block;
  height: 33vh;
  padding: 10px 20px;
  background-color: #121212;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.ag-courses-item_link {
  display: block;
  max-height: 10vh;
  padding: 15px;
  background-color: #121212;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.ag-courses-item_link:hover,
.ag-courses-item_link:hover .ag-courses-item_date {
  text-decoration: none;
  color: #fff;
}
.ag-courses-item_link:hover .ag-courses-item_bg {
  -webkit-transform: scale(10);
  -ms-transform: scale(10);
  transform: scale(10);
}
.ag-courses-item_title {
  min-height: 87px;
  overflow: hidden;
  font-weight: bold;
  font-size: 30px;
  color: #fff;
  z-index: 2;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}
.ag-courses-item_date-box {
  font-size: 18px;
  color: #fff;

  z-index: 2;
  position: relative;
}
.ag-courses-item_date {
  font-weight: bold;
  color: #f9b234;

  -webkit-transition: color 0.5s ease;
  -o-transition: color 0.5s ease;
  transition: color 0.5s ease;
}
.ag-courses-item_bg {
  height:128px;
  width: 128px;
  background-color: #f9b234;

  z-index: 1;
  position: absolute;
  top: -75px;
  right: -75px;

  border-radius: 50%;

  -webkit-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.ag-courses-item-bg-text {
  position: absolute;
  bottom: 18px;
  left: 21px;
  font-size: x-large;
  font-weight: 800;
  color: white;
}
.ag-courses_item:nth-child(2n) .ag-courses-item_bg {
  background-color: #3ecd5e;
}
.ag-courses_item:nth-child(3n) .ag-courses-item_bg {
  background-color: #e44002;
}
.ag-courses_item:nth-child(4n) .ag-courses-item_bg {
  background-color: #ff2a2a;
}
.ag-courses_item:nth-child(5n) .ag-courses-item_bg {
  background-color: #0c10a0;
}
.ag-courses_item:nth-child(6n) .ag-courses-item_bg {
  background-color: #4c49ea;
}
.gradient {
  background: linear-gradient(-45deg, #a82a03, #000000, #8d370f, #a2951c);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
.gradient2 {
  background: linear-gradient(-45deg, #000000, #7f5700, #025f81, #9c1919);
  background-size: 400% 400%;
  animation: gradient 30s ease infinite;
}
.gradient3 {
  background: linear-gradient(-45deg, #d4d4d4, #810000, #8d8d8d, #9c1919);
  background-size: 400% 400%;
  animation: gradient 30s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}


@media only screen and (max-width: 979px) {
  .ag-courses_item {
    -ms-flex-preferred-size: calc(50% - 30px);
    flex-basis: calc(50% - 30px);
  }
  .ag-courses-item_title {
    font-size: 24px;
  }
}

@media only screen and (max-width: 767px) {
  .ag-format-container {
    width: 96%;
  }
}
@media only screen and (max-width: 639px) {
  .ag-courses_item {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .ag-courses-item_title {
    min-height: 72px;
    line-height: 1;

    font-size: 24px;
  }
  .ag-courses-item_link {
    padding: 22px 40px;
  }
  .ag-courses-item_date-box {
    font-size: 16px;
  }
}

</style>
