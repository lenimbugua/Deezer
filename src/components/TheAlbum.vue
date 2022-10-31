<script setup>
const props = defineProps({
  cover: { type: String, required: true },
  id: Number,
});
console.log(props.id);
</script>
<template>
  <div
    class="relative cursor-pointer mt-5 mb-6 overflow-hidden block w-40 rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:rounded-xl"
  >
    <img
      alt=""
      sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
      :src="cover"
      width="960"
      height="960"
      decoding="async"
      data-nimg="future"
      class="w-full"
      style="color: transparent"
    />
    <div
      class="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl"
    ></div>
  </div>
</template>
