<script setup>
import TheSpin from "@/components/TheSpin.vue";
import { useArtistStore } from "@/stores/artist";
import { useTopTracksStore } from "@/stores/top-tracks";
import { storeToRefs } from "pinia";

import { useUiStore } from "@/stores/uistore";
const { setError } = useUiStore();

const artistStore = useArtistStore();
const { artist, loading } = storeToRefs(artistStore);
const { error, errorMessage } = storeToRefs(useTopTracksStore);
const topTracksStore = useTopTracksStore();
const { fetchTop5Tracks } = topTracksStore;

const formatNum = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num;
};

const fetchTopTracks = async (id) => {
  await fetchTop5Tracks(id);
  if (error.value) {
    setError(errorMessage.value);
  }
};
</script>
<template>
  <TheSpin v-if="loading" />
  <section @click="fetchTop5Tracks(artist.id)" class="cursor-pointer mt-3">
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
    <div v-if="artist != null" class="mt-3 lg:text-left">
      <p class="text-xl font-semibold text-slate-800">
        <a href="/">{{ artist.name }}</a>
      </p>
    </div>
    <section v-if="artist != null" class="mt-2">
      <div class="flex space-x-2 mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 fill-blue-300 text-violet-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>

        <p class="text-md sm:text-xs align-baseline text-slate-700">
          {{ formatNum(artist.fans) }} Fans
        </p>
      </div>
      <div class="space-x-2 hidden md:flex">
        <svg aria-hidden="true" viewBox="0 0 10 10" class="h-4 w-4">
          <path
            d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
            class="fill-violet-300"
          ></path>
          <path
            d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
            class="fill-pink-300"
          ></path>
        </svg>
        <p class="text-xs text-gray-600">{{ artist.albums }} Albums</p>
      </div>
    </section>
  </section>
</template>
