<template>
  <div class="container-product">
    <img @click="backInict" class="arrow-leth" src="@/assets/atras.png" alt="atras" />
    <div class="container text-center">
      <div class="row">
        <div class="col-lg-9 col-md-6">
          <p class="title-cart">CART DETAILS</p>
          <table class="table">
            <thead class="table-danger">
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Unit value</th>
                <th scope="col">SubTotal</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in store.getCartPets" :key="product.id">
                <th scope="row">
                  <img class="img-figure" :src="product.imagen" alt="bike" />
                  <p>{{ product.title }}</p>
                </th>
                <td>
                  <button class="quantity-button" @click="store.decreaseAmount(product)">
                    <img class="menos-item" src="@/assets/menos.svg" alt="" />
                  </button>
                  <span>{{ product.quantity }}</span>
                  <button
                    class="quantity-button"
                    @click="store.increaseQuantity(product)"
                  >
                    <img class="mas-item" src="@/assets/mas.svg" alt="" />
                  </button>
                </td>
                <td>${{ new Intl.NumberFormat("es-US").format(product.price) }}</td>
                <td>
                  ${{
                    new Intl.NumberFormat("es-US").format(
                      store.getPriceBasket(product.id)
                    )
                  }}
                </td>
                <td>
                  <img
                    @click="store.removeItemCart(product)"
                    class="closet"
                    src="@/assets/cerrar.png"
                    alt=""
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-lg-3 col-md-6">
          <ResumCar @confirm-order="goToPage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCartStore } from "@/store/cartContainer";
import { onMounted } from "vue";
import ResumCar from "./ResumCar.vue";

const store = useCartStore();
const router = useRouter();

onMounted(() => {
  store.getAddStore();
  console.log("onMounted entra", onMounted);
});

function backInict() {
  router.push({ name: "home" });
}

const goToPage = () => {
  router.push({ name: "ordenConfirm" });
};
</script>

<style scoped>
.container-product {
  padding-top: 20px;
}
.title-cart {
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: #333;
}
.segung-title {
  color: #ffacac;
}
.img-figure {
  width: 60px;
  height: 50px;
  object-fit: contain;
}
.mas-item {
  width: 14px;
  height: 14px;
  border: transparent;
  object-fit: contain;
}
.menos-item {
  width: 14px;
  height: 14px;
  object-fit: contain;
}
.quantity-button {
  background-color: white;
  width: 1.5rem;
  width: 25%;
  height: 3.1rem;
  border: none;
  border-radius: 0.6rem;
  padding: 0;
}
.input-number {
  width: 20%;
  height: 15%;
  text-align: center;
  margin: 0 5px;
  border: none;
  border-radius: 0.6rem;
  background-color: rgba(0, 0, 0, 0.1);
}
.closet {
  width: 10px;
  height: 10px;
  object-fit: contain;
  color: brown;
}
.arrow-leth {
  width: 45px;
  height: 45px;
  z-index: 2;
  padding: 12px;
  border-radius: 50%;
}
</style>
