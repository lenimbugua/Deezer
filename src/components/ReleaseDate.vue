<script setup>
import { useAlbumStore } from "@/stores/albums";
import { storeToRefs } from "pinia";
const albumStore = useAlbumStore();
const { fetchAlbums } = albumStore;
const props = defineProps({
  id: Number,
});
fetchAlbums(props.id);
const { album } = storeToRefs(albumStore);
console.log(album);
</script>
<template>
  <time
    v-if="album"
    datetime="2022-02-24T00:00:00.000Z"
    class="order-first font-mono text-sm leading-7 text-slate-500 pt-3"
    >{{ album.releaseDate }}</time
  >
</template>
