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
    class="w-full p-3 ring-inset block border-2 border-gray-300"
    type="search"
    placeholder="Type artisist name and hit enter...."
    required
    v-model="query"
    @keydown.enter="search(query)"
  />
  <!-- =* * * * * * * * * * * End Of Search Artists Input * * * * * * * * * * *= -->
</template>
