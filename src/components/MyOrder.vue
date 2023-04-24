<template>
  <aside class="product-detail">
    <div class="title-container">
      <p class="title">My order</p>
    </div>
    <div class="my-order-content">
      <div
        class="shopping-cart"
        v-for="item in store.getCartPets"
        :key="item.id"
        :id="item.id"
      >
        <figure>
          <img :src="item.imagen" alt="bike" />
        </figure>
        <p>{{ item.title }} <span>X{{ store.getItemQuantity(item.id) }}</span> </p>
        <p>${{ new Intl.NumberFormat("es-US").format(item.price) }}</p>
        <img
          @click="store.removeItemCart(item)"
          class="closet"
          src="@/assets/cerrar.png"
          alt="close"
        />
      </div>

      <div class="order">
        <p>
          <span>Total</span>
        </p>
        <p>${{ new Intl.NumberFormat("es-US").format(store.getTotalPrice) }}</p>
      </div>

      <button @click="shopping" class="primary-button">Continue shopping</button>
    </div>
  </aside>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCartStore } from "@/store/cartContainer";

const router = useRouter();
const store = useCartStore();

function shopping() {
  router.push({ name: "cartDetail" });
}

</script>

<style scoped>
.product-detail {
  width: 360px;
  padding: 24px;
  box-sizing: border-box;
  position: absolute;
  right: 0;
  background-color: #f7f7f7;
  border-radius: 50px;
  z-index: 10;
}
.title-container {
  display: flex;
}
.title-container img {
  transform: rotate(180deg);
  margin-right: 14px;
}
.title {
  font-size: 18px;
  font-weight: bold;
}
.order {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: center;
  background-color: #f7f7f7;
  margin-bottom: 24px;
  border-radius: 8px;
  padding: 0 24px;
}
.order p:nth-child(1) {
  display: flex;
  flex-direction: column;
}
.order p span:nth-child(1) {
  font-size: 16px;
  font-weight: bold;
}
.order p:nth-child(2) {
  text-align: end;
  font-weight: bold;
}
.shopping-cart {
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 16px;
  margin-bottom: 24px;
  align-items: center;
}
.shopping-cart figure {
  margin: 0;
}
.shopping-cart figure img {
  width: 70px;
  height: 70px;
  border-radius: 20px;
  object-fit: cover;
}
.shopping-cart p:nth-child(2) {
  color: #c7c7c7;
}
.shopping-cart p:nth-child(3) {
  font-size: 16px;
  font-weight: bold;
}
.primary-button {
  background-color: #ffacac;
  border-radius: 8px;
  border: none;
  color: #ffffff;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
}
.closet {
  width: 10px;
  height: 10px;
  object-fit: contain;
}
.closet :hover {
  color: brown;
}
/* @media (max-width: 640px) {
  .product-detail {
    width: 100%;
  }
} */
</style>
