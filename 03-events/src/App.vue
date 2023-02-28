<script setup>
import { ref } from "vue";

const sounds = ref([
  {
    artists: "Manuchao",
    title: "King of the bongo",
    duration: "4:09",
    artwork:
      "https://i1.sndcdn.com/artworks-51P4bWFyIC7bmyvO-AuYlxw-t500x500.jpg",
  },
  {
    artists: "KXXMA & TurboKevin",
    title: "Get Shaky",
    duration: "3:57",
    artwork:
      "https://images-ext-1.discordapp.net/external/v4TBZ-mkHVoanu78lWw5y3swhccR6zR0mDDZc2RQKrg/https/i1.sndcdn.com/artworks-HmKFZixBlvIHwMt6-qC6j1Q-t500x500.jpg",
  },
  {
    artists: "AKN",
    title: "Not fair.",
    duration: "3:10",
    artwork:
      "https://i1.sndcdn.com/artworks-Xc6eG15UU1lE0GP9-9pYSCw-t500x500.jpg",
  },
]);

// Propagation d'événement
const onClickRow = (title) => {
  console.log(`ROW CLICK: ${title}`);
};

const onClickIcon = (title) => {
  // Empêche la propagation -> e.stopPropagation();
  console.log(`ICON CLICK: ${title}`);
};
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <header
      class="mt-6 mx-8 shadow-md rounded-md flex justify-center bg-white overflow-hidden"
    >
      <img src="/logo.png" alt="logo" class="w-16 animation-image" />
    </header>
    <main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
      <!-- @ équivalent des : mais pour v-on -->
      <div
        class="grid grid-cols-5 items-center py-3 px-4 rounded cursor-pointer duration-200 hover:bg-gray-300 hover:bg-opacity-70"
        v-for="({ title, duration, artists, artwork }, index) in sounds"
        @click="onClickRow(title)"
        :key="index"
      >
        <img :src="artwork" :alt="title" class="w-16" />
        <p class="font-semibold">{{ artists }}</p>
        <p>{{ title }}</p>
        <p>{{ duration }}</p>
        <!-- .stop empêche la propagation aussi mais propre à Vue.js, s'appelle un event modifier (.prevent pour le prevent default d'un Form) -->
        <button type="button" @click.stop="onClickIcon(title)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
        </button>
      </div>
    </main>
  </div>
</template>
