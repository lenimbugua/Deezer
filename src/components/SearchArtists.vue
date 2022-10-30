<script setup>
import { useArtistStore } from "@/stores/search";
import { ref } from "vue";
const searchStore = useArtistStore();
const { search } = searchStore;

const query = ref("");
</script>

<template>
  <!-- =* * * * * * * * * * * Start Of Search Artists Input * * * * * * * * * * *= -->
  <h1>Search Artist</h1>
  <input
    class="w-full p-3 ring-inset block border-2 border-gray-300"
    type="search"
    id="site-search"
    required
    v-model="query"
    @keydown.enter="search(query)"
  />
  <!-- =* * * * * * * * * * * End Of Search Artists Input * * * * * * * * * * *= -->
</template>
