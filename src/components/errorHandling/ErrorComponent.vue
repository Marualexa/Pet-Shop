<template>
  <Modal :title='title' :Message='Message' />
</template>

<script setup>
import { toRefs, defineProps } from "vue";
import Modal from './ModalComponent.vue'

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