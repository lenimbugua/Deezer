<script setup>
import { useArtistStore } from "@/stores/artist";
import { ref } from "vue";
const artistStore = useArtistStore();
const { search } = artistStore;

const query = ref("");
</script>

<template>
  <!-- =* * * * * * * * * * * Start Of Search Artists Input * * * * * * * * * * *= -->
  <input
    class="block p-3 rounded-lg ring-2 my-3 ring-violet-200 focus:outline-violet-400 focus:ring-violet-200 border-2 border-gray-300"
    type="search"
    placeholder="Type artisist name and hit enter...."
    required
    v-model="query"
    @keydown.enter="search(query)"
  />
  <!-- =* * * * * * * * * * * End Of Search Artists Input * * * * * * * * * * *= -->
</template>
