<script setup>
import { useSearchStore } from "@/stores/search";
import SearchArtists from "@/components/SearchArtists.vue";
const searchStore = useSearchStore();
const { search } = searchStore;
searchStore.search();
</script>
<template>
  <SearchArtists />
</template>
