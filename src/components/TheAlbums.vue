<script setup>
import TheAlbum from "./TheAlbum.vue";
import { useTopTracksStore } from "@/stores/top-tracks";
import { storeToRefs } from "pinia";
import { ref } from "vue";
const topTracksStore = useTopTracksStore();
const { toptracks } = storeToRefs(topTracksStore);
console.log(toptracks.value);
</script>
<template>
  <section
    v-if="toptracks.length"
    class="border-t border-slate-200 bg-slate-100 py-5 pb-40 sm:pb-32"
  >
    <div class="mx-auto px-4 sm:px-6 md:px-4">
      <section class="lg:ml-120">
        <TheAlbum
          :cover="album.cover"
          :id="album.id"
          v-for="album in toptracks.album"
          :key="album.id"
        />
      </section>
    </div>
  </section>
  <div class="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120"></div>
</template>
