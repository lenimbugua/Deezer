<script setup>
import MusicSVG from "./MusicSVG.vue";
import TrackList from "./TrackList.vue";
</script>
<template>
  <main
    class="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120"
  >
    <MusicSVG />
    <div class="relative">
      <div class="pt-16 pb-12 sm:pb-4 lg:pt-12">
        <div class="lg:px-8">
          <div class="lg:max-w-4xl">
            <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
              <h1 class="text-2xl font-bold leading-7 text-slate-900">
                Deezer
              </h1>
            </div>
          </div>
        </div>
        <div
          class="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100"
        >
          <article aria-labelledby="episode-5-title" class="py-10 sm:py-12">
            <div class="lg:px-8">
              <div class="lg:max-w-4xl">
                <div class="mx-auto px-4 md:max-w-7xl lg:px-0">
                  <div class="flex flex-col items-start">
                    <h2
                      id="episode-5-title"
                      class="mt-2 text-lg font-bold text-slate-900"
                    >
                      <a href="/5">Track List</a>
                    </h2>
                    <time
                      datetime="2022-02-24T00:00:00.000Z"
                      class="order-first font-mono text-sm leading-7 text-slate-500"
                      >February 24, 2022</time
                    >
                    <!-- =* * * * * * * * * *  Start Of the tracklist table * * * * * * * * * * *= -->
                    <TrackList />
                    <!-- =* * * * * * * * * *  End Of the tracklist table * * * * * * * * * * *= -->
                    <div class="mt-4 flex items-center gap-4">
                      <button
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
                        ><span class="ml-3" aria-hidden="true"
                          >Listen</span
                        ></button
                      ><span
                        aria-hidden="true"
                        class="text-sm font-bold text-slate-400"
                        >/</span
                      ><a
                        class="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                        aria-label="Show notes for episode 5: Bill Lumbergh"
                        href="/5"
                        >Show notes</a
                      >
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
  <footer
    class="border-t border-slate-200 bg-slate-50 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden"
  >
    <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
      <section>
        <h2
          class="flex items-center font-mono text-sm font-medium leading-7 text-slate-900"
        >
          <svg aria-hidden="true" viewBox="0 0 10 10" class="h-6 w-6">
            <path
              d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
              class="fill-violet-300"
            ></path>
            <path
              d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
              class="fill-pink-300"
            ></path>
          </svg>
          <div class="lg:px-8">
            <div class="lg:max-w-4xl">
              <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                <h1 class="text-2xl font-bold leading-7 text-slate-900">
                  Albums
                </h1>
              </div>
            </div>
          </div>
        </h2>
        <p class="mt-2 text-base leading-7 text-slate-700 lg:line-clamp-4">
          <!--Put table here-->
        </p>
        <button
          type="button"
          class="mt-2 hidden text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 lg:inline-block"
        >
          Show more
        </button>
      </section>
      <h2
        class="mt-8 flex items-center font-mono text-sm font-medium leading-7 text-slate-900"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 11 12"
          class="h-3 w-auto fill-slate-300"
        >
          <path
            d="M5.019 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm3.29 7c1.175 0 2.12-1.046 1.567-2.083A5.5 5.5 0 0 0 5.019 7 5.5 5.5 0 0 0 .162 9.917C-.39 10.954.554 12 1.73 12h6.578Z"
          ></path></svg
        ><span class="ml-2.5">Hosted by</span>
      </h2>
      <div class="mt-2 flex gap-6 text-sm font-bold leading-7 text-slate-900">
        Eric Gordon<span aria-hidden="true" class="text-slate-400">/</span>Wes
        Mantooth
      </div>
    </div>
  </footer>
  <div class="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120"></div>
</template>
