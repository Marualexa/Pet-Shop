<template>
  <div class="container-product">
    <img @click="backInict" class="arrow-leth" src="../assets/atras.png" alt="atras" />
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
              <tr>
                <th scope="row">
                  <img
                    class="img-figure"
                    src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                  />
                  <p>Bike</p>
                </th>
                <td>
                  <button class="quantity-button">
                    <img class="menos-item" src="@/assets/menos.svg" alt="" />
                  </button>
                  <input class="input-number" type="number" placeholder="0" />
                  <button class="quantity-button">
                    <img class="mas-item" src="@/assets/mas.svg" alt="" />
                  </button>
                </td>
                <td>${{ new Intl.NumberFormat("es-US").format(320.0) }}</td>
                <td>${{ new Intl.NumberFormat("es-US").format(400.99) }}</td>
                <td>
                  <img class="closet" src="../assets/cerrar.png" alt="" />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    class="img-figure"
                    src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                  />
                  <p>Bike</p>
                </th>
                <td>
                  <button class="quantity-button">
                    <img class="menos-item" src="@/assets/menos.svg" alt="" />
                  </button>
                  <input class="input-number" type="number" placeholder="0" />
                  <button class="quantity-button">
                    <img class="mas-item" src="@/assets/mas.svg" alt="" />
                  </button>
                </td>
                <td>${{ new Intl.NumberFormat("es-US").format(320.0) }}</td>
                <td>${{ new Intl.NumberFormat("es-US").format(320.0) }}</td>
                <td>
                  <img class="closet" src="../assets/cerrar.png" alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="tabla-2">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="segung-title">Resumen</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">SubTotal:</th>
                  <td>${{ new Intl.NumberFormat("es-US").format(56.387) }}</td>
                </tr>
                <tr>
                  <th scope="row">Descuento:</th>
                  <td>${{ new Intl.NumberFormat("es-US").format(0) }}</td>
                </tr>
                <tr>
                  <th scope="row">Transporte:</th>
                  <td>${{ new Intl.NumberFormat("es-US").format(4.0) }}</td>
                </tr>
                <tr>
                  <th scope="row">TOTAL A PAGAR:</th>
                  <td>${{ new Intl.NumberFormat("es-US").format(77.222) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-success">CONFIRM ORDER</button>
        </div>
        <div class="col"></div>
        <div class="col">
          <button type="button" class="btn btn-danger">DISCARD ORDER</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCartStore} from "@/store/cartContainer";
import { onMounted } from "vue";

const store = useCartStore();

const router = useRouter();

onMounted(() => {
  store.getAddStore();
});

function backInict() {
  router.push({ name: "home" });
}
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
