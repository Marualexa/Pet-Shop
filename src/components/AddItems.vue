<template>
  <LoadingProduct v-if="loadingProduct && !errorData" />
  <ErrorComponent :title="title" :Message="Message" v-if="errorData && !loadingProduct" />
  <form @submit.prevent="createButton" class="container-items" novalidate>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Name</label>
        <input
          type="text"
          class="form-control"
          v-model="dataForm.name"
          placeholder="Name"
          :class="{ 'is-invalid': hasError('name') }"
        />
        <div v-if="hasError('name')" class="invalid-feedback">
          {{ errorObject.errorMessage }}
        </div>
      </div>

      <div class="form-group col-md-6">
        <label for="inputPassword4">Price</label>
        <input
          type="number"
          class="form-control"
          v-model="dataForm.price"
          placeholder="Price"
          :class="{ 'is-invalid': hasError('price') }"
        />
        <div v-if="hasError('price')" class="invalid-feedback">
          {{ errorObject.errorMessage }}
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="exampleFormControlTextarea1">Description</label>
      <textarea
        class="form-control"
        v-model="dataForm.description"
        :class="{ 'is-invalid': hasError('description') }"
      ></textarea>
      <div v-if="hasError('description')" class="invalid-feedback">
        {{ errorObject.errorMessage }}
      </div>
    </div>

    <div class="form-group">
      <label for="inputAddress2">Url Pinteres</label>
      <input
        type="text"
        class="form-control"
        v-model="dataForm.imagen"
        placeholder="Url Pinteres"
        :class="{ 'is-invalid': hasError('imagen') }"
      />
      <div v-if="hasError('imagen')" class="invalid-feedback">
        {{ errorObject.errorMessage }}
      </div>
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
import { reactive, ref, watch, computed } from "vue";
import LoadingProduct from "./LoadModel.vue";
import ErrorComponent from "./ErrorComponent.vue";
import RefeImag from "@/assets/imagen.svg";
import { Joi } from "vue-joi-validation";

const { result, makeRequest, errorData } = useAsync();
const loadingProduct = ref(false);
const router = useRouter();
const title = ref("Ooops!");
const Message = ref("Something went wrong the site did not charge properly 😣😣");
const imageSrc = ref(RefeImag);

const dataForm = reactive({
  name: "",
  price: "",
  description: "",
  imagen: "",
});

const errorObject = reactive({
  errorName: "",
  errorMessage: "",
});

const datos = {
  name: Joi.string().required().max(5),
  price: Joi.number().positive().precision(2).required(),
  description: Joi.string().required(),
  imagen: Joi.string().required(),
};

const hasError = computed(() => {
  return (property) => {
    return errorObject.errorName === property;
  };
});

async function createButton() {
  const resultFrom = Joi.validate(dataForm, datos, async (err, value) => {
    if (err) {
      console.log("error", err);
      let starForm = err.message;
      let starIndex = starForm.indexOf("[") + 1;
      let endIndex = starForm.indexOf("]");
      let element = starForm.substring(starIndex, endIndex);

      let cadena2 = element;

      const string = cadena2.slice(1);
      const string2 = string.indexOf('"');
      const final = string.slice(0, string2);
      let messageIndix = string.slice(string2 + 1);

      errorObject.errorName = final;
      errorObject.errorMessage = messageIndix;
    } else {
      loadingProduct.value = true;

      await makeRequest("product", {}, "POST", {
        imagen: dataForm.imagen,
        price: dataForm.price,
        title: dataForm.name,
        description: dataForm.description,
      });
      dataForm.imagen = "";
      dataForm.price = "";
      dataForm.name = "";
      dataForm.description = "";
      loadingProduct.value = false;
      router.push({ name: "DetalleProduct", params: { id: result.value.id } });
    }
  });
}

watch(
  () => dataForm.imagen,
  (val) => {
    if (val) {
      imageSrc.value = val;
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
  color: #fff;
  background-color: #a75d5d;
  border: #a75d5d;
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
