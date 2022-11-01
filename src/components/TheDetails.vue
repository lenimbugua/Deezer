<script setup>
import SearchArtists from "@/components/SearchArtists.vue";
import MusicSVG from "./MusicSVG.vue";
import TrackList from "./TrackList.vue";
import TheSpin from "./TheSpin.vue";

import { useTopTracksStore } from "@/stores/top-tracks";
import { storeToRefs } from "pinia";
const topTracksStore = useTopTracksStore();
const { toptracks, loading } = storeToRefs(topTracksStore);
</script>
<template>
  <!-- =* * * * * * * * * *  The details * * * * * * * * * * *= -->
  <TheSpin v-if="loading" />
  <main
    v-else
    class="border-t border-slate-200 lg:relative lg:ml-112 lg:border-t-0 xl:ml-120"
  >
    <MusicSVG />
    <div class="relative">
      <div class="lg:pt-12">
        <SearchArtists class="hidden lg:block w-5/6 ml-4" />

        <div
          class="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100"
        >
          <article>
            <div class="lg:px-8">
              <div class="lg:max-w-4xl">
                <div class="mx-auto px-4 md:max-w-7xl lg:px-0">
                  <div class="flex flex-col items-start">
                    <!-- =* * * * * * * * * *  Start Of the tracklist table * * * * * * * * * * *= -->
                    <TrackList />
                    <!-- =* * * * * * * * * *  End Of the tracklist table * * * * * * * * * * *= -->
                    <div class="mt-4 flex items-center" v-if="toptracks.length">
                      <h2
                        class="flex pb-3 items-center font-mono text-sm font-medium leading-7 text-slate-900"
                      >
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 10 10"
                          class="h-6 w-6"
                        >
                          <path
                            d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                            class="fill-violet-300"
                          ></path>
                          <path
                            d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                            class="fill-pink-300"
                          ></path>
                        </svg>
                        <div class="">
                          <div class="lg:max-w-4xl">
                            <div class="mx-auto px-3">
                              <h1
                                class="text-2xl font-bold leading-5 text-slate-900"
                              >
                                Albums
                              </h1>
                            </div>
                          </div>
                        </div>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </main>
  <!-- =* * * * * * * * * *  The details End * * * * * * * * * * *= -->
</template>
