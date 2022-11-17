<script setup>
import { storeToRefs } from 'pinia'
import TheDetails from '@/components/TheDetails.vue'
import TheBreadcrump from '@/components/TheBreadcrump.vue'
import TheArtist from '@/components/TheArtist.vue'
import SearchArtists from '@/components/SearchArtists.vue'
import TheAlbums from '@/components/TheAlbums.vue'
import TheToast from '@/components/TheToast.vue'
import TheDeezerLogo from '@/components/TheDeezerLogo.vue'
import MusicSVG from '@/components/MusicSVG.vue'
import { useUiStore } from '@/stores/uistore'

const { toast } = storeToRefs(useUiStore())
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
      <TheDeezerLogo />

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
    <Transition v-show="toast.hasError" name="toast">
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
