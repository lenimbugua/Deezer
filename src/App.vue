<script setup>
import { useSearchStore } from "@/stores/search";
const searchStore = useSearchStore();
const { search } = searchStore;
searchStore.search();
</script>
<template>
  <div></div>
</template>
