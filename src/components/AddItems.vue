<template>
  <LoadingProduct v-if="!loadingProduct && errorData" />
  <ErrorComponent :title="title" :Message="Message" v-if="!errorData && loadingProduct" />
  <form @submit.prevent="createButton" class="container-items" novalidate>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Name</label>
        <input
          type="text"
          class="form-control is-invalid"
          v-model="name"
          placeholder="Name"
        />
        <div class="invalid-feedback">The product name is required.</div>
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">Price</label>
        <input
          type="number"
          class="form-control"
          v-model="price"
          placeholder="Price"
          :class="{ 'is-invalid': isInvalid }"
        />
        <div v-if="invalid" class="invalid-feedback">
          This container should only have alpha numeric features.
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Description</label>
      <textarea class="form-control is-invalid" v-model="description" rows="3"></textarea>
      <div class="invalid-feedback">The description must be maximum of 100.</div>
    </div>

    <div class="form-group">
      <label for="inputAddress2">Url Pinteres</label>
      <input
        type="text"
        class="form-control"
        v-model="imagen"
        placeholder="Url Pinteres"
      />
      <div class="invalid-feedback">Authorized field for image content only.</div>
    </div>

    <div class="card" style="width: 18rem">
      <img class="card-img-top" :src="imageSrc" alt="" />
    </div>

    <button class="btn btn-outline-success">Create</button>
  </form>
</template>

<script setup>
import { useAsync } from "../hooks/useAsync";
import { useRouter } from "vue-router";
import { computed, ref, watch } from "vue";
import LoadingProduct from "./LoadModel.vue";
import ErrorComponent from "./ErrorComponent.vue";
import RefeImag from "@/assets/imagen.svg"

const { result, makeRequest, errorData } = useAsync();
const router = useRouter();
const title = ref("Ooops!");
const Message = ref("Something went wrong the site did not charge properly 😣😣");
const loadingProduct = ref(false);
const imagen = ref(null);
const price = ref(null);
const name = ref(null);
const description = ref(null);
const imageSrc = ref(RefeImag);
const invalid = ref(false)
const isInvalid = ref(false);

const expressions = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  price: /^[0-9]+([.])?([0-9]+)?$/,
  description: /^[a-zA-ZÀ-ÿ\s]{1,100}$/,
}

async function createButton() {
if((expressions.price).test(price.value)) {
  isInvalid.value = false;
} else {
  invalid.value = true;
  isInvalid.value = true;
  console.log('expresion invalidad')
}
 //const isNegative = computed(() => amount.value < 0);

  // loadingProduct.value = true;
  // await makeRequest("product", {}, "POST", {
  //   imagen: imagen.value,
  //   price: price.value,
  //   title: name.value,
  //   description: description.value,
  // });
  // imagen.value = "";
  // price.value = "";
  // name.value = "";
  // description.value = "";
  // loadingProduct.value = false;
  // router.push({ name: "DetalleProduct", params: { id: result.value.id } });
}

watch(
  () => imagen.value,
  (val) => {
    if(val) {
      imageSrc.value = val
    }
    console.log("Previsualuzacion imagen", imagen);

  }
);
</script>

<style scoped>
.container-items {
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: absolute;
  margin-top: 15px;
  border-radius: 20px;
}

.btn {
  width: 90px;
  height: 40px;
  text-align: center;
}
.btn-outline-success {
  color: #a75d5d;
  background-color: transparent;
  background-image: none;
  border-color: #a75d5d;
}
.btn-outline-success:hover {
  color: #c7c7c7;
  background-color: #a75d5d;
  border: #a75d5d;
}

.card {
  display: flex;
  justify-self: end;
  align-items: end;
  width: 50px;
  height: 100%;
  border: 1px solid #a75d5d;
  padding: 23px;
}

.card-img-top {
  width: 100%;
  height: 100%;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  object-fit: cover;
}
</style>
