<script setup>
import HeaderMenu from "./components/HeaderMenu.vue";
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
