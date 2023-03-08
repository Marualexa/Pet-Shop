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
import { defineAsyncComponent, ref, provide, watch } from "vue";
import { useAsync } from "../hooks/useAsync";

const title = ref('Ooops!');
const Message = ref('Something went wrong the site did not charge properly 😣😣');
const { result, errorData, makeRequest } = useAsync();
const page = ref('1');

const getRequest = () => {
  return makeRequest("product", page.value)
    .then((response) => import("./ListProduct.vue"))
    .catch((error) => {
      console.log("entra aqui");
      return import("./ErrorComponent.vue");
    })
};

const asyncComponent = defineAsyncComponent(async () => {
  return getRequest();
});

function changePage(args) {
  console.log('eventHome', args);
  page.value = args;
}

provide('page', {
  page,
  changePage
})


watch(
  () => page.value,
  (val) => {
    console.log('HomeMain', )
     return getRequest();
  }
)

</script>
