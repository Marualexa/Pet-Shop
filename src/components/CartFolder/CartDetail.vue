<template>
  <div class="detail-container">
    <div class="arrow">
      <img @click="backInict" class="arrow-leth" src="@/assets/atras.png" alt="atras" />
    </div>
    <div class="container-product">
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-9 col-md-7">
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
                    <button
                      class="quantity-button"
                      @click="store.decreaseAmount(product)"
                    >
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
          <div class="col-lg-3 col-md-3">
            <ResumCar @confirm-order="goToPage" />
          </div>
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
import { useAsync } from "@/hooks/useAsync";

const store = useCartStore();
const router = useRouter();
const { result, makeRequest, errorData } = useAsync();

onMounted(() => {
  store.getAddStore();
  console.log("onMounted entra", onMounted);
});

function backInict() {
  router.push({ name: "home" });
}

const goToPage = async () => {
  await makeRequest("order", {}, "POST", {
    products: store.getCartPets,
    total: store.getTotalPrice,
    name: "",
    lastName: "",
    identification: "",
    cell: "",
    city: "",
    destination: "",
    email: "",
    meansOfPayment: "Tarjeta Crédito o Débito",
    paymentStatus: "No pagado",
  });
  console.log("result", result);
  router.push({ name: "ordenConfirm", params: { id: result.value.id } });
};
</script>

<style scoped>
.detail-container {
  display: grid;
  grid-template-columns: 30px 1fr;
  justify-content: center;
  align-items: center;
}
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
.arrow {
  width: 100%;
  height: 100%;
}
.arrow-leth {
  width: 50px;
  height: 50px;
  padding: 12px;
  margin-top: 10px;
}
</style>
