<template>
  <div class="container-product">
    <LoadModel v-if="!errorData && isLoading" />
    <ErrorComponent :title="title" :Message="Message" v-if="errorData && !isLoading" />
    <DelectModal v-if="showDeleteModal" @closet-modal="ModalEvent" />
    <div class="product-container" v-if="!errorData && !isLoading">
      <aside class="product-detail">
        <div class="arrow">
          <img
            @click="backInict"
            class="arrow-leth"
            src="@/assets/atras.png"
            alt="atras"
          />
        </div>
        <div class="product-info-detall">
          <img class="imagen-detail" :src="result ? result.imagen : '-'" alt="bike" />

          <div class="grid">
            <div class="price">
              <p class="info-price">
                ${{ new Intl.NumberFormat("es-US").format(result ? result.price : "-") }}
              </p>
            </div>
            <div class="button">
              <button @click="delectButton" type="button" class="btn btn-danger">
                Delete
              </button>
            </div>
          </div>

          <p class="info-title">{{ result ? result.title : "-" }}</p>
          <p class="info-descrition">{{ result ? result.description : "-" }}</p>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import LoadModel from "../Navegacion/LoadModel.vue";
import ErrorComponent from "../errorHandling/ErrorComponent.vue";
import DelectModal from "../errorHandling/DelectModal.vue";
import { useRoute, useRouter } from "vue-router";
import { useAsync } from "@/hooks/useAsync";
import { onMounted, ref } from "vue";

const title = ref("Ooops!");
const Message = ref("Something went wrong the site did not charge properly 😣😣");
const route = useRoute();

const { result, errorData, makeRequest, isLoading } = useAsync();

const { id } = route.params;

onMounted(async () => {
  await makeRequest(`product/${id}`);
});

const router = useRouter();
function backInict() {
  router.push({ name: "home" });
}

const showDeleteModal = ref(false);

function delectButton() {
  showDeleteModal.value = true;
}

function ModalEvent(arg) {
  showDeleteModal.value = false;
}
</script>

<style scoped>
.container-product {
  display: grid;
  justify-content: center;
  align-items: center;
  min-width: 100px;
}
.product-detail {
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 15px;
  grid-template-columns: 30px 1fr;
}

.arrow {
  width: 100%;
  height: 100%;
}
.arrow-leth {
  width: 50px;
  height: 50px;
  padding: 12px;
}

.imagen-detail {
  width: 400px;
  height: 360px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
}
.product-info-detall {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  width: 393px;
}
.info-price {
  display: grid;
  justify-content: flex-start;
  font-weight: bold;
  font-size: 25px;
  margin: 0 4px 4px 10px;
  color: #a75d5d;
}
.info-title {
  color: #8d7b68;
  font-size: 20px;
  margin: 0 4px 4px 10px;
}
.info-descrition {
  color: #8d7b68;
  font-size: 20px;
  margin: 0 4px 4px 10px;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
}
.button {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 450px) {
  .product-detail {
    width: 100%;
  }
}

@media (max-width: 750px) {
  .product-detail {
    width: 100%;
  }
}
</style>
