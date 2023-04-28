<template>
  <div class="containe-pagin">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a
            @click="back"
            v-if="page != 1"
            class="page-link"
            href="#"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li
          v-for="{ numberPage, id } in itemspage"
          :key="id"
          class="page-item"
          :class="{ active: isCurrent(numberPage) }"
        >
          <a @click="pageEvent(numberPage)" class="page-link" href="#">{{
            numberPage
          }}</a>
        </li>
        <li class="page-item">
          <a
            @click="forward"
            v-if="page < itemspage.length"
            class="page-link"
            href="#"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, defineEmits, inject, watch } from "vue";

const itemspage = ref([]);
const { page } = inject("page");

const emit = defineEmits(["pageEvent"]);

const { resultData } = inject("page");

const isCurrent = (nPage) => (nPage == page.value ? true : false);

function pageEvent(numberPage) {
  emit("pageEvent", numberPage);
}

watch(
  () => resultData.value,
  (val) => {
    console.log("resultData", resultData.value);
    const newItems = [...Array(resultData.value)].map((item, index) => ({
      numberPage: index + 1,
      id: `${index + 1}`,
    }));
    console.log(newItems);
    itemspage.value = newItems;
  },
  { immediate: true }
);

function back() {
  const newNumberPage = Number(page.value);
  emit("pageEvent", newNumberPage - 1);
}

function forward() {
  const newNumberPage = Number(page.value);
  emit("pageEvent", newNumberPage + 1);
}
</script>

<style scoped>
.containe-pagin {
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-item :hover {
  border: 1px solid #a75d5d;
  color: #a75d5d;
}

.page-link {
  color: #8d7b68;
}
</style>
