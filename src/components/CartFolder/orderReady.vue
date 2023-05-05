<template>
  <div class="container-product">
    <div class="arrow">
      <img @click="backInict" class="arrow-leth" src="@/assets/atras.png" alt="atras" />
    </div>
    <div class="items-product">
      <p class="title-cart">CONFIRMATION</p>
      <div class="text-center ng-star-inserted">
        <h2 class="title-section mt-4">
          <p _ngcontent-serverapp-c98="" class="title-section-small sustite">
            Your order
          </p>
          <span _ngcontent-serverapp-c98="" class="h2 font-weight-bold"
            >Was successfully performed</span
          >
        </h2>
        <p class="item-count">The following information is the summary of your order</p>
      </div>
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">N. order</th>
            <td>{{ id }}</td>
          </tr>
          <tr>
            <th scope="row">Date</th>
            <td>{{ currentData }}</td>
          </tr>
          <tr>
            <th scope="row">Amount to cancel</th>
            <td colspan="means of payment">
              ${{ new Intl.NumberFormat("es-US").format(store.getTotalPrice) }}
            </td>
          </tr>
          <tr>
            <th scope="row">Means of payment</th>
            <td colspan="means of payment">Tarjeta Crédito o Débito</td>
          </tr>
          <tr>
            <th scope="row">Payment status</th>
            <td colspan="means of payment">No pagado</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cartContainer";
import { ref } from "vue";
import { useAsync } from "@/hooks/useAsync";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

const router = useRouter();
const { result } = useAsync();
const route = useRoute();

const { id } = route.params;
console.log("id", result.id);

const store = useCartStore();
const currentData = ref(new Date());

function backInict() {
  router.push({ name: "ordenConfirm" });
}
</script>

<style scoped>
.container-product {
  display: grid;
  grid-template-columns: 30px 1fr;
  justify-content: center;
  align-items: center;
}
.items-product {
  margin-top: 30px;
  margin-left: 20px;
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
.table {
  display: grid;
  place-content: center;
}
.title-cart {
  font-size: 19px;
  font-weight: bold;
  margin-left: 15px;
}
.sustite {
  font-size: 19px;
  color: #ffacac;
}
.h2 {
  margin-bottom: 10px;
}
.item-count {
  margin-top: 15px;
}
</style>
