<script setup>
import { useTopTracksStore } from "@/stores/top-tracks";
import { useTrackStore } from "@/stores/track";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import PlayMusic from "./play/PlayMusic.vue";
const topTracksStore = useTopTracksStore();
const { toptracks } = storeToRefs(topTracksStore);

const { setTrack, unsetTrack } = useTrackStore();
const { track } = storeToRefs(useTrackStore());

const formatDuration = (duration) => {
  duration /= 60;
  return duration.toFixed(2);
};
const playTrack = (title, source, duration) => {
  if (track.value) {
    unsetTrack();
  } else {
    setTrack({ title, source, duration });
  }
};
</script>

<template>
  <div
    v-if="toptracks.length"
    class="bg-white rounded-md mx-0 sm:w-5/6 sm:mx-4"
  >
    <div>
      <div class="-mx-4 sm:-mx-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <h2
            class="my-2 sm:px-8 flex space-x-2 text-lg font-bold text-slate-900"
          >
            <svg aria-hidden="true" viewBox="0 0 10 10" class="h-5 w-5">
              <path
                d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                class="fill-violet-300"
              ></path>
              <path
                d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                class="fill-pink-300"
              ></path>
            </svg>
            <div>Top 5 Tracks</div>
          </h2>
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                ></th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  class="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Duration
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(track, index) in toptracks" :key="index">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ index + 1 }}
                  </p>
                </td>
                <td class="py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img
                        class="w-full h-full rounded-full"
                        :src="track.album.cover"
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ track.title }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 text-center whitespace-no-wrap">
                    {{ formatDuration(track.duration) }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button
                    @click="
                      playTrack(track.title, track.source, track.duration)
                    "
                    type="button"
                    class="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                    aria-label="Play episode 5: Bill Lumbergh"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 10 10"
                      fill="none"
                      class="h-2.5 w-2.5 fill-current"
                    >
                      <path
                        d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z"
                      ></path></svg
                    ><span class="ml-3" aria-hidden="true">Listen</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <PlayMusic v-if="track" />
</template>
