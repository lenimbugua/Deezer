<script setup>
import ReleaseDate from "./ReleaseDate.vue"
import { useTopTracksStore } from "@/stores/top-tracks";
import { storeToRefs } from "pinia";
const topTracksStore = useTopTracksStore();
const { toptracks } = storeToRefs(topTracksStore);
</script>
<template>
  <section class="border-t border-slate-200 bg-slate-100 py-5 pb-40 sm:pb-32">
    <div class="mx-auto">
      <section class="lg:ml-120 grid grid-cols-3 sm:grid-cols-5 gap-3 px-4">
        <div
          v-for="track in toptracks"
          :key="track.title"
          class="cursor-pointer"
        >
          <div
            class="relative w-24 h-24 sm:w-36 sm:h-36 overflow-hidden block rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:rounded-xl"
          >
            <img
              alt=""
              :src="track.album.cover"
              decoding="async"
              data-nimg="future"
              class="aspect-square h-full w-full absolute inset-0"
              style="color: transparent"
            />
          </div>

          <div>{{ track.album.title }}</div>
          <ReleaseDate :id="track.album.id"/>
        </div>
      </section>
    </div>
  </section>
  <div class="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120"></div>
</template>
