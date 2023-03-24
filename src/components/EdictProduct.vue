<template>
  <LoadModel v-if="!errorData && isLoading" />
  <ErrorComponent :title="title" :Message="Message" v-if="errorData && !isLoading" />
  <form @submit.prevent="editButton" class="container-edict">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Name</label>
        <input
          type="text"
          class="form-control"
          v-model="name"
          placeholder="Name"
          :class="{ 'is-invalid': isNameError }"
        />
        <div v-if="nameVal" class="invalid-feedback">The product name is required.</div>
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
      </div>
      <div v-if="invalid" class="invalid-feedback">
        This container should only have alpha numeric features.
      </div>
    </div>

    <div class="form-group">
      <label for="exampleFormControlTextarea1">Description</label>
      <textarea
        class="form-control"
        v-model="description"
        rows="3"
        :class="{ 'is-invalid': isDescription }"
      ></textarea>
      <div v-if="descriVal" class="invalid-feedback">
        The description must be maximum of 100.
      </div>
    </div>

    <div class="form-group">
      <label for="inputAddress2">Url Pinteres</label>
      <input
        type="text"
        class="form-control"
        v-model="imagen"
        placeholder="Url Pinteres"
      />
    </div>

    <div class="card" style="width: 18rem">
      <img class="card-img-top" :src="imgEdit" alt="" />
    </div>

    <button class="btn btn-primary">Edit</button>
  </form>
</template>

<script setup>
import { useAsync } from "../hooks/useAsync";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import LoadModel from "./LoadModel.vue";
import ErrorComponent from "./ErrorComponent.vue";
import EditImag from "@/assets/imagen.svg";

const router = useRouter();
const name = ref(null);
const price = ref(null);
const description = ref(null);
const imagen = ref(null);
const imgEdit = ref(EditImag);
const title = ref("Ooops!");
const Message = ref("Something went wrong the site did not charge properly 😣😣");
const nameVal = ref(false);
const invalid = ref(false);
const descriVal = ref(false);
const isNameError = ref(false);
const isInvalid = ref(false);
const isDescription = ref(false);

const { result, errorData, makeRequest, isLoading } = useAsync();
const route = useRoute();
const { id } = route.params;

const expressions = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  price: /^[0-9]+([.])?([0-9]+)?$/,
  description: /^[a-zA-ZÀ-ÿ\s]{1,100}$/,
};

onMounted(async () => {
  await makeRequest(`product/${id}`);
  name.value = result.value.title;
  price.value = result.value.price;
  description.value = result.value.description;
  imagen.value = result.value.imagen;
});

watch(
  () => imagen.value,
  (val) => {
    if (val) {
      imgEdit.value = val;
    }
    console.log("Previsualuzacion imagen", imagen);
  }
);

async function editButton() {
  if (expressions.name.test(name.value)) {
    isNameError.value = false;
  } else {
    nameVal.value = true;
    isNameError.value = true;
  }

  if (expressions.price.test(price.value)) {
    isInvalid.value = false;
  } else {
    invalid.value = true;
    isInvalid.value = true;
  }

  if (expressions.description.test(description.value)) {
    isDescription.value = false;
  } else {
    descriVal.value = true;
    isLoading.value = true;
  }

  if (
    expressions.name.test(name.value) &&
    expressions.price.test(price.value) &&
    expressions.description.test(description.value)
  ) {
    isLoading.value = true;

    await makeRequest(`product/${id}`, {}, "put", {
      imagen: imagen.value,
      price: price.value,
      title: name.value,
      description: description.value,
    });
    isLoading.value = false;
    router.push({ name: "DetalleProduct", params: { id: result.value.id } });
  }
}
</script>

<style scoped>
.container-edict {
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.btn {
  width: 90px;
  height: 40px;
  text-align: center;
  background-color: #a75d5d;
  border-color: #a75d5d;
}
.btn-primary:hover {
  color: #a75d5d;
  background-color: #fff;
  border-color: #a75d5d;
}
.card {
  display: flex;
  justify-self: end;
  align-items: end;
  width: 50px;
  height: 100%;
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
