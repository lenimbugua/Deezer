<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { useMediaControls } from "@vueuse/core";
import Scrubber from "./TheScrubber.vue";
import Menu from "./TheMenu.vue";
import MenuItem from "./MenuItem.vue";
import Spinner from "./TheSpinner.vue";

import { useTrackStore } from "../../stores/track";
import { storeToRefs } from "pinia";
import AudioPlayingSVG from "./AudioPlayingSVG.vue";

const { track } = storeToRefs(useTrackStore());

const audio = ref<HTMLAudioElement>();
const loop = ref(false);

const controls = useMediaControls(audio, {
  src: {
    src: track.value ? track.value.source : "",
    type: "audio/mp3",
  },
});

const { playing, buffered, currentTime, duration, waiting, volume, muted } =
  controls;
const endBuffer = computed(() =>
  buffered.value.length > 0 ? buffered.value[buffered.value.length - 1][1] : 0
);
const formatDuration = (seconds: number) =>
  new Date(1000 * seconds).toISOString().slice(14, 19);
</script>

<template>
  <div class="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120">
    <div
      class="flex items-center gap-6 bg-white/90 py-4 px-4 shadow shadow-slate-200/80 ring-1 ring-slate-900/5 backdrop-blur-sm md:px-6"
    >
      <div
        class="outline-none"
        :tabindex="0"
        autofocus
        @keydown.prevent.space="playing = !playing"
        @keydown.right="currentTime += 10"
        @keydown.left="currentTime -= 10"
      >
        <div class="mt-5 relative bg-black rounded-md shadow overflow-hidden">
          <audio
            ref="audio"
            crossorigin="anonymous"
            class="w-full block"
            :loop="loop"
            @click="playing = !playing"
          />
          <div
            v-if="waiting"
            class="absolute inset-0 grid place-items-center pointer-events-none bg-black bg-opacity-20"
          >
            <Spinner />
          </div>
        </div>

        <Scrubber
          v-model="currentTime"
          :max="duration"
          :secondary="endBuffer"
          class="mt-2"
        >
          <template #default="{ position, pendingValue }">
            <div
              class="absolute transform -translate-x-1/2 bg-black rounded px-2 bottom-0 mb-4 py-1 text-xs text-white"
              :style="{ left: position }"
            >
              {{ formatDuration(pendingValue) }}
            </div>
          </template>
        </Scrubber>

        <div class="flex flex-row items-center">
          <button @click="playing = !playing">
            <i v-if="!playing" inline-block align-middle i-carbon-play />
            <i v-else i-carbon-pause inline-block align-middle />
          </button>
          <button @click="muted = !muted">
            <AudioPlayingSVG class="h-6 w-6" />
          </button>
          <Scrubber v-model="volume" :max="1" class="w-32 ml-2" />
          <div class="flex flex-col flex-1 text-sm ml-2">
            {{ formatDuration(currentTime) }} / {{ formatDuration(duration) }}
          </div>

          <Menu class="mr-2">
            <template #default="{ open }">
              <button @click="open">
                <i i-carbon-closed-caption inline-block align-middle />
              </button>
            </template>
          </Menu>
          <Menu class="mr-2">
            <template #default="{ open }">
              <button class="block" @click="open()">
                <i i-carbon-settings inline-block align-middle />
              </button>
            </template>
          </Menu>
          <Menu>
            <template #default="{ open }">
              <button class="block" @click="open()">
                <i i-carbon-meter inline-block align-middle />
              </button>
            </template>
            <template #menu="{ close }">
              <div
                class="absolute bottom-0 right-0 shadow py-2 bg-black rounded"
              >
                <MenuItem
                  @click="
                    () => {
                      controls.rate.value = 2;
                      close();
                    }
                  "
                >
                  <i i-carbon-meter-alt />2x
                </MenuItem>
                <MenuItem
                  @click="
                    () => {
                      controls.rate.value = 1;
                      close();
                    }
                  "
                >
                  <i i-carbon-meter-alt />1x
                </MenuItem>
              </div>
            </template>
          </Menu>
        </div>
      </div>
    </div>
  </div>
</template>
