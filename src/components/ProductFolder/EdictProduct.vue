<template>
  <LoadModel v-if="!errorData && isLoading" />
  <ErrorComponent :title="title" :Message="Message" v-if="errorData && !isLoading" />
  <div class="container-edic">
    <div class="arrow">
      <img @click="backInict" class="arrow-leth" src="@/assets/atras.png" alt="atras" />
    </div>
    <form @submit.prevent="editButton" class="container-edict">
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
          rows="3"
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
        <img class="card-img-top" :src="imgEdit" alt="" />
      </div>

      <button class="btn btn-primary">Edit</button>
    </form>
  </div>
</template>

<script setup>
import { useAsync } from "@/hooks/useAsync";
import { reactive, ref, onMounted, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import LoadModel from "../Navegacion/LoadModel.vue";
import ErrorComponent from "../errorHandling/ErrorComponent.vue";
import EditImag from "@/assets/imagen.svg";
import { Joi } from "vue-joi-validation";

const { result, errorData, makeRequest, isLoading } = useAsync();
const route = useRoute();
const { id } = route.params;
const router = useRouter();
const imgEdit = ref(EditImag);
const title = ref("Ooops!");
const Message = ref("Something went wrong the site did not charge properly 😣😣");

function backInict() {
  router.push({ name: "home" });
}

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
  price: Joi.number().required(),
  description: Joi.string().required(),
  imagen: Joi.string().required(),
};

onMounted(async () => {
  await makeRequest(`product/${id}`);
  dataForm.name = result.value.title;
  dataForm.price = result.value.price;
  dataForm.description = result.value.description;
  dataForm.imagen = result.value.imagen;
});

const hasError = computed(() => {
  return (property) => {
    return errorObject.errorName === property;
  };
});

watch(
  () => dataForm.imagen,
  (val) => {
    if (val) {
      imgEdit.value = val;
    }
    console.log("Previsualuzacion imagen", dataForm);
  }
);

function editButton() {
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
      isLoading.value = true;
      await makeRequest(`product/${id}`, {}, "put", {
        imagen: dataForm.imagen,
        price: dataForm.price,
        title: dataForm.name,
        description: dataForm.description,
      });
      isLoading.value = false;
      router.push({ name: "DetalleProduct", params: { id: result.value.id } });
    }
  });
}
</script>

<style scoped>
.container-edic {
  display: grid;
  grid-template-columns: 30px 1fr;
  justify-content: center;
  align-items: center;
}
.container-edict {
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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
