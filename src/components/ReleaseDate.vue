<script setup>
import { useAlbumStore } from "@/stores/albums";
import { storeToRefs } from "pinia";
import utils from "@/utilities/utils";
const albumStore = useAlbumStore();
const { fetchAlbums } = albumStore;
const props = defineProps({
  id: Number,
});
fetchAlbums(props.id);
const { album } = storeToRefs(albumStore);

const { getYear } = utils();
const getReleaseDate = (albumID) => {
  let singleAlbum = album.value.find((album) => {
    return album.id === albumID;
  });
  if (singleAlbum) {
    return getYear(singleAlbum.releaseDate);
  }
};
</script>
<template>
  <!--=* * * * * * * * * * * Album Release Date Start * * * * * * * * * * *=-->

  <time
    v-if="album.length"
    datetime="2022"
    class="order-first font-mono text-sm leading-7 text-slate-500 pt-3"
    >{{ getReleaseDate(id) }}</time
  >
  <!--=* * * * * * * * * * * Album Release Date Start * * * * * * * * * * *=-->
</template>
