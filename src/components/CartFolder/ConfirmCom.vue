<template>
  <div class="detail-confirm">
    <div class="arrow">
      <img @click="arrowItem" class="arrow-leth" src="@/assets/atras.png" alt="atras" />
    </div>
    <div class="container-product">
      <h2>Finalizar Compra</h2>
      <p>Datos de Facturación</p>
      <p>Los campos marcados con * son obligatorios</p>
      <div class="container">
        <div class="row">
          <div class="col-lg-9 col-md-9">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="name">Name(s)*</label>
                  <input
                    type="text"
                    v-model="dataForm.name"
                    class="form-control"
                    placeholder="Enter your(s) name(s)"
                    :class="{ 'is-invalid': hasError('name') }"
                  />
                  <div v-if="hasError('name')" class="invalid-feedback">
                    {{ errorObject.errorMessage }}
                  </div>
                </div>

                <div class="form-group col-md-6">
                  <label for="LastName">Last Name(s)*</label>
                  <input
                    type="text"
                    v-model="dataForm.lastName"
                    class="form-control"
                    placeholder="Enter your(s) last name(s)"
                    :class="{ 'is-invalid': hasError('lastName') }"
                  />
                  <div v-if="hasError('lastName')" class="invalid-feedback">
                    {{ errorObject.errorMessage }}
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="identification">Identification Number*</label>
                  <input
                    type="text"
                    v-model="dataForm.identification"
                    class="form-control"
                    formControlname="numberId"
                    placeholder="Please enter the identification number"
                    :class="{ 'is-invalid': hasError('identification') }"
                  />
                  <div v-if="hasError('identification')" class="invalid-feedback">
                    {{ errorObject.errorMessage }}
                  </div>
                </div>

                <div class="form-group col-2">
                  <label for="callsign">Callsign*</label>
                  <select class="form-control">
                    <option selected>+57</option>
                    <option selected>+58</option>
                  </select>
                </div>

                <div class="form-group col-4">
                  <label for="cellPhone">Cell phone*</label>
                  <input
                    type="text"
                    v-model="dataForm.cell"
                    @keydown="validarNumerico"
                    class="form-control"
                    placeholder="31000000000"
                    :class="{ 'is-invalid': hasError('cell') }"
                  />
                  <div v-if="hasError('cell')" class="invalid-feedback">
                    {{ errorObject.errorMessage }}
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="city">City*</label>
                  <input
                    type="text"
                    v-model="dataForm.city"
                    class="form-control"
                    :class="{ 'is-invalid': hasError('city') }"
                  />
                  <div v-if="hasError('city')" class="invalid-feedback">
                    {{ errorObject.errorMessage }}
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="municipality">Municipality</label>
                  <input type="text" class="form-control" placeholder="Municipality" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="destination">Destination address*</label>
                  <input
                    type="text"
                    v-model="dataForm.destination"
                    class="form-control"
                    placeholder="CL 9B 23C 65*"
                    :class="{ 'is-invalid': hasError('destination') }"
                  />
                  <div v-if="hasError('destination')" class="invalid-feedback">
                    {{ errorObject.errorMessage }}
                  </div>
                </div>

                <div class="form-group col-md-6">
                  <label for="email">Email*</label>
                  <input
                    type="text"
                    v-model="dataForm.email"
                    class="form-control"
                    placeholder="Email*"
                    :class="{ 'is-invalid': hasError('email') }"
                  />
                  <div v-if="hasError('email')" class="invalid-feedback">
                    {{ errorObject.errorMessage }}
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-3 col-md-4">
            <ResumCar @confirm-order="goToPage" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Joi } from "vue-joi-validation";
import { computed, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import ResumCar from "./ResumCar.vue";
import { useAsync } from "@/hooks/useAsync";
import { useCartStore } from "@/store/cartContainer";

const { result, errorData, makeRequest, isLoading } = useAsync();
const router = useRouter();
const route = useRoute();

const store = useCartStore();

const { id } = route.params;
console.log("conseguir", id);

function arrowItem() {
  router.push({ name: "cartDetail" });
}

onMounted(() => {
  store.getAddStore();
});

const dataForm = reactive({
  name: "",
  lastName: "",
  identification: "",
  cell: "",
  city: "",
  destination: "",
  email: "",
});

const errorObject = reactive({
  errorName: "",
  errorMessage: "",
});

const form = {
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  identification: Joi.number().required(),
  cell: Joi.number().min(9).required(),
  city: Joi.string().required(),
  destination: Joi.string().required(),
  email: Joi.string().email().required(),
};

const hasError = computed(() => {
  return (property) => {
    return errorObject.errorName === property;
  };
});

const goToPage = () => {
  const resultFrom = Joi.validate(dataForm, form, async (err, value) => {
    if (err) {
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
      await makeRequest(`order/${id}`, {}, "put", {
        products: store.getCartPets,
        total: store.getTotalPrice,
        name: dataForm.name,
        lastName: dataForm.lastName,
        identification: dataForm.identification,
        cell: dataForm.cell,
        city: dataForm.city,
        destination: dataForm.destination,
        email: dataForm.email,
        meansOfPayment: "Tarjeta Crédito o Débito",
        paymentStatus: "No pagado",
      }),
        router.push({ name: "orderReady", params: { id: result.value.id } });
    }
  });
};
</script>

<style scoped>
.detail-confirm {
  display: grid;
  grid-template-columns: 30px 1fr;
  justify-content: center;
  align-items: center;
}
.container-product {
  margin: 30px;
}
.arrow {
  width: 100%;
  height: 100%;
}
.arrow-leth {
  width: 45px;
  height: 45px;
  z-index: 2;
  padding: 12px;
  border-radius: 50%;
}
</style>
