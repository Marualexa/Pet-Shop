<script setup>
import HeaderMenu from "@/components/Navegacion/HeaderMenu.vue";
import { ref, provide } from "vue";
import { useCartStore } from "@/store/cartContainer";

const store = useCartStore();

const showBurge = ref(false);

function showMenu(args) {
  showBurge.value = args;
}

provide('showBurge', {
  showBurge,
  showMenu
});

function general() {
  if(store.getOpenCart === true) {
    !store.neglectingCart()
  }
}

</script>
<template>
<div>
  <HeaderMenu />
</div>
<router-view @click="general"/>
</template>


<style scoped>
html,
body,
.app {
  min-height: 100vh;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #eeeeee;
}
</style>
