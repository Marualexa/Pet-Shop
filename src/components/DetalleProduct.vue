<template>
<Suspense>
  <div class="product-container">
  <aside class="product-detail">
      <div class="product-detail-close">
        <img @click="backInict" src="../assets/atras.png" alt="atras">
      </div>
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
      <div class="product-info-detall">
        <p>$35.00</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
      </div>
  </aside>
  </div>
</Suspense>
</template>

<script setup>
  import { useRoute } from "vue-router";
  import { useRouter } from 'vue-router';
  import { useAsync } from "../hooks/useAsync";
  import { onMounted } from 'vue';

  const route = useRoute();
  console.log('Este es el router', route.params);

  const { result, errorData, makeRequest } = useAsync();

  const { id } = route.params;
  console.log('id', id);

  onMounted(() => {
    makeRequest(`product/${id}`)
    console.log('resiltado', result.value)
  })

  const router = useRouter();
  function backInict() {
    router.push({ name: 'home' })
  }

console.log('este es el result', result)

</script>

<style scoped>
:root {
      --white: #FFFFFF;
      --black: #000000;
      --very-light-pink: #C7C7C7;
      --text-input-field: #F7F7F7;
      --hospital-green: #ACD9B2;
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
    
    .product-detail > img:nth-child(2) {
      width: 100%;
      height: 360px;
      object-fit: cover;
      border-radius: 0 0 20px 20px;
    }
    .product-info-detall {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 24px 24px 0 24px;
    }
    .product-info p:nth-child(1) {
      display: grid;
      justify-content: flex-start;
      font-weight: bold;
      font-size: 20px;
      margin: 0 4px 4px 10px;
    }
    .product-info p:nth-child(2) {
      color: var(--very-light-pink);
      font-size: 18px;
      margin: 0 4px 4px 10px;
    }
    .product-info p:nth-child(3) {
      color: var(--very-light-pink);
      font-size: 15px;
      margin: 0 4px 4px 10px;
    }
    @media (max-width: 640px) {
      .product-detail {
        width: 100%;
      }
    }
</style>
