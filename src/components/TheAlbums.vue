<script setup>
import TheSpin from "@/components/TheSpin.vue";
import ReleaseDate from "./ReleaseDate.vue";
import { useTopTracksStore } from "@/stores/top-tracks";
import { storeToRefs } from "pinia";
import MusicSVG from "./MusicSVG.vue";
const topTracksStore = useTopTracksStore();
const { toptracks, loading } = storeToRefs(topTracksStore);
</script>
<template>
  <!--=* * * * * * * * * * * Albums Start * * * * * * * * * * *=-->
  <TheSpin v-if="loading" />
  <section
    v-if="toptracks.length"
    class="border-t border-slate-200 bg-slate-100 py-5 pb-40 sm:pb-32"
  >
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

          <div class="mt-3 font-semibold text-slate-700">
            {{ track.album.title }}
          </div>
          <ReleaseDate v-if="toptracks" :id="track.album.id" />
        </div>
      </section>
    </div>
  </section>
  <div class="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120"></div>
  <!--=* * * * * * * * * * * Albums End * * * * * * * * * * *=-->
</template>
