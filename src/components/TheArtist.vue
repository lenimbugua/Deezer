<script setup>
import { useArtistStore } from "@/stores/artist";
import { useTopTracksStore } from "@/stores/top-tracks";
import { storeToRefs } from "pinia";
import { ref } from "vue";
const artistStore = useArtistStore();
const { artist } = storeToRefs(artistStore);
const topTracksStore = useTopTracksStore();
const { fetchTop5Tracks } = topTracksStore;
</script>
<template>
  <section @click="fetchTop5Tracks(artist.id)" class="cursor-pointer">
    <div
      v-if="artist != null"
      class="relative mx-auto block w-full overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
      aria-label="Homepage"
    >
      <img
        alt=""
        sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
        :src="artist.picture"
        decoding="async"
        data-nimg="future"
        class="w-full h-full"
        style="color: transparent"
      />
      <div
        class="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl"
      ></div>
    </div>
    <div v-if="artist != null" class="mt-10 text-center lg:mt-12 lg:text-left">
      <p class="text-xl font-bold text-slate-900">
        <a href="/">{{ artist.name }}</a>
      </p>
    </div>
    <section v-if="artist != null" class="mt-12 hidden lg:block">
      <h2
        class="flex items-center font-mono text-sm font-medium leading-7 text-slate-900"
      >
        <svg aria-hidden="true" viewBox="0 0 10 10" class="h-2.5 w-2.5">
          <path
            d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
            class="fill-violet-300"
          ></path>
          <path
            d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
            class="fill-pink-300"
          ></path></svg
        ><span class="ml-2.5">About</span>
      </h2>
      <p class="mt-2 text-base leading-7 text-slate-700 lg:line-clamp-4">
        {{ artist.fans }} Fans
      </p>
      <p class="mt-2 text-base leading-7 text-slate-700 lg:line-clamp-4">
        {{ artist.albums }} Albums
      </p>
    </section>
  </section>
</template>
