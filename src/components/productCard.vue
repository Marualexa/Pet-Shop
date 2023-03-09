<template>
  <router-link :to="`/product/${id}`">
    <div class="product-card">
    <img :src="imagen" alt="" />
    <div class="product-info">
      <div>
        <h3>{{ price }}</h3>
        <p>{{ title }}</p>
      </div>
      <figure>
        <img src="../assets/carrito.png" alt="" />
      </figure>
    </div>
    </div>
  </router-link>
</template>

<script setup>
import { toRefs, defineProps } from "vue";

const props = defineProps({
  id: {
    type: String,
  },
  imagen: {
    type: String,
  },
  price: {
    type: String,
  },
  title: {
    type: String,
  },
});

const { id, imagen, price, title } = toRefs(props);
</script>

<style scoped>

body {
  margin: 0;
  font-family: "Quicksand", sans-serif;
}
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  gap: 25px;
  margin-top: 15px;
  place-content: center;
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
.product-info div h3:nth-child(1) {
  font-weight: bold;
  font-size: var(--md);
  margin-top: 0;
  margin-bottom: 4px;
  color: #FFACAC;
}
.product-info div p:nth-child(2) {
  font-size: var(--sm);
  margin-top: 0;
  margin-bottom: 0;
  color: #FFACAC;
}
</style>
