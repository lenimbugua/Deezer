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

const getReleaseDate = (albumID) => {
  let singleAlbum = album.value.find((album) => {
    return album.id === albumID;
  });
  if (singleAlbum) {
    return singleAlbum.releaseDate;
  }
};
</script>
<template>
  <!--=* * * * * * * * * * * Album Release Date Start * * * * * * * * * * *=-->
  <time
    v-if="album.length"
    datetime="2022-02-24T00:00:00.000Z"
    class="order-first font-mono text-sm leading-7 text-slate-500 pt-3"
    >{{ getReleaseDate(id) }}</time
  >
  <!--=* * * * * * * * * * * Album Release Date Start * * * * * * * * * * *=-->
</template>
