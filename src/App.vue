<script setup>
import TheDetails from "./components/TheDetails.vue";
import TheBreadcrump from "./components/TheBreadcrump.vue";
import TheArtist from "./components/TheArtist.vue";
import SearchArtists from "./components/SearchArtists.vue";
import TheChannels from "./components/TheChannels.vue";
import TheAlbums from "./components/TheAlbums.vue";
import TheToast from "./components/TheToast.vue";

import { useUiStore } from "@/stores/uistore";
import { storeToRefs } from "pinia";
import MusicSVG from "./components/MusicSVG.vue";
const { toast } = storeToRefs(useUiStore());
</script>

<template>
  <!-- =* * * * * * * * * *  Start Of the header * * * * * * * * * * *= -->
  <header
    class="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120"
  >
    <!-- =* * * * * * * * * * * Start Of the Breadcrump * * * * * * * * * * *= -->
    <TheBreadcrump />
    <!-- =* * * * * * * * * * * End Of the Breadcrump * * * * * * * * * * *= -->

    <div
      class="relative z-10 lg:mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:py-12 lg:px-8 xl:px-12"
    >
      <!-- =* * * * * * * * * * * Start Of the Logo * * * * * * * * * * *= -->
      <div class="-top-5 md:block mb-6">
        <div class="lg:max-w-4xl">
          <div class="flex mx-auto md:max-w-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 text-violet-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
              />
            </svg>

            <h1 class="text-2xl font-bold leading-7 text-slate-900">Deezer</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 text-violet-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
              />
            </svg>
          </div>
        </div>
      </div>
      <!-- =* * * * * * * * * * * End Of the Logo * * * * * * * * * * *= -->

      <SearchArtists class="block lg:hidden my-4 w-full" />

      <!-- = * * * * * * * * *  Start Of the Artist * * * * * * * * * * = -->
      <TheArtist />
      <!-- =* * * * * * * * * *  End Of the Artist * * * * * * * * * * *= -->
    </div>
  </header>
  <!-- =* * * * * * * * * * * End of the header * * * * * * * * * * *= -->

  <!-- = * * * * * * * * *  Start Of the Details * * * * * * * * * * = -->
  <TheDetails />
  <!-- = * * * * * * * * *  End Of the Details * * * * * * * * * * = -->

  <!-- = * * * * * * * * *  Start Of the Albums * * * * * * * * * * = -->
  <TheAlbums />
  <!-- = * * * * * * * * *  End Of the Albums * * * * * * * * * * = -->

  <!-- = * * * * * * * * *  Start Of the Toast* * * * * * * * * * = -->

  <div v-if="toast != null">
    <Transition name="toast" v-show="toast.hasError">
      <TheToast>{{ toast.message }}</TheToast>
    </Transition>
  </div>
  <!-- = * * * * * * * * *  End Of the Toast * * * * * * * * * * = -->
  <MusicSVG />
</template>

<style scoped>
.toast-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-enter-active {
  transition: all 0.3s ease;
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-leave-active {
  transition: all 0.3s ease;
}
</style>
