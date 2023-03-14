<template>
  <div>
    <LoadModel v-if="!errorData && isLoading" />
    <ErrorComponent v-if="errorData && !isLoading" />
    <DelectModal v-if="showDeleteModal" />
    <div class="product-container" v-if="!errorData && !isLoading">
      <aside class="product-detail">
        <div class="product-detail-close">
          <img @click="backInict" src="../assets/atras.png" alt="atras" />
        </div>
        <img class="imagen-detail" :src="result ? result.imagen : '-'" alt="bike" />

        <div class="product-info-detall">
          <div class="row">
            <div class="col-8">
              <p class="info-price">{{ result ? result.price : "-" }}</p>
            </div>
            <div class="col-4">
              <button @click="delectButton" type="button" class="btn btn-danger">Delect</button>
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
import LoadModel from "./LoadModel.vue";
import ErrorComponent from "./ErrorComponent.vue";
import DelectModal from "./DelectModal.vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { useAsync } from "../hooks/useAsync";
import { onMounted, ref } from "vue";

const route = useRoute();
console.log("Este es el router", route.params);

const { result, errorData, makeRequest, isLoading } = useAsync();

const { id } = route.params;
console.log("id", id);

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
  console.log('click delect', delectButton);
}
console.log("este es el result", result);
</script>

<style>
.product-detail {
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-bottom: 24px;
  position: absolute;
  margin-top: 15px;
  border-radius: 20px;
}

.product-detail-close {
  width: 20px;
  height: 14px;
  position: absolute;
  top: 24px;
  left: 319px;
  z-index: 2;
  padding: 12px;
  border-radius: 50%;
}
.product-detail-close img {
  width: 30px;
  height: 22px;
}

.product-detail-close:hover {
  cursor: pointer;
}

.imagen-detail {
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
}
.product-info-detall {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 24px 24px 0 24px;
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
.btn {
  width: 90px;
  align-self: end;
}
.row {
  margin-right: -230px;
  margin-bottom: 15px;
}

@media (max-width: 450px) {
  .product-detail {
    width: 100%;
  }

  .product-detail-close {
    width: 20px;
    height: 14px;
    position: absolute;
    top: 24px;
    left: 12px;
    z-index: 2;
    padding: 12px;
    border-radius: 50%;
  }
}

@media (max-width: 750px) {
  .product-detail {
    width: 100%;
  }

  .product-detail-close {
    width: 20px;
    height: 14px;
    position: absolute;
    top: 24px;
    left: 12px;
    z-index: 2;
    padding: 12px;
    border-radius: 50%;
  }
}
</style>
