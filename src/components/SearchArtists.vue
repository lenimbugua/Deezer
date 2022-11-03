<script setup>
import { useArtistStore } from "@/stores/artist";
import { useUiStore } from "@/stores/uistore";
import { useTopTracksStore } from "@/stores/top-tracks";

import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
const artistStore = useArtistStore();
const { search } = artistStore;
const { error, errorMessage } = storeToRefs(artistStore);
const { setError } = useUiStore();

const query = ref("");
const router = useRouter();
const searchArtist = async (query) => {
  //reset album store
  useTopTracksStore().$reset();
  await search(query);
  if (error.value) {
    setError(errorMessage.value);
  }
  router.push("/");
};
</script>

<template>
  <!-- =* * * * * * * * * * * Start Of Search Artists Input * * * * * * * * * * *= -->
  <input
    class="block p-3 rounded-lg ring-2 my-3 ring-violet-200 focus:outline-violet-400 focus:ring-violet-200 border-2 border-gray-300"
    type="search"
    placeholder="Type artisist name and hit enter...."
    required
    v-model="query"
    @keydown.enter="searchArtist(query)"
  />
  <!-- =* * * * * * * * * * * End Of Search Artists Input * * * * * * * * * * *= -->
</template>
