<template>
  <div>
    <div class="container">
      <img
        @click="resposibleMenu"
        src="../assets/icon_menu.svg"
        alt="menu"
        class="menu"
      />

      <div class="navbar-left">
        <img src="../assets/logo.png" alt="logo" class="logo" />
      </div>

      <Search />
  
      <div class="items-product inactive">
        <div class="button-item">
          <button @click="itemsButton" type="button" class="btn btn-outline-success">
            <img class="primary-button" src="../assets/editar.svg" alt="" />
          </button>
        </div>

        <div class="navbar-right">
          <ul>
            <li class="navbar-shopping-cart">
              <img
                @click="showPiCar()"
                src="../assets/icon_shopping_cart.svg"
                alt="shopping cart"
              />
              <div>{{ store.getCartLength }}</div>
              <MyOrder v-if="openCart" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import Search from "./searchProduct.vue";
import MyOrder from "./MyOrder.vue";
import { ref } from "vue";
import { useCartStore} from "@/store/cartContainer";

const store = useCartStore();

const router = useRouter();
const openCart = ref(false)

function resposibleMenu() {
  showMenu(!showBurge.value);
}

function itemsButton() {
  router.push({ name: "addItem" });
}

function showPiCar() {
  openCart.value = !openCart.value;
}
</script>

<style scoped>
:root {
  --white: #c7c7c7;
  --black: #000000;
  --very-light-pink: #ffacac;
  --text-input-field: #ffbfa9;
  --hospital-green: #fbffb1;
  --sm: 14px;
  --md: 16px;
  --lg: 18px;
}
body {
  margin: 0;
  font-family: "Quicksand", sans-serif;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ffacac;
}
.menu {
  display: none;
}

.logo {
  width: 100px;
}

.navbar-left ul,
.navbar-right ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  height: 80px;
}

.navbar-left {
  display: flex;
}

.navbar-right {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.navbar-left ul {
  margin-left: 12px;
  margin-block: auto;
}

.navbar-left ul li a,
.navbar-right ul li a {
  text-decoration: none;
  color: #c7c7c7;
  padding: 8px;
  border-radius: 8px;
  font-size: 18px;
  color: #8d7b68;
}

.navbar-left ul li a:hover,
.navbar-right ul li a:hover {
  border: 1px solid #a75d5d;
  color: #a75d5d;
}

.items-product {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
}
.navbar-shopping-cart {
  position: relative;
}

.navbar-shopping-cart div {
  width: 16px;
  height: 16px;
  background-color: #ffacac;
  border-radius: 50%;
  font-size: var(--sm);
  font-weight: bold;
  position: absolute;
  top: -6px;
  right: -3px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-item {
  display: flex;
  justify-content: end;
  margin: 25px;
}
.btn {
  width: 30px;
  height: 30px;
  padding: 5px;
}

.btn-outline-success {
  color: #a75d5d;
  background-color: transparent;
  border-color: #a75d5d;
}

.btn-outline-success:hover {
  color: #c7c7c7;
  background-color: #a75d5d;
  border: #a75d5d;
}
.primary-button {
  object-fit: cover;
  width: 20px;
  height: 20px;
  vertical-align: baseline;
}

@media (max-width: 800px) {
  .menu {
    display: block;
  }
  .navbar-left ul {
    display: none;
  }
}
</style>
