<template>
  <div>
    <ListProduct v-if="!errorData && !isLoading" :arrayItem="result" />
    <LoadModel v-if="!errorData && isLoading" />
    <ErrorComponent :title="title" :Message="Message" v-if="errorData && !isLoading" />
  </div>
</template>

<script setup>
import LoadModel from "./LoadModel.vue";
import { ref, provide, watch, onMounted } from "vue";
import { useAsync } from "@/hooks/useAsync";
import ListProduct from "../ProductFolder/ListProduct.vue";
import ErrorComponent from "../errorHandling/ErrorComponent.vue";
import { useCartStore } from "@/store/cartContainer";

const store = useCartStore();

const { result, errorData, makeRequest, isLoading, cabecera } = useAsync();
const page = ref("1");
const limit = ref("5");
const title = ref("Ooops!");
const Message = ref("Something went wrong the site did not charge properly 😣😣");
const resultData = ref(null);

const getRequest = async () => {
  await makeRequest("product", {
    _page: page.value,
    _limit: limit.value,
  });
  const { "x-total-count": xTotal } = cabecera.value;
  const numberStrin = Number(xTotal);
  const stringLimit = Number(limit.value);

  const divition = numberStrin / stringLimit;
  resultData.value = Math.ceil(divition);
};

onMounted(() => {
  getRequest();
  store.getAddStore();
});

function changePage(args) {
  page.value = args;
}

provide("page", {
  page,
  changePage,
  resultData,
});

watch(
  () => page.value,
  (val) => {
    isLoading.value = true;
    errorData.val = null;
    return getRequest();
  }
);
</script>
