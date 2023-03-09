<template>
  <div>
    <ListProduct v-if="!errorData && !isLoading" :arrayItem="result" />
    <LoadModel v-if="!errorData && isLoading" />
    <ErrorComponent 
      :title='title'
      :Message='Message'
      v-if="errorData && !isLoading"
    />
  </div>
</template>

<script setup>
import LoadModel from "./LoadModel.vue";
import { ref, provide, watch, onMounted } from "vue";
import { useAsync } from "../hooks/useAsync";
import ListProduct from "./ListProduct.vue";
import ErrorComponent from "./ErrorComponent.vue";

const { result, errorData, makeRequest, isLoading } = useAsync();
const page = ref('1');
const limit = ref('5');
const title = ref('Ooops!');
const Message = ref('Something went wrong the site did not charge properly 😣😣');

const getRequest = async() => {
await makeRequest("product", {
  _page: page.value,
  _limit: limit.value
  });   
};

onMounted(() => {
  getRequest()
});

function changePage(args) {
  console.log('eventHome', args);
  page.value = args;
}

provide('page', {
  page,
  changePage,
});

watch(
  () => page.value,
  (val) => {
    console.log('HomeMain');
    isLoading.value = true;
    errorData.val = null;
    return getRequest()
  }
);
</script>
