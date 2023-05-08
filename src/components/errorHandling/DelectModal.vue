<template>
  <teleport to="#app">
    <section class="modal-style">
      <LoadModel v-if="errorData && !isLoading" />
      <ErrorComponent v-if="errorData && isLoading" />
      <div class="modal__container">
        <h2>You are sure to want to remove product</h2>
        <div class="button-container">
          <button @click="deletePost()" type="button" class="btn btn-success">Yes</button>
          <button @click="closetModal" type="button" class="btn btn-danger">No</button>
        </div>
      </div>
    </section>
  </teleport>
</template>

<script setup>
import LoadModel from "../Navegacion/LoadModel.vue";
import ErrorComponent from "./ErrorComponent.vue";
import { defineEmits } from "vue";
import { useRoute } from "vue-router";
import { useAsync } from "@/hooks/useAsync";
import { useRouter } from "vue-router";

const { errorData, makeRequest, isLoading } = useAsync();

const route = useRoute();
const router = useRouter();

const { id } = route.params;

const emit = defineEmits(["closetModal"]);

function closetModal() {
  emit("closetModal", closetModal);
}

async function deletePost() {
  await makeRequest(`product/${id}`, {}, "delete");
  router.push({ name: "home" });
}

</script>

<style scoped>
.modal-style {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 5;
  display: grid;
  place-items: center;
}

.modal__container {
  width: 53%;
  height: 45%;
  display: grid;
  text-align: center;
  place-items: center;
  position: absolute;
  top: 100px;
  padding: 45px;
  background-color: #c7c7c7;
}

.modal__container h2 {
  font-size: x-large;
}

.modal__container p {
  display: flex;
  margin: 30px;
  text-align: center;
  font-family: "Red Hat Display", sans-serif;
  font-weight: 800;
}

.button-container {
  display: grid;
  grid-template-columns: repeat(2, auto);
  width: 80%;
  justify-content: space-around;
}
</style>
