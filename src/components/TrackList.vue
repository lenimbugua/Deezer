<script setup>
import { useTopTracksStore } from "@/stores/top-tracks";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import ListenAudio from "./music/ListenAudio.vue";
const topTracksStore = useTopTracksStore();
const { toptracks } = storeToRefs(topTracksStore);

const formatDuration = (duration) => {
  duration /= 60;
  return duration.toFixed(2);
};
</script>

<template>
  <div v-if="toptracks.length" class="bg-white rounded-md w-5/6 mx-4">
    <div>
      <div class="-mx-4 sm:-mx-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  colspan="3"
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  <h2
                    class="mt-2 flex space-x-2 text-lg font-bold text-slate-900"
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
                    <a href="/5">Top 5 Tracks</a>
                  </h2>
                </th>
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
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ formatDuration(track.duration) }}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <ListenAudio />
</template>
