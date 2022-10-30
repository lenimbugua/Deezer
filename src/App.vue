<script setup>
import SearchArtists from "@/components/SearchArtists.vue";
import TheDetails from "./components/TheDetails.vue";
import TheBreadcrump from "./components/TheBreadcrump.vue";
import TheArtist from "./components/TheArtist.vue";
import TheChannels from "./components/TheChannels.vue";
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
      class="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:py-12 lg:px-8 xl:px-12"
    >
      <SearchArtists />
      <!-- = * * * * * * * * *  Start Of the Artist * * * * * * * * * * = -->
      <TheArtist />
      <!-- =* * * * * * * * * *  End Of the Artist * * * * * * * * * * *= -->

      <!-- =* * * * * * * * * *  Start Of the TheChannels * * * * * * * * * * *= -->
      <TheChannels />
      <!-- =* * * * * * * * * *  End Of the TheChannels * * * * * * * * * * *= -->
    </div>
  </header>
  <!-- =* * * * * * * * * * * End of the header * * * * * * * * * * *= -->

  <TheDetails/>
</template>
