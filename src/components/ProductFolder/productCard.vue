<template>
  <router-link :to="`/product/${id}`">
    <div class="product-card">
      <img :src="imagen" alt="" />
      <div class="product-info">
        <div>
          <h3>${{ new Intl.NumberFormat("es-US").format(price) }}</h3>
          <p>{{ title }}</p>
        </div>
        <figure>
          <img
            @click.stop.prevent="store.addItemCart(props)"
            class="imagen-carrito"
            src="@/assets/carrito.png"
            alt=""
          />
          <img
            @click.stop.prevent="edictProduct($event)"
            class="imagen-edict"
            src="@/assets/editar.svg"
            alt=""
          />
        </figure>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { toRefs, defineProps } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/store/cartContainer";

const store = useCartStore();
console.log("store", store.addItemCart);

const props = defineProps({
  id: {
    type: String,
  },
  imagen: {
    type: String,
  },
  price: {
    type: Number,
  },
  title: {
    type: String,
  },
});

const { id, imagen, price, title } = toRefs(props);
const router = useRouter();

function edictProduct(ev) {
  console.log("entrar", ev);
  router.push({ name: "edictProduct", params: { id: id.value } });
}
</script>

<style scoped>
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
.product-info .imagen-carrito {
  width: 35px;
  height: 35px;
}
.product-info .imagen-edict {
  width: 25px;
  height: 25px;
  border-radius: 0;
  margin-left: 10px;
  background-color: #ffacac;
}
.product-info div h3:nth-child(1) {
  font-weight: bold;
  font-size: var(--md);
  margin-top: 0;
  margin-bottom: 4px;
  color: #8d7b68;
}
.product-info div p:nth-child(2) {
  font-size: var(--sm);
  margin-top: 0;
  margin-bottom: 0;
  color: #8d7b68;
}
.product-img {
  width: 30px;
  height: 30px;
}
</style>
