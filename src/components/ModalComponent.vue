<template>
<teleport to="#app">
    <section id="modal" class="modal-style">
        <div class="modal__container">
            <h2>{{ title }}</h2>
            <p>{{ Message }}</p>
        </div>
    </section>
    </teleport>
</template>

<script setup>
import { toRefs, defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
  },
  Message: {
    type: String,
  }
});

const { title, Message } = toRefs(props);
</script>

<style scoped>
.modal-style {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(236, 242, 255);
  z-index: 5;

  display: grid;
  place-items: center;

}

.modal__container {
  background-color: #E5D1FA;
  width: 53%;
  height: 45%;
  display: grid;
  place-items: center;
  position: absolute;
  top: 100px;
}

.modal__container h2 {
  font-size: x-large;
}

.modal__container p {
  display: flex;
  margin: 30px;
  text-align: center;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 800;
}
</style>
