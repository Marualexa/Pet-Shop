<template>
<div>
  <LoadModel v-if="!errorData && isLoading" />
  <ErrorComponent v-if="errorData && !isLoading" />
  <div class="product-container" v-if="!errorData && !isLoading">
  <aside class="product-detail">
      <div class="product-detail-close">
        <img @click="backInict" src="../assets/atras.png" alt="atras">
      </div>
      <img class="imagen-detail" :src="result ? result.imagen : '-'" alt="bike">

      <div class="product-info-detall">
        <p class="info-price">{{ result ? result.price : '-' }}</p>
        <p class="info-title">{{ result ? result.title : '-' }}</p>
        <p class="info-descrition">{{ result ? result.description : '-' }}</p>
      </div>
  </aside>
  </div>
</div>
</template>

<script setup>
  import LoadModel from "./LoadModel.vue";
  import ErrorComponent from "./ErrorComponent.vue";
  import { useRoute } from "vue-router";
  import { useRouter } from 'vue-router';
  import { useAsync } from "../hooks/useAsync";
  import { onMounted } from 'vue';

  const route = useRoute();
  console.log('Este es el router', route.params);

  const { result, errorData, makeRequest, isLoading } = useAsync();

  const { id } = route.params;
  console.log('id', id);

  onMounted( async () => {
    await makeRequest(`product/${id}`)
    //console.log('resiltado', result.value)
  })

  const router = useRouter();
  function backInict() {
    router.push({ name: 'home' })
  }

console.log('este es el result', result);

</script>

<style>
:root {
      --white: #C7C7C7;
      --black: #000000;
      --very-light-pink: #FFACAC;
      --text-input-field: #FFBFA9;
      --hospital-green: #FBFFB1;
      --sm: 14px;
      --md: 16px;
      --lg: 18px;
    }
    body {
      margin: 0;
      font-family: 'Quicksand', sans-serif;
    }

    .product-detail {
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
      left: 24px;
      z-index: 2;
      padding: 12px;
      border-radius: 50%;
    }
  .product-detail-close img {
      width: 25px;
      height: 20px;
}

    .product-detail-close:hover {
      cursor: pointer;
    }
    
    .imagen-detail {
      width: 100%;
      height: 360px;
      object-fit: cover;
      border-radius:20px 20px 0 0;
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
      font-size: 20px;
      margin: 0 4px 4px 10px;
      color: #FFACAC;
    }
    .info-title {
      color: #C7C7C7;
      font-size: 18px;
      margin: 0 4px 4px 10px;
    }
    .info-descrition {
      color: #C7C7C7;
      font-size: 15px;
      margin: 0 4px 4px 10px;
    }
    @media (max-width: 640px) {
      .product-detail {
        width: 100%;
      }
    }
</style>
