<template>
  <div class="container">
      <img @click="resposibleMenu" src="@/assets/icon_menu.svg" alt="menu" class="menu" />
      <MenuMovil v-if="showBurge" />

    <div class="btn-group button-regist" role="group">
      <span class="img-span"
        ><img class="ingret" src="@/assets/acceso.png" alt=""
      /></span>
      <button
        type="button"
        class="btn btn-outline-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        ENTER
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Login</a></li>
        <li><a class="dropdown-item" href="#">Sign Up</a></li>
      </ul>
    </div>

    <div class="navbar-left">
      <img src="@/assets/logo.png" alt="logo" class="logo" @click="takeHome" />
    </div>

    <div class="items-product inactive">
      <div class="button-item">
        <img
          @click="itemsButton"
          class="primary-button"
          src="@/assets/editar.svg"
          alt=""
        />
      </div>

      <div class="navbar-right">
        <ul>
          <li class="navbar-shopping-cart">
            <img
              @click="showPiCar()"
              src="@/assets/icon_shopping_cart.svg"
              alt="shopping cart"
            />
            <div>{{ store.getCartLength }}</div>
            <MyOrder v-if="store.getOpenCart" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import MenuMovil from "../Navegacion/MenuMovil.vue";
import MyOrder from "../CartFolder/MyOrder.vue";
import { ref, inject } from "vue";
import { useCartStore } from "@/store/cartContainer";

const store = useCartStore();

const { showMenu, showBurge } = inject("showBurge");

const router = useRouter();
const getOpenCart = ref(false);

function resposibleMenu() {
  showMenu(!showBurge.value);
}

function itemsButton() {
  router.push({ name: "addItem" });
}

function showPiCar() {
  store.neglectingCart();
}

function takeHome() {
  router.push({ name: "home" });
}
</script>

<style scoped>
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
  margin: 30px;
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
.btn {
  border: none;
}

.ingret {
  width: 30px;
  height: 30px;
  object-fit: cover;
}

.btn-group {
  place-items: center;
  border-radius: 10px;
}

.btn-group :hover {
  color: #fff;
  background-color: #c7c7c7;
  border: none;
}
.img-span {
  padding: 3px;
  border-radius: 10px 0 0 10px;
  background-color: #ffacac;
}
.btn-outline-primary {
  color: #ffacac;
  background-color: #fff;
}

@media (max-width: 800px) {
  .menu {
    display: block;
  }
  .navbar-left ul {
    display: none;
  }
  .button-regist {
    display: none;
  }
}
</style>
