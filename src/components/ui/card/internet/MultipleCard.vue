<script setup lang="ts">
import CardData from '@/stores/cardData.json'
const allCards = CardData.allCards
</script>
<template>
  <div class="ag-courses_box">
    <div class="ag-courses_item" v-for="(item, index) in allCards" :key="index">
      <a href="#" class="ag-courses-item_link">
        <Stars />
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          {{ item.title }}
        </div>

        <div class="ag-courses-item_date-box">
          <span class="ag-courses-item_date"> {{ item.description }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.ag-courses_box {
  height: 100%;
  margin: auto;
  margin-top: 5vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: space-around;
}
.ag-courses_item {
  -ms-flex-preferred-size: calc(33.33333% - 30px);
  flex-basis: calc(33.33333% - 30px);
  margin: 0 10px 10px;
  overflow: hidden;
  border-radius: 28px;
}
.ag-courses-item_link {
  display: block;
  height: 25vh;
  padding: 10px 20px;
  background-color: #121212;
  overflow: hidden;
  position: relative;
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
  margin: 0 0 65px;

  overflow: hidden;

  font-weight: bold;
  font-size: 30px;
  color: #fff;

  z-index: 2;
  position: relative;
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
  height: 128px;
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
</style>
