<script setup>
import HeaderMenu from "./components/HeaderMenu.vue";
import { ref, provide } from "vue";

const showBurge = ref(false);

function showMenu(args) {
  showBurge.value = args;
}

provide('showBurge', {
  showBurge,
  showMenu
});

</script>

<template>
<div>
  <HeaderMenu />
</div>
<router-view />
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
