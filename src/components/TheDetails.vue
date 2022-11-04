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
  <!-- =* * * * * * * * * *  The details Start * * * * * * * * * * *= -->
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
                      <div
                        class="flex pb-3 items-center font-mono text-sm font-medium leading-7 text-slate-900"
                      >
                        <img src="@/assets/album.svg" class="h-8 w-8" />
                        <div class="">
                          <div class="lg:max-w-4xl">
                            <div class="mx-auto px-3">
                              <h3
                                class="text-2xl font-bold leading-5 text-slate-900"
                              >
                                Albums
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
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
