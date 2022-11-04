<script setup>
import MusicSVG from "@/components/MusicSVG.vue";
import SearchArtists from "@/components/SearchArtists.vue";
import TheDeezerLogo from "./TheDeezerLogo.vue";
import TheSpin from "@/components/TheSpin.vue";
import { useArtistStore } from "@/stores/artist";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import utils from "@/utilities/utils";

const { artists, loading } = storeToRefs(useArtistStore());
const { setSingleArtist } = useArtistStore();
const { formatNum } = utils();

const router = useRouter();
const setArtist = (name, id, picture, fans, albums) => {
  setSingleArtist({ name, id, picture, fans, albums });
  router.push({ name: "artist", params: { id: id } });
};
</script>

<template>
  <div class="px-4 lg:px-24 mb-10">
    <div class="justify-center flex pt-4">
      <TheDeezerLogo />
    </div>
    <MusicSVG />
    <SearchArtists class="w-full" />
  </div>

  <TheSpin v-if="loading" />
  <section
    class="block sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 px-4 lg:px-20"
  >
    <div
      v-for="(artist, index) in artists"
      @click="
        setArtist(
          artist.name,
          artist.id,
          artist.picture_big,
          artist.nb_fan,
          artist.nb_album
        )
      "
      v-if="artists.length"
      class="mb-8 cursor-pointer"
    >
      <div
        :key="index"
        class="relative lg:mx-auto block overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:rounded-2xl"
        aria-label="Homepage"
      >
        <img
          alt=""
          :src="artist.picture_big"
          decoding="async"
          data-nimg="future"
          class="w-full h-full block"
          style="color: transparent"
        />
        <div
          class="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl"
        ></div>
        <section class="p-4">
          <div class="lg:text-left">
            <p
              class="text-ellipsis overflow-hidden text-lg font-semibold text-slate-800"
            >
              {{ artist.name }}
            </p>
          </div>
          <div class="flex space-x-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 fill-violet-400 text-blue-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              ></path>
            </svg>
            <p class="text-md sm:text-xs align-baseline text-slate-700">
              {{ formatNum(artist.nb_fan) }} Fans
            </p>
          </div>
          <div class="space-x-2 hidden sm:flex">
            <img class="h-5 w-5" src="@/assets/album.svg" />
            <p class="text-xs text-gray-600">{{ artist.nb_album }} Albums</p>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
