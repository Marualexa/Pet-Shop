<template>
  <Suspense>
    <template #default>
      <asyncComponent :arrayItem="result" :title='title' :Message='Message' />
    </template>
    <template #fallback>
      <LoadModel />
    </template>
  </Suspense>
</template>

<script setup>
import LoadModel from "./LoadModel.vue";
import ErrorComponent from "./ErrorComponent.vue";
import { defineAsyncComponent, ref } from "vue";
import { useAsync } from "../hooks/useAsync";

const title = ref('Ooops!');
const Message = ref('Something went wrong the site did not charge properly 😣😣')

const { result, errorData, makeRequest } = useAsync();

const asyncComponent = defineAsyncComponent(async () => {
  return makeRequest("product")
    .then((response) => import("./ListProduct.vue"))
    .catch((error) => {
      console.log("entra aqui");
      return import("./ErrorComponent.vue");
    });
});

</script>
