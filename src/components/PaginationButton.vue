<template>
<div class='containe-pagin'>
  <nav aria-label="Page navigation example">
    <ul class="pagination">


      <li v-for="{ numberPage, id } in itemspage" :key="id" class="page-item">
        <a @click="pageEvent(numberPage)" class="page-link" href="#">{{ numberPage }}</a>
      </li>

    </ul>
  </nav>
</div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const itemspage = ref([
{
 numberPage: 1,
 id: '1'
},
{
  numberPage: 2,
  id: '2'
}
]);

const emit = defineEmits(['pageEvent'])
  
function pageEvent(numberPage) {
  emit('pageEvent', numberPage);
}

</script>

<style scoped>
.containe-pagin {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>