<template>
  <div>
    <MenuMovil v-if="showBurge" />
  <div class="main-container">
      <div class="cards-container">
        <productCard
          v-for="{ id, imagen, price, title } in arrayItem"
          :key="`${id}`"
          :id="`${id}`"
          :imagen="imagen"
          :price="price"
          :title="title"
        />
      </div>
    <Pagination @page-event="eventButton" />
  </div>
</div>
</template>

<script setup>
import productCard from "./productCard.vue";
import Pagination from './PaginationButton.vue';
import { toRefs, defineProps, inject } from "vue";
import MenuMovil from './MenuMovil.vue';

const props = defineProps({
  arrayItem: {
    type: Array,
  },
  title: {
    type: String,
  },
  Message: {
    type: String,
  }
});
const { arrayItem } = toRefs(props);

const { changePage } = inject('page');

const { showBurge } = inject('showBurge');

function eventButton(args) {
  console.log('eventListProducts', args);
  changePage(args)
}

</script>

<style>
body {
  margin: 0;
  font-family: "Quicksand", sans-serif;
}
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  gap: 25px;
  place-content: center;
  margin: 20px 10px 10px 10px;
}
.product-card {
  width: 240px;
}
.product-card img {
  width: 240px;
  height: 240px;
  border-radius: 20px;
  object-fit: cover;
}
.product-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}
.product-info figure {
  margin: 0;
}
.product-info figure img {
  width: 35px;
  height: 35px;
}
.product-info div p:nth-child(1) {
  font-weight: bold;
  font-size: var(--md);
  margin-top: 0;
  margin-bottom: 4px;
}
.product-info div p:nth-child(2) {
  font-size: var(--sm);
  margin-top: 0;
  margin-bottom: 0;
  color: var(--very-light-pink);
}
@media (max-width: 640px) {
  .cards-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;  
  }
  .product-card {
    width: 140px;
  }
  .product-card img {
    width: 140px;
    height: 140px;
  }
}
</style>
